

function get_recipe(name, options)
	local rdata = data.raw.recipe[name]
	local recipe = {}
	if not rdata then
		return rdata
	end
	recipe.name = rdata.name
	recipe.time = rdata.energy_required or 0.5
	if rdata.category == 'smelting' then
		console(options.smeltlvl)
		recipe.time = recipe.time / tonumber(options.smeltlvl)
	else
		recipe.time = recipe.time / tonumber(options.asslvl)
	end
	recipe.outputs = rdata.result_count or 1
	recipe.ips = recipe.outputs / recipe.time
	recipe.inputs = {}
	for i, ingr in ipairs(rdata.ingredients) do
		local ingredient = {}
		if ingr.name then
			ingredient.name = ingr.name
			ingredient.amount = ingr.amount
		else
			ingredient.name = ingr[1]
			ingredient.amount = ingr[2]
		end
		table.insert(recipe.inputs, ingredient)
	end
	return recipe
end


function request(name, ips, options)
	local recipe = get_recipe(name, options)
	if not options then
		options = {asslvl = 1, smeltlvl = 1, beltlvl = 14.2}
	end
	if not recipe then
		return {name = name, ips=ips}
	end
	
	local req = {}
	req.name = recipe.name
	req.ips = ips
	req.ipspa = recipe.ips 
	req.assemblers = req.ips / req.ipspa
	req.assembler_max_line = tonumber(options.beltlvl) / recipe.ips
	req.lines_required = req.assemblers / math.floor(req.assembler_max_line)
	req.cycle_time = recipe.time
	req.inputs = {}
	for i, input in ipairs(recipe.inputs) do
		local ingr_per_cycle = input.amount * req.assemblers
		local ingr_required_ips = ingr_per_cycle /  req.cycle_time
		table.insert(req.inputs,
			request(input.name, ingr_required_ips, options))
	end
	return req
end