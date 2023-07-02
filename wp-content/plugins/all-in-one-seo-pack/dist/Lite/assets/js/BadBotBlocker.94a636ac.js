import{c as _,u as b}from"./links.96235554.js";import{B}from"./Textarea.0fbcf1ab.js";import{C as g}from"./index.c885ab17.js";import{C as f}from"./Card.02715b2c.js";import{C as S}from"./SettingsRow.5de01aba.js";import{r as c,c as h,e as r,w as n,o as i,d,b as p}from"./vue.runtime.esm-bundler.a49acf4f.js";import{_ as V}from"./_plugin-vue_export-helper.bd508f36.js";import"./default-i18n.cc9dbff0.js";import"./isArrayLikeObject.3ade28da.js";import"./Caret.7f04b0aa.js";import"./Tooltip.c031cb66.js";import"./Slide.f53bd663.js";import"./Row.85168b37.js";/* empty css                                            */const x={setup(){return{optionsStore:_(),rootStore:b()}},components:{BaseTextarea:B,CoreAlert:g,CoreCard:f,CoreSettingsRow:S},data(){return{strings:{badBotBlocker:this.$t.__("Bad Bot Blocker",this.$td),blockBadBotsHttp:this.$t.__("Block Bad Bots using HTTP",this.$td),blockReferralSpamHttp:this.$t.__("Block Referral Spam using HTTP",this.$td),trackBlockedBots:this.$t.__("Track Blocked Bots",this.$td),useCustomBlocklists:this.$t.__("Use Custom Blocklists",this.$td),userAgentBlocklist:this.$t.__("User Agent Blocklist",this.$td),refererBlockList:this.$t.__("Referer Blocklist",this.$td),blockedBotsLog:this.$t.__("Blocked Bots Log",this.$td),logLocation:this.$t.sprintf(this.$t.__("The log for the blocked bots is located here: %1$s",this.$td),'<br><a href="'+this.rootStore.aioseo.urls.blockedBotsLogUrl+'" target="_blank">'+this.rootStore.aioseo.urls.blockedBotsLogUrl+"</a>")}}}},y={class:"aioseo-tools-bad-bot-blocker"};function C(H,t,L,o,s,R){const a=c("base-toggle"),l=c("core-settings-row"),m=c("base-textarea"),k=c("core-alert"),u=c("core-card");return i(),h("div",y,[r(u,{slug:"badBotBlocker","header-text":s.strings.badBotBlocker},{default:n(()=>[r(l,{name:s.strings.blockBadBotsHttp},{content:n(()=>[r(a,{modelValue:o.optionsStore.options.deprecated.tools.blocker.blockBots,"onUpdate:modelValue":t[0]||(t[0]=e=>o.optionsStore.options.deprecated.tools.blocker.blockBots=e)},null,8,["modelValue"])]),_:1},8,["name"]),r(l,{name:s.strings.blockReferralSpamHttp},{content:n(()=>[r(a,{modelValue:o.optionsStore.options.deprecated.tools.blocker.blockReferer,"onUpdate:modelValue":t[1]||(t[1]=e=>o.optionsStore.options.deprecated.tools.blocker.blockReferer=e)},null,8,["modelValue"])]),_:1},8,["name"]),o.optionsStore.options.deprecated.tools.blocker.blockBots||o.optionsStore.options.deprecated.tools.blocker.blockReferer?(i(),d(l,{key:0,name:s.strings.useCustomBlocklists},{content:n(()=>[r(a,{modelValue:o.optionsStore.options.deprecated.tools.blocker.custom.enable,"onUpdate:modelValue":t[2]||(t[2]=e=>o.optionsStore.options.deprecated.tools.blocker.custom.enable=e)},null,8,["modelValue"])]),_:1},8,["name"])):p("",!0),o.optionsStore.options.deprecated.tools.blocker.blockBots&&o.optionsStore.options.deprecated.tools.blocker.custom.enable?(i(),d(l,{key:1,name:s.strings.userAgentBlocklist},{content:n(()=>[r(m,{minHeight:200,maxHeight:200,modelValue:o.optionsStore.options.deprecated.tools.blocker.custom.bots,"onUpdate:modelValue":t[3]||(t[3]=e=>o.optionsStore.options.deprecated.tools.blocker.custom.bots=e)},null,8,["modelValue"])]),_:1},8,["name"])):p("",!0),o.optionsStore.options.deprecated.tools.blocker.blockReferer&&o.optionsStore.options.deprecated.tools.blocker.custom.enable?(i(),d(l,{key:2,name:s.strings.refererBlockList},{content:n(()=>[r(m,{minHeight:200,maxHeight:200,modelValue:o.optionsStore.options.deprecated.tools.blocker.custom.referer,"onUpdate:modelValue":t[4]||(t[4]=e=>o.optionsStore.options.deprecated.tools.blocker.custom.referer=e)},null,8,["modelValue"])]),_:1},8,["name"])):p("",!0),o.optionsStore.options.deprecated.tools.blocker.blockBots||o.optionsStore.options.deprecated.tools.blocker.blockReferer?(i(),d(l,{key:3,name:s.strings.trackBlockedBots},{content:n(()=>[r(a,{modelValue:o.optionsStore.options.deprecated.tools.blocker.track,"onUpdate:modelValue":t[5]||(t[5]=e=>o.optionsStore.options.deprecated.tools.blocker.track=e)},null,8,["modelValue"]),r(k,{type:"blue",innerHTML:s.strings.logLocation},null,8,["innerHTML"])]),_:1},8,["name"])):p("",!0)]),_:1},8,["header-text"])])}const F=V(x,[["render",C]]);export{F as default};