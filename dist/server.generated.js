(()=>{var e={804:(e,o,r)=>{"use strict";var t;r.d(o,{A:()=>d}),r(807),require("webpack-dev-middleware"),require("webpack-hot-middleware"),r(650),e=r.hmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=e=>{},l={compile:a},d=l;var s,n;(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(a,"compile","/Users/babacarthiam/Developer/mern-simplesetup/server/dev.bundle.js"),s.register(l,"default","/Users/babacarthiam/Developer/mern-simplesetup/server/dev.bundle.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)},673:(e,o,r)=>{"use strict";r.r(o);const t=require("express");var a=r.n(t),l=r(928),d=r.n(l);const s=require("mongodb");var n,i=r(804),c=r(176);e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const u=process.cwd(),p=a()();p.use("/dist",a().static(d().join(u,"dist"))),i.A.compile(p),p.get("/",((e,o)=>{o.status(200).send((0,c.A)())}));const b=process.env.PORT||3e3;p.listen(b,(function(e){e&&console.log(e),console.log("Server started on port %s.",b)}));const m=process.env.MONGODB_URI||"mongodb://localhost:27017/mernsimplesetup";var v,f;s.MongoClient.connect(m,((e,o)=>{e&&console.log(e),console.log("Connected successfully to mongodb server"),o.close()})),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(u,"CURRENT_WORKING_DIR","/Users/babacarthiam/Developer/mern-simplesetup/server/server.js"),v.register(p,"app","/Users/babacarthiam/Developer/mern-simplesetup/server/server.js"),v.register(b,"PORT","/Users/babacarthiam/Developer/mern-simplesetup/server/server.js"),v.register(m,"URI","/Users/babacarthiam/Developer/mern-simplesetup/server/server.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},176:(e,o,r)=>{"use strict";var t;r.d(o,{A:()=>l}),e=r.hmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=()=>'<!doctype html>\n    <html lang="en">\n      <head>\n        <meta charset="utf-8">\n        <title>MERN Simple Setup</title>\n      <body>\n        <div id="root"></div>\n        <script type="text/javascript" src="/dist/bundle.js"><\/script>\n      </body>\n    </html>',l=a;var d,s;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(a,"default","/Users/babacarthiam/Developer/mern-simplesetup/template.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},650:(e,o,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=r(928),l=r(807),d=process.cwd(),s={name:"browser",mode:"development",devtool:"eval-source-map",entry:["webpack-hot-middleware/client?reload=true",a.join(d,"client/main.js")],output:{path:a.join(d,"/dist"),filename:"bundle.js",publicPath:"/dist/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:["babel-loader"]}]},plugins:[new l.HotModuleReplacementPlugin,new l.NoEmitOnErrorsPlugin],resolve:{alias:{"react-dom":"@hot-loader/react-dom"}}};var n,i;e.exports=s,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(d,"CURRENT_WORKING_DIR","/Users/babacarthiam/Developer/mern-simplesetup/webpack.config.client.js"),n.register(s,"config","/Users/babacarthiam/Developer/mern-simplesetup/webpack.config.client.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},807:e=>{"use strict";e.exports=require("webpack")},928:e=>{"use strict";e.exports=require("path")}},o={};function r(t){var a=o[t];if(void 0!==a)return a.exports;var l=o[t]={id:t,loaded:!1,exports:{}};return e[t](l,l.exports,r),l.loaded=!0,l.exports}r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var t=r(673);module.exports=t})();