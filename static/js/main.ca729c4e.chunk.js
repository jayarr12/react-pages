(this.webpackJsonpmyreactproj=this.webpackJsonpmyreactproj||[]).push([[0],{20:function(e,a,t){e.exports=t(44)},25:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),o=(t(25),t(2)),s=t(3),i=t(5),m=t(4),u=t(6),d=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Drupal & React"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Contact")))))}}]),a}(r.a.Component),p=(t(8),t(9),t(19)),v=t.n(p),b=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={load:!1,data:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://widespreadtopic.com/resfulapi/v1/resume",{headers:{"Content-Type":"application/json"}}).then((function(a){var t=a.data[0];e.setState({data:t})}))}},{key:"render",value:function(){console.log(this.state.data);var e="https://widespreadtopic.com/"+this.state.data.field_res_image;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"react-pic"},r.a.createElement("img",{src:e,alt:"drupal&react"})),r.a.createElement("div",{className:"react-title"},this.state.data.title),r.a.createElement("div",{className:"react-body"},this.state.data.body)))}}]),a}(n.Component),h=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement(b,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){}},[[20,1,2]]]);
//# sourceMappingURL=main.ca729c4e.chunk.js.map