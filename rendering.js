function render(recipe) {
	console.log(recipe.get('rocket').get('name'))
}

// var global = window;
// global.luamodules = {};
// function requireLUA(module, callback) {
// 	var xhr = new XMLHttpRequest();
// 	// Send a GET request to get the file contents
// 	var path = '/' + module.split('.').join('/') + '.lua';
// 	console.log('Loading lua module ' + module + ' from path: ' + path)
// 	xhr.open('GET', path, true);
// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState == 4 ) {
// 			global.luamodules[module] = this.responseText;
// 			var dirs = path.split('/').slice(1,-1)
// 			var dirpath = "";
// 			for (var i = 0; i < dirs.length; i++) {
// 				dirpath += dirs[i];
// 				console.log('mkdir:', dirpath)
// 				FS.mkdir(dirpath);
// 			};
// 			// We now get the file contents and write it to a file
// 			L.execute('h = io.open("'+path+'", "w")\nh:write(js.global.luamodules.'+module+')\nh:close()');
// 			// Now we can require it
// 			L.execute('require("'+module+'")')
// 			if(callback) callback();
// 		};
	    
// 	};

// 	xhr.send();	
// }

// requireLUA('dataloader', function() {
// 	L.execute('js.global.alert("hey")')
// 	// requireLUA('data.core-1-0-0', function() {
// 	// 	L.execute('js.global.console.log("oh")')
// 	// 	L.execute('js.global.alert(data)')
// 	// 	requireLUA('calc')
// 	// })
// })