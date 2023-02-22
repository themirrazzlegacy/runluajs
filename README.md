# RunLua.JS
Run Lua in Node, Deno, and your browser!

## Credits
[sawcee/lua-interpreter, license unknown](https://github.com/sawcee/lua-interpreter); [fstirlitz/luaparse, MIT license](https://github.com/fstirlits/luaparse)

RunLua.JS contains a modified version of `lua-interpreter` built-in. It is minified to take up less space and make RunLua.JS itself easier to debug. It also prevents the need to require/import `lua-interpreter`. The version of `lua-interpreter` is also modified a little to work with RunLua.JS. Currently due to the big size, `luaparse` is not included, however you can [click this link](https://github.com/fstirlitz/luaparse/raw/master/index.js) to head to the raw version of `luaparse`'s `index.js` file.
