(this.webpackJsonppawsup=this.webpackJsonppawsup||[]).push([[0],{10:function(e,t,a){},17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(22),a(6),a(23),a(2)),s=a(3);var i=function(){return l.a.createElement("header",{className:""},l.a.createElement(o.a,{className:"brandIcon",icon:s.b}),l.a.createElement("h1",null,"Paws Up"))},m=a(11),u=a(12),d=a(15),h=a(13),p=a(16);a(10);function E(){return l.a.createElement("div",{className:"petImage"},l.a.createElement("img",{src:"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46353677/1/?bust=1571956783",alt:""}))}function f(e){var t=e.name,a=e.age,n=e.sex,r=e.size,c=e.desc;return l.a.createElement("div",{className:"profile"},l.a.createElement("h2",null,t),l.a.createElement("div",{className:"desc"},l.a.createElement("p",null,a),l.a.createElement("p",null,n),l.a.createElement("p",null,r)),l.a.createElement("p",{className:"about"},c))}function b(){return l.a.createElement("div",{className:"controls"},l.a.createElement("button",{className:"add"},l.a.createElement(o.a,{className:"brandIcon",icon:s.b,onClick:v})),l.a.createElement("button",{className:"more"},l.a.createElement(o.a,{className:"brandIcon",icon:s.a,onClick:v})),l.a.createElement("button",{className:"pass"},l.a.createElement(o.a,{className:"brandIcon",icon:s.b,onClick:v})))}function v(){console.log("test")}var w=a(14),g=a.n(w),N=a(5),y=a.n(N),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={defaultPos:{x:0,y:0}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.state.draggableElement=c.a.findDOMNode(this),this.setState(this.state)}},{key:"render",value:function(){var e=this.state.defaultPos;return l.a.createElement(g.a,{axis:"x",position:e,onStop:this.reset.bind(this),onDrag:this.handleDrag.bind(this),bounds:"parent"},l.a.createElement("div",{className:"frame shadow"},l.a.createElement(E,null),l.a.createElement(f,{name:"Lola",age:"Puppy",sex:"Female",size:"Medium",desc:""}),l.a.createElement(b,null)))}},{key:"handleDrag",value:function(){var e=this.state.draggableElement,t=parseInt(y()(e).css("transform").split(",")[4]),a=-window.screen.width/4,n=window.screen.width/4;t<a?console.log("add"):t>n&&console.log("pass"),y()(e).css({opacity:1-Math.abs(t)/(window.screen.width/2)})}},{key:"reset",value:function(){var e=this.state.draggableElement;y()(e).css({opacity:1})}}]),t}(l.a.Component);var I=function(){return l.a.createElement("main",null,l.a.createElement(k,null))};a(29);var j=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Developed by ",l.a.createElement("a",{href:"https://johnsonlu.dev/#/"},"Johnson Lu")," with ",l.a.createElement("a",{href:"https://www.petfinder.com/developers/"},"Pet Finder API")))};a(30);function D(){return l.a.createElement("div",{className:"cornerRibbon"},l.a.createElement("div",{className:"corner-ribbon bottom-right sticky green shadow"},"In Developement"))}var x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(I,null),l.a.createElement(D,null),l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.bb9984e8.chunk.js.map