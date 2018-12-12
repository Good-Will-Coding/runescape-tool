(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,l,t){e.exports=t(51)},19:function(e,l,t){},23:function(e,l,t){},51:function(e,l,t){"use strict";t.r(l);var n=t(0),a=t.n(n),r=t(5),i=t.n(r),c=(t(19),t(1)),m=t.n(c),s=t(2),o=t(6),u=t(7),g=t(11),p=t(8),d=t(12),v=(t(23),function(e){return a.a.createElement("div",null,e.error&&a.a.createElement("p",{id:"error"},"User not found."))}),E=function(){return a.a.createElement("div",null,a.a.createElement("header",{className:"App-header"},a.a.createElement("h2",{className:"App-title"},"Old School RuneScape"),a.a.createElement("h3",{className:"Apple-subtitle"},"Player Stats")))},h=function(e){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:e.getUsers},a.a.createElement("input",{type:"text",className:"form__input",name:"userName",placeholder:"Enter a username..."}),a.a.createElement("button",{className:"form__btn"}," ",a.a.createElement("span",{id:"form__btn-fontsize"},"Search"))))},x=t(9),f=t(10),k=t.n(f),N=function(e){return a.a.createElement("div",{className:"username-title"},e.userName&&a.a.createElement("h4",null,"Skill levels for: ",e.userName))},y=function(e){return a.a.createElement("div",null,e.totalSkills.map(function(e){return a.a.createElement("table",{key:e,className:"table"},a.a.createElement("thead",{className:"tablehead"},a.a.createElement("tr",null,a.a.createElement("th",null,"Skill"),a.a.createElement("th",null,"Level"),a.a.createElement("th",null,"XP"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Overall"),a.a.createElement("td",null,e.overall.level),a.a.createElement("td",null,e.overall.xp)),a.a.createElement("tr",null,a.a.createElement("td",null," ",a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/h0NH6SI.png",alt:"attack--icon"})," Attack"),a.a.createElement("td",null,e.attack.level),a.a.createElement("td",null,e.attack.xp)),a.a.createElement("tr",null,a.a.createElement("td",null," ",a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/KAN4Xzu.png",alt:"strength-icon"})," Strength"),a.a.createElement("td",null,e.strength.level),a.a.createElement("td",null,e.strength.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/FRxAJh8.png",alt:"defense-icon"}),"Defence"),a.a.createElement("td",null,e.defence.level),a.a.createElement("td",null,e.defence.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/mFmNj1s.png",alt:"ranged-icon"}),"Ranged"),a.a.createElement("td",null,e.ranged.level),a.a.createElement("td",null,e.ranged.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/0sFmHoj.png",alt:"prayer-icon"}),"Prayer"),a.a.createElement("td",null,e.prayer.level),a.a.createElement("td",null,e.prayer.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/70ICmRL.png",alt:"magic-icon"}),"Magic"),a.a.createElement("td",null,e.magic.level),a.a.createElement("td",null,e.magic.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/PASUI60.png",alt:"runecraft-icon"}),"Runecraft"),a.a.createElement("td",null,e.runecraft.level),a.a.createElement("td",null,e.runecraft.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/ljbUGL1.png",alt:"construction-icon"}),"Construction"),a.a.createElement("td",null,e.construction.level),a.a.createElement("td",null,e.construction.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/jo7X6DH.png",alt:"hitpoints-icon"}),"Hitpoints"),a.a.createElement("td",null,e.hitpoints.level),a.a.createElement("td",null,e.hitpoints.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/5VqUzRk.png",alt:"agility-icon"}),"Agility"),a.a.createElement("td",null,e.agility.level),a.a.createElement("td",null,e.agility.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/yTFwTDZ.png",alt:"herblore-icon"}),"Herblore"),a.a.createElement("td",null,e.herblore.level),a.a.createElement("td",null,e.herblore.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/MTzl4J6.png",alt:"thieving-icon"}),"Thieving"),a.a.createElement("td",null,e.thieving.level),a.a.createElement("td",null,e.thieving.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/QmotnOs.png",alt:"crafting-icon"}),"Crafting"),a.a.createElement("td",null,e.crafting.level),a.a.createElement("td",null,e.crafting.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/XjHEsEH.png",alt:"fletching-icon"}),"Fletching"),a.a.createElement("td",null,e.fletching.level),a.a.createElement("td",null,e.fletching.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/X02Erf8.png",alt:"slayer-icon"}),"Slayer"),a.a.createElement("td",null,e.slayer.level),a.a.createElement("td",null,e.slayer.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/DbAdwzU.png",alt:"hunter-icon"}),"Hunter"),a.a.createElement("td",null,e.hunter.level),a.a.createElement("td",null,e.hunter.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/FChBIFT.png",alt:"mining-icon"}),"Mining"),a.a.createElement("td",null,e.mining.level),a.a.createElement("td",null,e.mining.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/71V311C.png",alt:"smithing-icon"}),"Smithing"),a.a.createElement("td",null,e.smithing.level),a.a.createElement("td",null,e.smithing.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/D6JHuAC.png",alt:"fishing-icon"}),"Fishing"),a.a.createElement("td",null,e.fishing.level),a.a.createElement("td",null,e.fishing.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/kxdZ4eK.png",alt:"cooking-icon"}),"Cooking"),a.a.createElement("td",null,e.cooking.level),a.a.createElement("td",null,e.cooking.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/tFr3ow9.png",alt:"firemaking-icon"}),"Firemaking"),a.a.createElement("td",null,e.firemaking.level),a.a.createElement("td",null,e.firemaking.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/0zhb5yg.png",alt:"woodcutting-icon"}),"Woodcutting"),a.a.createElement("td",null,e.woodcutting.level),a.a.createElement("td",null,e.woodcutting.xp)),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{className:"skill_img",src:"https://imgur.com/XbdHsjl.png",alt:"farming-icon"}),"Farming"),a.a.createElement("td",null,e.farming.level),a.a.createElement("td",null,e.farming.xp))))}))},w=function(e){function l(){var e,t;Object(o.a)(this,l);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=Object(g.a)(this,(e=Object(p.a)(l)).call.apply(e,[this].concat(a)))).state={error:!1,loading:!1,showResults:!1,username:void 0,skills:[{agility:{level:void 0,xp:void 0},attack:{level:void 0,xp:void 0},construction:{level:void 0,xp:void 0},cooking:{level:void 0,xp:void 0},crafting:{level:void 0,xp:void 0},defence:{level:void 0,xp:void 0},farming:{level:void 0,xp:void 0},firemaking:{level:void 0,xp:void 0},fishing:{level:void 0,xp:void 0},fletching:{level:void 0,xp:void 0},herblore:{level:void 0,xp:void 0},hitpoints:{level:void 0,xp:void 0},hunter:{level:void 0,xp:void 0},magic:{level:void 0,xp:void 0},mining:{level:void 0,xp:void 0},overall:{level:void 0,xp:void 0},prayer:{level:void 0,xp:void 0},ranged:{level:void 0,xp:void 0},runecraft:{level:void 0,xp:void 0},slayer:{level:void 0,xp:void 0},smithing:{level:void 0,xp:void 0},strength:{level:void 0,xp:void 0},thieving:{level:void 0,xp:void 0},woodcutting:{level:void 0,xp:void 0}}]},t.getUsers=function(){var e=Object(s.a)(m.a.mark(function e(l){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.preventDefault(),t.setState({error:!1,loading:!0,showResults:!1,username:void 0}),n=l.target.elements.userName.value,e.next=5,x.a.getStats("".concat(n),"main",{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){var l=e.rsn,n=e.main.stats;t.setState({loading:!1,showResults:!0,username:l,skills:[{agility:{level:n.agility.level,xp:n.agility.xp},attack:{level:n.attack.level,xp:n.attack.xp},construction:{level:n.construction.level,xp:n.construction.xp},cooking:{level:n.cooking.level,xp:n.cooking.xp},crafting:{level:n.crafting.level,xp:n.crafting.xp},defence:{level:n.defence.level,xp:n.defence.xp},farming:{level:n.farming.level,xp:n.farming.xp},firemaking:{level:n.firemaking.level,xp:n.firemaking.xp},fishing:{level:n.fishing.level,xp:n.fishing.xp},fletching:{level:n.fletching.level,xp:n.fletching.xp},herblore:{level:n.herblore.level,xp:n.herblore.xp},hitpoints:{level:n.hitpoints.level,xp:n.hitpoints.xp},hunter:{level:n.hunter.level,xp:n.hunter.xp},magic:{level:n.magic.level,xp:n.magic.xp},mining:{level:n.mining.level,xp:n.mining.xp},overall:{level:n.overall.level,xp:n.overall.xp},prayer:{level:n.prayer.level,xp:n.prayer.xp},ranged:{level:n.ranged.level,xp:n.ranged.xp},runecraft:{level:n.runecraft.level,xp:n.runecraft.xp},slayer:{level:n.slayer.level,xp:n.slayer.xp},smithing:{level:n.smithing.level,xp:n.smithing.xp},strength:{level:n.strength.level,xp:n.strength.xp},thieving:{level:n.thieving.level,xp:n.thieving.xp},woodcutting:{level:n.woodcutting.level,xp:n.woodcutting.xp}}]})}).catch(function(e){return t.setState({error:!0,loading:!1})});case 5:e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(l){return e.apply(this,arguments)}}(),t}return Object(d.a)(l,e),Object(u.a)(l,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(E,null),a.a.createElement(h,{getUsers:this.getUsers}),this.state.loading?a.a.createElement("span",{className:"loader"},a.a.createElement(k.a,{type:"Triangle",color:"white",height:50,width:50})):null,a.a.createElement(v,{error:this.state.error}),a.a.createElement("div",{className:"list-container"},a.a.createElement(N,{userName:this.state.username}),this.state.showResults?a.a.createElement(y,{totalSkills:this.state.skills}):null))}}]),l}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.8fbff49c.chunk.js.map