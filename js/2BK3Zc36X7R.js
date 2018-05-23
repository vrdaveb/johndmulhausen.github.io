if (self.CavalryLogger) { CavalryLogger.start_js(["AaA7J"]); }

__d("LitestandComposer",["csx","Arbiter","Bootloader","Parent","ReactComposerEvents","ReactComposerIDGenerator","Run","SubscriptionsHandler","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h=600,i={};function j(a,c,d,e){__p&&__p();b("Bootloader").loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(f,g,k,l,m){__p&&__p();if(!m.isReady()){m.addReadyListener(function(){j(a,c,d,e)});return}b("ReactComposerIDGenerator").isComposerID(a)||g.reset(a);if(!m||!c)return;if(i[a]){l.insertAfter(i[a],c);g=i[a].parentNode;g&&g.removeChild(i[a]);delete i[a]}else d===null?l.prependContent(m.getStreamRoot(),c):l.insertAfter(d,c);new f(c).from("opacity",0).to("opacity",1).duration(h).go();k.logCompleted(a);e&&e();b("Arbiter").inform("LitestandComposer/publishCompleted",{story:c})},"LitestandComposer")}var k={},l={initComposer:function(a){__p&&__p();k[a]&&l.destructComposer(a),k[a]=new(b("SubscriptionsHandler"))(),k[a].addSubscriptions(b("Arbiter").subscribe("LitestandComposer/publish",function(c,d){__p&&__p();if(d.composer_id===a){c=b("ge")(a);c=c!==null?b("Parent").bySelector(c,"._l2u"):null;j(a,d.markup,c,function(){var a=d.markup;if(a){var c=a.id;c||(c="random_id_for_litestand_context_"+Math.random(),a.id=c);b("Arbiter").inform("LitestandComposer/attachedToDOM",c)}})}}),b("Arbiter").subscribe("LitestandComposer/publishTemp",function(b,c){c.composer_id===a&&j(a,c.markup,null,function(){c.markup&&(i[a]=c.markup)})}),b("Arbiter").subscribe(b("ReactComposerEvents").COMPOSER_UNMOUNT+a,l.destructComposer.bind(null,a))),b("Run").onLeave(l.destructComposer.bind(null,a))},destructComposer:function(a){var b=k[a];b!=null&&(b.release(),delete k[a])}};e.exports=l}),null);
__d("FeedReactComposerBootloadPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setBootloadDurationMillis=function(a){this.$1.bootload_duration_millis=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={bootload_duration_millis:!0,vc:!0};e.exports=a}),null);
__d("DOMTraverser",["DOM"],(function(a,b,c,d,e,f){__p&&__p();var g={previousNode:function(a){if(a.previousElementSibling){var b=a.previousElementSibling;while(b.lastElementChild!==null)b=b.lastElementChild;return b}return a.parentElement},nextNode:function(a){__p&&__p();if(a.firstElementChild)return a.firstElementChild;if(a.nextElementSibling)return a.nextElementSibling;a=a.parentElement;while(a!=null){if(a.nextElementSibling)return a.nextElementSibling;a=a.parentElement}return null},previousFilteredNode:function(a,b,c){__p&&__p();if(b===a)return null;b=g.previousNode(b);while(b!=null){if(b instanceof HTMLElement&&c(b))return b;if(b===a)return null;b=g.previousNode(b)}return null},nextFilteredNode:function(a,c,d){c=g.nextNode(c);while(c!=null){if(a&&!b("DOM").contains(a,c))return null;if(c instanceof HTMLElement&&d(c))return c;c=g.nextNode(c)}return null}};e.exports=g}),null);
__d("unmountComponentOnTransition",["Arbiter","BanzaiODS","ContextualComponent","PageEvents","ReactDOM","emptyFunction","gkx","requestIdleCallbackAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=null;function i(a){g.unshift(a),j()}function j(){if(h!==null)return;h=b("requestIdleCallbackAcrossTransitions")(function(a){h=null;while(g.length>0&&a.timeRemaining()>0)b("ReactDOM").unmountComponentAtNode(g.pop());g.length>0&&j()})}function k(a,c){b("BanzaiODS").bumpEntityKey("core.www.react_component_register_unmount",a+"."+c)}function a(a,c){__p&&__p();function d(){a!=null&&Object.prototype.hasOwnProperty.call(a,"setState")&&(a.setState=b("emptyFunction"),a.shouldComponentUpdate=b("emptyFunction").thatReturnsFalse),i(c)}var e=!1;if(b("gkx")("AT4euSAb9ucJ-mvy2B4qCIEzHbi9fPt5oSZg-HycySob9uDymhk4Q221DQFX6AUkUEJeKX-5Rgkee7LOxtDiqS_-95bd8aqBbEX2gulgx_9dTw")){var f=b("ContextualComponent").closestToNode(c);if(f!=null){k("contextual_component","found");f.onUnmount(function(){d()});return}e=!0}e?k("contextual_component","not_found_fallback"):k("arbiter","default");var g=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(a,b){a=b.canvasID;if(a!=="content"&&a!=="content_container")return;d();g.unsubscribe()})}e.exports=a}),null);
__d("FeedComposerIDStore",["Arbiter","ReactComposerEvents","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={_composerID:null,_subscriptions:b("SubscriptionsHandler"),set:function(a){this._subscriptions=new(b("SubscriptionsHandler"))(),this._composerID=a,this._subscribeComposerResetEvent()},get:function(){if(!this._composerID)throw new Error("ID Store has not yet been initialized via set()");return this._composerID},_subscribeComposerResetEvent:function(){if(!this._composerID)throw new Error("Composer ID cannot be null");var a=b("Arbiter").subscribeOnce(b("ReactComposerEvents").COMPOSER_RESET+this._composerID,function(a,b){b&&b.newComposerID&&(this._composerID=b.newComposerID,this._subscribeComposerResetEvent())}.bind(this));this._subscriptions.addSubscriptions(a)}};e.exports=a}),null);
__d("ReactComposerMediaUploadType",[],(function(a,b,c,d,e,f){e.exports={PHOTO:"PHOTO",VIDEO:"VIDEO"}}),null);
__d("ReactComposerAttachmentType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADVERTISE:"ADVERTISE",STATUS:"STATUS",MEDIA:"MEDIA",ALBUM:"ALBUM",MILESTONE:"MILESTONE",MLE:"MLE",NOTES:"NOTES",QANDA:"QANDA",PAGES_EXTRA:"PAGES_EXTRA",FILE:"FILE",QUESTION:"QUESTION",VISUAL_POLL:"VISUAL_POLL",LIST:"LIST",SELL:"SELL",WORK_HEADER:"WORK_HEADER",WORK_FOOTER:"WORK_FOOTER",SEND_GIFT:"SEND_GIFT",LIVE_BROADCAST:"LIVE_BROADCAST",PHOTO_ZOOM_CROP:"PHOTO_ZOOM_CROP",PROFILE_PIC_DESCRIPTION:"PROFILE_PIC_DESCRIPTION",PROFILE_PIC_FRAME:"PROFILE_PIC_FRAME",LIVE_VIDEO:"LIVE_VIDEO",DOC:"DOC",EVENT:"EVENT",GAME:"GAME",CTA:"CTA",QA:"QA",MESSAGE:"MESSAGE",GET_DIRECTIONS:"GET_DIRECTIONS",CALL:"CALL",SHOP:"SHOP",PLACE_LIST:"PLACE_LIST",QUIZ:"QUIZ",TASK:"TASK",ADD_MENTIONED:"ADD_MENTIONED",AUDIENCE_SELECTOR:"AUDIENCE_SELECTOR",LEARNING_COURSE:"LEARNING_COURSE",LEARNING_THIRD_PARTY_LINK:"LEARNING_THIRD_PARTY_LINK",PAGE_RECOMMENDATION:"PAGE_RECOMMENDATION",GROUP_MEET_UP:"GROUP_MEET_UP",EMPLOYEE_QUESTION_SUGGESTIONS:"EMPLOYEE_QUESTION_SUGGESTIONS",POST_TO_GROUP:"POST_TO_GROUP",MEDIA_EFFECT_SHARE:"MEDIA_EFFECT_SHARE",FIND_PLAYERS:"FIND_PLAYERS",SALES_PROMO:"SALES_PROMO",JOB_SEARCH:"JOB_SEARCH",SHARING_SPACES_SELECTOR:"SHARING_SPACES_SELECTOR",UICE_EXAMPLE_ATTACHMENT:"UICE_EXAMPLE_ATTACHMENT",EVENT_CREATION:"EVENT_CREATION",ASSET_3D:"ASSET_3D",LIVING_ROOM:"LIVING_ROOM",VIDEO_SUGGESTIONS:"VIDEO_SUGGESTIONS",APP_INTEGRATION_AODOCS:"APP_INTEGRATION_AODOCS",APP_INTEGRATION_BOX:"APP_INTEGRATION_BOX",APP_INTEGRATION_CORNERSTONE:"APP_INTEGRATION_CORNERSTONE",APP_INTEGRATION_DROPBOX:"APP_INTEGRATION_DROPBOX",APP_INTEGRATION_EGNYTE:"APP_INTEGRATION_EGNYTE",APP_INTEGRATION_GDRIVE:"APP_INTEGRATION_GDRIVE",APP_INTEGRATION_JIRA:"APP_INTEGRATION_JIRA",APP_INTEGRATION_ONEDRIVE:"APP_INTEGRATION_ONEDRIVE",APP_INTEGRATION_QUIP:"APP_INTEGRATION_QUIP",APP_INTEGRATION_SHAREPOINT:"APP_INTEGRATION_SHAREPOINT",APP_INTEGRATION_TASKS:"APP_INTEGRATION_TASKS",CIVIC_CTA:"CIVIC_CTA",PAGE_POST_TEMPLATE:"PAGE_POST_TEMPLATE"})}),null);
__d("ReactComposerFocusInit",["csx","invariant","DOM","DOMContainer.react","Parent","React","ReactDOM"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a={handler:function(a,c,d,e,f,g,i,j){var k=b("DOM").create("div"),l=a.parentNode;if(g){g=b("Parent").bySelector(a,"._3u13");g&&(l=g.parentNode.parentNode)}b("ReactDOM").render(b("React").createElement(f,{composerID:c,actorID:d,gks:e,ReactComposerFocusExtraConfigData:i,enableFocusBehavior:!0,onFirstFocus:j},b("React").createElement(b("DOMContainer.react"),{display:"block"},a)),k);l||h(0);l.firstChild?l.replaceChild(k,l.firstChild):l.appendChild(k)},preload:function(){}};e.exports=a}),null);
__d("SharesheetDestination",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSENGER:"MESSENGER",STORIES:"STORIES",TIMELINE:"TIMELINE",NONE:"NONE"})}),null);
__d("XReactFeedSproutsComposerXBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/feedx_sprouts/bootload/",{composer_id:{type:"String",required:!0},composer_type:{type:"Enum",required:!0,enumType:1},friend_list_id:{type:"String"},target_id:{type:"String",required:!0}})}),null);
__d("ReactFeedSproutsComposerX",["csx","cx","invariant","Arbiter","AsyncRequest","Bootloader","Button","CSS","DOM","Event","FeedComposerIDStore","FeedReactComposerBootloadPerfTypedLogger","ReactComposerAttachmentType","ReactComposerEvents","ReactComposerFocusInit","Run","SharesheetDestination","SubscriptionsHandler","XReactFeedSproutsComposerXBootloadController","LitestandComposer","$"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();function a(a){__p&&__p();this.$39=function(a){if(!this.$12)return;this.$23&&b("Button").setEnabled(this.$23,this.$21.size!=0&&this.$19.value.length!=0);this.$12.sharingSpacesDestinationPicker&&(this.$24&&b("Button").setEnabled(this.$24,this.$19.value.length!=0));if(!this.$12.textEligibleForStory)return;a=this.$19.value.match(/\n/g)||[];this.$12.maxTextLengthForStory&&this.$19.value.length>this.$12.maxTextLengthForStory||this.$12.maxLinesForStory&&a.length>=this.$12.maxLinesForStory?(this.$28&&b("CSS").addClass(this.$28,"_3560"),this.$21["delete"](b("SharesheetDestination").STORIES)&&(this.$28&&b("CSS").removeClass(this.$28,"_1sfg"),this.$22.add(b("SharesheetDestination").STORIES))):(this.$28&&b("CSS").removeClass(this.$28,"_3560"),this.$22["delete"](b("SharesheetDestination").STORIES)&&(this.$28&&b("CSS").addClass(this.$28,"_1sfg"),this.$21.add(b("SharesheetDestination").STORIES)));this.$23&&b("Button").setEnabled(this.$23,this.$21.size!=0&&this.$19.value.length!=0)}.bind(this);this.$40=function(a){a.preventDefault(),b("DOM").setContent(this.$7,this.$2.children),b("CSS").addClass(this.$13,"_2-q9")}.bind(this);this.$41=function(a){a.preventDefault(),b("DOM").setContent(this.$2,this.$7.children),b("CSS").removeClass(this.$13,"_2-q9")}.bind(this);this.$32=function(a){if(!this.$12||!this.$12.sharingSpacesDestinationPicker&&!this.$12.oneStepDestinationPicker)return!0;this.$23&&b("Button").setEnabled(this.$23,!1);if(this.$21&&this.$21.has(b("SharesheetDestination").STORIES)&&this.$25){a={composerID:this.$5,targetID:this.$18,actorID:this.$1,text:this.$19.value,successHandler:this.$31};this.$25.postToStory(a)}return this.$21&&this.$21.has(b("SharesheetDestination").TIMELINE)?!0:!1}.bind(this);this.$36=function(a){__p&&__p();a=a.getTarget();var c=null;while(a){if(a.nodeType===1&&a.nodeName==="A"){c=a;break}a=a.parentNode}c!==null||i(0);a=b("CSS").hasClass(c,"._5qtn");if(a)return;this.$14.forEach(function(a){return b("CSS").removeClass(a,"_5qtn")});b("CSS").addClass(c,"_5qtn");a=b("DOM").find(this.$13,"._559p");var d=b("DOM").find(this.$13,"._559q");switch(c.getAttribute("data-attachment-type")){case b("ReactComposerAttachmentType").STATUS:b("CSS").hide(d);b("CSS").show(a);break;case b("ReactComposerAttachmentType").MEDIA:case b("ReactComposerAttachmentType").LIVE_VIDEO:b("CSS").show(d);b("CSS").hide(a);break;case b("ReactComposerAttachmentType").ALBUM:this.$12&&this.$12.albumTabUsesSelector&&this.$42();break;case b("ReactComposerAttachmentType").POST_TO_GROUP:b("Bootloader").loadModules(["XReactComposerPostToGroupLoggingODSController","ReactComposerPostToGroupLoggingEvent"],function(a,c){a=a.getURIBuilder().setString("event",c.CLICK_OUTER_TAB).getURI();new(b("AsyncRequest"))(a).send()},"ReactFeedSproutsComposerX");break}}.bind(this);this.$30=function(a){this.$12&&this.$12.lazySproutsExpand||this.$43();if(this.$4||!this.$29)return;this.$20=Date.now();this.$4=!0;a=b("XReactFeedSproutsComposerXBootloadController").getURIBuilder().setString("composer_id",this.$5).setString("target_id",this.$18).setEnum("composer_type",this.$6).setString("friend_list_id",this.$9).getURI();new(b("AsyncRequest"))(a).send()}.bind(this);this.$35=function(){b("CSS").removeClass(this.$13,"_4qr4"),b("CSS").addClass(this.$13,"_4a8c")}.bind(this);this.$34=function(){this.$35(),this.$19.value="",b("CSS").removeClass(this.$13,"_2-q9")}.bind(this);this.$33=function(){this.$17.release()}.bind(this);this.$31=function(){this.$23&&b("Button").setEnabled(this.$23,!0),b("Arbiter").inform(b("ReactComposerEvents").POST_SUCCEEDED+this.$5),this.$34()}.bind(this);this.$26=!1;this.$1=a.actorID;this.$13=a.root;this.$5=a.composerID;this.$18=a.targetID;this.$6=a.composerType;this.$9=a.friendListID;this.$10=a.largeTextThreshold;this.$12=a.gks;this.$25=a.jsModules.postModule;this.$29=a.loadReact;this.$11=!1;this.$4=!1;this.$8=b("DOM").find(this.$13,"form");this.$19=b("DOM").find(this.$13,"._3en1");this.$16=b("DOM").find(this.$13,"._16ve");this.$21=new Set();this.$22=new Set();b("FeedComposerIDStore").set(this.$5);b("LitestandComposer").initComposer(a.composerID);this.$17=new(b("SubscriptionsHandler"))();this.$17.addSubscriptions(b("Event").listen(this.$19,"focus",this.$30),b("Event").listen(this.$13,"click",this.$30),b("Event").listen(this.$8,"success",this.$31),b("Event").listen(this.$8,"submit",this.$32),b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$5,function(){new(b("FeedReactComposerBootloadPerfTypedLogger"))().setBootloadDurationMillis(Date.now()-this.$20).log(),this.$33()}.bind(this)),b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/selectcomposer/"+this.$5,this.$30),b("Arbiter").subscribe("ReactComposerFocus/reset/"+this.$5,this.$34),b("Arbiter").subscribe("ReactComposerFocus/collapse/"+this.$5,this.$35),b("Arbiter").subscribe(b("ReactComposerEvents").TEXT_PREFILL_BEFORE_BOOTLOAD+this.$5,function(a,b){this.$19.value=b,this.$19.selectionEnd=0}.bind(this)),b("Arbiter").subscribe("ReactFeedSproutsComposerXBody/onDrop",this.$30));this.$14=b("DOM").scry(this.$13,"._4-h7");this.$14.forEach(function(a){return this.$17.addSubscriptions(b("Event").listen(a,"click",this.$36))}.bind(this));this.$15=b("DOM").scry(this.$13,"._m_1");this.$12&&this.$12.prefillSprouts&&this.$15.forEach(function(a){return this.$17.addSubscriptions(b("Event").listen(a,"click",function(){this.$37(a)}.bind(this)))}.bind(this));var c=b("DOM").scry(this.$13,"._2mo4");c.length===1&&this.$17.addSubscriptions(b("Event").listen(c[0],"click",function(){if(this.$11)return;this.$11=!0;b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$5,function(a,c){b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(a){a.startPreviewUI(c.contextConfig,c.config),this.$11=!1}.bind(this),"ReactFeedSproutsComposerX")}.bind(this));b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(){},"ReactFeedSproutsComposerX")}.bind(this)));this.$12&&(this.$12.sharingSpacesDestinationPicker||this.$12.oneStepDestinationPicker)&&this.$38();c=a.reactComposerFocusExtraConfigData;c&&c.showDialogForP2PAdminsMetadata&&c.showDialogForP2PAdminsMetadata.showDialogForP2PAdmins&&a.jsModules.P2PNewAdminComposerFocus?b("ReactComposerFocusInit").handler(b("$")("feedx_sprouts_container"),this.$5,this.$1,this.$12,a.jsModules.P2PNewAdminComposerFocus,!1,a.reactComposerFocusExtraConfigData):a.jsModules&&a.jsModules.composerFocus&&b("ReactComposerFocusInit").handler(b("$")("feedx_sprouts_container"),this.$5,this.$1,this.$12,a.jsModules.composerFocus,!1,a.reactComposerFocusExtraConfigData);b("Run").onLeave(this.$33)}a.prototype.$42=function(){var a=b("DOM").find(this.$13,"._559p"),c=b("DOM").find(this.$13,"._559q");b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$5,function(){b("Bootloader").loadModules(["ReactComposerCollectionsActions","ReactComposerLoggingName"],function(a,b){a.showCollectionsSelector(this.$5,b.ALBUM_TAB_SELECTOR)}.bind(this),"ReactFeedSproutsComposerX"),this.$33()}.bind(this));b("CSS").show(c);b("CSS").hide(a)};a.prototype.$37=function(a,c){c=a.getAttribute("data-sprout-tagger-id");if(c){var d=b("DOM").find(this.$16,"._16vl");d=b("DOM").find(d,'*[data-sprout-tagger-id="'+c+'"]');b("CSS").addClass(d,"_30lm");this.$16.setAttribute("data-selected-sprout-id",c)}else b("CSS").matchesSelector(a,"._1gr3")&&(this.$12&&this.$12.lazySproutsExpand&&this.$43())};a.prototype.$38=function(){__p&&__p();this.$27=b("DOM").find(this.$13,"._3h0d");this.$17.addSubscriptions(b("Event").listen(this.$19,"input",this.$39));this.$23=b("DOM").find(this.$13,"._ej1");this.$23&&b("Button").setEnabled(this.$23,!1);if(this.$12&&this.$12.sharingSpacesDestinationPicker){this.$2=b("DOM").find(this.$13,"._3ifg");this.$7=b("DOM").find(this.$13,"._26c- ._3-wg");this.$24=b("DOM").find(this.$13,"._1-pl");this.$24&&b("Button").setEnabled(this.$24,!1);this.$17.addSubscriptions(b("Event").listen(this.$24,"click",this.$40));var a=b("DOM").find(this.$13,"._1-pm");this.$17.addSubscriptions(b("Event").listen(a,"click",this.$41));this.$3=a}a=b("DOM").scry(this.$13,"._66-n");a.forEach(function(a){return this.$44(a)}.bind(this));this.$27&&this.$17.addSubscriptions(b("Event").listen(this.$27,"click",function(){this.$45()}.bind(this)));this.$12&&this.$12.defaultDestination===b("SharesheetDestination").STORIES?this.$21.add(b("SharesheetDestination").STORIES):this.$21.add(b("SharesheetDestination").TIMELINE)};a.prototype.$45=function(a){this.$26=!0};a.prototype.$44=function(a){a.getAttribute("data-destination")==b("SharesheetDestination").STORIES&&(this.$28=a,this.$12&&!this.$12.textEligibleForStory&&b("CSS").addClass(a,"_3560")),this.$17.addSubscriptions(b("Event").listen(a,"click",function(){this.$46(a)}.bind(this)))};a.prototype.$46=function(a,c){if(this.$26){this.$26=!1;return}b("CSS").toggleClass(a,"_1sfg");c=a.dataset.destination;this.$21.has(c)?this.$21["delete"](c):this.$21.add(c);this.$23&&b("Button").setEnabled(this.$23,this.$21.size!=0&&this.$19.value.length!=0)};a.prototype.$43=function(){b("CSS").addClass(this.$13,"_4qr4"),b("CSS").removeClass(this.$13,"_4a8c")};e.exports=a}),null);
__d("ReactComposerFocusActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({SUBSCRIBE:null,UNSUBSCRIBE:null,FOCUS_ACQUIRED:null,FOCUS_LOST:null})}),null);
__d("ReactComposerFocusActions",["ReactComposerDispatcher","ReactComposerFocusActionTypes","ReactComposerStore"],(function(a,b,c,d,e,f){"use strict";b("ReactComposerStore");a={subscribe:function(a,c,d){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").SUBSCRIBE,onFocusAcquiredCallback:c,onFocusLostCallback:d})},unsubscribe:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").UNSUBSCRIBE})},notifyFocusAcquired:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").FOCUS_ACQUIRED})},notifyFocusLost:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").FOCUS_LOST})}};e.exports=a}),null);
__d("ReactComposerFocusStore",["ReactComposerFocusActionTypes","ReactComposerStoreBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("ReactComposerStoreBase"));g=c&&c.prototype;function a(){__p&&__p();var a=void 0;g.constructor.call(this,function(){return{focusConfig:{},isFocused:!1}},function(c){__p&&__p();if(!a)return;switch(c.type){case b("ReactComposerFocusActionTypes").SUBSCRIBE:a.$ReactComposerFocusStore1(c.composerID,c.onFocusAcquiredCallback,c.onFocusLostCallback);a.emitChange(c.composerID);break;case b("ReactComposerFocusActionTypes").UNSUBSCRIBE:a.$ReactComposerFocusStore2(c.composerID);a.emitChange(c.composerID);break;case b("ReactComposerFocusActionTypes").FOCUS_ACQUIRED:a.$ReactComposerFocusStore3(c.composerID);a.emitChange(c.composerID);break;case b("ReactComposerFocusActionTypes").FOCUS_LOST:a.$ReactComposerFocusStore4(c.composerID);a.emitChange(c.composerID);break}});a=this}a.prototype.$ReactComposerFocusStore1=function(a,b,c){a=this.getComposerData(a);a.focusConfig={onFocusAcquiredCallback:b,onFocusLostCallback:c}};a.prototype.$ReactComposerFocusStore2=function(a){a=this.getComposerData(a);a.focusConfig={}};a.prototype.$ReactComposerFocusStore3=function(a){a=this.getComposerData(a);a.focusConfig.onFocusAcquiredCallback&&setTimeout(a.focusConfig.onFocusAcquiredCallback,0);a.isFocused=!0};a.prototype.$ReactComposerFocusStore4=function(a){a=this.getComposerData(a);a.focusConfig.onFocusLostCallback&&setTimeout(a.focusConfig.onFocusLostCallback,0);a.isFocused=!1};a.prototype.isComposerFocused=function(a){return this.getComposerData(a).isFocused};e.exports=new a()}),null);
__d("ReactComposerFocusHandleScrollAway",["Event","getActiveElement","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=-400,h=300;a={handler:function(a,c){var d=b("Event").listen(window,"scroll",b("throttle")(function(){var e=a.getBoundingClientRect().bottom;if(e<g){c();e=b("getActiveElement")();e&&e.blur();d.remove()}},h))}};e.exports=a}),null);
__d("ReactComponentWithPureRenderMixin",["shallowCompare"],(function(a,b,c,d,e,f){"use strict";a={shouldComponentUpdate:function(a,c){return b("shallowCompare")(this,a,c)}};e.exports=a}),null);
__d("ReactComposerFocusWrapperCore.react",["ix","cssVar","cx","fbt","Arbiter","Bootloader","CurrentUser","DOM","DOMTraverser","Event","Focus","Image.react","Keys","Link.react","React","ReactComponentWithPureRenderMixin","ReactComposerEvents","ReactComposerFocusActions","ReactComposerMediaUploadType","ReactDOM","Run","ShimButton.react","SubscriptionsHandler","TabbableElements","TabIsolation","URI","fbglyph","ifRequired","isKeyActivation","ReactComposerFocusStore"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();a=b("React").PropTypes;b("ReactComposerFocusStore");var k=parseInt("10px",10);c=b("React").createClass({displayName:"ReactComposerFocusWrapperCore",_composerID:"",_fixedHeight:0,_subscriptions:b("SubscriptionsHandler"),_firstFocus:!0,_onLeaveHandle:null,_root:null,_tabIsolation:null,mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{composerID:a.string.isRequired,ariaLabel:a.string,onDismiss:a.func.isRequired,onFocus:a.func.isRequired,focused:a.bool.isRequired,gks:a.object,onFirstFocus:a.func,fixHeight:a.bool},getDefaultProps:function(){return{focused:!1,fixHeight:!1}},UNSAFE_componentWillMount:function(){this._composerID=this.props.composerID},UNSAFE_componentWillReceiveProps:function(a){if(this.props.fixHeight&&!this.props.focused&&a.focused){a=b("ReactDOM").findDOMNode(this.refs.container);this._fixedHeight=a.offsetHeight+k}},componentDidMount:function(){this._subscriptions=new(b("SubscriptionsHandler"))(),this._subscribeComposerEvents(),this._onLeaveHandle=b("Run").onLeave(this._onLeave),this._root&&(this._tabIsolation=new(b("TabIsolation"))(this._root),this.props.focused&&this._tabIsolation.enable())},componentDidUpdate:function(a){if(!a.focused&&this.props.focused){try{var c=document.createEvent("HTMLEvents");c.initEvent&&(c.initEvent("resize",!0,!1),window.dispatchEvent(new(b("Event"))("resize")))}catch(a){}this._tabIsolation&&this._tabIsolation.enable()}else a.focused&&!this.props.focused&&(this._tabIsolation&&this._tabIsolation.disable())},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release(),this._onLeave(),this._onLeaveHandle&&this._onLeaveHandle.remove(),this._tabIsolation&&this._tabIsolation.disable(),this._tabIsolation=null},render:function(){var a=this.props.fixHeight&&this.props.focused?{height:this._fixedHeight}:null,c=this.props.focused?this._renderDismissButton():null,d=this.props.focused?this._renderBugNub():null,e=this.props.label||j._("Create a post");return b("React").createElement("div",{role:this.props.focused?"dialog":"region","aria-label":e,className:"_3u13 _3e9r"+(this.props.focused?" _3u14":"")+(this.props.focused?" _1b3n":""),ref:function(a){this._root=a}.bind(this),style:a,onKeyDown:this._onKeyDown},b("React").createElement("div",{className:"_3u15",onClick:this._onDismiss,role:"presentation"}),b("React").createElement("div",{className:"_3u16",ref:"container",onFocus:this._onFocus},this.props.children,c),d)},getComposerID:function(){return this._composerID},getComposer:function(){return this.refs.container},_renderDismissButton:function(){return b("React").createElement(b("ShimButton.react"),{className:"_3u17"+(this.props.gks&&this.props.gks.topPostButton?" _nse":"")+(this.props.gks&&this.props.gks.hasHeader?" _356d":"")+(this.props.gks&&this.props.gks.isSproutsComposer?" _3_fz":"")+(this.props.gks&&this.props.gks.wideHeader?" _37nh":""),onClick:this._onClickDismissButton,onKeyDown:this._onDismissKeyDown,role:"button","aria-label":j._("Dismiss"),tabIndex:"0"},b("React").createElement(b("Image.react"),{src:g("125922")}))},_renderBugNub:function(){if(!b("CurrentUser").isEmployee())return null;var a=new(b("URI"))("/ajax/bugs/report");return b("React").createElement("div",{className:"_t95"},b("React").createElement(b("Link.react"),{href:"#",ajaxify:a,className:"_t97",rel:"dialog"}))},_subscribeComposerEvents:function(){var a=b("Arbiter").subscribe(b("ReactComposerEvents").OPTIMISTIC_POSTING_STARTED+this._composerID,function(){this.props.onDismiss(!0)}.bind(this)),c=b("Arbiter").subscribe(b("ReactComposerEvents").POST_SUCCEEDED+this._composerID,function(){this.props.onDismiss(!0)}.bind(this)),d=b("Arbiter").subscribe("ReactFeedComposerXBootloader/focuscomposer/"+this._composerID,function(){return this._onFocus(null)}.bind(this)),e=b("Arbiter").subscribe(b("ReactComposerEvents").COMPOSER_RESET+this._composerID,function(a,c){c&&c.newComposerID&&(this.props.onDismiss(),this._composerID=c.newComposerID,this._subscriptions.release(),this._subscriptions=new(b("SubscriptionsHandler"))(),this._subscribeComposerEvents())}.bind(this));this._subscriptions.addSubscriptions(a,c,d,e)},_onFocus:function(a){if(this.props.focused||a&&a.nativeEvent.isPropagationStopped)return;this._firstFocus&&(this.props.onFirstFocus&&this.props.onFirstFocus(),this._firstFocus=!1);this.props.onFocus();b("ReactComposerFocusActions").notifyFocusAcquired(this.getComposerID())},_onKeyDown:function(a){a.keyCode===b("Keys").ESC&&!a.nativeEvent.isPropagationStopped&&this._onDismiss()},_onDismissKeyDown:function(a){b("isKeyActivation")(a)&&this._onDismiss()},_onClickDismissButton:function(){b("ifRequired")("ReactComposerMediaUploadStore",function(a){var c=a.getUploadsCount(this._composerID,b("ReactComposerMediaUploadType").VIDEO);a=a.getUploadsCount(this._composerID,b("ReactComposerMediaUploadType").PHOTO);c>0&&a===0&&b("Bootloader").loadModules(["ReactComposerVideoSurvey"],function(a){return a.showDismissalSurvey(this._composerID,c)}.bind(this),"ReactComposerFocusWrapperCore.react")}.bind(this)),this._onDismiss()},_onDismiss:function(){this._onLeave();if(this._root&&document.body){var a=b("DOMTraverser").nextFilteredNode(document.body,this._root,function(a){return!b("DOM").contains(this._root,a)&&b("TabbableElements").isTabbable(a)}.bind(this));b("Focus").set(a)}},_onLeave:function(){this.props.onDismiss(),b("ReactComposerFocusActions").notifyFocusLost(this.props.composerID)}});e.exports=c}),null);
__d("ReactComposerTaggerType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CAMERA:"CAMERA",PEOPLE:"PEOPLE",OG:"OG",CALL:"CALL",SHOP:"SHOP",LOCATION:"LOCATION",ACTIVITY:"ACTIVITY",BACKDATE:"BACKDATE",TARGETING:"TARGETING",PUBLISHER_ABTEST_HOLDOUT:"PUBLISHER_ABTEST_HOLDOUT",SPONSOR:"SPONSOR",VAULTPHOTO:"VAULTPHOTO",MARKDOWN:"MARKDOWN",CONTENT_WARNINGS:"CONTENT_WARNINGS",PRODUCT:"PRODUCT",PAGE_CTA:"PAGE_CTA",FORMATTED_TEXT:"FORMATTED_TEXT",FORMATTED_TEXT_TRAY:"FORMATTED_TEXT_TRAY",STICKER:"STICKER",MESSAGING:"MESSAGING",POLITICAL_INFO:"POLITICAL_INFO",ISSUE_TAG:"ISSUE_TAG",CONTACT_YOUR_REPRESENTATIVE:"CONTACT_YOUR_REPRESENTATIVE",FUN_FACT:"FUN_FACT",ALBUM:"ALBUM",GIF:"GIF",FIND_PLAYERS:"FIND_PLAYERS",FUNDRAISER:"FUNDRAISER",LIST:"LIST",VISUAL_POLL:"VISUAL_POLL",RECOMMENDATION:"RECOMMENDATION",SALES_PROMO:"SALES_PROMO",TAG_EVENT:"TAG_EVENT",TAG_EVENT_TICKET:"TAG_EVENT_TICKET",BREAKING_NEWS:"BREAKING_NEWS",GROUP_MEET_UP:"GROUP_MEET_UP",ASSET_3D:"ASSET_3D",PLAY_WITH_FRIENDS:"PLAY_WITH_FRIENDS",STORIES:"STORIES",VIDEO_SUGGESTIONS:"VIDEO_SUGGESTIONS",LOCAL_ALERTS:"LOCAL_ALERTS",CIVIC_CTA:"CIVIC_CTA"})}),null);
__d("ReactComposerFocusInline.react",["Arbiter","React","ReactComposerFocusHandleScrollAway","ReactComposerFocusWrapperCore.react","ReactComposerTaggerType","ReactDOM","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);g=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={focused:!1},this.$2=function(){var a=b("ReactDOM").findDOMNode(this.refs.focus.getComposer());b("ReactComposerFocusHandleScrollAway").handler(a,this.$1);b("ifRequired")("ReactComposerActions",function(a){this.props.gks&&this.props.gks.lazySproutsExpand||a.expandSprouts(this.$3())}.bind(this));b("ifRequired")("ReactComposerGroupPostTagsTaggerActions",function(a){a.setShowState(this.$3(),!0)}.bind(this));b("ifRequired")("ReactComposerTaggerActions",function(a){a.handleSetTaggerShowNUX(this.$3(),b("ReactComposerTaggerType").GROUP_MEET_UP,!1),a.handleSetTaggerShowNUX(this.$3(),b("ReactComposerTaggerType").VISUAL_POLL,!1)}.bind(this));this.setState({focused:!0})}.bind(this),this.$1=function(){b("Arbiter").inform("ReactComposerFocus/collapse/"+this.$3()),setTimeout(function(){this.refs.focus&&(b("ifRequired")("ReactComposerFocusActions",function(a){a.notifyFocusLost(this.$3())}.bind(this)),b("ifRequired")("ReactComposerActions",function(a){a.collapseSprouts(this.$3())}.bind(this)),b("ifRequired")("ReactComposerGroupPostTagsTaggerActions",function(a){a.setShowState(this.$3(),!1)}.bind(this)),b("ifRequired")("ReactComposerTaggerActions",function(a){b("ifRequired")("ReactComposerLoggingName",function(b){a.deselectCurrentTagger(this.$3(),b.INLINE_COMPOSER)}.bind(this))}.bind(this)))}.bind(this),0),this.setState({focused:!1})}.bind(this),c}a.prototype.componentWillUnmount=function(){"use strict";this.$1()};a.prototype.render=function(){"use strict";return b("React").createElement(b("ReactComposerFocusWrapperCore.react"),{composerID:this.props.composerID,focused:this.state.focused&&this.props.enableFocusBehavior,onFocus:this.$2,onDismiss:this.$1,onFirstFocus:this.props.onFirstFocus,gks:this.props.gks,ref:"focus"},this.props.children)};a.prototype.$3=function(){"use strict";return this.refs.focus&&this.refs.focus.getComposerID()};a.propTypes={composerID:c.string.isRequired,gks:c.object};e.exports=a}),null);
__d("ReactRenderer",["invariant","React","ReactDOM","$","nullthrows","unmountComponentOnTransition"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=8;function i(a,c,d){a=b("ReactDOM").render(a,c,d);b("unmountComponentOnTransition")(a,c);return a}function j(a,c,d,e){a=b("React").createElement(a,c);return i(a,d,e)}function k(a,c,d,e){a=b("React").createElement(a,c);return l(a,d,e)}function l(a,c,d){return b("ReactDOM").render(a,c,d)}function a(a,c,d,e){return j(a,c,b("$")(d),e)}function c(a,c,d,e){return k(a,c,b("$")(d),e)}function d(a){__p&&__p();var c=a.constructor,d=a.props,e=a.bigPipeContext,f=a.dummyDeferredElement,g=a.acrossTransitions,h=a.preloader,i=e?e.registerToBlockDisplayUntilDone_DONOTUSE():function(){},j=document.createElement("div");g||(d.ref=function(a){b("unmountComponentOnTransition")(a,j)});var k=b("React").createElement(c,d);a=b("ReactDOM").unstable_createRoot(j);var l=a.createBatch(),m=function(){return l.render(k)};h!=null?(function(){var a=h.getContextProvider();a&&(m=function(){l.render(b("React").createElement(a,{value:h},k))});h.onLoaded(m).onError(m)})():m();l.then(function(){f.then(function(a){n(a,j),l.commit()}),i()})}function m(a,c,d,e,f){__p&&__p();var g=f?f.getContextProvider():null;g&&(a=b("React").createElement(g,{value:f},a));g=d?l:i;if(e){f=b("nullthrows")(c.parentNode,"Error: container doesn't have a parent");return g(a,f)}d=document.createComment(" react-mount-point-unstable ");n(c,d);return g(a,d)}function f(a){var c=a.constructor,d=a.props,e=a.dummyElem,f=a.acrossTransitions,g=a.clobberSiblings;a=a.preloader;return m(b("React").createElement(c,d),e,f,g,a)}function n(a,c){a.tagName==="NOSCRIPT"||g(0);var d=b("nullthrows")(a.parentNode,"Error: container doesn't have a parent"),e=a.previousSibling;if(e&&e.nodeType===h&&e.nodeValue===" end-react-placeholder "){do d.removeChild(e),e=b("nullthrows")(a.previousSibling,"Error: malformed placeholder");while(!(e.nodeType===h&&e.nodeValue===" begin-react-placeholder "));d.removeChild(e)}d.replaceChild(c,a)}e.exports={renderComponent:i,constructAndRenderAsyncComponentIntoComment_DO_NOT_USE:d,constructAndRenderComponent:j,constructAndRenderComponentByID:a,constructAndRenderComponentAcrossTransitions:k,constructAndRenderComponentByIDAcrossTransitions:c,constructAndRenderComponentIntoComment_DO_NOT_USE:f,constructAndRenderElementIntoComment_DO_NOT_USE:m,constructAndRenderComponent_DEPRECATED:k,constructAndRenderComponentByID_DEPRECATED:c}}),null);