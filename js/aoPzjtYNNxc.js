if (self.CavalryLogger) { CavalryLogger.start_js(["VHsru"]); }

__d("CreditCardTypeEnum",[],(function(a,b,c,d,e,f){e.exports={DINERSCLUB:64,AMERICANEXPRESS:65,DISCOVER:68,JCB:74,MASTERCARD:77,CUP:80,UNKNOWN:85,VISA:86,RUPAY:82}}),null);
__d("FacebookAppIDs",[],(function(a,b,c,d,e,f){e.exports={FACEBOOK_FOR_ANDROID:74769995908,FACEBOOK_FOR_EMERGING_MARKET_ANDROID:275254692598279,TURDUCKEN:400954310366822,FACEBOOK_MEDIA_EFFECTS:1779302845618373,MOST_RECENT_FEED:608920319153834,SAVED_FOR_LATER:586254444758776,TRANSLATIONS:4329892722,MESSENGERDOTCOM:772021112871879,MESSENGER_DESKTOP:195376314393036,WWW:256281040558,FBPAGES:2530096808,ADS_PAYMENT:123097351040126,EVENTS:2344061033,BUSINESS_ACCOUNTS:436761779744620,WORKPLACE_BILLING:1350397358363828,WORKPLACE_FOR_EVERY_PHONE:1263749867021676,WORKPLACE_DESKTOP:267999183646265,CHATPROXY_WEB:229895473858072,MARKETPLACE:1606854132932955,WHATSAPP_BUSINESS_ACCOUNT_MANAGER:225181538219344}}),null);
__d("TaxIDTypeInternal",[],(function(a,b,c,d,e,f){e.exports={NONE:0,AUS_GST:65,EIN:69,FOREIGN:70,GST:71,BRAZIL_CNPJ:78,BRAZIL_CPF:80,SSN:83,VAT:86}}),null);
__d("resolveWindow",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){__p&&__p();var b=window;a=a.split(".");try{for(var c=0;c<a.length;c++){var d=a[c],e=/^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);if(e)b=b.frames[e[1]];else if(d==="opener"||d==="parent"||d==="top")b=b[d];else return null}}catch(a){return null}return b}e.exports=a}),null);
__d("XD",["Arbiter","DOM","DOMDimensions","Log","PHPQuerySerializer","URI","Queue","isFacebookURI","isInIframe","resolveWindow"],(function(a,b,c,d,e,f){__p&&__p();var g="fb_xdm_frame_"+location.protocol.replace(":",""),h={_callbacks:[],_opts:{autoResize:!1,allowShrink:!0,channelUrl:null,hideOverflow:!1,resizeTimeout:1e3,resizeWidth:!1,expectResizeAck:!1,resizeAckTimeout:6e3},_lastResizeAckId:0,_resizeCount:0,_resizeTimestamp:0,_shrinker:null,init:function(a){this._opts=babelHelpers["extends"]({},this._opts,a),this._opts.autoResize&&this._startResizeMonitor(),b("Arbiter").subscribe("Connect.Unsafe.resize.ack",function(a,b){b.id||(b.id=this._resizeCount),b.id>this._lastResizeAckId&&(this._lastResizeAckId=b.id)}.bind(this))},getQueue:function(){this._queue||(this._queue=new(b("Queue"))());return this._queue},setChannelUrl:function(a){this.getQueue().start(function(b){return this.send(b,a)}.bind(this))},send:function(a,c){__p&&__p();c=c||this._opts.channelUrl;if(!c){this.getQueue().enqueue(a);return}var d={};c=new(b("URI"))(c);Object.assign(d,a,b("PHPQuerySerializer").deserialize(c.getFragment()));var e=new(b("URI"))(d.origin).getOrigin(),f=b("resolveWindow")(d.relation.replace(/^parent\./,"")),h=50;a=function a(){var c=f.frames[g];try{c.proxyMessage(b("PHPQuerySerializer").serialize(d),e)}catch(c){--h?setTimeout(a,100):b("Log").warn('No such frame "'+g+'" to proxyMessage to')}};a()},_computeSize:function(){__p&&__p();var a=b("DOMDimensions").getDocumentDimensions(),c=0;if(this._opts.resizeWidth){var d=document.body;if(d.clientWidth<d.scrollWidth)c=a.width;else{d=d.childNodes;for(var e=0;e<d.length;e++){var f=d[e];f=f.offsetLeft+f.offsetWidth;f>c&&(c=f)}}c=Math.max(c,h.forced_min_width)}a.width=c;this._opts.allowShrink&&(this._shrinker||(this._shrinker=b("DOM").create("div")),b("DOM").appendContent(document.body,this._shrinker),a.height=Math.max(this._shrinker.offsetTop,0));return a},_startResizeMonitor:function(){__p&&__p();var a,c=document.documentElement;this._opts.hideOverflow&&(c.style.overflow="hidden",document.body.style.overflow="hidden");c=function(){__p&&__p();var c=this._computeSize(),d=Date.now(),e=this._lastResizeAckId<this._resizeCount&&d-this._resizeTimestamp>this._opts.resizeAckTimeout;if(!a||this._opts.expectResizeAck&&e||this._opts.allowShrink&&a.width!=c.width||!this._opts.allowShrink&&a.width<c.width||this._opts.allowShrink&&a.height!=c.height||!this._opts.allowShrink&&a.height<c.height){a=c;this._resizeCount++;this._resizeTimestamp=d;e={type:"resize",height:c.height,ackData:{id:this._resizeCount}};c.width&&c.width!=0&&(e.width=c.width);try{if(b("isFacebookURI")(new(b("URI"))(document.referrer))&&b("isInIframe")()&&window.name&&window.parent.location&&window.parent.location.toString&&b("isFacebookURI")(new(b("URI"))(window.parent.location))){d=window.parent.document.getElementsByTagName("iframe");for(var c=0;c<d.length;c=c+1)d[c].name==window.name&&(this._opts.resizeWidth&&(d[c].style.width=e.width+"px"),d[c].style.height=e.height+"px")}this.send(e)}catch(a){this.send(e)}}}.bind(this);c();setInterval(c,this._opts.resizeTimeout)}};c=babelHelpers["extends"]({},h);e.exports.UnverifiedXD=c;e.exports.XD=h;a.UnverifiedXD=c;a.XD=h}),null);
__d("PagesComposerActions",["ReactComposerDispatcher","PagesComposerActionsTypes","PagesComposerBoostedPostsStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();b("PagesComposerBoostedPostsStore");a={setDraft:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerActionsTypes").SET_DRAFT})},schedule:function(a,c,d){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerActionsTypes").SCHEDULE,scheduleDate:c,stopFeedDistributionDate:d})},backdate:function(a,c,d,e,f){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerActionsTypes").BACKDATE,year:c,month:d,day:e,hideFromNewsFeed:f})},setAdsPost:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerActionsTypes").SET_ADS_POST})},setBoostedPost:function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerActionsTypes").SET_BOOSTED_POST,data:c})},showOfferUpsell:function(a,c){a&&b("ReactComposerDispatcher").dispatch({composerID:a,config:c,type:b("PagesComposerActionsTypes").SHOW_OFFER_UPSELL})},abandonOfferUpsell:function(a){a&&b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerActionsTypes").ABANDON_OFFER_UPSELL})},setShouldSendAsMessage:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerActionsTypes").SEND_MESSAGE})},setInstagramCrossPosting:function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,enabled:c,type:b("PagesComposerActionsTypes").INSTAGRAM_CROSS_POSTING})},setIsReviewableBrandedContent:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerActionsTypes").SET_IS_REVIEWABLE_BRANDED_CONTENT})},clearComposerData:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerActionsTypes").CLEAR_COMPOSER_DATA})}};e.exports=a}),null);
__d("UnverifiedXD",["XD"],(function(a,b,c,d,e,f){a=b("XD").UnverifiedXD;e.exports=a}),null);
__d("ShareDialogAudienceTypes",["getObjectValues","ShareModeConst"],(function(a,b,c,d,e,f){__p&&__p();a=Object.freeze({OWN:b("ShareModeConst").SELF_POST,PERSON:b("ShareModeConst").FRIEND,GROUP:b("ShareModeConst").GROUP,EVENT:b("ShareModeConst").EVENT,PAGE:b("ShareModeConst").PAGE,FUNDRAISER:b("ShareModeConst").FUNDRAISER,MESSAGE:b("ShareModeConst").MESSAGE,SILENT_DISCO:b("ShareModeConst").SILENT_DISCO});var g=b("getObjectValues")(a);c=Object.freeze(babelHelpers["extends"]({},a,{ALL:g}));function h(a){return g.some(function(b){return b===a})}d=babelHelpers["extends"]({},c,{isValid:h,propType:function(a,b){if(!h(a[b]))throw new Error("Invalid audience "+a[b])}});e.exports=d}),null);
__d("CreditCardFormParam",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",CARD_HOLDER_NAME:"card_holder_name",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",COMBINED_PAYMENT_TYPE:"combined_payment_type",RECEIVER_ID:"receiver_id",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance",IS_CHECKOUT_ELIGIBLE:"is_checkout_eligible",CHECKOUT_SAVE_CC_WITH_AUTH:"checkout_save_cc_with_auth",CHECKOUT_FUND_AMOUNT:"checkout_fund_amount",FLOW_PLACEMENT:"flow_placement",FLOW_TYPE:"flow_type",STORED_BALANCE_STATUS:"stored_balance_status",SESSION_ID:"session_id"})}),null);
__d("CreditCardTypeField",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"unknown",VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"american_express",JCB:"jcb",DINERS_CLUB:"diners_club",CUP:"cup",RUPAY:"rupay"})}),null);
__d("ModalPhotoEditorTabName",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CUSTOM_ACCESSIBILITY_CAPTION:"custom_accessibility_caption",CROP:"crop",FILTERS:"filters",FRAMES:"frames",PRODUCT_TAG:"product_tag",STICKERS:"stickers",TAG:"tag",TEXT:"text"})}),null);
__d("XPaymentsCreditCardMutationType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CREATE:"create",UPDATE:"update",CACHE_CVV:"cache_cvv"})}),null);
__d("XPaymentsCreditCardMutatorParam",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUTH_LOG_ID:"auth_log_id",MUTATION_TYPE:"mutation_type",CARD_FBID:"cc_fbid",CACHE_TOKEN:"cache_token",ERRORS:"errors",GENERAL_ERROR:"general",FIELD_ERRORS:"fields",ERROR_CODE:"code",ERROR_MSG:"message",ERROR_TITLE:"title"})}),null);
__d("PaymentMethodUtils",["fbt","ix","CreditCardTypeEnum","CreditCardTypeField"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=16,j=4,k=[{pattern:/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/,name:"mc",cscDigits:3,digits:16,supported:!0,code:77,type:b("CreditCardTypeField").MASTERCARD},{pattern:/^4/,name:"visa",cscDigits:3,digits:16,supported:!0,code:86,type:b("CreditCardTypeField").VISA},{pattern:/^3[47]/,name:"amex",cscDigits:4,digits:15,supported:!0,code:65,type:b("CreditCardTypeField").AMERICAN_EXPRESS},{pattern:/^35(2[8-9]|[3-8])/,name:"jcb",cscDigits:3,digits:16,supported:!0,code:74,type:b("CreditCardTypeField").JCB},{pattern:/^62/,name:"cup",cscDigits:3,digits:16,supported:!0,code:80,type:"china_union_pay"},{pattern:/^(6011|65|64[4-9])/,name:"disc",cscDigits:3,digits:16,supported:!0,code:68,type:b("CreditCardTypeField").DISCOVER},{pattern:/^30[0-5]/,name:"diners",digits:14,cscDigits:3,supported:!1,code:64,type:b("CreditCardTypeField").DINERS_CLUB},{name:"unknown",pattern:null,digits:16,cscDigits:3,supported:!1,code:85,type:b("CreditCardTypeField").UNKNOWN}],l=function(a){return a.replace(/[iIl]/g,"1").replace(/[Oo]/g,"0").replace(/[^\d]/gi,"")},m={getCardType:function(a){a=l(a);a=a.substr(0,6);for(var b=0;b<k.length;b++)if(k[b].pattern&&a.match(k[b].pattern))return k[b];return k[k.length-1]},getCardTypeFromFieldType:function(a){var b=k.find(function(b){return a===b.type})||k[k.length-1];return b},getCardTypeFromCode:function(a){for(var b=0;b<k.length;b++)if(a==k[b].code)return k[b];return null},isValidCCNumber:function(a){a=l(a);var b=m.getCardType(a);if(b.digits!==a.length)return!1;return!b.supported?!1:m.isValidLuhn(a)},isValidLuhn:function(a){__p&&__p();a=l(a);a=a.split("").reverse();var b="";for(var c=0;c<a.length;c++){var d=parseInt(a[c],10);c%2!==0&&(d=d*2);b=b+d}d=0;for(c=0;c<b.length;c++)d=d+parseInt(b.charAt(c),10);return!!(d!==0&&d%10===0)},getMaxCardLength:function(a){return i},getMaxCSCLength:function(){return j},getImageForCard:function(a){return this.getImageForCardType(a.name)},getImageForCardType:function(a){switch(a){case"visa":return h("95533");case"mc":return h("95531");case"amex":return h("95528");case"disc":return h("95529");case"jcb":return h("95530");default:return h("95526")}},getImageForPayPal:function(){return h("95532")},getCreditCardString:function(a){switch(a){case b("CreditCardTypeEnum").VISA:return g._("Visa");case b("CreditCardTypeEnum").MASTERCARD:return g._("Mastercard");case b("CreditCardTypeEnum").DISCOVER:return g._("Discover");case b("CreditCardTypeEnum").AMERICANEXPRESS:return g._("Amex");case b("CreditCardTypeEnum").JCB:return g._("JCB");case b("CreditCardTypeEnum").DINERSCLUB:return g._("Diners");default:return g._("Credit Card")}}};e.exports=m}),null);
__d("PaymentTokenProxyUtils",["CurrentEnvironment","URI"],(function(a,b,c,d,e,f){__p&&__p();a={getURI:function(a){var c=arguments.length<=1||arguments[1]===undefined?null:arguments[1],d=new(b("URI"))("/ajax/payment/token_proxy.php").setDomain(window.location.hostname).setProtocol("https").addQueryData(a),e=d.getDomain().split(".");e.indexOf("secure")<0&&(e.splice(1,0,"secure"),c==="www"||c==="secure"?e[0]!=="secure"&&e.shift():c!==null?e[0]==="secure"?e.splice(0,0,c):e[0]=c:e[0]=="www"&&e.shift(),d.setDomain(e.join(".")));if(b("CurrentEnvironment").messengerdotcom){var f=d.getDomain();f=f.replace("messenger.com","facebook.com");d.setDomain(f)}return d}};e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/RnmcK_t08C9/
 */
__d("react-0.0.0",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return a&&typeof a==="object"&&"default"in a?a["default"]:a}var g=a(b("React"));c={};var h={exports:c};function i(){h.exports=g}var j=!1,k=function(){j||(j=!0,i());return h.exports};d=function(a){switch(a){case undefined:return k()}};e.exports=d}),null);
__d("XP2PAddressCreateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/p2p/address/_create/",{})}),null);
__d("XPagesManagerMessagesController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/messages/",{page_token:{type:"String",required:!0},business_id:{type:"Int"},folder:{type:"String"},ref:{type:"String"},section:{type:"String"},subsection:{type:"String"},threadid:{type:"String"},index:{type:"Int"},initialClientFilter:{type:"String"}})}),null);
__d("XPaymentsCreditCardMutatorController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/payments/credit_card/mutator/{mutation_type}/",{mutation_type:{type:"Enum",enumType:1}})}),null);
__d("XShareDialogSubmitController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/share/dialog/submit/",{post_id:{type:"Int"},share_type:{type:"Int"},url:{type:"String"},audience_type:{type:"String"},owner_id:{type:"Int"},app_id:{type:"Int"},message:{type:"String"},shared_ad_id:{type:"Int"},sharer_id:{type:"Int"},source:{type:"String"},composer_session_id:{type:"String"},audience_targets:{type:"IntVector"},album_id:{type:"Int"},ephemeral_ttl_mode:{type:"Int"},tagged_people:{type:"IntVector"},tagged_place:{type:"Int"},tagged_action:{type:"Int"},tagged_object:{type:"Int"},tagged_object_str:{type:"String"},tagged_action_icon:{type:"Int"},tagged_feed_topics:{type:"StringVector"},attribution:{type:"Int"},privacy:{type:"String"},messaging_tags:{type:"StringVector"},ft:{type:"HackType"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},share_now:{type:"Bool",defaultValue:!1},is_forced_reshare_of_post:{type:"Bool",defaultValue:!1},is_throwback_post:{type:"Bool",defaultValue:!1},targeted_privacy_data:{type:"HackType"},unpublished_content_type:{type:"Enum",enumType:0},branded_content_repost_root:{type:"Int"},share_to_group_as_page:{type:"Bool",defaultValue:!1},shared_to_group_id:{type:"Int"},civic_product_source:{type:"String"},holiday_card_source:{type:"Enum",enumType:1},shared_from_post_id:{type:"Int"},silent_disco_friends:{type:"IntVector"},silent_disco_audience_id:{type:"Int"},silent_disco_audience_type:{type:"Enum",enumType:1},logging_session_id:{type:"String"},section_name:{type:"String"},perform_messenger_logging:{type:"Bool",defaultValue:!1}})}),null);