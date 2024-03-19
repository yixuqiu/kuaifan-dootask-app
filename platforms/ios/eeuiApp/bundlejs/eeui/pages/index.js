// { "framework": "Vue"} 
if("undefined"==typeof app&&(app=weex),void 0===eeuiLog)var eeuiLog={_:function(t,e){var i=e.map((function(t){return"[object object]"===Object.prototype.toString.call(t).toLowerCase()?JSON.stringify(t):t}));void 0===this.__m&&(this.__m=app.requireModule("debug")),this.__m.addLog(t,i)},debug:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("debug",t)},log:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("log",t)},info:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("info",t)},warn:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("warn",t)},error:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this._("error",t)}};!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=10)}([function(t,e){t.exports={"g-cover":{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)"},container:{backgroundColor:"#FFFFFF",alignSelf:"center"},confirmTitle:{backgroundColor:"#84c56a"},"flex-d-r":{flexDirection:"row"},flex:{flex:1},"justify-content-sb":{justifyContent:"space-between"},"justify-content-c":{justifyContent:"center"},"font-weight-300":{fontWeight:"300"},"color-black":{color:"#000000"},"color-white":{color:"#FFFFFF"},"font-size-26":{fontSize:"26"}}},function(t,e,i){"use strict";i.r(e),e.default={props:{pos:{type:String,default:"center"},offset:{type:Number,default:0},canOverlayClick:{type:Boolean,default:!0},miniRate:{default:1}},data:function(){return{back:!1,show:!1,title:"",message:"",cancel:"",confirm:""}},computed:{posStyle:function(){var t={},e=this.pos?this.pos:"center";switch(t.position="absolute",t.width=this.scaleSize(700),t.padding=this.scaleSize(48),t.borderRadius=this.scaleSize(24),e){case"center":t.alignSelf="center";break;case"bottom":t.bottom=this.scaleSize(this.offset);break;case"top":t.top=this.scaleSize(this.offset)}return t},iconStyle:function(){return{width:this.scaleSize(50),height:this.scaleSize(50)}},hStyle:function(){return{justifyContent:"left",marginLeft:this.scaleSize(32)}},titleStyle:function(){return{fontSize:this.scaleSize(30),marginTop:this.scaleSize(4)}},subTitleStyle:function(){return{fontSize:this.scaleSize(26),marginTop:this.scaleSize(32)}},buttonGroupStyle:function(){return{marginTop:this.scaleSize(64)}},buttonBGStyle:function(){return{marginRight:this.scaleSize(64)}},confirmButtonStyle:function(){return{paddingLeft:this.scaleSize(32),paddingRight:this.scaleSize(32),paddingTop:this.scaleSize(12),paddingBottom:this.scaleSize(12),borderRadius:this.scaleSize(8)}},buttonTextStyle:function(){return{fontSize:this.scaleSize(26)}}},mounted:function(){this.show=!1},methods:{scaleSize:function(t){return t/this.miniRate+"px"},hide:function(){this.show=!1},cancelClick:function(){this.hide()},confirmClick:function(){this.hide(),this.$emit("exitConfirm")},showWithParam:function(t){this.title=t.title,this.message=t.message,this.cancel=t.cancel,this.confirm=t.confirm,this.show=!0}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{staticClass:["g-cover"],on:{overlay:t.cancelClick}},[i("div",{staticClass:["container","flex-d-c"],style:t.posStyle},[i("div",{staticClass:["flex-d-r"]},[i("image",{style:t.iconStyle,attrs:{src:"root://pages/assets/images/alert-icon.png"}}),i("div",{style:t.hStyle},[i("text",{staticClass:["font-weight-300","color-black"],style:t.titleStyle},[t._v(t._s(t.title))]),i("text",{staticClass:["font-size-26","font-weight-300","color-black"],style:t.subTitleStyle},[t._v(t._s(t.message))])])]),i("div",{staticClass:["flex-d-r"]},[i("div",{staticClass:["flex"]}),i("div",{staticClass:["flex-d-r","justify-content-sb"],style:t.buttonGroupStyle},[i("div",{staticClass:["justify-content-c"],style:t.buttonBGStyle,on:{click:t.cancelClick}},[i("text",{staticClass:["font-weight-300","color-black"],style:t.buttonTextStyle},[t._v(t._s(t.cancel))])]),i("div",{staticClass:["confirmTitle"],style:t.confirmButtonStyle,on:{click:t.confirmClick}},[i("text",{staticClass:["font-weight-300","color-white"],style:t.buttonTextStyle},[t._v(t._s(t.confirm))])])])])])]):t._e()},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,i){var s,o,n=[];n.push(i(0)),s=i(1);var a=i(2);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),o=s=s.default),"function"==typeof o&&(o=o.options),o.__file="/work/src/pages/compoment/customAlert.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-07ed30b4",o.style=o.style||{},n.forEach((function(t){for(var e in t)o.style[e]=t[e]})),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=s},function(t,e){t.exports={flex:{flex:1},mask:{position:"fixed",overflow:"hidden",backgroundColor:"#FFFFFF"},scroller:{position:"absolute",top:0,left:0,bottom:0,right:0,paddingTop:"16",paddingRight:"16",paddingBottom:"16",paddingLeft:"16",backgroundColor:"#FFFFFF"},menu:{position:"absolute",flexDirection:"row",bottom:"16",right:0,left:0},"menu-buttons":{flexDirection:"row",justifyContent:"space-between"},"mini-box":{position:"absolute",top:0,left:0,right:0,bottom:0,flexDirection:"row",backgroundColor:"#FFFFFF"},"render-views":{flexWrap:"wrap",flexDirection:"row"},"status-indicator":{position:"absolute",backgroundColor:"#FFFFFF"},local:{overflow:"hidden",backgroundColor:"#D3D3D3"},hidden:{overflow:"hidden"},button:{backgroundColor:"rgb(20,172,78)"},exit:{backgroundColor:"#f28500"}}},function(t,e,i){"use strict";i.r(e);var s=i(3),o=i.n(s),n=app.requireModule("dom"),a=(app.requireModule("eeui"),app.requireModule("eeuiAgoro")),r=(app.requireModule("animation"),app.requireModule("eeuiDeviceInfo"));e.default={name:"meetings",components:{CustomAlert:o.a},props:{windowWidth:{type:Number,default:0}},data:function(){return{title:"",uuids:[],uuid:0,meetingid:0,mini:!1,showShow:!1,video:!1,audio:!1,infos:[],isTouch:!1,bottomPos:100,rightPos:0,startPosX:0,startPosY:0,screenW:0,screenH:0,bottomShow:!0,bottomColor:"white",alertParams:{title:"",message:"",cancel:"",confirm:""}}},computed:{miniRate:function(){return Math.min(2,Math.max(1,this.windowWidth/430))},titleStyle:function(){return{fontSize:this.scaleSize(32),padding:this.scaleSize(16)}},gridItemStyle:function(){return{width:this.scaleSize(350),height:this.scaleSize(350)}},localStyle:function(){return{width:this.scaleSize(320),height:this.scaleSize(320),marginTop:this.scaleSize(15),marginLeft:this.scaleSize(15),borderRadius:this.scaleSize(16)}},camaraStyle:function(){return{width:this.scaleSize(320),height:this.scaleSize(320),borderRadius:this.scaleSize(16)}},avatarStyle:function(){return{position:"absolute",top:this.scaleSize(15),left:this.scaleSize(15),right:this.scaleSize(15),bottom:this.scaleSize(15),borderRadius:this.scaleSize(16),flexDirection:"row",backgroundColor:"white"}},videoButtonStyle:function(){return{position:"absolute",top:this.scaleSize(24),right:this.scaleSize(10),flexDirection:"row"}},videoSubStyle:function(){return{width:this.scaleSize(40),height:this.scaleSize(40),marginRight:this.scaleSize(12)}},subAvatarContainerStyle:function(){return{position:"absolute",bottom:"0",right:"0",width:this.scaleSize(80),height:this.scaleSize(80),borderRadius:this.scaleSize(40),backgroundColor:"white",overflow:"hidden"}},subAvatarStyle:function(){return{width:this.scaleSize(70),height:this.scaleSize(70),marginTop:this.scaleSize(5),marginLeft:this.scaleSize(5),borderRadius:this.scaleSize(35),backgroundColor:"greenyellow"}},indicatorStyle:function(){return{width:this.scaleSize(20),height:this.scaleSize(20),borderRadius:this.scaleSize(10),bottom:this.scaleSize(6),right:this.scaleSize(6)}},subButtonStyle:function(){return{marginLeft:this.scaleSize(16),marginRight:this.scaleSize(18)}},popMiniBoxStyle:function(){return{paddingLeft:this.scaleSize(12)}},popContainerStyle:function(){return{width:this.scaleSize(68),height:this.scaleSize(72),alignItems:"center",justifyContent:"center"}},popVideoStyle:function(){return{width:this.scaleSize(40),height:this.scaleSize(40)}},videoStyle:function(){var t={};return this.mini?(t.width=this.scaleSize(160),t.height=this.scaleSize(72),t.right=this.rightPos+"px",t.bottom=this.bottomPos+"px",t.borderWidth="1px",t.borderColor="#D9E2E9",t.borderRadius=this.scaleSize(8)):(t.top="0",t.bottom="0",t.right="0",t.left="0"),t},buttonPadding:function(){return{marginLeft:this.scaleSize(15),paddingTop:this.scaleSize(12),paddingBottom:this.scaleSize(12),paddingLeft:this.scaleSize(32),paddingRight:this.scaleSize(32),borderRadius:this.scaleSize(8)}},buttonSize:function(){return{width:this.scaleSize(40),height:this.scaleSize(40)}}},mounted:function(){},watch:{showShow:function(t){r.keepScreenOn(t)}},methods:{scaleSize:function(t){return t/this.miniRate+"px"},initAgoro:function(t){var e=this;a.initialWithParam({id:t},(function(t){var i=t.uuid;if("joint"==t.action){for(var s=!0,o="",n=0;n<e.uuids.length;n++){e.uuids[n].uuid==i&&(s=!1)}e.infos.map((function(t){return t.uuid==e.uuids&&(o=t.avatar),t})),1==s&&(e.uuids.push({uuid:i,audio:!1,video:!1,videoStatus:0,audioStatus:0,avatar:o}),e.uuid!==i&&e.infoParam(i))}else"leave"==t.action&&(e.uuids=e.uuids.filter((function(t){return t.uuid!=i})))})),a.statusCallback((function(t){if("me"===t.uuid)"video"===t.type?(e.uuids[0]&&(e.uuids[0].video=1==t.status||2==t.status||3==t.status),e.uuids[0]&&(e.uuids[0].videoStatus=t.status)):(e.uuids[0]&&(e.uuids[0].audio=1==t.status||2==t.status||3==t.status),e.uuids[0]&&(e.uuids[0].audioStatus=t.status));else{var i=t.uuid;e.uuids=e.uuids.map((function(e){return e.uuid==i?"video"===t.type?(e.videoStatus=t.status,e.video=1==t.status||2==t.status||3==t.status,e):(e.audioStatus=t.status,e.audio=1==t.status||2==t.status||3==t.status,e):e}))}})),a.localStatusCallback((function(t){-1==t?(e.destroyed(),e.uuids=[]):5==t&&e.errorParam(e.uuid)}))},destroyed:function(){a.destroy(),this.showShow=!1,this.infos=[],this.uuids=[],this.title="";var t={act:"endMeeting",uuid:this.uuid+""};this.callbackParam(t)},exitAction:function(){a.leaveChannel(),this.showShow=!1},joint:function(t){var e=this,i=t.appid;this.initAgoro(i),this.video=t.video,this.audio=t.audio,setTimeout((function(){a.jointChanel(t,(function(i){e.uuid=i.uuid,e.meetingid=t.meetingid,e.title=t.name,e.alertParams=t.alert;e.infos.map((function(t){return t.uuid==e.uuid&&t.avatar,t})),e.uuids.push({uuid:e.uuid,audio:t.audio,video:t.video,videoStatus:0,audioStatus:0,avatar:t.avatar}),e.showShow=!0,e.mini=!1,e.$nextTick((function(){e.successParam(e.uuid)})),t.video||a.enableVideo(t.video),a.enableAudio(t.audio)}))}),500)},zoomClick:function(){var t=this;!0!==this.isTouch&&(this.mini=!1,this.bottomShow=!1,this.$nextTick((function(){t.bottomShow=!0})))},miniClick:function(){var t=this;n.getComponentRect(this.$refs.root,(function(e){t.screenW=e.size.width,t.screenH=WXEnvironment.deviceHeight/WXEnvironment.deviceWidth*t.screenW,t.mini=!0,t.bottomPos<0&&(t.bottomPos=100),t.stickyMoving()}))},videoEnable:function(){this.video=!this.video,a.enableVideo(this.video)},audioEnable:function(){this.audio=!this.audio,a.enableAudio(this.audio)},inventClick:function(){this.miniClick(),this.callbackParam({act:"invent",meetingid:"".concat(this.meetingid)})},infoParam:function(t){var e={act:"getInfo",uuid:t+""};this.callbackParam(e)},successParam:function(t){var e={act:"success",uuid:t+""};this.callbackParam(e)},errorParam:function(t){var e={act:"error",uuid:t+""};this.callbackParam(e)},callbackParam:function(t){this.$emit("meetingEvent",t)},switchClicked:function(){a.switchCamera()},hideClicked:function(){this.miniClick()},exitClick:function(){this.$refs.alert.showWithParam(this.alertParams)},load:function(t){var e=this,i=t.target.attr.uuid;i!==this.uuid?a.blindRemote(i):this.$nextTick((function(){a.blindLocal(e.uuid)}))},getStatus:function(t,e){var i={};return i.width=this.scaleSize(16),i.height=this.scaleSize(16),i.borderRadius=this.scaleSize(8),i.marginTop=this.scaleSize(2),i.marginLeft=this.scaleSize(2),i.backgroundColor=t>2||e>2?"#ff9900":"#84C56A",i},updateMeetingInfo:function(t){this.infos.push(t),this.updateUidInfo()},updateUidInfo:function(){var t=this;0!=this.infos.length&&(this.uuids=this.uuids.map((function(e){for(var i=0;i<t.infos.length;i++){var s=t.infos[i];s.uuid==e.uuid&&(e.username=s.username,e.avatar=s.avatar)}return e})))},touchstart:function(t){this.isTouch=!0,1==this.mini&&(this.startPosX=this.screenW-t.changedTouches[0].screenX-this.rightPos,this.startPosY=this.screenH-t.changedTouches[0].screenY-this.bottomPos)},touchAction:function(t){1==this.mini&&(this.isTouch=!0,this.rightPos=this.screenW-t.changedTouches[0].screenX-this.startPosX,this.bottomPos=this.screenH-t.changedTouches[0].screenY-this.startPosY)},touchend:function(){this.isTouch=!1,1==this.mini&&(this.startPosX=0,this.startPosY=0,this.stickyMoving())},stickyMoving:function(){var t=0,e=160/this.miniRate,i=(this.screenW-e)/2;this.rightPos>i&&(t=this.screenW-e),this.rightPos=t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showShow?i("div",{ref:"root",staticClass:["mask"],style:t.videoStyle},[i("scroller",{staticClass:["scroller"]},[i("text",{style:t.titleStyle},[t._v(t._s(t.title))]),i("div",{staticClass:["render-views"]},t._l(t.uuids,(function(e){return i("div",{style:t.gridItemStyle},[i("div",{staticClass:["local","hidden"],style:t.localStyle},[i("eeuiAgoro-com",{ref:"local",refInFor:!0,staticClass:["local"],style:t.camaraStyle,attrs:{uuid:e.uuid},on:{load:t.load}})],1),0==e.videoStatus?i("image",{style:t.avatarStyle,attrs:{src:e.avatar}}):t._e(),i("div",{style:t.videoButtonStyle},[e.video?t._e():i("image",{style:t.videoSubStyle,attrs:{src:"root://pages/assets/images/meeting_video_err.png"}}),e.audio?t._e():i("image",{style:t.videoSubStyle,attrs:{src:"root://pages/assets/images/meeting_audio_err.png"}})]),i("div",{style:t.subAvatarContainerStyle},[i("image",{style:t.subAvatarStyle,attrs:{src:e.avatar}})]),i("div",{staticClass:["status-indicator"],style:t.indicatorStyle},[i("div",{style:t.getStatus(e.audioStatus,e.videoStatus)})])])})))]),i("div",{staticClass:["menu"]},[i("div",{staticClass:["flex"]}),i("div",{staticClass:["menu-buttons"],style:t.subButtonStyle},[i("div",{staticClass:["button"],style:t.buttonPadding,on:{click:t.audioEnable}},[i("image",{style:t.buttonSize,attrs:{src:t.audio?"root://pages/assets/images/meeting_audio_on.png":"root://pages/assets/images/meeting_audio_off.png"}})]),i("div",{staticClass:["button"],style:t.buttonPadding,on:{click:t.videoEnable}},[i("image",{style:t.buttonSize,attrs:{src:t.video?"root://pages/assets/images/meeting_video_on.png":"root://pages/assets/images/meeting_video_off.png"}})]),i("div",{staticClass:["button"],style:t.buttonPadding,on:{click:t.switchClicked}},[i("image",{style:t.buttonSize,attrs:{src:"root://pages/assets/images/meeting_camera_reverse.png"}})]),i("div",{staticClass:["button"],style:t.buttonPadding,on:{click:t.inventClick}},[i("image",{style:t.buttonSize,attrs:{src:"root://pages/assets/images/meeting_invent.png"}})]),i("div",{staticClass:["button"],style:t.buttonPadding,on:{click:t.hideClicked}},[i("image",{style:t.buttonSize,attrs:{src:"root://pages/assets/images/meeting_mini.png"}})]),i("div",{staticClass:["exit"],style:t.buttonPadding,on:{click:t.exitClick}},[i("image",{style:t.buttonSize,attrs:{src:"root://pages/assets/images/meeting_exit.png"}})])])]),t.mini?i("div",{staticClass:["mini-box"],style:t.popMiniBoxStyle,on:{click:function(e){t.zoomClick(!1)},touchstart:t.touchstart,touchmove:t.touchAction,touchend:t.touchend}},[i("div",{style:t.popContainerStyle},[i("image",{style:t.popVideoStyle,attrs:{src:t.video?"root://pages/assets/images/meeting_black_video_on.png":"root://pages/assets/images/meeting_black_video_off.png"}})]),i("div",{style:t.popContainerStyle},[i("image",{style:t.popVideoStyle,attrs:{src:t.audio?"root://pages/assets/images/meeting_black_audio_on.png":"root://pages/assets/images/meeting_black_audio_off.png"}})])]):t._e(),i("custom-alert",{ref:"alert",attrs:{miniRate:t.miniRate,pos:"top",offset:100},on:{exitConfirm:t.exitAction}})],1):t._e()},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,i){var s,o,n=[];n.push(i(4)),s=i(5);var a=i(6);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),o=s=s.default),"function"==typeof o&&(o=o.options),o.__file="/work/src/pages/compoment/meetings.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-41e78e26",o.style=o.style||{},n.forEach((function(t){for(var e in t)o.style[e]=t[e]})),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=s},,,function(t,e,i){var s,o,n=[];n.push(i(11)),s=i(12);var a=i(13);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),o=s=s.default),"function"==typeof o&&(o=o.options),o.__file="/work/src/pages/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-57509004",o.style=o.style||{},n.forEach((function(t){for(var e in t)o.style[e]=t[e]})),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=s,t.exports.el="true",new Vue(t.exports)},function(t,e){t.exports={flex:{flex:1}}},function(t,e,i){"use strict";i.r(e);var s=i(7),o=i.n(s),n=app.requireModule("eeui"),a=app.requireModule("eeuiDeviceInfo"),r=app.requireModule("eeuiUmengPush"),u=app.requireModule("eeuiCommunication"),c=app.requireModule("eeuiNotifications"),l=app.requireModule("eeuiPicture"),d=app.requireModule("eeuiShareFiles");e.default={components:{Meetings:o.a},data:function(){return{webReady:!1,uniqueId:"",resumeNum:0,appMessage:{},windowWidth:parseInt(n.getVariate("windowWidth","0"))||430,umengInit:!1,umengApiUrl:null,umengError:!1,navColor:null,themeColor:null,systemTheme:n.getThemeName(),appGroupID:"group.im.dootask",appSubPath:"share"}},appActive:function(){this.$refs.web.setJavaScript('if (typeof window.__onAppActive === "function"){window.__onAppActive()}')},appDeactive:function(){this.$refs.web.setJavaScript('if (typeof window.__onAppDeactive === "function"){window.__onAppDeactive()}')},pageResume:function(){var t='if (typeof window.__onPageResume === "function"){window.__onPageResume('.concat(this.resumeNum,")}");this.$refs.web.setJavaScript(t),this.resumeNum++,this.refreshNotificationPermission(),this.umengError&&this.updateUmengAlias()},pagePause:function(){this.$refs.web.setJavaScript('if (typeof window.__onPagePause === "function"){window.__onPagePause()}')},pageMessage:function(t){var e=this,i=t.message;switch(i.messageType){case"notificationClick":break;case"keyboardStatus":var s=encodeURIComponent(this.jsonStringify(i)),o='if (typeof window.__onKeyboardStatus === "function"){window.__onKeyboardStatus("'.concat(s,'")}');this.$refs.web.setJavaScript(o);break;case"link":this.webReady?this.linkEvent(i.jumpUrl):setTimeout((function(){e.linkEvent(i.jumpUrl)}),2e3)}},mounted:function(){this.initTheme(null),"ios"===WXEnvironment.platform.toLowerCase()&&d.shareFileWithGroupID(this.appGroupID,this.appSubPath),this.uniqueId=n.getCachesString("appUniqueId",""),this.count(this.uniqueId)<5&&(this.uniqueId=this.randomString(6),n.setCachesString("appUniqueId",this.uniqueId,0)),this.$refs.web.setUrl(n.rewriteUrl("../public/index.html"))},computed:{warpStyle:function(){return this.themeColor?{backgroundColor:this.themeColor}:{}}},methods:{initTheme:function(t){t?n.setCachesString("themeName",t,0):t=n.getCachesString("themeName",""),["light","dark"].includes(t)||(t=this.systemTheme),this.themeColor="dark"===t?"#131313":"#f8f8f8",this.navColor="dark"===t?"#cdcdcd":"#232323",n.setStatusBarStyle("dark"===t),n.setStatusBarColor(this.themeColor),n.setBackgroundColor(this.themeColor)},time:function(){return Math.round((new Date).getTime()/1e3)},onReceiveMessage:function(t){var e=t.message;switch(e.action){case"initApp":this.appMessage=e,this.umengInit||(this.umengInit=!0,r.initialize());break;case"setUmengAlias":this.umengApiUrl=e.url,this.webReady=!0,this.updateUmengAlias();break;case"setVibrate":var i=parseInt(e.time)||0;i>0?a.setVibrate(i):a.setVibrate();break;case"getNotificationPermission":this.refreshNotificationPermission();break;case"setBdageNotify":c.setBadge(parseInt(e.bdage)||0);break;case"gotoSetting":c.gotoSet();break;case"callTel":u.call(e.tel);break;case"picturePreview":l.picturePreview(e.position,e.paths);break;case"videoPreview":l.videoPreview(e.path);break;case"userChatList":"ios"===WXEnvironment.platform.toLowerCase()?d.setShareStorage("chatList",e.url):n.setCaches("chatList",e.url,0);break;case"userUploadUrl":"ios"===WXEnvironment.platform.toLowerCase()?(d.setShareStorage("upLoadUrl",e.chatUrl),d.setShareStorage("fileUpLoadUrl",e.dirUrl)):(n.setCaches("upLoadUrl",e.chatUrl,0),n.setCaches("fileUpLoadUrl",e.dirUrl,0));break;case"startMeeting":this.$refs.meeting&&this.$refs.meeting.joint(e.meetingParams);break;case"updateMeetingInfo":this.$refs.meeting&&this.$refs.meeting.updateMeetingInfo(e.infos);break;case"updateTheme":this.initTheme(e.themeName);break;case"windowSize":this.windowWidth=parseInt(e.width)||0,n.setVariate("windowWidth",this.windowWidth)}},onStateChanged:function(t){var e=t.status,i=t.url;switch(e){case"createTarget":var s='if (typeof window.__onCreateTarget === "function"){window.__onCreateTarget("'.concat(i,'")}');this.$refs.web.setJavaScript(s)}},updateUmengAlias:function(){var t=this,e="".concat(WXEnvironment.platform,"-").concat(this.appMessage.userid,"-").concat(this.uniqueId);r.deleteAlias(e,"userid",(function(){r.addAlias(e,"userid",(function(i){"success"===i.status?n.ajax({url:t.umengApiUrl,method:"get",data:{alias:e,osName:WXEnvironment.osName,osVersion:WXEnvironment.osVersion,deviceModel:WXEnvironment.deviceModel,userAgent:t.appMessage.userAgent},headers:{token:t.appMessage.token}},(function(t){eeuiLog.log(t)})):eeuiLog.log("[UmengAlias] add error"),t.umengError="success"!==i.status}))}))},refreshNotificationPermission:function(){var t=this;c.getPermissionStatus((function(e){var i='if (typeof window.__onNotificationPermissionStatus === "function"){window.__onNotificationPermissionStatus('.concat(e,")}");t.$refs.web.setJavaScript(i)}))},meetingEvent:function(t){if("invent"!=t.act){var e='if (typeof window.__onMeetingEvent === "function"){window.__onMeetingEvent({"uuid":"'.concat(t.uuid,'","act":"').concat(t.act,'"})}');this.$refs.web.setJavaScript(e)}else this.inventEvent(t)},inventEvent:function(t){var e='if (typeof window.__onMeetingEvent === "function"){window.__onMeetingEvent({"meetingid":"'.concat(t.meetingid,'","act":"').concat(t.act,'"})}');this.$refs.web.setJavaScript(e)},linkEvent:function(t){var e='if (typeof window.__handleLink === "function"){window.__handleLink("'.concat(t,'")}');this.$refs.web.setJavaScript(e)}}}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:["flex"],style:this.warpStyle},[e("web-view",{ref:"web",staticClass:["flex"],attrs:{hiddenDone:!0,transparency:!0,progressbarVisibility:!1,allowFileAccessFromFileURLs:!0},on:{receiveMessage:this.onReceiveMessage,stateChanged:this.onStateChanged}}),e("meetings",{ref:"meeting",attrs:{windowWidth:this.windowWidth},on:{meetingEvent:this.meetingEvent}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}]);