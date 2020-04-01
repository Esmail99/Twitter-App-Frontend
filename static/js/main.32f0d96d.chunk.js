(this["webpackJsonptwitter-app-frontend"]=this["webpackJsonptwitter-app-frontend"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/avatar.732dc8fe.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/logo.d6716f1a.png"},function(e,t,a){e.exports=a.p+"static/media/likes.39182f5f.jpg"},,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/like.b9d889dd.webp"},function(e,t,a){e.exports=a.p+"static/media/comment.ae267f51.png"},function(e,t,a){e.exports=a.p+"static/media/delete.f1782b1c.webp"},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(10),r=a.n(i),o=(a(16),a(1)),c=a(2),l=a(3),m=a(4),u=(a(17),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,this.props.isSignedin?s.a.createElement("nav",{className:"dt w-100 border-box pa3 ph5-ns bg-black-80 white"},s.a.createElement("p",{className:"dtc v-mid mid-gray link w-25",title:"Home"},s.a.createElement("img",{onClick:function(){return e.props.changeRoute("homeSignedin")},src:a(8),className:"dib dim w2 h3 br-100 pointer w3 h3 bg-blue ml2",alt:"Site Name"})),s.a.createElement("div",{className:"dtc v-mid w-75 tr"},s.a.createElement("p",{onClick:function(){return e.props.changeRoute("profile")},className:"link dim f3-ns dib pointer mr2",title:"Contact"},"Hi, ",this.props.userInfo.username),s.a.createElement("p",{onClick:function(){return e.props.changeRoute("signout")},className:"link dim f3-ns dib pointer mr2 ml4",title:"Contact"},"Signout"))):s.a.createElement("nav",{className:"dt w-100 border-box pa3 ph5-ns bg-black-80 white"},s.a.createElement("p",{className:"dtc v-mid mid-gray link w-25",title:"Home"},s.a.createElement("img",{onClick:function(){return e.props.changeRoute("homeDefault")},src:a(8),className:"dib dim w2 h3 br-100 pointer w3 h3 bg-blue ml2",alt:"Site Name"})),s.a.createElement("div",{className:"dtc v-mid w-75 tr"},s.a.createElement("p",{onClick:function(){return e.props.changeRoute("signin")},className:"link dim f3-ns dib mr3 mr4-ns pointer",title:"Store"},"Signin"),s.a.createElement("p",{onClick:function(){return e.props.changeRoute("register")},className:"link dim f3-ns dib pointer mr2",title:"Contact"},"Register"))))}}]),n}(s.a.Component)),p=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signinEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signinPassword:e.target.value})},n.onFormSubmit=function(e){e.preventDefault(),fetch("http://localhost:5000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signinEmail,password:n.state.signinPassword})}).then((function(e){return e.json()})).then((function(e){e._id&&(n.props.loadUser(e),n.props.changeRoute("homeSignedin"))}))},n.onRegisterClick=function(){n.props.changeRoute("register")},n.state={signinEmail:"",signinPassword:""},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure center",onSubmit:this.onFormSubmit},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",null,s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},"Don't have an account yet ?",s.a.createElement("span",{onClick:this.onRegisterClick,href:"#0",className:"f6 link blue underline dim ml1 pointer"},"Register Now")))))}}]),a}(s.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onUsernameChange=function(e){n.setState({registerUsername:e.target.value})},n.onEmailChange=function(e){n.setState({registerEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({registerPassword:e.target.value})},n.onSigninClick=function(){n.props.changeRoute("signin")},n.onFormSubmit=function(e){e.preventDefault(),fetch("http://localhost:5000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.state.registerUsername,email:n.state.registerEmail,password:n.state.registerPassword})}).then((function(e){return e.json()})).then((function(e){e._id&&n.props.changeRoute("signin")}))},n.state={registerUsername:"",registerEmail:"",registerPassword:""},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure center",onSubmit:this.onFormSubmit},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Username"),s.a.createElement("input",{onChange:this.onUsernameChange,className:"pa2 input-reset ba bg-transparent w-70",type:"name",name:"username"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent w-75",type:"email",name:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"pa2 input-reset ba bg-transparent w-75",type:"password",name:"password"}))),s.a.createElement("div",null,s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})),s.a.createElement("div",{className:"lh-copy mt3"},"Already have an accout?",s.a.createElement("span",{onClick:this.onSigninClick,className:"f6 link blue dim underline pointer ml1"},"Signin")))))}}]),a}(s.a.Component),h=a(6),b=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onTextareaChange=function(e){a.setState({newTweetContent:e.target.value})},a.clearInput=function(){document.getElementById("textarea").value=""},a.onFormSubmit=function(e){e.preventDefault(),fetch("http://localhost:5000/tweet/posting/".concat(a.props.userInfo.username),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:a.state.newTweetContent})}).then((function(e){return e.json()})).then((function(e){e._id?(a.setState({newTweetContent:""}),a.clearInput(),a.componentDidMount()):"please signin first!"===e&&a.props.changeRoute("signin")})).catch((function(e){return console.log(e)}))},a.handleLikes=function(e){a.props.isSignedin?a.state.liked[e]?(document.getElementById("likeCounter".concat(e)).innerHTML=Number(document.getElementById("likeCounter".concat(e)).innerHTML)-1,a.setState(Object.assign(a.state.liked,Object(h.a)({},e,!1))),document.getElementById("likeBtn".concat(e)).classList.remove("bg-light-blue"),fetch("http://localhost:5000/tweet/dislikes/".concat(e,"/").concat(a.props.userInfo.username),{method:"put"}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))):(document.getElementById("likeCounter".concat(e)).innerHTML=Number(document.getElementById("likeCounter".concat(e)).innerHTML)+1,a.setState(Object.assign(a.state.liked,Object(h.a)({},e,!0))),document.getElementById("likeBtn".concat(e)).classList.add("bg-light-blue"),fetch("http://localhost:5000/tweet/likes/".concat(e,"/").concat(a.props.userInfo.username),{method:"put"}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))):a.props.changeRoute("signin")},a.showCommentBlock=function(e){document.getElementById("commentBlock".concat(e)).classList.toggle("dn")},a.onCommentChange=function(e){a.setState({comment:e.target.value})},a.onCommentClick=function(e){a.props.isSignedin&&a.state.comment.length?fetch("http://localhost:5000/tweet/comment/".concat(e),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner:a.props.userInfo.username,content:a.state.comment})}).then((function(e){return e.json()})).then((function(e){a.componentDidMount(),a.setState({comment:""}),document.getElementById("comment").value=""})):a.props.isSignedin||a.props.changeRoute("signin")},a.state={tweets:[],newTweetContent:"",liked:{},comment:""},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/home").then((function(e){return e.json()})).then((function(t){t=t.map((function(t,n){var i=!1;return t.likedBy.forEach((function(t){if(t===e.props.userInfo.username)return i=!0})),e.setState(Object.assign(e.state.liked,Object(h.a)({},t._id,i))),s.a.createElement("article",{className:"w-100 center bg-white br4 pa3 pa3-ns mv3 ba b--black-40 pb0 pb0-ns",key:n},s.a.createElement("div",{className:"tc"},s.a.createElement("img",{src:a(5),className:"br-100 h2 w2 dib pointer dim",title:"Photo of a kitty staring at you",alt:"avatar"}),s.a.createElement("h1",{className:"f4 pointer dim"},t.username),s.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})),s.a.createElement("p",{className:"lh-copy measure center f3 black-70"},t.content),s.a.createElement("div",{className:"tl mb2"},s.a.createElement("img",{src:a(9),className:"w2 ma0 pa0",alt:"likes"}),s.a.createElement("span",{id:"likeCounter".concat(t._id),className:"f3"},t.likes),s.a.createElement("hr",{className:"pa0 ma0 bn"}),s.a.createElement("button",{onClick:function(){return e.handleLikes(t._id)},className:"dim pointer w-50 bn outline-0"},s.a.createElement("img",{id:"likeBtn".concat(t._id),src:a(18),className:e.state.liked[t._id]?"w2 br-100 grow pointer dim bg-light-blue":"w2 br-100 grow pointer dim",alt:"like"})),s.a.createElement("button",{onClick:function(){return e.showCommentBlock(t._id)},id:"likeBtn",className:"dim pointer w-50 bn outline-0"},s.a.createElement("img",{src:a(19),className:"w2 br-100 grow pointer dim",alt:"comment"}))),s.a.createElement("div",null,s.a.createElement("div",{className:"bg-white mw6 center pa2 br4-ns ba b--white dn",id:"commentBlock".concat(t._id)},s.a.createElement("fieldset",{className:"cf bn ma0 pa0"},s.a.createElement("div",{className:"cf"},s.a.createElement("img",{src:a(5),className:"fl br-100 h2 w2 dib pointer dim mt1 mr2",title:"Photo of a kitty staring at you",alt:"avatar"}),s.a.createElement("textarea",{onChange:e.onCommentChange,className:"f3 input-reset bn fl black-80 bg-white pt2 lh-solid w-60 w-60-m w-60-l br2-ns outline-0",placeholder:"Write a comment..",type:"text",name:"tweet",id:"comment",style:{resize:"none"}}),s.a.createElement("input",{onClick:function(){return e.onCommentClick(t._id)},className:"f6 f5-l button-reset fr pv3 tc bn bg-animate bg-blue grow white pointer w-30 w-20-m w-20-l br4-ns outline-0",type:"submit",value:"Comment"}))))),t.comments=t.comments.map((function(e,t){return s.a.createElement("div",{className:"bg-black-20 br3 tl ph3 pa2 pb0 w-80 ml4",key:t},s.a.createElement("img",{src:a(5),className:"br-100 h2 w2 dib pointer fl mr2",title:"Photo of a kitty staring at you",alt:"avatar"}),s.a.createElement("h5",{className:"pb0 mb3 mt2 pointer hover-black-70 dark-blue dib"},e.owner),s.a.createElement("p",{className:"pt0 mb3 mt0 ml4 f4"},e.content))})))})),e.setState({tweets:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"tc f3 mh4"},s.a.createElement("section",{className:"mw7 center avenir"},s.a.createElement("div",{className:"pt2"},s.a.createElement("form",{className:"bg-white mw7 center pa2 br1-ns ba b--black-10",onSubmit:this.onFormSubmit},s.a.createElement("fieldset",{className:"cf bn ma0 pa0"},s.a.createElement("div",{className:"cf"},s.a.createElement("img",{src:a(5),className:"fl br-100 h2 w2 dib pointer dim mt1 mr2",title:"Photo of a kitty staring at you",alt:"avatar"}),s.a.createElement("textarea",{onChange:this.onTextareaChange,className:"f3 input-reset bn fl black-80 bg-white pt2 lh-solid w-80 w-80-m w-80-l br2-ns outline-0",placeholder:"Add a tweet ..",type:"text",name:"tweet",id:"textarea",style:{resize:"none"}}),s.a.createElement("input",{className:"f4 f3-l button-reset fr pv3 tc bn bg-animate bg-blue grow white pointer w-50 w-20-m w-20-l br4-ns outline-0",type:"submit",value:"Tweet"}))))),this.state.tweets))}}]),n}(s.a.Component),g=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onDeleteClick=function(t){fetch("http://localhost:5000/tweet/deleting/".concat(t),{method:"delete"}).then((function(e){return e.json()})).then((function(t){e.componentDidMount()})).catch(console.log)},e.state={tweets:[]},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/".concat(this.props.userInfo.username)).then((function(e){return e.json()})).then((function(t){t=t.length?t.map((function(t,n){return s.a.createElement("article",{className:"w-100 center bg-white br4 pa3 pa3-ns mv3 ba b--black-40 pb0 pb0-ns",key:n},s.a.createElement("div",{className:"tc"},s.a.createElement("img",{onClick:function(){return e.onDeleteClick(t._id)},id:"deleteBtn".concat(t._id),src:a(20),className:"br-100 h2 w2 dib pointer dim fr",title:"Photo of a kitty staring at you",alt:"avatar"}),s.a.createElement("img",{src:"http://tachyons.io/img/avatar_1.jpg",className:"br-100 h2 w2 dib pointer dim",title:"Photo of a kitty staring at you",alt:"avatar"}),s.a.createElement("h1",{className:"f4 pointer dim"},t.username)),s.a.createElement("p",{className:"lh-copy measure center f3 black-70"},t.content),s.a.createElement("div",{className:"tl"},s.a.createElement("img",{src:a(9),className:"w2 ma0 pa0",alt:"likes"}),s.a.createElement("span",{id:"likeCounter".concat(t._id),className:"f3"},t.likes),s.a.createElement("hr",{className:"pa0 ma0"})),t.comments=t.comments.map((function(e,t){return s.a.createElement("div",{className:"bg-black-20 br3 tl ph3 pa2 pb0 w-80 ml4",key:t},s.a.createElement("img",{src:"http://tachyons.io/img/avatar_1.jpg",className:"br-100 h2 w2 dib pointer fl mr2",title:"Photo of a kitty staring at you",alt:"avatar"}),s.a.createElement("h5",{className:"pb0 mb3 mt2 pointer hover-black-70 dark-blue dib"},e.owner),s.a.createElement("p",{className:"pt0 mb3 mt0 ml4 f4"},e.content))})))})):s.a.createElement("h2",null,"You dont have any tweets yet, ",e.props.userInfo.username),e.setState({tweets:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"tc f3 mh4"},s.a.createElement("section",{className:"mw7 center avenir"},this.state.tweets))}}]),n}(s.a.Component),f={route:"homeDefault",isSignedin:!1,userInfo:{}},w=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).changeRoute=function(t){"signout"===t&&e.setState(f),e.setState({route:t}),"homeSignedin"===t&&e.setState({isSignedin:!0})},e.loadUser=function(t){e.setState({userInfo:t})},e.state=f,e}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u,{changeRoute:this.changeRoute,isSignedin:this.state.isSignedin,userInfo:this.state.userInfo}),"homeDefault"===this.state.route||"homeSignedin"===this.state.route?s.a.createElement(b,{changeRoute:this.changeRoute,userInfo:this.state.userInfo,isSignedin:this.state.isSignedin}):"profile"===this.state.route?s.a.createElement(g,{userInfo:this.state.userInfo}):"register"===this.state.route?s.a.createElement(d,{changeRoute:this.changeRoute}):s.a.createElement(p,{changeRoute:this.changeRoute,loadUser:this.loadUser}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21);r.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.32f0d96d.chunk.js.map