window.lua_ffi = {
	new_js_object: function() {
		return {};
	},
	set_obj_value: function(obj, key, value) {
		obj[key] = value;
	},
	new_js_array: function() {
		return [];
	},
	push_to_array: function(arr, value)  {
		arr.push(value);
	}
};