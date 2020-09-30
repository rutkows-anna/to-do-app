(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"DATABASE_URL",(function(){return ue}));var n=a(0),o=a.n(n),s=a(11),r=a.n(s),i=(a(93),a(17)),c=a(18),l=a(20),u=a(19),d=a(64),h=a(152),m=a(149),p=a(139),f=a(70),g=a.n(f),b=a(5),k=a(13),E=a.n(k),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={task:"",done:!1},e.handleOnChange=function(t){e.setState({task:t.target.value})},e.handleOnSubmit=function(t){t.preventDefault();var a=E.a.auth().currentUser;fetch("".concat(ue,"/users/").concat(a.uid,"/todo.json"),{method:"POST",body:JSON.stringify(e.state)}).then((function(){e.props.onFetchTasks(),e.setState({task:""})}))},e.handleOnKeypress=function(t){13===t.keyCode&&e.handleOnSubmit()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:this.handleOnSubmit},o.a.createElement(h.a,{title:"Wpisz zadanie",placement:"top-start"},o.a.createElement(m.a,{className:e.input,variant:"outlined",color:"secondary",size:"small",onChange:this.handleOnChange,value:this.state.task,onKeyPress:this.handleOnKeypress})),o.a.createElement(p.a,{className:e.input,type:"submit",variant:"contained",color:"secondary",startIcon:o.a.createElement(g.a,null)},"Dodaj zadanie")))}}]),a}(o.a.Component),v=Object(b.a)((function(e){return{form:{width:"100%",maxWidth:600,marginTop:e.spacing(2),marginBottom:e.spacing(1)},input:{width:"100%",marginBottom:e.spacing(2)}}}))(O),y=a(138),j=a(140),S=a(141),w=a(150),C=a(143),D=a(144),U=a(142),N=a(71),x=a.n(N),z=a(72),I=a.n(z),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={task:e.props.task,done:e.props.done},e.handleOnDeleteTask=function(){var t=E.a.auth().currentUser;fetch("".concat(ue,"/users/").concat(t.uid,"/todo/").concat(e.props.id,".json"),{method:"DELETE"}).then((function(){e.props.onFetchTasks()}))},e.handleOnDoneTask=function(t){e.setState({done:!e.state.done},(function(){var t=E.a.auth().currentUser;fetch("".concat(ue,"/users/").concat(t.uid,"/todo/").concat(e.props.id,".json"),{method:"PATCH",body:JSON.stringify({done:e.state.done})}).then((function(){e.props.onFetchTasks()}))}))},e.handleOnEditClick=function(t){t.preventDefault(),e.props.onEdit(e.props.id)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{className:e.list},o.a.createElement(j.a,{dense:!0,button:!0,onClick:this.handleOnDoneTask},o.a.createElement(S.a,null,o.a.createElement(h.a,{title:this.state.done?"Oznacz jako niezrobione":"Oznacz jako zrobione"},o.a.createElement(w.a,{edge:"start",tabIndex:-1,disableRipple:!0,type:"checkbox",onChange:this.handleOnDoneTask,checked:this.state.done}))),o.a.createElement(C.a,{className:this.state.done?e.done:e.undone},this.props.task),o.a.createElement(D.a,null,o.a.createElement(h.a,{title:"Edycja"},o.a.createElement(U.a,{onClick:this.handleOnEditClick},o.a.createElement(x.a,null))),o.a.createElement(h.a,{title:"Usu\u0144"},o.a.createElement(U.a,{edge:"end",onClick:this.handleOnDeleteTask,color:"secondary"},o.a.createElement(I.a,null)))))))}}]),a}(o.a.Component),A=Object(b.a)((function(e){return{list:{width:"100%",maxWidth:600,backgroundColor:e.palette.background.paper,marginBottom:e.spacing(4),boxShadow:"0 .5rem 1rem rgba(0,0,0,0.15)"},undone:{color:"rgba(0, 0, 0, 0.9)"},done:{color:"rgba(0, 0, 0, 0.4)",textDecoration:"line-through",textDecorationColor:"rgba(0, 0, 0, 0.3)"}}}))(T),B=a(73),F=a.n(B),W=a(74),Z=a.n(W),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={task:e.props.task,done:e.props.done},e.handleOnChange=function(t){e.setState({task:t.target.value})},e.handleOnCloseClick=function(){e.props.onClose()},e.handleOnSaveClick=function(){var t=E.a.auth().currentUser;fetch("".concat(ue,"/users/").concat(t.uid,"/todo/").concat(e.props.id,".json"),{method:"PUT",body:JSON.stringify(e.state)}).then((function(){e.props.onSave()}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{className:e.list},o.a.createElement(j.a,{dense:!0},o.a.createElement(C.a,null,o.a.createElement(m.a,{variant:"outlined",color:"secondary",size:"small",name:"task",value:this.state.task,onChange:this.handleOnChange})," "),o.a.createElement(D.a,null,o.a.createElement(h.a,{title:"Zapisz"},o.a.createElement(U.a,{onClick:this.handleOnSaveClick},o.a.createElement(F.a,null))),o.a.createElement(h.a,{title:"Anuluj"},o.a.createElement(U.a,{onClick:this.handleOnCloseClick,color:"secondary"},o.a.createElement(Z.a,null)))))))}}]),a}(o.a.Component),R=Object(b.a)((function(e){return{list:{width:"100%",maxWidth:600,backgroundColor:e.palette.background.paper,marginBottom:e.spacing(2),boxShadow:"0 .5rem 1rem rgba(0,0,0,0.15)"}}}))(P),J=a(153),L=a(145),H=a(146),K=a(77),q=a.n(K),V=a(75),M=a.n(V),X=a(76),$=a.n(X),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={todo:[],editId:null,loading:!0,showDone:!0,showUndone:!0},e.fetchTasks=function(){var t=E.a.auth().currentUser;fetch("".concat(ue,"/users/").concat(t.uid,"/todo.json")).then((function(e){return e.json()})).then((function(t){var a=t?Object.keys(t).map((function(e){return Object(d.a)({id:e},t[e])})):[];e.setState({todo:a,loading:!1})}))},e.handleItemEdit=function(t){e.setState({editId:t})},e.resetEditId=function(){e.setState({editId:null})},e.handleShowDone=function(){e.setState({showDone:!0})},e.handleShowUndone=function(){e.setState({showUndone:!0})},e.handleDeleteShowDone=function(){e.setState({showDone:!1})},e.handleDeleteShowUndone=function(){e.setState({showUndone:!1})},e.handleItemSave=function(){e.fetchTasks(),e.resetEditId()},e.handleOnSignOutClick=function(){E.a.auth().signOut()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.fetchTasks()}},{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{onFetchTasks:this.fetchTasks}),o.a.createElement("div",{className:t.chips},o.a.createElement(J.a,{size:"small",label:"ZROBIONE",clickable:!0,className:t.chip,color:this.state.showDone?"secondary":"default",icon:o.a.createElement(M.a,null),onClick:this.handleShowDone,onDelete:this.handleDeleteShowDone}),"   ",o.a.createElement(J.a,{size:"small",label:"NIEZROBIONE",clickable:!0,className:t.chip,color:this.state.showUndone?"secondary":"default",icon:o.a.createElement($.a,null),onClick:this.handleShowUndone,onDelete:this.handleDeleteShowUndone})),this.state.loading?o.a.createElement(L.a,{color:"secondary",className:t.loader}):this.state.todo.filter((function(t){return!(!e.state.showDone||!e.state.showUndone)||(e.state.showDone?!0===t.done:!!e.state.showUndone&&!1===t.done)})).map((function(t){return t.id===e.state.editId?o.a.createElement(R,Object.assign({key:t.id,onClose:e.resetEditId,onSave:e.handleItemSave,onFetchTasks:e.fetchTasks},t)):o.a.createElement(A,Object.assign({key:t.id,onFetchTasks:e.fetchTasks,onEdit:e.handleItemEdit},t))})),o.a.createElement(h.a,{title:"Wyloguj si\u0119"},o.a.createElement(H.a,{color:"secondary",className:t.signOut,onClick:this.handleOnSignOutClick},o.a.createElement(q.a,null))))}}]),a}(o.a.Component),G=Object(b.a)((function(e){return{list:{width:"100%",maxWidth:600,backgroundColor:e.palette.background.paper,marginBottom:e.spacing(4),boxShadow:"0 .5rem 1rem rgba(0,0,0,0.15)"},loader:{marginBottom:e.spacing(2)},chips:{width:"100%",marginBottom:e.spacing(5),display:"flex",justifyContent:"center"},chip:{margin:e.spacing(1)},signOut:{margin:"1%"}}}))(_),Q=a(78),Y=a.n(Q),ee=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.nav},o.a.createElement(Y.a,{fontSize:"large",color:"secondary"}),o.a.createElement("h1",{style:{letterSpacing:"1px"}}," to do list"))}}]),a}(o.a.Component),te=Object(b.a)((function(e){return{nav:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},icons:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column"},icon:{display:"flex",alignSelf:"flex-end"}}}))(ee),ae=a(148),ne=a(53),oe=a(147),se=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",error:"",errorStyle:!1,signUp:!1},e.validation=function(e){return"auth/invalid-email"===e.code?"Niepoprawny adres e-mail.":"auth/weak-password"===e.code?"Has\u0142o musi posiada\u0107 co najmniej 6 znak\xf3w.":"Nieudana pr\xf3ba rejestracji."},e.handleOnChange=function(t){e.setState(Object(ne.a)({},t.target.name,t.target.value))},e.handleOnSignUp=function(t){t.preventDefault(),e.setState({signUp:!e.state.signUp})},e.handleOnSubmit=function(t){t.preventDefault(),e.state.signUp?E.a.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(){var t=E.a.auth().currentUser;E.a.database().ref("/users/".concat(t.uid)).set({email:e.state.email})})).catch((function(t){e.setState({error:e.validation(t),errorStyle:!0})})):E.a.auth().signInWithEmailAndPassword(e.state.email,e.state.password).catch((function(t){e.setState({error:"Nieudana pr\xf3ba logowania.",errorStyle:!0})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:this.handleOnSubmit},o.a.createElement(m.a,{className:e.input,variant:"outlined",color:"secondary",size:"small",label:"E-mail",name:"email",autoComplete:"username",value:this.state.email,onChange:this.handleOnChange,error:this.state.errorStyle}),o.a.createElement(m.a,{className:e.input,color:"secondary",type:"password",label:"Has\u0142o",name:"password",variant:"outlined",size:"small",autoComplete:"current-password",value:this.state.password,onChange:this.handleOnChange,helperText:this.state.error,error:this.state.errorStyle}),o.a.createElement(p.a,{className:e.input,type:"submit",variant:"contained",color:"secondary"}," ",this.state.signUp?"Zarejestruj si\u0119":"Zaloguj si\u0119"),this.state.signUp?o.a.createElement("p",{className:e.signUp},"Posiadasz ju\u017c konto?"," ",o.a.createElement(oe.a,{component:"button",color:"secondary",className:e.link,onClick:this.handleOnSignUp}," ","Zaloguj si\u0119.")):o.a.createElement("p",{className:e.signUp},"Nie posiadasz jeszcze konta?"," ",o.a.createElement(oe.a,{component:"button",color:"secondary",className:e.link,onClick:this.handleOnSignUp}," ","Zarejestruj si\u0119."))))}}]),a}(o.a.Component),re=Object(b.a)((function(e){return{form:{width:"100%",maxWidth:400,marginTop:e.spacing(3),marginBottom:e.spacing(2)},input:{width:"100%",marginBottom:e.spacing(3)},signUp:{display:"flex",justifyContent:"center"},link:{fontWeight:"600",marginLeft:"1.5%",fontSize:"14px"}}}))(se),ie=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={user:null,loading:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.auth().onAuthStateChanged((function(t){E.a.auth().currentUser?e.setState({user:!0,loading:!1}):e.setState({user:!1,loading:!1})}))}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ae.a,{maxWidth:"sm",className:e.toDoApp},o.a.createElement(te,null),this.state.loading?o.a.createElement(L.a,{color:"secondary",className:e.loader}):this.state.user?o.a.createElement(G,null):o.a.createElement(re,null)))}}]),a}(o.a.Component),ce=Object(b.a)((function(e){return{toDoApp:{padding:"2%",width:"100%",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",fontSize:"14px",fontFamily:"Roboto"}}}))(ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le={apiKey:"AIzaSyBqX0NLqBomHbVxppsvUju6myikZ7zJpqU",authDomain:"todoapp-36408.firebaseapp.com",databaseURL:"https://todoapp-36408.firebaseio.com",projectId:"todoapp-36408",storageBucket:"todoapp-36408.appspot.com",messagingSenderId:"20656447326",appId:"1:20656447326:web:a8975420dab8f64293b9cf"},ue=le.databaseURL;E.a.initializeApp(le),r.a.render(o.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(108)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.14aac412.chunk.js.map