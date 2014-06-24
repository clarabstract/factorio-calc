data = {}
local FACTORIO_BASE_PATH = "C:\\Program Files\\Factorio"
package.path = package.path .. ";" .. FACTORIO_BASE_PATH .. "\\data\\?.lua"
package.path = package.path .. ";" .. FACTORIO_BASE_PATH .. "\\data\\base\\?.lua"
package.path = package.path .. ";" .. FACTORIO_BASE_PATH .. "\\data\\core\\lualib\\?.lua"

require('dataloader')
require('base.data')

-- Print contents of `tbl`, with indentation.
-- `indent` sets the initial level of indentation.
function tprint (tbl, indent)
  if not indent then indent = 0 end
  for k, v in pairs(tbl) do
    formatting = string.rep("  ", indent) .. k .. ": "
    if type(v) == "table" then
      print(formatting)
      tprint(v, indent+1)
    else
      print(formatting .. tostring(v))
    end
  end
end



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

function write_req(file, req, depth)
	file:write('<tr>')
	file:write('<th style="padding-left: ' .. (10 * depth)..'px;">')
	file:write(req.name)
	file:write('</th>')
	file:write('<td>')
	file:write(string.format("%.3f",req.ips))
	file:write('/s')
	file:write('<td>')
	file:write(string.format("%.3f",1/req.ips))
	file:write('s')
	file:write('</td>')
	if req.assemblers then
		file:write('<td>')
		file:write(string.format("%.3f",req.assemblers))
		file:write('</td>')
		file:write('<td>')
		file:write(string.format("%.3f",req.lines_required))
		file:write('</td>')
		file:write('<td>')
		file:write(req.assembler_max_line)
		file:write('</td>')
		file:write('<td>')
		file:write(req.cycle_time)
		file:write('s')
		file:write('</td>')

		file:write('<td>')
		file:write(string.format("%.3f",req.ipspa))
		file:write('</td>')

		file:write('</tr>')
		file:write('<tr class="inputs">')
		file:write('<th colspan="8" style="padding-left: ' .. (10 * depth)..'px;">')
		file:write('Inputs:</th>')
		for i,ingr in ipairs(req.inputs) do
			write_req(file, ingr, depth + 1)
		end
	end
	file:write('</tr>')
end

function html_report(file_name, req)
	file = io.open(file_name, 'w')
	file:write('<html>')
	file:write('<head>')
	file:write('<style>')
	file:write('td, th { padding: 3px; border: 1px solid #ccc; margin: 0;}')
	file:write('table { border-spacing: 0; border-collapse: collapse;}')
	file:write('td { text-align: right;}')
	file:write('tbody th { text-align: left;}')
	file:write('tbody { font-family: monospace;}')
	file:write('.inputs { font-size:smaller; color:#999;}')
	file:write('</style>')
	file:write('</head>')
	file:write('<body>')
	file:write('<table>')
	file:write('<thead>')
	file:write('<tr>')
	file:write('<th>Recipe</th>')
	file:write('<th>items / <br/> second</th>')
	file:write('<th>seconds /<br/> item</th>')
	file:write('<th>Assemblers <br />Required</th>')
	file:write('<th>Lines<br /> Required</th>')
	file:write('<th>Max Assembly <br />Line Length</th>')
	file:write('<th>Assembly<br />Cycle</th>')
	file:write('<th>i/s/a</th>')
	file:write('</tr>')
	file:write('</thead>')
	file:write('<tbody>')
	write_req(file, req, 0)
	file:write('</tbody></table>')
	file:write('</body></html>')
	file:close()
end

html_report('factorio.html', request('science-pack-1', 1))

