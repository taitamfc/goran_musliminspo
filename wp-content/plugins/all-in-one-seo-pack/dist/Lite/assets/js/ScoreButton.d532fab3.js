import{o as e,c as o,t as r,n}from"./vue.runtime.esm-bundler.a49acf4f.js";import{_ as s}from"./_plugin-vue_export-helper.bd508f36.js";const c={props:{score:{type:Number,default(){return 0}},postId:{type:Number,default(){return 0}}},computed:{scoreClass:function(){return 80<this.score?"score-green":50<this.score?"score-orange":1<this.score?"score-red":"score-disabled"},getId:function(){return`score-button-${this.postId}`}}},u=["id"];function a(i,l,_,p,d,t){return e(),o("div",{class:n(["aioseo-score-button",t.scoreClass]),id:t.getId},r(this.score===0?"N/A":`${this.score}/100`),11,u)}const y=s(c,[["render",a]]);export{y as C};