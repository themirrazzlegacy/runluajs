(function () {
    if(typeof module !== 'undefined') {
        var luaparse = require('luaparse');
    }
    var LuaInterpreter = (()=>{var e={},t={print:{call:(arguments,e)=>{console.log(r(arguments,e))}},Date:{call:(arguments,e)=>({now:Date.now()})},type:{call:(arguments,e)=>typeof a(arguments[0],e)},wait:{call:async(arguments,e)=>{let t=a(arguments[1]),r=a(arguments[0]);return null==t||"s"==t?new Promise((t=>setTimeout(t,1e3*r,e))):"ms"==t?new Promise((t=>setTimeout(t,r,e))):void 0}}};function a(a,r){if(null==a)return;let l;switch(a.type){case"Identifier":l=null!=r[a.name]?r[a.name]:null!=e[a.name]?e[a.name]:a.name+" is undefined";break;case"StringLiteral":l=a.raw.substr(1,a.raw.length-2);break;case"NumericLiteral":l=parseInt(a.value);break;case"Identifier":l=" "+r[a.name]||e[a.name];break;case"CallExpression":t[a.base.name]&&(l=t[a.base.name].call(a.arguments,r));break;case"BooleanLiteral":return a.value;case"BinaryExpression":case"MemberExpression":l=n(a,r)}return l}function r(arguments,e){let t;for(let r=0;r<arguments.length;r++){argument=arguments[r];let n=a(argument,e);0==r?t=n:t+=n}return t}function n(e,t){switch(e.type){case"BooleanLiteral":return a(e);case"BinaryExpression":switch(e.operator){case"+":return a(e.left,t)+a(e.right,t);case"*":let r=a(e.left,t),n=a(e.right,t),l=typeof n;if("string"==(typeof r).toString()&&"number"==l.toString()){final="";for(let e=0;e<n;e++)final+=r;return final}return r*n;case">=":return a(e.left,t)>=a(e.right,t);case"<=":return a(e.left,t)<=a(e.right,t);case"<":return a(e.left,t)<a(e.right,t);case">":return a(e.left,t)>a(e.right,t);case"==":return a(e.left,t)==a(e.right,t)}case"LogicalExpression":if("and"===e.operator)return 1==n(e.left)&&1==n(e.right);break;case"MemberExpression":if("."===e.indexer)return a(e.base,t)[e.identifier.name]}}async function l(l,s){switch(l.type){case"CallStatement":let o=l.expression;if("CallExpression"===o.type){let e=o;t[e.base.name]&&await t[e.base.name].call(e.arguments,s)}break;case"AssignmentStatement":let c=l.variables,u=l.init;for(let t=0;t<c.length;t++){let a=c[t],n=u[t];e[a.name]=r([n],s)}break;case"LocalStatement":let m=l.variables,f=l.init;for(let e=0;e<m.length;e++){let t=m[e],a=f[e];return console.log(s),s[t.name]=r([a],s),{scope:s}}break;case"IfStatement":!function(e,t){for(let t=0;t<e.length;t++){let a=e[t];if("ElseClause"==a.type)i(a.body);else if(1==n(a.condition)){i(a.body);break}}}(l.clauses);break;case"FunctionDeclaration":t[l.identifier.name]={call:(arguments,e)=>{let t={};for(let e=0;e<l.parameters.length;e++){t[l.parameters[e].name]=a(arguments[e])}e={...e,...t},i(l.body,e)}};break;case"ForNumericStatement":for(s[l.variable.name]=a(l.start),a(l.start);s[l.variable.name]<a(l.end);s[l.variable.name]+=a(l.step))i(l.body,s);s[l.variable.name]=void 0}}async function i(e,t){for(let a=0;a<e.length;a++){let r=e[a];null==t&&(t={});let n=await l(r,t);null!=n&&null!=n.scope&&(t={...t,...n.scope})}};return{interpret:async(e,a)=>{var r=e.body;return t={...t,...a},new Promise(((e,t)=>{e(i(r,{}))}))}}})();
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
