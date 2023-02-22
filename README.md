# RunLua.JS
Run Lua in Node, Deno, and your browser!

## Credits
[sawcec/lua-interpreter, license unknown](https://github.com/sawcee/lua-interpreter); [fstirlitz/luaparse, MIT license](https://github.com/fstirlits/luaparse)

RunLua.JS contains a modified version of `lua-interpreter` built-in. It is modified to accomodate our needs, like integrating easily with RunLua.JS, and handling arrays and objects.

## Documentation
It contains one async. function:
```ts
Lua.execute(source: string, methods: object)
```
For methods see `lua-interpreter` documentation.

## Check it out!
Visit <https://lua.awesomecrater.repl.co/> to learn more, [or click here to see a live demo](https://lua.awesomecrater.repl.co/demo/)
