(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{150:function(t,e,n){n(151),t.exports=n(209)},151:function(t,e){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(t){})).catch((function(t){console.info("Failed to register service-worker",t)}))}))},209:function(t,e,n){"use strict";n.r(e);var r=n(226),a=n(11),c=n.n(a),o=n(33),i=n(225),u=n(51),s=n.n(u),f=n(6),l=n.n(f),p=n(4),A=n.n(p),S=n(7),E=n.n(S),y=n(10),h=n.n(y),v=n(2),g=n.n(v),R=n(0),_=n.n(R),C=n(34),d=n(46),m=n(92),P=n(3);function T(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g()(t);if(e){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var N=function(t){E()(n,t);var e=T(n);function n(){var t;l()(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a)))._bootstrapAsync=function(){var e;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(m.a.getItem("userAuthFlag"));case 2:e=n.sent,console.log(e),t.props.navigation.navigate(e?w.APP_STACK:w.AUTH_STACK);case 5:case"end":return n.stop()}}),null,null,null,Promise)},t}return A()(n,[{key:"componentDidMount",value:function(){this._bootstrapAsync()}},{key:"render",value:function(){return _.a.createElement(d.a,{style:O.safeAreaStyle},_.a.createElement(C.a,null,"Loading"))}}]),n}(_.a.Component),O=P.a.create({safeAreaStyle:{flex:1,alignItems:"center",justifyContent:"center"}}),w={APP_FIRST_SCREEN:"AppScreen1",APP_SECOND_SCREEN:"AppScreen2",AUTH_LOGIN_SCREEN:"login",AUTH_FORGET_SCREEN:"forgetPassword",LOADING_SCREEN:"AppLoading",APP_STACK:"AppStack",AUTH_STACK:"AuthStack"};function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g()(t);if(e){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var k=function(t){E()(n,t);var e=I(n);function n(){return l()(this,n),e.apply(this,arguments)}return A()(n,[{key:"render",value:function(){return _.a.createElement(d.a,{style:D.safeAreaStyle},_.a.createElement(C.a,null,"forget password"))}}]),n}(_.a.Component),D=P.a.create({safeAreaStyle:{flex:1,alignItems:"center",justifyContent:"center"}}),x=n(32),L=n(68);function U(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g()(t);if(e){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var b=function(t){E()(n,t);var e=U(n);function n(){var t;l()(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={userName:"",password:""},t.handleSubmit=function(t){t.preventDefault()},t}return A()(n,[{key:"render",value:function(){var t=this;return _.a.createElement(d.a,{style:F.safeAreaStyle},_.a.createElement("form",{onSubmit:this.handleSubmit},_.a.createElement(C.a,null,"Username:"),_.a.createElement(x.a,{style:F.textInput,value:this.state.userName,onChangeText:function(e){return t.setState({userName:e})}}),_.a.createElement(C.a,null,"Password:"),_.a.createElement(x.a,{style:F.textInput,value:this.state.password,onChangeText:function(e){return t.setState({password:e})}}),_.a.createElement("button",{title:"Login"},"Login "),_.a.createElement(L.a,{title:"Forget Password",onPress:function(){t.props.navigation.navigate(H.AUTH_FORGET_SCREEN)}})))}}]),n}(_.a.Component),F=P.a.create({safeAreaStyle:{flex:1,alignItems:"center",justifyContent:"center"},textInput:{borderColor:"#000000",borderWidth:1,marginBottom:20}}),H={APP_FIRST_SCREEN:"AppScreen1",APP_SECOND_SCREEN:"AppScreen2",AUTH_LOGIN_SCREEN:"login",AUTH_FORGET_SCREEN:"forgetPassword",LOADING_SCREEN:"AppLoading",APP_STACK:"AppStack",AUTH_STACK:"AuthStack"};function G(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g()(t);if(e){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var j=function(t){E()(n,t);var e=G(n);function n(){return l()(this,n),e.apply(this,arguments)}return A()(n,[{key:"render",value:function(){var t=this;return _.a.createElement(d.a,{style:K.safeAreaStyle},_.a.createElement(C.a,null,"I am App Screen One"),_.a.createElement(L.a,{title:"Go to Screen 2",onPress:function(){t.props.navigation.navigate(M.APP_SECOND_SCREEN)}}))}}]),n}(_.a.Component),K=P.a.create({safeAreaStyle:{flex:1,alignItems:"center",justifyContent:"center"}}),M={APP_FIRST_SCREEN:"AppScreen1",APP_SECOND_SCREEN:"AppScreen2",AUTH_LOGIN_SCREEN:"login",AUTH_FORGET_SCREEN:"forgetPassword",LOADING_SCREEN:"AppLoading",APP_STACK:"AppStack",AUTH_STACK:"AuthStack"};function W(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g()(t);if(e){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var J,B,q,z=function(t){E()(n,t);var e=W(n);function n(){return l()(this,n),e.apply(this,arguments)}return A()(n,[{key:"render",value:function(){var t=this;return _.a.createElement(d.a,{style:Q.safeAreaStyle},_.a.createElement(C.a,null,"I am App Screen Two"),_.a.createElement(L.a,{title:"Logout",onPress:function(){m.a.setItem("userAuthFlag",""),t.props.navigation.navigate(V.AUTH_STACK)}}))}}]),n}(_.a.Component),Q=P.a.create({safeAreaStyle:{flex:1,alignItems:"center",justifyContent:"center"}}),V={APP_FIRST_SCREEN:"AppScreen1",APP_SECOND_SCREEN:"AppScreen2",AUTH_LOGIN_SCREEN:"login",AUTH_FORGET_SCREEN:"forgetPassword",LOADING_SCREEN:"AppLoading",APP_STACK:"AppStack",AUTH_STACK:"AuthStack"},X="AppScreen1",Y="AppScreen2",Z="login",$="forgetPassword",tt="AppLoading",et="AppStack",nt="AuthStack",rt=Object(i.a)((J={},c()(J,X,{screen:j,navigationOptions:function(){return{headerTitle:"My First App Screen"}}}),c()(J,Y,{screen:z,navigationOptions:function(){return{headerTitle:"My Second App Screen"}}}),J)),at=Object(i.a)((B={},c()(B,Z,{screen:b,navigationOptions:function(){return{headerTitle:"Login Screen"}}}),c()(B,$,{screen:k,navigationOptions:function(){return{headerTitle:"Forget Password"}}}),B)),ct=Object(o.createAppContainer)(Object(o.createSwitchNavigator)((q={},c()(q,tt,N),c()(q,nt,at),c()(q,et,rt),q)));Object(r.a)(ct)}},[[150,1,2]]]);
//# sourceMappingURL=app.0a9b7872.chunk.js.map