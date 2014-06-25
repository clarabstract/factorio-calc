function to_js_val(tbl)
	if type(tbl) ~= 'table' then
		return tbl -- it's probably fine as is
	end
	-- quick'n'dirty check if table is array-like
	if tbl[1] then
		local arr = js.global.lua_ffi:new_js_array()
		for i,v in ipairs(tbl) do
			js.global.lua_ffi:push_to_array(arr, to_js_val(v))
		end
		return arr
	else
		local obj = js.global.lua_ffi:new_js_object()
		for k,v in pairs(tbl) do
			js.global.lua_ffi:set_obj_value(obj, k, to_js_val(v))
		end
		return obj
	end
	
end

function console(dump)
	js.global.console:log(dump)
end