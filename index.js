(function () {
    if(typeof window == 'undefined') {
        luaparse = require('luaparse');
        LuaInterpreter = require('lua-interpreter');
    }
    var Lua = {
        execute: async (source, scope) => {
            var ast = luaparse.parse(source);
            return await LuaInterpreter.interpret(ast,scope);
        }
    }
    if(typeof module == 'undefined') {
        window.Lua = Lua;
    } else {
        module.exports = Lua;
    }
})();
