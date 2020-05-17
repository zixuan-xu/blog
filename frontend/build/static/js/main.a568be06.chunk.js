(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{353:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(64),c=a.n(r),l=(a(77),a(1)),s=a(2),o=a(4),u=a(3),m=a(5),d=a(8),h=a(17),p=function(){return i.a.createElement("div",{className:"uk-section uk-background-primary homepage",style:{minHeight:"calc(100vh - 60px)"}},i.a.createElement("div",{className:"uk-container uk-text-center"},i.a.createElement("h1",{className:"uk-heading-large uk-text-bold"},"Learn by doing"),i.a.createElement("p",{className:"uk-text-lead uk-margin",style:{color:"white"}},"The best way to learn something is through examples"),i.a.createElement(d.b,{className:"uk-button uk-margin uk-button-default uk-button-large uk-border-pill uk-background-primary",to:"/articles",style:{color:"white",border:"1px solid white"}},"GET STARTED")))},k=a(6),f=a.n(k),v=a(9),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={terms:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("static/posts/000/post.md");case 2:return t=e.sent,e.next=5,t.text();case 5:a=e.sent,this.setState({terms:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"uk-section"},i.a.createElement("div",{className:"uk-container uk-container-small"},i.a.createElement("p",null,"I'm a web developer currently residing in Sydney.")))}}]),t}(n.Component),E=a(22),g=a.n(E),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).fileInput=i.a.createRef(),a.state={title:"",description:"",content:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"cancel",value:function(e){e.preventDefault(),this.props.history.push("/articles")}},{key:"submit",value:function(){var e=Object(v.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==this.state.title&&""!==this.state.description&&""!==this.state.content){e.next=4;break}return alert("Please fill in all the blanks..."),e.abrupt("return");case 4:return(a=new FormData).append("cover",this.fileInput.current.files[0]),a.append("title",this.state.title),a.append("slugified",g()(this.state.title)),a.append("description",this.state.description),a.append("content",this.state.content),a.append("date",new Date),e.next=13,fetch("/api/articles",{method:"POST",body:a});case 13:this.props.history.push("/articles/".concat(g()(this.state.title)));case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"uk-section"},i.a.createElement("div",{className:"uk-container uk-container-small"},i.a.createElement("form",{className:"uk-form-stacked"},i.a.createElement("legend",{className:"uk-legend"},"Add Article"),i.a.createElement("div",{className:"uk-margin"},i.a.createElement("label",{className:"uk-form-label",htmlFor:"form-stacked-file"},"File:"),i.a.createElement("div",{"data-uk-form-custom":!0},i.a.createElement("input",{required:!0,id:"form-stacked-file",type:"file",name:"cover",ref:this.fileInput}),i.a.createElement("button",{className:"uk-button uk-button-default"},"Upload"))),i.a.createElement("div",{className:"uk-margin"},i.a.createElement("label",{className:"uk-form-label",htmlFor:"form-stacked-title"},"Title:"),i.a.createElement("div",{className:"uk-form-controls"},i.a.createElement("input",{required:!0,className:"uk-input",id:"form-stacked-title",name:"title",type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}))),i.a.createElement("div",{className:"uk-margin"},i.a.createElement("label",{className:"uk-form-label",htmlFor:"form-stacked-description"},"Description:"),i.a.createElement("div",{className:"uk-form-controls"},i.a.createElement("textarea",{className:"uk-textarea",id:"form-stacked-description",name:"description",rows:"4",cols:"50",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}}))),i.a.createElement("div",{className:"uk-margin"},i.a.createElement("label",{className:"uk-form-label",htmlFor:"form-stacked-content"},"Content:"),i.a.createElement("div",{className:"uk-form-controls"},i.a.createElement("textarea",{className:"uk-textarea",id:"form-stacked-content",name:"content",rows:"6",cols:"50",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}}))),i.a.createElement("div",{className:"uk-margin"},i.a.createElement("button",{className:"uk-button uk-button-default uk-margin-right",onClick:function(t){e.cancel(t)}},"Cancel"),i.a.createElement("button",{className:"uk-button uk-button-primary",type:"submit",onClick:function(t){e.submit(t)}},"Submit")))))}}]),t}(n.Component),y=Object(h.f)(N),j=function(){return i.a.createElement("h1",null,"404: Page Not Found")},O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={title:"",description:"",content:"",loading:!0,slugified:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"cancel",value:function(e){e.preventDefault(),this.props.history.push("/articles/".concat(this.state.slugified))}},{key:"submit",value:function(){var e=Object(v.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==this.state.title&&""!==this.state.description&&""!==this.state.content){e.next=4;break}return alert("Please fill in all the blanks..."),e.abrupt("return");case 4:return e.next=6,fetch("/api/articles/edit/".concat(this.state.slugified),{method:"PUT",body:JSON.stringify({title:this.state.title,slugified:g()(this.state.title),description:this.state.description,content:this.state.content}),headers:{"Content-Type":"application/json"}});case 6:this.props.history.push("/articles/".concat(g()(this.state.title)));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.name,e.next=3,fetch("/api/articles/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:null==(n=e.sent)?this.setState({loading:!1}):this.setState({title:n.title,slugified:n.slugified,description:n.description,content:n.content,loading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return!0===this.state.loading?i.a.createElement("div",null):""===this.state.slugified?i.a.createElement(j,null):i.a.createElement("div",{className:"uk-section"},i.a.createElement("div",{className:"uk-container uk-container-small"},i.a.createElement("form",{className:"uk-form-stacked"},i.a.createElement("legend",{className:"uk-legend"},"Edit Article"),i.a.createElement("label",{className:"uk-form-label uk-margin",for:"form-stacked-title"},"Title:"),i.a.createElement("div",{className:"uk-form-controls"},i.a.createElement("input",{className:"uk-input",id:"form-stacked-title",type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}})),i.a.createElement("label",{className:"uk-form-label uk-margin",for:"form-stacked-description"},"Description:"),i.a.createElement("div",{className:"uk-form-controls"},i.a.createElement("textarea",{className:"uk-textarea",id:"form-stacked-description",rows:"4",cols:"50",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}})),i.a.createElement("label",{className:"uk-form-label uk-margin",for:"form-stacked-content"},"Content:"),i.a.createElement("div",{className:"uk-form-controls"},i.a.createElement("textarea",{className:"uk-textarea",id:"form-stacked-content",rows:"6",cols:"50",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}})),i.a.createElement("div",{className:"uk-margin"},i.a.createElement("button",{className:"uk-button uk-button-default uk-margin-right",onClick:function(t){e.cancel(t)}},"Cancel"),i.a.createElement("button",{className:"uk-button uk-button-primary",onClick:function(t){e.submit(t)}},"Submit")))))}}]),t}(n.Component),x=Object(h.f)(O),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClickLike=function(){this.setState({liked:!this.state.liked,likeCount:this.state.liked?this.state.likeCount-1:this.state.likeCount+1});var e="/api/articles/".concat(this.props.article.slugified,"/")+(this.state.liked?"dislike":"like");fetch(e,{method:"POST",body:JSON.stringify({uuid:this.uuid}),headers:{"Content-Type":"application/json"}})},a.uuid=window.localStorage.getItem("uuid"),a.state={likeCount:0,liked:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState(this.props.article),null!=this.props.article.likes&&this.setState({liked:this.props.article.likes.includes(this.uuid)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.liked?"like-button-liked":"";return i.a.createElement("span",{className:t},i.a.createElement("button",{"uk-icon":"icon: heart",onClick:function(){e.handleClickLike()},style:{outline:"none"}}),i.a.createElement("span",{className:"uk-margin-small-left"},this.state.likeCount))}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.posts.map(function(e,t){return i.a.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin-medium","data-uk-grid":!0,key:t},i.a.createElement("div",{className:"uk-card-media-left uk-cover-container"},i.a.createElement(d.b,{className:"article-list-item",key:t,to:"/articles/".concat(e.slugified)},i.a.createElement("img",{src:e.cover,alt:"","data-uk-cover":!0}),i.a.createElement("canvas",{width:"600",height:"450"}))),i.a.createElement("div",null,i.a.createElement("div",{className:"uk-card-body"},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("span",null,new Date(e.date).toLocaleDateString()),i.a.createElement("ul",{className:"uk-iconnav",style:{marginLeft:"auto"}},i.a.createElement("li",{key:"heart"},i.a.createElement(w,{article:e})))),i.a.createElement("div",{className:"uk-margin"},i.a.createElement(d.b,{className:"article-list-item",key:t,to:"/articles/".concat(e.slugified)},i.a.createElement("h2",{className:"uk-card-title"},e.title),i.a.createElement("p",null,e.description))))))}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={articles:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({articles:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"uk-section"},i.a.createElement("div",{className:"uk-container uk-container-small"},i.a.createElement("ul",{className:"uk-switcher"},i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)),i.a.createElement(S,{posts:this.state.articles})))}}]),t}(n.Component),D=a(67),T=a.n(D),I=a(362),P=a(361),_=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return i.a.createElement(I.a,{language:t,style:P.a},a)}}]),t}(n.PureComponent);_.defaultProps={language:null};var A=_,F=a(16),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).textarea=i.a.createRef(),a.uuid=window.localStorage.getItem("uuid"),a.state={validated:!1,name:"",comment:"",hidden:null!=a.props.comment},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"adjustHeight",value:function(){var e=this.textarea.current;e.style.height="",e.style.height=e.scrollHeight+2+"px"}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),!1===e.currentTarget.checkValidity()?(e.stopPropagation(),this.setState({validated:!0})):(null!=this.props.comment?fetch("/api/articles/".concat(this.props.slugified,"/add-reply"),{method:"POST",body:JSON.stringify({name:this.state.name,comment:this.state.comment,uuid:this.uuid,replyTo:this.props.comment.name,replyToID:this.props.baseCommentID}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return t.props.onSubmit(e)}):fetch("/api/articles/".concat(this.props.slugified,"/add-comment"),{method:"POST",body:JSON.stringify({name:this.state.name,comment:this.state.comment,uuid:this.uuid}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return t.props.onSubmit(e)}),this.setState({name:"",comment:"",validated:!1}))}},{key:"render",value:function(){var e=this,t="uk-margin-top needs-validation"+(this.state.validated?" was-validated":""),a=null!=this.props.comment?"id"+this.props.comment._id:"",n=null!=this.props.comment?"Replying to ".concat(this.props.comment.name," ..."):"Please enter your comment ...";return i.a.createElement("form",{id:a,hidden:this.state.hidden,className:t,noValidate:!0,onSubmit:function(t){return e.handleSubmit(t)}},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{required:!0,type:"text",name:"name",className:"form-control",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},placeholder:"Name"}),i.a.createElement("div",{className:"invalid-feedback"},"Please enter a valid name.")),i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",{required:!0,type:"text",name:"comment",ref:this.textarea,className:"form-control",onInput:function(){e.adjustHeight()},value:this.state.comment,onChange:function(t){return e.setState({comment:t.target.value})},placeholder:n}),i.a.createElement("div",{className:"invalid-feedback"},"Please enter a valid comment.")),i.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={likeCount:0,liked:!1},a.toggle=i.a.createRef(),a.onSubmit=a.onSubmit.bind(Object(F.a)(Object(F.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onSubmit",value:function(e){this.props.onSubmit(e),this.toggle.current.click()}},{key:"render",value:function(){var e="target: #id".concat(this.props.comment._id,"; animation: uk-animation-fade");return i.a.createElement("article",{className:"uk-comment uk-visible-toggle",tabIndex:"-1"},i.a.createElement("header",{className:"uk-comment-header uk-position-relative uk-margin-remove"},i.a.createElement("div",{className:"uk-grid-medium uk-flex-middle"},i.a.createElement("div",{className:"uk-width-expand"},i.a.createElement("h4",{className:"uk-comment-title uk-margin-remove"},i.a.createElement("span",{className:"uk-link-reset"},this.props.comment.name,null!=this.props.comment.replyTo?i.a.createElement("span",null," \u25b8 ",this.props.comment.replyTo):"")),i.a.createElement("p",{className:"uk-comment-meta uk-margin-remove"},i.a.createElement("span",{className:"uk-link-reset"},new Date(this.props.comment.date).toLocaleString()))))),i.a.createElement("div",{className:"uk-comment-body uk-margin-small"},i.a.createElement("p",null,this.props.comment.content)),i.a.createElement("div",null,i.a.createElement("button",{"uk-icon":"icon: heart",style:{outline:"none"}}),i.a.createElement("span",{className:"uk-margin-small-left"},this.props.comment.likeCount),i.a.createElement("button",{"uk-toggle":e,ref:this.toggle,type:"button",className:"uk-margin-left ","uk-icon":"icon: reply",style:{outline:"none"}}),i.a.createElement(L,{baseCommentID:this.props.baseCommentID,comment:this.props.comment,slugified:this.props.slugified,onSubmit:this.onSubmit})))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={comments:e.comments},a.handleSubmit=a.handleSubmit.bind(Object(F.a)(Object(F.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){this.setState({comments:e})}},{key:"render",value:function(){var e=this;return 0===this.state.comments.length?i.a.createElement("div",{className:"comment-section"},i.a.createElement("hr",null),i.a.createElement("div",{className:"uk-text-center"},"Be the first to leave a comment!"),i.a.createElement("hr",null),i.a.createElement(L,{slugified:this.props.slugified,onSubmit:this.handleSubmit})):i.a.createElement("div",{className:"comment-section"},i.a.createElement("hr",null),i.a.createElement("ul",{className:"uk-comment-list"},this.state.comments.map(function(t){return 0!==t.replies.length?i.a.createElement("li",{key:t._id},i.a.createElement(H,{baseCommentID:t._id,comment:t,slugified:e.props.slugified,onSubmit:e.handleSubmit}),i.a.createElement("ul",null,t.replies.map(function(a){return i.a.createElement("li",{key:a._id},i.a.createElement(H,{baseCommentID:t._id,comment:a,slugified:e.props.slugified,onSubmit:e.handleSubmit}))}))):i.a.createElement("li",{key:t._id},i.a.createElement(H,{baseCommentID:t._id,comment:t,slugified:e.props.slugified,onSubmit:e.handleSubmit}))})),i.a.createElement("hr",null),i.a.createElement(L,{slugified:this.props.slugified,onSubmit:this.handleSubmit}))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).uuid=window.localStorage.getItem("uuid"),a.state={article:null,loading:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(this.props.match.params.name,"?uuid=").concat(this.uuid));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({article:null!=a?a:null,loading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!0===this.state.loading?i.a.createElement("div",{className:"d-flex justify-content-center",style:{height:"80vh",alignItems:"center"}},i.a.createElement("div",{className:"spinner-border",role:"status",style:{height:"20vh",width:"20vh"}},i.a.createElement("span",{className:"sr-only"},"Loading..."))):null==this.state.article?i.a.createElement(j,null):i.a.createElement("div",{className:"uk-section"},i.a.createElement("div",{className:"uk-container uk-container-xsmall"},i.a.createElement("article",{className:"uk-article"},i.a.createElement("h1",null,this.state.article.title),i.a.createElement("div",{className:"uk-margin"},i.a.createElement(w,{article:this.state.article})),i.a.createElement("img",{"data-src":this.state.article.cover,width:"750",height:"400",alt:"cover","uk-img":""}),i.a.createElement(T.a,{source:this.state.article.content,renderers:{code:A}}),i.a.createElement(J,{slugified:this.state.article.slugified,comments:this.state.article.comments}))))}}]),t}(n.Component),R=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"uk-navbar-container"},i.a.createElement("div",{className:"uk-container uk-background-primary"},i.a.createElement("nav",{"data-uk-navbar":!0},i.a.createElement("div",{className:"uk-navbar-left"},i.a.createElement("a",{className:"uk-navbar-item uk-logo",href:"/"},"Zixuan's Tech Blog"),i.a.createElement("ul",{className:"uk-navbar-nav uk-visible@s"},i.a.createElement("li",null,i.a.createElement(d.c,{exact:!0,activeClassName:"navbar-nav-active",to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(d.c,{activeClassName:"navbar-nav-active",to:"/articles"},"Articles")))),i.a.createElement("div",{className:"uk-navbar-right"},i.a.createElement("ul",{className:"uk-navbar-nav uk-visible@s"},i.a.createElement("li",{className:"social-link"},i.a.createElement("a",{href:"https://github.com/zixuan-xu"},i.a.createElement("span",{"uk-icon":"icon: github; ratio: 1.4"}))),i.a.createElement("li",{className:"social-link"},i.a.createElement("a",{href:"https://www.linkedin.com/in/zixuan-xu/"},i.a.createElement("span",{"uk-icon":"icon: linkedin; ratio: 1.4"})))),i.a.createElement("ul",{className:"uk-navbar-nav uk-hidden@s"},i.a.createElement("li",null,i.a.createElement("button",{className:"uk-button uk-button-link"},i.a.createElement("span",{className:"uk-navbar-toggle","data-uk-navbar-toggle-icon":!0})),i.a.createElement("div",{className:"uk-navbar-dropdown uk-background-primary uk-border-rounded"},i.a.createElement("ul",{className:"uk-nav uk-navbar-dropdown-nav"},i.a.createElement("li",null,i.a.createElement(d.c,{exact:!0,activeClassName:"navbar-nav-active",to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(d.c,{activeClassName:"navbar-nav-active",to:"/articles"},"Articles")),i.a.createElement("li",{className:"uk-nav-divider"}),i.a.createElement("div",{className:"uk-grid-small","data-uk-grid":!0},i.a.createElement("div",null,i.a.createElement("li",{className:"social-link"},i.a.createElement("a",{href:"https://github.com/zixuan-xu"},i.a.createElement("span",{"uk-icon":"icon: github"})))),i.a.createElement("div",null,i.a.createElement("li",{className:"social-link"},i.a.createElement("a",{href:"https://www.linkedin.com/in/zixuan-xu/"},i.a.createElement("span",{"uk-icon":"icon: linkedin"}))))))))))))),i.a.createElement("div",{className:"uk-navbar-dropbar"}))},q=(a(353),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(R,null),i.a.createElement("div",{id:"page-body"},i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/",component:p,exact:!0}),i.a.createElement(h.a,{path:"/about",component:b,exact:!0}),i.a.createElement(h.a,{path:"/articles",component:C,exact:!0}),i.a.createElement(h.a,{path:"/articles/add",component:y,exact:!0}),i.a.createElement(h.a,{path:"/articles/edit/:name",component:x,exact:!0}),i.a.createElement(h.a,{path:"/articles/:name",component:M,exact:!0}),i.a.createElement(h.a,{component:j})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(70),B=a.n(z),W=a(71),U=a.n(W),V=(a(356),a(363));null==window.localStorage.getItem("uuid")&&window.localStorage.setItem("uuid",Object(V.a)()),B.a.use(U.a),c.a.render(i.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(357)},77:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.a568be06.chunk.js.map