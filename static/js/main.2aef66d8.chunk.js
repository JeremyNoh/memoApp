(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),i=r(21),s=r.n(i),o=(r(52),r(5)),l=r(7),c=r(6),u=r(8),p=r(9),v=(r(31),r(16)),m=r.n(v),f=r(22),h=r(148),d=r(135),y=r(142),b=r(133),g=r(145),w=r(137),x=r(146),k=r(136),S=function(e){for(var t=e.length-1;t>=1;t--){var r=Math.floor(Math.random()*(t+1)),a=[e[r],e[t]];e[t]=a[0],e[r]=a[1]}return e},E=function(e,t,r){return e.filter(r).map(function(e){return t.reduce(function(t,r){return t[r]=e[r],t},{})})},j=function(e){return new Promise(function(t){return setTimeout(t,e)})},T=function(e){return{try:!1,value:e}},O=function(e){return e.cptTry=0,e.saveTry=[],e.nbFind=0,e.findPair=[],e.faultForThisLvl=0,e},F=["\ud83d\ude01","\ud83d\ude02","\ud83d\ude05","\ud83d\ude07","\ud83d\ude09","\ud83d\ude42","\ud83d\ude0b","\ud83d\ude0d","\ud83d\ude18","\ud83d\ude17","\ud83d\ude1c","\ud83d\ude0e","\ud83d\ude0f","\ud83d\ude36","\ud83d\ude12","\ud83d\ude33","\ud83d\ude1e","\ud83d\ude1f","\ud83d\ude20","\ud83d\ude21","\ud83d\ude16","\ud83d\ude24","\ud83d\ude2e","\ud83d\ude31","\ud83d\ude30","\ud83d\ude27","\ud83d\ude2a","\ud83d\ude2d","\ud83d\ude35","\ud83d\ude37","\ud83d\ude34","\ud83d\udca9","\ud83d\ude08","\ud83d\udc7f","\ud83d\ude3b","\ud83d\ude3c","\ud83d\ude3d","\ud83d\ude39","\ud83d\ude3a","\ud83d\ude40","\ud83d\udc4d","\ud83d\udc4e","\ud83d\udc4f","\ud83d\udc8b","\ud83e\udd13","\ud83e\udd70","\ud83e\udd73","\ud83e\udd7a","\ud83e\udd2f","\ud83e\udd14","\ud83e\udd17","\ud83e\udd2d","\ud83e\udd2b","\ud83d\ude44","\ud83e\udd74","\ud83e\udd11","\ud83d\ude4a","\ud83d\ude48","\ud83d\ude49","\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc98","\ud83d\udc9c"],P=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).addMemo=Object(f.a)(m.a.mark(function e(){var t,a,n,i,s,o,l,c,u,p,v,f,h,d,y,b;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=r.state,a=t.memories,n=t.tabEmojis,i=t.player,s=a.length/2+1,a=[],o=1;o<s+1;o++)a.push(T(o)),a.push(T(o));for(a=S(a),n=S(n),l=!0,c=!1,u=void 0,e.prev=9,p=a[Symbol.iterator]();!(l=(v=p.next()).done);l=!0)v.value.try=!0;e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),c=!0,u=e.t0;case 17:e.prev=17,e.prev=18,l||null==p.return||p.return();case 20:if(e.prev=20,!c){e.next=23;break}throw u;case 23:return e.finish(20);case 24:return e.finish(17);case 25:return(i=O(i)).finishLvl=!1,r.setState({memories:a,tabEmojis:n,player:i}),i.lvlPlayer++,e.next=31,j(1e3+200*i.lvlPlayer);case 31:for(f=!0,h=!1,d=void 0,e.prev=34,y=a[Symbol.iterator]();!(f=(b=y.next()).done);f=!0)b.value.try=!1;e.next=42;break;case 38:e.prev=38,e.t1=e.catch(34),h=!0,d=e.t1;case 42:e.prev=42,e.prev=43,f||null==y.return||y.return();case 45:if(e.prev=45,!h){e.next=48;break}throw d;case 48:return e.finish(45);case 49:return e.finish(42);case 50:r.setState({memories:a,player:i});case 51:case"end":return e.stop()}},e,this,[[9,13,17,25],[18,,20,24],[34,38,42,50],[43,,45,49]])})),r.popMemo=Object(f.a)(m.a.mark(function e(){var t,a,n,i,s,o,l,c,u,p,v,f,d,y,b,g;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.state,a=t.memories,n=t.tabEmojis,i=t.player,!((s=a.length/2)>0)){e.next=54;break}for(o=Object.keys(a[0]),a=E(a,o,function(e){return e.value!==s}),a=S(a),n=S(n),l=!0,c=!1,u=void 0,e.prev=10,p=a[Symbol.iterator]();!(l=(v=p.next()).done);l=!0)v.value.try=!0;e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),c=!0,u=e.t0;case 18:e.prev=18,e.prev=19,l||null==p.return||p.return();case 21:if(e.prev=21,!c){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:return(i=O(i)).finishLvl=!0,r.setState({memories:a,tabEmojis:n,player:i}),i.lvlPlayer--,e.next=32,j(1e3+200*i.lvlPlayer);case 32:for(f=!0,d=!1,y=void 0,e.prev=35,b=a[Symbol.iterator]();!(f=(g=b.next()).done);f=!0)g.value.try=!1;e.next=43;break;case 39:e.prev=39,e.t1=e.catch(35),d=!0,y=e.t1;case 43:e.prev=43,e.prev=44,f||null==b.return||b.return();case 46:if(e.prev=46,!d){e.next=49;break}throw y;case 49:return e.finish(46);case 50:return e.finish(43);case 51:r.setState({memories:a,player:i}),e.next=55;break;case 54:h.a.danger("ajoute d'abord un level",{duration:5});case 55:case"end":return e.stop()}},e,this,[[10,14,18,26],[19,,21,25],[35,39,43,51],[44,,46,50]])})),r.resetMemo=Object(f.a)(m.a.mark(function e(){var t,a,n,i,s,o,l,c,u,p,v,f,h;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=r.state,a=t.memories,n=t.player,a=S(a),i=!0,s=!1,o=void 0,e.prev=5,l=a[Symbol.iterator]();!(i=(c=l.next()).done);i=!0)c.value.try=!0;e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),s=!0,o=e.t0;case 13:e.prev=13,e.prev=14,i||null==l.return||l.return();case 16:if(e.prev=16,!s){e.next=19;break}throw o;case 19:return e.finish(16);case 20:return e.finish(13);case 21:return n.nbFaute-=n.faultForThisLvl,(n=O(n)).finishLvl=!1,r.setState({memories:a,player:n}),e.next=27,j(1e3+200*n.lvlPlayer);case 27:for(u=!0,p=!1,v=void 0,e.prev=30,f=a[Symbol.iterator]();!(u=(h=f.next()).done);u=!0)h.value.try=!1;e.next=38;break;case 34:e.prev=34,e.t1=e.catch(30),p=!0,v=e.t1;case 38:e.prev=38,e.prev=39,u||null==f.return||f.return();case 41:if(e.prev=41,!p){e.next=44;break}throw v;case 44:return e.finish(41);case 45:return e.finish(38);case 46:r.setState({memories:a,player:n});case 47:case"end":return e.stop()}},e,this,[[5,9,13,21],[14,,16,20],[30,34,38,46],[39,,41,45]])})),r.tryCard=function(e){var t=r.state,a=t.memories,n=t.player;return!(n.cptTry>1||!0===a[e].try)&&(n.saveTry[0]!==e&&!n.findPair.includes(a[e].value)&&(a[e].try=!0,n.saveTry.push(e),n.cptTry++,r.setState({player:n}),void(2===n.cptTry?a[n.saveTry[0]].value===a[n.saveTry[1]].value?(n.nbFind++,n.findPair.push(a[n.saveTry[0]].value),n.nbFind===a.length/2&&(h.a.success("YOU WIN !!! ",{duration:5}),n.finishLvl=!0,0===n.faultForThisLvl&&n.bonusSee++),n.cptTry=0,n.saveTry=[],r.setState({player:n})):r.setState({memories:a},Object(f.a)(m.a.mark(function e(){var t,i,s,o,l,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(1e3);case 2:for(t=!0,i=!1,s=void 0,e.prev=5,o=n.saveTry[Symbol.iterator]();!(t=(l=o.next()).done);t=!0)c=l.value,a[c].try=!1;e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),i=!0,s=e.t0;case 13:e.prev=13,e.prev=14,t||null==o.return||o.return();case 16:if(e.prev=16,!i){e.next=19;break}throw s;case 19:return e.finish(16);case 20:return e.finish(13);case 21:n.faultForThisLvl++,n.nbFaute++,n.cptTry=0,n.saveTry=[],r.setState({memories:a,player:n});case 26:case"end":return e.stop()}},e,this,[[5,9,13,21],[14,,16,20]])}))):r.setState({memories:a,player:n}))))},r.canvas=function(){var e=r.state,t=e.memories,a=e.tabEmojis;return t.length>0?n.a.createElement(d.a,null,t.map(function(e,t){return n.a.createElement(d.a,{key:t,elevation:1,float:"left",width:r.state.width>=600?200:100,height:r.state.width>=600?120:60,margin:r.state.width>=600?24:12,display:"flex",backgroundColor:e.try?"black":"white",justifyContent:"center",alignItems:"center",flexDirection:"column",onClick:function(){return r.tryCard(t)},disabled:!0,style:{border:r.state.player.findPair.includes(e.value)?"1px solid green":""}},n.a.createElement(y.a,{color:"white",size:800},e.try&&a[e.value]))})):n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{marginTop:Object(g.a)(3)},"Augmente le level pour debuter la partie"),n.a.createElement(w.a,{onClick:function(){return r.recupValue()}},"Recuper\xe9 ma derniere Partie"))},r.lessOneFault=function(){var e=r.state.player;0===e.easterEggsFound&&(e.easterEggsFound++,r.setState({player:e}),h.a.notify("Tu as trouv\xe9 un Easter Eggs F\xe9licitation !!!",{duration:7,description:"Il y en a pleins d'autres bien cach\xe9s ! mais n'en abuse pas ... "})),e.nbFaute--,r.setState({player:e})},r.isFaute=function(){var e=r.state.player;return 0===e.nbFaute?n.a.createElement(x.a,{display:"inline-flex",color:"green",margin:8},"Perfect"):n.a.createElement(x.a,{display:"inline-flex",color:"red",margin:8,onDoubleClick:function(){return r.lessOneFault()}},"Faute : ",e.nbFaute)},r.isBonus=function(){var e=r.state.player;if(e.lvlPlayer>0&&e.bonusSee>0)return n.a.createElement(k.a,{display:"inline-flex",color:"teal",margin:8,onClick:function(){return r.tryBonus()}},"Bonus : ",e.bonusSee)},r.tryBonus=Object(f.a)(m.a.mark(function e(){var t,a,n,i,s,o,l,c,u,p,v,f,h,d,y,b,g,w,x,k;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=r.state,a=t.memories,n=t.player,i=!0,s=!1,o=void 0,e.prev=4,l=a[Symbol.iterator]();!(i=(c=l.next()).done);i=!0)c.value.try=!0;e.next=12;break;case 8:e.prev=8,e.t0=e.catch(4),s=!0,o=e.t0;case 12:e.prev=12,e.prev=13,i||null==l.return||l.return();case 15:if(e.prev=15,!s){e.next=18;break}throw o;case 18:return e.finish(15);case 19:return e.finish(12);case 20:return r.setState({memories:a}),e.next=23,j(1e3+200*n.lvlPlayer);case 23:for(u=!0,p=!1,v=void 0,e.prev=26,f=a[Symbol.iterator]();!(u=(h=f.next()).done);u=!0)d=h.value,n.findPair.includes(d.value)?d.try=!0:d.try=!1;e.next=34;break;case 30:e.prev=30,e.t1=e.catch(26),p=!0,v=e.t1;case 34:e.prev=34,e.prev=35,u||null==f.return||f.return();case 37:if(e.prev=37,!p){e.next=40;break}throw v;case 40:return e.finish(37);case 41:return e.finish(34);case 42:if(!(n.saveTry.length>0)){e.next=62;break}for(y=!0,b=!1,g=void 0,e.prev=46,w=n.saveTry[Symbol.iterator]();!(y=(x=w.next()).done);y=!0)k=x.value,a[k].try=!0;e.next=54;break;case 50:e.prev=50,e.t2=e.catch(46),b=!0,g=e.t2;case 54:e.prev=54,e.prev=55,y||null==w.return||w.return();case 57:if(e.prev=57,!b){e.next=60;break}throw g;case 60:return e.finish(57);case 61:return e.finish(54);case 62:n.bonusSee-=1,r.setState({memories:a,player:n});case 64:case"end":return e.stop()}},e,this,[[4,8,12,20],[13,,15,19],[26,30,34,42],[35,,37,41],[46,50,54,62],[55,,57,61]])})),r.saveData=function(){var e=r.state,t=e.player,a=e.memories;localStorage.setItem("player",JSON.stringify(t)),localStorage.setItem("memories",JSON.stringify(a)),h.a.success("Tes donn\xe9es sont enregistr\xe9es ",{duration:5})},r.recupValue=function(){var e=r.state,t=e.player,a=e.memories,n=r.recupData();null===n?h.a.success("Tu n'as pas de derniere partie ",{duration:5}):(t=n,a=r.recupDataMemo()),r.setState({player:t,memories:a})},r.recupData=function(){var e=r.state;e.player,e.memories;return JSON.parse(localStorage.getItem("player"))},r.recupDataMemo=function(){r.state.memories;return JSON.parse(localStorage.getItem("memories"))},r.DeleteData=Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.clear(),h.a.notify("Donn\xe9e Supprim\xe9 ",{duration:2,description:"Tu vas \xeatre redirig\xe9 , Patience !!"}),e.next=4,j(2e3);case 4:window.location.reload();case 5:case"end":return e.stop()}},e,this)})),r.state={width:void 0,height:void 0,tabEmojis:[],memories:[],player:{}},r}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=F,t={saveTry:[],findPair:[],nbFind:0,finishLvl:!0,nbFaute:0,easterEggsFound:0,faultForThisLvl:0,lvlPlayer:0,cptTry:0,bonusSee:0};this.setState({width:window.innerWidth,height:window.innerHeight,player:t,tabEmojis:e})}},{key:"render",value:function(){var e=this,t=this.state.player;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null,n.a.createElement(x.a,{display:"inline-flex",margin:8},"lvl : ",t.lvlPlayer),this.isBonus(),t.lvlPlayer>0&&this.isFaute()),n.a.createElement(d.a,null,n.a.createElement(w.a,{appearance:t.finishLvl?"primary":"default",intent:t.finishLvl?"success":"none",marginRight:Object(g.a)(3),onClick:function(){return e.addMemo()},disabled:!t.finishLvl},"Next level"),n.a.createElement(w.a,{marginRight:Object(g.a)(3),onClick:function(){return e.popMemo()}},"Previous level"),t.lvlPlayer>0&&n.a.createElement(w.a,{onClick:function(){return e.resetMemo()},appearance:"primary",intent:"warning"},"Retry")),this.canvas(),t.lvlPlayer>0&&n.a.createElement(d.a,null,n.a.createElement(w.a,{appearance:"primary",onClick:function(){return e.saveData()},disabled:!t.finishLvl},"Sauvegarder mes Donn\xe9es"),n.a.createElement(w.a,{appearance:"primary",intent:"danger",onClick:function(){return e.DeleteData()},disabled:!t.finishLvl},"Supprimer mon compte / Reset")))}}]),t}(a.Component),C=r(150),D=r(149),L=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).getInfo=function(){r.setState({isShown:!0})},r.state={isShown:!1},r}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Game"},n.a.createElement("p",null,"Bienvenue sur MemoApp",n.a.createElement(C.a,{icon:"info-sign",color:"info",marginLeft:16,onClick:function(){return e.getInfo()}})),n.a.createElement(D.a,{title:"Comment jouer ? ",isShown:this.state.isShown,onCloseComplete:function(){return e.setState({isShown:!1})}},n.a.createElement(b.a,null,"Ceci est un petit jeu de m\xe9moire, le but est d'associer les paires."),n.a.createElement(b.a,null," Un jeu simple de notre enfance."),n.a.createElement(b.a,null,n.a.createElement("a",{href:"https://github.com/JeremyNoh",target:"_blank",rel:"noopener noreferrer"},"(Voir mes autres r\xe9alisations)"))),n.a.createElement(P,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,r){},46:function(e,t,r){e.exports=r(134)},52:function(e,t,r){}},[[46,2,1]]]);
//# sourceMappingURL=main.2aef66d8.chunk.js.map