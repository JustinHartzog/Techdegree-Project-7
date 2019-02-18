(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},33:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),s=(a(33),a(7)),l=a(8),i=a(13),u=a(9),h=a(14),m=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.onSearchChange=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSearch(a.userSearch.value);var t=a.userSearch.value,n="/search/".concat(t);a.props.history.push(n),e.currentTarget.reset()},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(t){return e.userSearch=t},placeholder:"search",required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(n.Component),f=a(58),p=Object(f.a)(function(e){return r.a.createElement("header",null,r.a.createElement("h2",null,"React Gallery App"),r.a.createElement(m,{onSearch:e.onSearch,history:e.history}))}),d=a(59),g=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.a,{to:"/sunsets"},"Sunsets")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/waterfalls"},"Waterfalls")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/mountains"},"Mountains"))))},E=function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.serverID,"/").concat(e.id,"_").concat(e.secret,".jpg"),alt:""}))},v=function(e){var t=e.data.map(function(e){return r.a.createElement(E,{farm:e.farm,serverID:e.server,id:e.id,secret:e.secret,key:e.id})});return r.a.createElement("div",{className:"photo-container"},r.a.createElement("ul",null,t))},S=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Page Not Found"),r.a.createElement("p",null,"The search did not return any results, please try again"))},w=a(6),b=a.n(w),k="b42ba8f10d6fa45dc9e47e4762f98cc9",j=a(57),y=a(26),O=a(60),x=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).performSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sunsets";b.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({pictures:t.data.photos.photo,loading:!1})}).catch(function(e){console.log("Error fetching and parsing data",e)})},e.sunsetSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sunsets";b.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({sunsets:t.data.photos.photo,loading:!1})}).catch(function(e){console.log("Error fetching data",e)})},e.waterfallSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"waterfalls";b.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({waterfalls:t.data.photos.photo,loading:!1})}).catch(function(e){console.log("Error fetching data",e)})},e.mountainSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mountains";b.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({mountains:t.data.photos.photo,loading:!1})}).catch(function(e){console.log("Error fetching data",e)})},e.state={pictures:[],sunsets:[],waterfalls:[],mountains:[],loading:!0},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.performSearch(),this.sunsetSearch(),this.waterfallSearch(),this.mountainSearch()}},{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{basename:"/Techdegree-Project-7"},r.a.createElement("div",{className:"container"},r.a.createElement(y.a,{path:"/",render:function(){return r.a.createElement(p,{onSearch:e.performSearch})}}),r.a.createElement(g,null),r.a.createElement(O.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:function(){return r.a.createElement(v,{data:e.state.pictures})}}),r.a.createElement(y.a,{exact:!0,path:"/search/:image",component:function(){return r.a.createElement(v,{data:e.state.pictures})}}),r.a.createElement(y.a,{exact:!0,path:"/sunsets",component:function(){return r.a.createElement(v,{data:e.state.sunsets})}}),r.a.createElement(y.a,{exact:!0,path:"/waterfalls",component:function(){return r.a.createElement(v,{data:e.state.waterfalls})}}),r.a.createElement(y.a,{exact:!0,path:"/mountains",component:function(){return r.a.createElement(v,{data:e.state.mountains})}}),r.a.createElement(y.a,{component:S}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.17fabda8.chunk.js.map