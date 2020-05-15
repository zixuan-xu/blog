(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{352:function(e,t,a){},356:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(63),l=a.n(c),i=(a(76),a(3)),s=a(4),u=a(6),o=a(5),m=a(7),d=a(8),k=a(16),h=function(){return r.a.createElement("div",{className:"uk-section uk-background-primary homepage",style:{minHeight:"calc(100vh - 60px)"}},r.a.createElement("div",{className:"uk-container uk-text-center"},r.a.createElement("h1",{className:"uk-heading-large uk-text-bold"},"Learn by doing"),r.a.createElement("p",{className:"uk-text-lead uk-margin",style:{color:"white"}},"The best way to learn something is through examples"),r.a.createElement(d.b,{className:"uk-button uk-margin uk-button-default uk-button-large uk-border-pill uk-background-primary",to:"/articles",style:{color:"white",border:"1px solid white"}},"GET STARTED")))},p=a(1),f=a.n(p),v=a(9),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={terms:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("static/posts/000/post.md");case 2:return t=e.sent,e.next=5,t.text();case 5:a=e.sent,this.setState({terms:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement("p",null,"I'm a web developer currently residing in Sydney.")))}}]),t}(n.Component),E=a(21),g=a.n(E),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).fileInput=r.a.createRef(),a.state={title:"",description:"",content:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"cancel",value:function(e){e.preventDefault(),this.props.history.push("/articles")}},{key:"submit",value:function(){var e=Object(v.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==this.state.title&&""!==this.state.description&&""!==this.state.content){e.next=4;break}return alert("Please fill in all the blanks..."),e.abrupt("return");case 4:return(a=new FormData).append("cover",this.fileInput.current.files[0]),a.append("title",this.state.title),a.append("slugified",g()(this.state.title)),a.append("description",this.state.description),a.append("content",this.state.content),a.append("date",new Date),e.next=13,fetch("/api/articles",{method:"POST",body:a});case 13:this.props.history.push("/articles/".concat(g()(this.state.title)));case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement("form",{className:"uk-form-stacked"},r.a.createElement("legend",{className:"uk-legend"},"Add Article"),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",{className:"uk-form-label",htmlFor:"form-stacked-file"},"File:"),r.a.createElement("div",{"data-uk-form-custom":!0},r.a.createElement("input",{required:!0,id:"form-stacked-file",type:"file",name:"cover",ref:this.fileInput}),r.a.createElement("button",{className:"uk-button uk-button-default"},"Upload"))),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",{className:"uk-form-label",htmlFor:"form-stacked-title"},"Title:"),r.a.createElement("div",{className:"uk-form-controls"},r.a.createElement("input",{required:!0,className:"uk-input",id:"form-stacked-title",name:"title",type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}))),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",{className:"uk-form-label",htmlFor:"form-stacked-description"},"Description:"),r.a.createElement("div",{className:"uk-form-controls"},r.a.createElement("textarea",{className:"uk-textarea",id:"form-stacked-description",name:"description",rows:"4",cols:"50",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}}))),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("label",{className:"uk-form-label",htmlFor:"form-stacked-content"},"Content:"),r.a.createElement("div",{className:"uk-form-controls"},r.a.createElement("textarea",{className:"uk-textarea",id:"form-stacked-content",name:"content",rows:"6",cols:"50",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}}))),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("button",{className:"uk-button uk-button-default uk-margin-right",onClick:function(t){e.cancel(t)}},"Cancel"),r.a.createElement("button",{className:"uk-button uk-button-primary",type:"submit",onClick:function(t){e.submit(t)}},"Submit")))))}}]),t}(n.Component),y=Object(k.f)(N),j=function(){return r.a.createElement("h1",null,"404: Page Not Found")},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={title:"",description:"",content:"",loading:!0,slugified:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"cancel",value:function(e){e.preventDefault(),this.props.history.push("/articles/".concat(this.state.slugified))}},{key:"submit",value:function(){var e=Object(v.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==this.state.title&&""!==this.state.description&&""!==this.state.content){e.next=4;break}return alert("Please fill in all the blanks..."),e.abrupt("return");case 4:return e.next=6,fetch("/api/articles/edit/".concat(this.state.slugified),{method:"PUT",body:JSON.stringify({title:this.state.title,slugified:g()(this.state.title),description:this.state.description,content:this.state.content}),headers:{"Content-Type":"application/json"}});case 6:this.props.history.push("/articles/".concat(g()(this.state.title)));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.name,e.next=3,fetch("/api/articles/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:null==(n=e.sent)?this.setState({loading:!1}):this.setState({title:n.title,slugified:n.slugified,description:n.description,content:n.content,loading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return!0===this.state.loading?r.a.createElement("div",null):""===this.state.slugified?r.a.createElement(j,null):r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement("form",{className:"uk-form-stacked"},r.a.createElement("legend",{className:"uk-legend"},"Edit Article"),r.a.createElement("label",{className:"uk-form-label uk-margin",for:"form-stacked-title"},"Title:"),r.a.createElement("div",{className:"uk-form-controls"},r.a.createElement("input",{className:"uk-input",id:"form-stacked-title",type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement("label",{className:"uk-form-label uk-margin",for:"form-stacked-description"},"Description:"),r.a.createElement("div",{className:"uk-form-controls"},r.a.createElement("textarea",{className:"uk-textarea",id:"form-stacked-description",rows:"4",cols:"50",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}})),r.a.createElement("label",{className:"uk-form-label uk-margin",for:"form-stacked-content"},"Content:"),r.a.createElement("div",{className:"uk-form-controls"},r.a.createElement("textarea",{className:"uk-textarea",id:"form-stacked-content",rows:"6",cols:"50",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}})),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("button",{className:"uk-button uk-button-default uk-margin-right",onClick:function(t){e.cancel(t)}},"Cancel"),r.a.createElement("button",{className:"uk-button uk-button-primary",onClick:function(t){e.submit(t)}},"Submit")))))}}]),t}(n.Component),w=Object(k.f)(O),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).handleClickLike=function(){this.setState({liked:!this.state.liked,likeCount:this.state.liked?this.state.likeCount-1:this.state.likeCount+1});var e="/api/articles/".concat(this.props.article.slugified,"/")+(this.state.liked?"dislike":"like");fetch(e,{method:"POST",body:JSON.stringify({uuid:this.uuid}),headers:{"Content-Type":"application/json"}})},a.uuid=window.localStorage.getItem("uuid"),a.state={likeCount:0,liked:!1,likes:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState(this.props.article),null!=this.props.article.likes&&this.setState({liked:this.props.article.likes.includes(this.uuid)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.liked?"like-button-liked":"";return r.a.createElement("span",{className:t},r.a.createElement("button",{"uk-icon":"icon: heart",onClick:function(){e.handleClickLike()},style:{outline:"none"}}),r.a.createElement("span",{className:"uk-margin-small-left"},this.state.likeCount))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.posts.map(function(e,t){return r.a.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin-medium","data-uk-grid":!0,key:t},r.a.createElement("div",{className:"uk-card-media-left uk-cover-container"},r.a.createElement(d.b,{className:"article-list-item",key:t,to:"/articles/".concat(e.slugified)},r.a.createElement("img",{src:e.cover,alt:"","data-uk-cover":!0}),r.a.createElement("canvas",{width:"600",height:"450"}))),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("span",null,new Date(e.date).toLocaleDateString()),r.a.createElement("ul",{className:"uk-iconnav",style:{marginLeft:"auto"}},r.a.createElement("li",{key:"heart"},r.a.createElement(x,{article:e})))),r.a.createElement("div",{className:"uk-margin"},r.a.createElement(d.b,{className:"article-list-item",key:t,to:"/articles/".concat(e.slugified)},r.a.createElement("h2",{className:"uk-card-title"},e.title),r.a.createElement("p",null,e.description))))))}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={articles:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({articles:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement("ul",{className:"uk-switcher"},r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null)),r.a.createElement(C,{posts:this.state.articles})))}}]),t}(n.Component),D=a(66),T=a.n(D),I=a(361),P=a(360),A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return r.a.createElement(I.a,{language:t,style:P.a},a)}}]),t}(n.PureComponent);A.defaultProps={language:null};var F=A,L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).uuid=window.localStorage.getItem("uuid"),a.state={article:null,loading:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(this.props.match.params.name,"?uuid=").concat(this.uuid));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({article:null!=a?a:null,loading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement("div",null):null==this.state.article?r.a.createElement(j,null):r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-xsmall"},r.a.createElement("article",{className:"uk-article"},r.a.createElement("h1",null,this.state.article.title),r.a.createElement("div",{className:"uk-margin"},r.a.createElement(x,{article:this.state.article})),r.a.createElement("img",{"data-src":this.state.article.cover,width:"750",height:"400",alt:"cover","uk-img":""}),r.a.createElement(T.a,{source:this.state.article.content,renderers:{code:F}}))))}}]),t}(n.Component),M=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-navbar-container"},r.a.createElement("div",{className:"uk-container uk-background-primary"},r.a.createElement("nav",{"data-uk-navbar":!0},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("a",{className:"uk-navbar-item uk-logo",href:"/"},"Zixuan's Tech Blog"),r.a.createElement("ul",{className:"uk-navbar-nav uk-visible@s"},r.a.createElement("li",null,r.a.createElement(d.c,{exact:!0,activeClassName:"navbar-nav-active",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.c,{activeClassName:"navbar-nav-active",to:"/articles"},"Articles")))),r.a.createElement("div",{className:"uk-navbar-right"},r.a.createElement("ul",{className:"uk-navbar-nav uk-visible@s"},r.a.createElement("li",{className:"social-link"},r.a.createElement("a",{href:"https://github.com/zixuan-xu"},r.a.createElement("span",{"uk-icon":"icon: github; ratio: 1.4"}))),r.a.createElement("li",{className:"social-link"},r.a.createElement("a",{href:"https://www.linkedin.com/in/zixuan-xu/"},r.a.createElement("span",{"uk-icon":"icon: linkedin; ratio: 1.4"})))),r.a.createElement("ul",{className:"uk-navbar-nav uk-hidden@s"},r.a.createElement("li",null,r.a.createElement("button",{className:"uk-button uk-button-link"},r.a.createElement("span",{className:"uk-navbar-toggle","data-uk-navbar-toggle-icon":!0})),r.a.createElement("div",{className:"uk-navbar-dropdown uk-background-primary uk-border-rounded"},r.a.createElement("ul",{className:"uk-nav uk-navbar-dropdown-nav"},r.a.createElement("li",null,r.a.createElement(d.c,{exact:!0,activeClassName:"navbar-nav-active",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.c,{activeClassName:"navbar-nav-active",to:"/articles"},"Articles")),r.a.createElement("li",{className:"uk-nav-divider"}),r.a.createElement("div",{className:"uk-grid-small","data-uk-grid":!0},r.a.createElement("div",null,r.a.createElement("li",{className:"social-link"},r.a.createElement("a",{href:"https://github.com/zixuan-xu"},r.a.createElement("span",{"uk-icon":"icon: github"})))),r.a.createElement("div",null,r.a.createElement("li",{className:"social-link"},r.a.createElement("a",{href:"https://www.linkedin.com/in/zixuan-xu/"},r.a.createElement("span",{"uk-icon":"icon: linkedin"}))))))))))))),r.a.createElement("div",{className:"uk-navbar-dropbar"}))},z=(a(352),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(M,null),r.a.createElement("div",{id:"page-body"},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/",component:h,exact:!0}),r.a.createElement(k.a,{path:"/about",component:b,exact:!0}),r.a.createElement(k.a,{path:"/articles",component:S,exact:!0}),r.a.createElement(k.a,{path:"/articles/add",component:y,exact:!0}),r.a.createElement(k.a,{path:"/articles/edit/:name",component:w,exact:!0}),r.a.createElement(k.a,{path:"/articles/:name",component:L,exact:!0}),r.a.createElement(k.a,{component:j})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(69),B=a.n(J),H=a(70),W=a.n(H),q=(a(355),a(362));null==window.localStorage.getItem("uuid")&&window.localStorage.setItem("uuid",Object(q.a)()),B.a.use(W.a),l.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,t,a){e.exports=a(356)},76:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.9f0a7fdd.chunk.js.map