import{c as _}from"./links.96235554.js";import{r as n,c as d,e as s,w as p,o as f,a as e,g,t as c}from"./vue.runtime.esm-bundler.a49acf4f.js";import{_ as h}from"./_plugin-vue_export-helper.bd508f36.js";import"./index.c885ab17.js";import"./Caret.7f04b0aa.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.cc9dbff0.js";import"./constants.c7984802.js";import{M as y}from"./MetaTag.5fac47dd.js";/* empty css                                              */import{C as w}from"./Card.02715b2c.js";import{C as b}from"./SettingsRow.5de01aba.js";import"./isArrayLikeObject.3ade28da.js";import"./Tooltip.c031cb66.js";import"./Slide.f53bd663.js";import"./Row.85168b37.js";const k={setup(){return{optionsStore:_()}},components:{CoreCard:w,CoreSettingsRow:b},mixins:[y],data(){return{pagePostOptions:[],strings:{pinterest:this.$t.__("Pinterest",this.$td),description:this.$t.__("Pinterest uses Open Graph metadata just like Facebook, so be sure to keep Open Graph enabled on the Facebook tab checked if you want to optimize your site for Pinterest.",this.$td),learnHowToGetPinterestTag:this.$t.__("Learn how to get your Pinterest Verification Code",this.$td),skipStep:this.$t.__("If you have already confirmed your website with Pinterest, you can skip the step below.",this.$td),pinterestVerificationCode:this.$t.__("Pinterest Verification Code",this.$td)}}}},C={class:"aioseo-pinterest"},P={class:"aioseo-settings-row aioseo-section-description"},V=["innerHTML"],T=e("br",null,null,-1),x=e("br",null,null,-1);function S(r,o,$,i,t,L){const l=n("base-input"),u=n("core-settings-row"),m=n("core-card");return f(),d("div",C,[s(m,{slug:"pinterest","header-text":t.strings.pinterest},{default:p(()=>[e("div",P,[g(c(t.strings.description)+" ",1),e("span",{innerHTML:r.$links.getDocLink(t.strings.learnHowToGetPinterestTag,"pinterestSiteVerification",!0)},null,8,V),T,x,e("strong",null,c(t.strings.skipStep),1)]),s(u,{name:t.strings.pinterestVerificationCode,align:""},{content:p(()=>[s(l,{size:"medium",modelValue:i.optionsStore.options.webmasterTools.pinterest,"onUpdate:modelValue":o[0]||(o[0]=a=>i.optionsStore.options.webmasterTools.pinterest=a),onBlur:o[1]||(o[1]=a=>r.maybeUpdateId("pinterest"))},null,8,["modelValue"])]),_:1},8,["name"])]),_:1},8,["header-text"])])}const J=h(k,[["render",S]]);export{J as default};