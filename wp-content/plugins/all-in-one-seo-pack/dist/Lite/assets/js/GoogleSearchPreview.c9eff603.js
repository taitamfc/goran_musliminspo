import{u as s}from"./links.96235554.js";import{t as a}from"./html.671743b1.js";import{o as i,c,a as e,f as _,g as u,t as o}from"./vue.runtime.esm-bundler.a49acf4f.js";import{_ as l}from"./_plugin-vue_export-helper.bd508f36.js";const p={setup(){return{rootStore:s()}},props:{title:{type:String,required:!0},description:{type:String,required:!0},domain:{type:String,default(){return s().aioseo.urls.mainSiteUrl}},separator:String},methods:{truncate:a}},d={class:"aioseo-google-search-preview"},m={class:"google-post"},g={class:"domain"},f={class:"site-title"},y={class:"meta-description"};function v(r,S,t,h,x,n){return i(),c("div",d,[e("div",m,[e("div",g,[_(r.$slots,"domain",{},()=>[u(o(t.domain),1)],!0)]),e("div",f,o(n.truncate(t.title,100)),1),e("div",y,o(n.truncate(t.description)),1)])])}const G=l(p,[["render",v],["__scopeId","data-v-7978e031"]]);export{G as C};