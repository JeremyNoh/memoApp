(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(20),i=n.n(o),c=(n(57),n(24)),l=n(25),s=n(28),u=n(26),m=n(29),f=(n(34),n(30)),v=n.n(f),h=n(43),p=n(151),d=n(139),y=n(145),b=n(148),g=n(149),w=n(140),j=function(e){for(var t=e.length-1;t>=1;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e},E=function(e,t,n){return e.filter(n).map(function(e){return t.reduce(function(t,n){return t[n]=e[n],t},{})})},k=function(e){return new Promise(function(t){return setTimeout(t,e)})},T=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).createValue=function(e){return{try:!1,value:e}},n.addMemo=function(){var e=n.state.memories,t=e.length/2+1;e=[];for(var r=1;r<t+1;r++)e.push(n.createValue(r)),e.push(n.createValue(r));return e=j(e),console.log(e),n.setState({memories:e,cptTry:0,saveTry:[],nbFind:0,finishLvl:!1}),e},n.popMemo=function(){var e=n.state.memories,t=e.length/2;if(t>0){var r=Object.keys(e[0]);e=E(e,r,function(e){return e.value!==t});var a=!0,o=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){c.value.try=!1}}catch(s){o=!0,i=s}finally{try{a||null==l.return||l.return()}finally{if(o)throw i}}e=j(e),console.log(e),n.setState({memories:e,cptTry:0,saveTry:[],nbFind:0,finishLvl:!1})}else p.a.danger("ajoute d'abord un level",{duration:5})},n.tryCard=function(e){var t=n.state,r=t.memories,a=t.cptTry,o=t.saveTry,i=t.nbFind,c=t.finishLvl;r[e].try=!0,o.push(e),2===++a?r[o[0]].value===r[o[1]].value?(++i===r.length/2&&(p.a.success("YOU WIN !!! ",{duration:5}),c=!0),a=0,o=[],n.setState({saveTry:o,cptTry:a,nbFind:i,finishLvl:c})):n.setState({memories:r},Object(h.a)(v.a.mark(function e(){var t,i,c,l,s,u;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(1e3);case 2:for(t=!0,i=!1,c=void 0,e.prev=5,l=o[Symbol.iterator]();!(t=(s=l.next()).done);t=!0)u=s.value,r[u].try=!1;e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),i=!0,c=e.t0;case 13:e.prev=13,e.prev=14,t||null==l.return||l.return();case 16:if(e.prev=16,!i){e.next=19;break}throw c;case 19:return e.finish(16);case 20:return e.finish(13);case 21:a=0,o=[],n.setState({memories:r,saveTry:o,cptTry:a});case 24:case"end":return e.stop()}},e,this,[[5,9,13,21],[14,,16,20]])}))):n.setState({memories:r,saveTry:o,cptTry:a})},n.canvas=function(){var e=n.state.memories;return e.length>0?a.a.createElement(d.a,{clearfix:!0},e.map(function(e,t){return a.a.createElement(d.a,{key:t,elevation:1,float:"left",width:200,height:120,margin:24,display:"flex",backgroundColor:e.try?"black":"white",justifyContent:"center",alignItems:"center",flexDirection:"column",onClick:function(){return n.tryCard(t)},disabled:!0},a.a.createElement(y.a,{color:"white"},e.try&&e.value))})):a.a.createElement(b.a,{marginTop:Object(g.a)(3)},"Augmente le level pour debuter la partie")},n.state={memories:[],lvl:0,cptTry:0,saveTry:[],nbFind:0,finishLvl:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,null,a.a.createElement(w.a,{appearance:this.state.finishLvl?"primary":"default",intent:this.state.finishLvl?"success":"none",marginRight:Object(g.a)(3),onClick:function(){return e.addMemo()}},"Next level"),a.a.createElement(w.a,{onClick:function(){return e.popMemo()}},"Previous level")),this.canvas())}}]),t}(r.Component),O=n(153),S=n(152),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getIngo=function(){console.log("dede"),n.setState({isShown:!0})},n.state={isShown:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Game"},a.a.createElement("p",null,"Bonjour & bienvenu sur MemoApp",a.a.createElement(O.a,{icon:"info-sign",color:"info",marginLeft:16,onClick:function(){return e.getIngo()}})),a.a.createElement(S.a,{title:"Comment jouer ? ",isShown:this.state.isShown,onCloseComplete:function(){return e.setState({isShown:!1})}},a.a.createElement(b.a,null,"Ceci est un petit jeu de m\xe9moire, le but est d'associer les paires."),a.a.createElement(b.a,null," Un jeu simple de notre enfance."),a.a.createElement(b.a,null,a.a.createElement("a",{href:"https://github.com/JeremyNoh",target:"_blank",rel:"noopener noreferrer"},"(Voir mes autres r\xe9alisations)"))),a.a.createElement(T,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,n){},51:function(e,t,n){e.exports=n(138)},57:function(e,t,n){}},[[51,2,1]]]);
//# sourceMappingURL=main.92127256.chunk.js.map