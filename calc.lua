function get_recipe(name)
	local rdata = data.raw.recipe[name]
	local recipe = {}
	if not rdata then
		return rdata
	end
	recipe.name = rdata.name
	recipe.time = rdata.energy_required or 0.5
	if rdata.category == 'smelting' then
		-- recipe.time = recipe.time / 2
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

local BELT_THROUGHPUT = 14.2 -- wiki measure is 14.8, but mine is closer to 14

function request(name, ips)
	local recipe = get_recipe(name)
	if not recipe then
		return {name = name, ips=ips, lines_required=(BELT_THROUGHPUT/ips)}
	end
	local req = {}
	req.name = recipe.name
	req.ips = ips
	req.ipspa = recipe.ips
	req.assemblers = req.ips / recipe.ips
	req.assembler_max_line = BELT_THROUGHPUT / recipe.ips
	req.lines_required = req.assemblers / math.floor(req.assembler_max_line)
	req.cycle_time = recipe.time
	req.inputs = {}
	for i, input in ipairs(recipe.inputs) do
		local ingr_per_cycle = input.amount * req.assemblers
		local ingr_required_ips = ingr_per_cycle /  req.cycle_time
		table.insert(req.inputs,
			request(input.name, ingr_required_ips))
	end
	return req
end