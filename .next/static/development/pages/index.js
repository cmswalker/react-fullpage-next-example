((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @fullpage/react-fullpage 0.1.4
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.3 - Extensions 0.1.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e.fullpage=o(t,n),e.fullpage}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,window,document,function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,r="fp-responsive",i="fp-notransition",l="fp-destroyed",a="fp-enabled",s="fp-viewing",c="active",u="."+c,f="fp-completely",d="."+f,v=".section",p="fp-section",h="."+p,g=h+u,m="fp-tableCell",S="."+m,b="fp-auto-height",w="fp-normal-scroll",y="fp-nav",E="#"+y,x="fp-tooltip",L="."+x,A="fp-show-active",M=".slide",T="fp-slide",O="."+T,k=O+u,C="fp-slides",H="."+C,R="fp-slidesContainer",I="."+R,z="fp-table",B="fp-initial",N="fp-slidesNav",j="."+N,P=j+" a",Y="fp-controlArrow",D="."+Y,W="fp-prev",V=Y+" "+W,X=D+("."+W),Z="fp-next",G=Y+" "+Z,F=D+".fp-next";function U(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function _(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function Q(e){e=e||{};for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var o in n)n.hasOwnProperty(o)&&("object"==typeof n[o]&&null!=n[o]?e[o]=Q(e[o],n[o]):e[o]=n[o])}return e}function J(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function K(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function q(e,t){var n;for(n in e=le(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function $(e,t,n){for(var o=e[n];o&&!Ae(o,t);)o=o[n];return o}function ee(e,t){return $(e,t,"previousElementSibling")}function te(e,t){return $(e,t,"nextElementSibling")}function ne(e,t){if(null==t)return e.previousElementSibling;var n=ne(e);return n&&Ae(n,t)?n:null}function oe(e,t){if(null==t)return e.nextElementSibling;var n=oe(e);return n&&Ae(n,t)?n:null}function re(e){return e[e.length-1]}function ie(e,t){e=ce(e)?e[0]:e;for(var n=null!=t?_(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function le(e){return ce(e)?e:[e]}function ae(e){e=le(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function se(e){e=le(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function ce(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ue(e,t){e=le(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function fe(e,t){e=le(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function de(e,t){t.appendChild(e)}function ve(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function pe(e,t){ve(e,t,!0)}function he(e,t){for("string"==typeof t&&(t=Te(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function ge(e,t){return e&&1===e.nodeType?Ae(e,t)?e:ge(e.parentNode,t):null}function me(e,t){be(e,e.nextSibling,t)}function Se(e,t){be(e,e,t)}function be(e,t,n){ce(n)||("string"==typeof n&&(n=Te(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function we(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function ye(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function Ee(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function xe(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Le(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function Ae(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Me(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Te(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function Oe(e){e=le(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function ke(e,t,n){for(var o=e[n],r=[];o;)(Ae(o,t)||null==t)&&r.push(o),o=o[n];return r}function Ce(e,t){return ke(e,t,"nextElementSibling")}function He(e,t){return ke(e,t,"previousElementSibling")}function Re(e,t){e.insertBefore(t,e.firstChild)}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:_,deepExtend:Q,hasClass:J,getWindowHeight:K,css:q,until:$,prevUntil:ee,nextUntil:te,prev:ne,next:oe,last:re,index:ie,getList:le,hide:ae,show:se,isArrayOrList:ce,addClass:ue,removeClass:fe,appendTo:de,wrap:ve,wrapAll:pe,wrapInner:he,closest:ge,after:me,before:Se,insertBefore:be,getScrollTop:we,siblings:ye,preventDefault:Ee,isFunction:xe,trigger:Le,matches:Ae,toggle:Me,createElementFromHTML:Te,remove:Oe,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:ke,nextAll:Ce,prevAll:He,showError:U,prependTo:Re,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=J(e,t);o&&null==n||!n?fe(e,t):(!o&&null==n||n)&&ue(e,t)}}},function(Y,Z){var $=Z&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|OPEN-SOURCE-GPLV3-LICENSE").test(Z.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1;if(!J(_("html"),a)){var le=_("html, body"),ce=_("body")[0],ve={};Z=Q({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:v,slideSelector:M,v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},Z);var be,ke,Ie,ze,Be=!1,Ne=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),je="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Pe="string"==typeof Y?_(Y)[0]:Y,Ye=K(),De=!1,We=!0,Ve=!0,Xe=[],Ze={m:{up:!0,down:!0,left:!0,right:!0}};Ze.k=Q({},Ze.m);var Ge,Fe,Ue,_e,Qe,Je,Ke,qe,$e,et=Jn(),tt={touchmove:"ontouchmove"in e?"touchmove":et.move,touchstart:"ontouchstart"in e?"touchstart":et.down},nt=!1,ot='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',rt=Q({},Z),it={};so(),e.fp_easings=Q(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),Pe&&(ve.version="3.0.2",ve.setAutoScrolling=St,ve.setRecordHistory=bt,ve.setScrollingSpeed=wt,ve.setFitToSection=yt,ve.setLockAnchors=function(e){Z.lockAnchors=e},ve.setMouseWheelScrolling=Et,ve.setAllowScrolling=xt,ve.setKeyboardScrolling=At,ve.moveSectionUp=Mt,ve.moveSectionDown=Tt,ve.silentMoveTo=Ot,ve.moveTo=kt,ve.moveSlideRight=Ct,ve.moveSlideLeft=Ht,ve.fitToSection=Xt,ve.reBuild=Rt,ve.setResponsive=It,ve.getFullpageData=function(){return{options:Z,internals:{container:Pe,canScroll:Ve,isScrollAllowed:Ze,getDestinationPosition:$t,isTouch:je,c:mn,getXmovement:Yn,removeAnimation:Nn,getTransforms:eo,lazyLoad:sn,addAnimation:Bn,performHorizontalMove:Rn,landscapeScroll:kn,silentLandscapeScroll:qn,keepSlidesPosition:qt,silentScroll:$n,styleSlides:Pt,scrollHandler:Vt,getEventsPage:Kn,getMSPointer:Jn,isReallyTouch:Ut,usingExtension:oo,toggleControlArrows:Cn,touchStartHandler:_t,touchMoveHandler:Ft}}},ve.destroy=function(n){Le(Pe,"destroy",n),St(!1,"internal"),xt(!0),Lt(!1),At(!1),ue(Pe,l),clearTimeout(_e),clearTimeout(Ue),clearTimeout(Fe),clearTimeout(Qe),clearTimeout(Je),e.removeEventListener("scroll",Vt),e.removeEventListener("hashchange",wn),e.removeEventListener("resize",In),t.removeEventListener("keydown",En),t.removeEventListener("keyup",xn),["click","touchstart"].forEach(function(e){t.removeEventListener(e,zt)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,Nt,!0)}),oo("dragAndMove")&&ve.dragAndMove.destroy(),clearTimeout(_e),clearTimeout(Ue),n&&($n(0),_("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Pe).forEach(function(e){an(e,"src")}),_("img[data-srcset]").forEach(function(e){an(e,"srcset")}),Oe(_(E+", "+j+", "+D)),q(_(h),{height:"","background-color":"",padding:""}),q(_(O),{width:""}),q(Pe,{height:"",position:"","-ms-touch-action":"","touch-action":""}),q(le,{overflow:"",height:""}),fe(_("html"),a),fe(ce,r),ce.className.split(/\s+/).forEach(function(e){0===e.indexOf(s)&&fe(ce,e)}),_(h+", "+O).forEach(function(e){Z.scrollOverflowHandler&&Z.scrollOverflowHandler.remove(e),fe(e,z+" "+c+" "+f);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles"))}),no(Pe),[S,I,H].forEach(function(e){_(e,Pe).forEach(function(e){e.outerHTML=e.innerHTML})}),e.scrollTo(0,0),[p,T,R].forEach(function(e){fe(_("."+e),e)}))},ve.getActiveSection=function(){return new vo(_(g)[0])},ve.getActiveSlide=function(){return on(_(k,_(g)[0])[0])},ve.landscapeScroll=kn,ve.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<_(Z.sectionSelector,Pe).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<_(Z.sectionSelector,Pe).length;t++)e.push(0);return e}(),options:Z,setAutoScrolling:St},ve.shared={afterRenderActions:Wt},e.fullpage_api=ve,jt("continuousHorizontal"),jt("scrollHorizontally"),jt("resetSliders"),jt("interlockedSlides"),jt("responsiveSlides"),jt("fadingEffect"),jt("dragAndMove"),jt("offsetSections"),jt("scrollOverflowReset"),jt("parallax"),oo("dragAndMove")&&ve.dragAndMove.init(),Z.css3&&(Z.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}()),Z.scrollBar=Z.scrollBar||Z.hybrid,function(){if(!Z.anchors.length){var e="[data-anchor]",t=_(Z.sectionSelector.split(",").join(e+",")+e,Pe);t.length&&t.forEach(function(e){Z.anchors.push(e.getAttribute("data-anchor").toString())})}if(!Z.navigationTooltips.length){var e="[data-tooltip]",n=_(Z.sectionSelector.split(",").join(e+",")+e,Pe);n.length&&n.forEach(function(e){Z.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){q(Pe,{height:"100%",position:"relative"}),ue(Pe,n),ue(_("html"),a),Ye=K(),fe(Pe,l),ue(_(Z.sectionSelector,Pe),p),ue(_(Z.slideSelector,Pe),T),ro("parallax","init");for(var e=_(h),r=0;r<e.length;r++){var i=r,s=e[r],u=_(O,s),f=u.length;s.setAttribute("data-fp-styles",s.getAttribute("style")),m=s,(S=i)||null!=_(g)[0]||ue(m,c),ze=_(g)[0],q(m,{height:Yt(m)+"px"}),Z.paddingTop&&q(m,{"padding-top":Z.paddingTop}),Z.paddingBottom&&q(m,{"padding-bottom":Z.paddingBottom}),void 0!==Z.sectionsColor[S]&&q(m,{"background-color":Z.sectionsColor[S]}),void 0!==Z.anchors[S]&&m.setAttribute("data-anchor",Z.anchors[S]),d=s,v=i,void 0!==Z.anchors[v]&&J(d,c)&&jn(Z.anchors[v],v),Z.menu&&Z.css3&&null!=ge(_(Z.menu)[0],o)&&ce.appendChild(_(Z.menu)[0]),f>0?Pt(s,u,f):Z.verticalCentered&&Dn(s)}var d,v,m,S;Z.fixedElements&&Z.css3&&_(Z.fixedElements).forEach(function(e){ce.appendChild(e)}),Z.navigation&&function(){var e=t.createElement("div");e.setAttribute("id",y);var n=t.createElement("ul");e.appendChild(n),de(e,ce);var o=_(E)[0];ue(o,"fp-"+Z.navigationPosition),Z.showActiveTooltip&&ue(o,A);for(var r="",i=0;i<_(h).length;i++){var l="";Z.anchors.length&&(l=Z.anchors[i]),r+='<li><a href="#'+l+'"><span class="fp-sr-only">'+Dt(i,"Section")+"</span><span></span></a>";var a=Z.navigationTooltips[i];void 0!==a&&""!==a&&(r+='<div class="'+x+" fp-"+Z.navigationPosition+'">'+a+"</div>"),r+="</li>"}_("ul",o)[0].innerHTML=r,q(_(E),{"margin-top":"-"+_(E)[0].offsetHeight/2+"px"}),ue(_("a",_("li",_(E)[0])[ie(_(g)[0],h)]),c)}(),_('iframe[src*="youtube.com/embed/"]',Pe).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),Z.fadingEffect&&ve.fadingEffect&&ve.fadingEffect.apply(),Z.scrollOverflow?Ge=Z.scrollOverflowHandler.init(Z):Wt()}(),xt(!0),Lt(!0),St(Z.autoScrolling,"internal"),zn(),Qn(),"complete"===t.readyState&&bn(),e.addEventListener("load",bn),e.addEventListener("scroll",Vt),e.addEventListener("hashchange",wn),e.addEventListener("blur",Tn),e.addEventListener("resize",In),t.addEventListener("keydown",En),t.addEventListener("keyup",xn),["click","touchstart"].forEach(function(e){t.addEventListener(e,zt)}),Z.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Bt(e,!1)}),["mouseleave","touchend"].forEach(function(e){Bt(e,!0)})),oo("dragAndMove")&&ve.dragAndMove.turnOffTouch());var lt,at,st,ct=!1,ut=0,ft=0,dt=0,vt=0,pt=(new Date).getTime(),ht=0,gt=0,mt=Ye;return ve}function St(e,t){e||$n(0),ao("autoScrolling",e,t);var n=_(g)[0];if(Z.autoScrolling&&!Z.scrollBar)q(le,{overflow:"hidden",height:"100%"}),bt(rt.recordHistory,"internal"),q(Pe,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&$n(n.offsetTop);else if(q(le,{overflow:"visible",height:"initial"}),bt(!1,"internal"),q(Pe,{"-ms-touch-action":"","touch-action":""}),no(Pe),null!=n){var o=rn(n.offsetTop);o.element.scrollTo(0,o.options)}Le(Pe,"setAutoScrolling",e)}function bt(e,t){ao("recordHistory",e,t)}function wt(e,t){"internal"!==t&&Z.fadingEffect&&ve.fadingEffect&&ve.fadingEffect.update(e),ao("scrollingSpeed",e,t)}function yt(e,t){ao("fitToSection",e,t)}function Et(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",Jt,!1):t[n](o+r,Jt,!1)}(),Pe.addEventListener("mousedown",Ln),Pe.addEventListener("mouseup",An)):(t.addEventListener?(t.removeEventListener("mousewheel",Jt,!1),t.removeEventListener("wheel",Jt,!1),t.removeEventListener("MozMousePixelScroll",Jt,!1)):t.detachEvent("onmousewheel",Jt),Pe.removeEventListener("mousedown",Ln),Pe.removeEventListener("mouseup",An))}function xt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){to(e,t,"m")}):to(e,"all","m"),Le(Pe,"setAllowScrolling",{value:e,directions:t})}function Lt(e){e?(Et(!0),(Ne||je)&&(Z.autoScrolling&&(ce.removeEventListener(tt.touchmove,Gt,{passive:!1}),ce.addEventListener(tt.touchmove,Gt,{passive:!1})),_(o)[0].removeEventListener(tt.touchstart,_t),_(o)[0].removeEventListener(tt.touchmove,Ft,{passive:!1}),_(o)[0].addEventListener(tt.touchstart,_t),_(o)[0].addEventListener(tt.touchmove,Ft,{passive:!1}))):(Et(!1),(Ne||je)&&(Z.autoScrolling&&(ce.removeEventListener(tt.touchmove,Ft,{passive:!1}),ce.removeEventListener(tt.touchmove,Gt,{passive:!1})),_(o)[0].removeEventListener(tt.touchstart,_t),_(o)[0].removeEventListener(tt.touchmove,Ft,{passive:!1})))}function At(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){to(e,t,"k")}):(to(e,"all","k"),Z.keyboardScrolling=e)}function Mt(){var e=ee(_(g)[0],h);e||!Z.loopTop&&!Z.continuousVertical||(e=re(_(h))),null!=e&&en(e,null,!0)}function Tt(){var e=te(_(g)[0],h);e||!Z.loopBottom&&!Z.continuousVertical||(e=_(h)[0]),null!=e&&en(e,null,!1)}function Ot(e,t){wt(0,"internal"),kt(e,t),wt(rt.scrollingSpeed,"internal")}function kt(e,t){var n=Xn(e);void 0!==t?Zn(e,t):null!=n&&en(n)}function Ct(e){Kt("right",e)}function Ht(e){Kt("left",e)}function Rt(t){if(!J(Pe,l)){De=!0,Ye=K();for(var n=_(h),o=0;o<n.length;++o){var r=n[o],i=_(H,r)[0],a=_(O,r);Z.verticalCentered&&q(_(S,r),{height:Wn(r)+"px"}),q(r,{height:Yt(r)+"px"}),a.length>1&&kn(i,_(k,i)[0])}Z.scrollOverflow&&Ge.createScrollBarForAll();var s=ie(_(g)[0],h);s&&!oo("fadingEffect")&&Ot(s+1),De=!1,xe(Z.afterResize)&&t&&Z.afterResize.call(Pe,e.innerWidth,e.innerHeight),xe(Z.afterReBuild)&&!t&&Z.afterReBuild.call(Pe),Le(Pe,"afterRebuild")}}function It(e){var t=J(ce,r);e?t||(St(!1,"internal"),yt(!1,"internal"),ae(_(E)),ue(ce,r),xe(Z.afterResponsive)&&Z.afterResponsive.call(Pe,e),Z.responsiveSlides&&ve.responsiveSlides&&ve.responsiveSlides.toSections(),Le(Pe,"afterResponsive",e),Z.scrollOverflow&&Ge.createScrollBarForAll()):t&&(St(rt.autoScrolling,"internal"),yt(rt.autoScrolling,"internal"),se(_(E)),fe(ce,r),xe(Z.afterResponsive)&&Z.afterResponsive.call(Pe,e),Z.responsiveSlides&&ve.responsiveSlides&&ve.responsiveSlides.toSlides(),Le(Pe,"afterResponsive",e))}function zt(e){var t=e.target;t&&ge(t,E+" a")?function(e){Ee(e);var t=ie(ge(this,E+" li"));en(_(h)[t])}.call(t,e):Ae(t,L)?function(){Le(ne(this),"click")}.call(t):Ae(t,D)?function(){var e=ge(this,h);J(this,W)?Ze.m.left&&Ht(e):Ze.m.right&&Ct(e)}.call(t,e):(Ae(t,P)||null!=ge(t,P))&&function(e){Ee(e);var t=_(H,ge(this,h))[0],n=_(O,t)[ie(ge(this,"li"))];kn(t,n)}.call(t,e)}function Bt(e,n){t["fp_"+e]=n,t.addEventListener(e,Nt,!0)}function Nt(e){e.target!=t&&Z.normalScrollElements.split(",").forEach(function(n){Ae(e.target,n)&&Lt(t["fp_"+e.type])})}function jt(t){var n="fp_"+t+"Extension";it[t]=Z[t+"Key"],ve[t]=void 0!==e[n]?new e[n]:null,ve[t]&&ve[t].c(t)}function Pt(e,n,o){var r=100*o,i=100/o,l=t.createElement("div");l.className=C,pe(n,l);var a,s,u=t.createElement("div");u.className=R,pe(n,u),q(_(I,e),{width:r+"%"}),o>1&&(Z.controlArrows&&(a=e,s=[Te('<div class="'+V+'"></div>'),Te('<div class="'+G+'"></div>')],me(_(H,a)[0],s),"#fff"!==Z.controlArrowColor&&(q(_(F,a),{"border-color":"transparent transparent transparent "+Z.controlArrowColor}),q(_(X,a),{"border-color":"transparent "+Z.controlArrowColor+" transparent transparent"})),Z.loopHorizontal||ae(_(X,a))),Z.slidesNavigation&&function(e,t){de(Te('<div class="'+N+'"><ul></ul></div>'),e);var n=_(j,e)[0];ue(n,"fp-"+Z.slidesNavPosition);for(var o=0;o<t;o++)de(Te('<li><a href="#"><span class="fp-sr-only">'+Dt(o,"Slide")+"</span><span></span></a></li>"),_("ul",n)[0]);q(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ue(_("a",_("li",n)[0]),c)}(e,o)),n.forEach(function(e){q(e,{width:i+"%"}),Z.verticalCentered&&Dn(e)});var f=_(k,e)[0];null!=f&&(0!==ie(_(g),h)||0===ie(_(g),h)&&0!==ie(f))?(qn(f,"internal"),ue(f,B)):ue(n[0],c)}function Yt(e){return Z.offsetSections&&ve.offsetSections?Math.round(ve.offsetSections.getWindowHeight(e)):K()}function Dt(e,t){return Z.navigationTooltips[e]||Z.anchors[e]||t+" "+(e+1)}function Wt(){var e,t=_(g)[0];ue(t,f),sn(t),cn(t),Z.scrollOverflow&&Z.scrollOverflowHandler.afterLoad(),(!(e=Xn(yn().section))||void 0!==e&&ie(e)===ie(ze))&&xe(Z.afterLoad)&&tn("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:ie(t,h)}),xe(Z.afterRender)&&tn("afterRender"),Le(Pe,"afterRender")}function Vt(){var e;if(Le(Pe,"onScroll"),(!Z.autoScrolling||Z.scrollBar||oo("dragAndMove"))&&!lo()){var t=oo("dragAndMove")?Math.abs(ve.dragAndMove.getCurrentScroll()):we(),n=0,o=t+K()/2,r=(oo("dragAndMove")?ve.dragAndMove.getDocumentHeight():ce.offsetHeight-K())===t,i=_(h);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!J(e=i[n],c)){ct=!0;var a,s,u=_(g)[0],f=ie(u,h)+1,d=Pn(e),v=e.getAttribute("data-anchor"),p=ie(e,h)+1,m=_(k,e)[0],S={activeSection:u,sectionIndex:p-1,anchorLink:v,element:e,leavingSection:f,direction:d};m&&(s=m.getAttribute("data-anchor"),a=ie(m)),Ve&&(ue(e,c),fe(ye(e),c),ro("parallax","afterLoad"),xe(Z.onLeave)&&tn("onLeave",S),xe(Z.afterLoad)&&tn("afterLoad",S),Z.resetSliders&&ve.resetSliders&&ve.resetSliders.apply({localIsResizing:De,leavingSection:f}),fn(u),sn(e),cn(e),jn(v,p-1),Z.anchors.length&&(be=v),Fn(a,s,v)),clearTimeout(Qe),Qe=setTimeout(function(){ct=!1},100)}Z.fitToSection&&(clearTimeout(Je),Je=setTimeout(function(){Z.fitToSection&&_(g)[0].offsetHeight<=Ye&&Xt()},Z.fitToSectionDelay))}}function Xt(){Ve&&(De=!0,en(_(g)[0]),De=!1)}function Zt(e){if(Ze.m[e]){var t="down"===e?Tt:Mt;if(ve.scrollHorizontally&&(t=ve.scrollHorizontally.getScrollSection(e,t)),Z.scrollOverflow){var n=Z.scrollOverflowHandler.scrollable(_(g)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!Z.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Gt(e){Z.autoScrolling&&Ut(e)&&Ee(e)}function Ft(t){var n=ge(t.target,h);if(Ut(t)){Z.autoScrolling&&Ee(t);var o=Kn(t);dt=o.y,vt=o.x,_(H,n).length&&Math.abs(ft-vt)>Math.abs(ut-dt)?!Be&&Math.abs(ft-vt)>e.innerWidth/100*Z.touchSensitivity&&(ft>vt?Ze.m.right&&Ct(n):Ze.m.left&&Ht(n)):Z.autoScrolling&&Ve&&Math.abs(ut-dt)>e.innerHeight/100*Z.touchSensitivity&&(ut>dt?Zt("down"):dt>ut&&Zt("up"))}}function Ut(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function _t(e){if(Z.fitToSection&&($e=!1),Ut(e)){var t=Kn(e);ut=t.y,ft=t.x}}function Qt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Jt(t){var n=(new Date).getTime(),o=J(_(d)[0],w);if(!Ze.m.down&&!Ze.m.up)return Ee(t),!1;if(Z.autoScrolling&&!Ie&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;Xe.length>149&&Xe.shift(),Xe.push(Math.abs(r)),Z.scrollBar&&Ee(t);var s=n-pt;return pt=n,s>200&&(Xe=[]),Ve&&!io()&&Qt(Xe,10)>=Qt(Xe,70)&&a&&Zt(i<0?"down":"up"),!1}Z.fitToSection&&($e=!1)}function Kt(e,t){var n=null==t?_(g)[0]:t,o=_(H,n)[0];if(!(null==o||io()||Be||_(O,o).length<2)){var r=_(k,o)[0],i=null;if(null==(i="left"===e?ee(r,O):te(r,O))){if(!Z.loopHorizontal)return;var l=ye(r);i="left"===e?l[l.length-1]:l[0]}Be=!ve.test.isTesting,kn(o,i,e)}}function qt(){for(var e=_(k),t=0;t<e.length;t++)qn(e[t],"internal")}function $t(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=oo("dragAndMove")&&ve.dragAndMove.isGrabbing?ve.dragAndMove.isScrollingDown():n>ht,i=o-Ye+t,l=Z.bigSectionsDestination;return t>Ye?(r||l)&&"bottom"!==l||(o=i):(r||De&&null==oe(e))&&(o=i),Z.offsetSections&&ve.offsetSections&&(o=ve.offsetSections.getSectionPosition(r,o,e)),ht=o,o}function en(e,t,n){if(null!=e){var r,i,l={element:e,callback:t,isMovementUp:n,dtop:$t(e),yMovement:Pn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:ie(e,h),activeSlide:_(k,e)[0],activeSection:_(g)[0],leavingSection:ie(_(g),h)+1,localIsResizing:De};if(!(l.activeSection==e&&!De||Z.scrollBar&&we()===l.dtop&&!J(e,b))){if(null!=l.activeSlide&&(r=l.activeSlide.getAttribute("data-anchor"),i=ie(l.activeSlide)),xe(Z.onLeave)&&!l.localIsResizing){var a=l.yMovement;if(void 0!==n&&(a=n?"up":"down"),l.direction=a,!1===tn("onLeave",l))return}ro("parallax","apply",l),Z.autoScrolling&&Z.continuousVertical&&void 0!==l.isMovementUp&&(!l.isMovementUp&&"up"==l.yMovement||l.isMovementUp&&"down"==l.yMovement)&&((u=l).isMovementUp?Se(_(g)[0],Ce(u.activeSection,h)):me(_(g)[0],He(u.activeSection,h).reverse()),$n(_(g)[0].offsetTop),qt(),u.wrapAroundElements=u.activeSection,u.dtop=u.element.offsetTop,u.yMovement=Pn(u.element),u.leavingSection=ie(u.activeSection,h)+1,u.sectionIndex=ie(u.element,h),Le(_(o)[0],"onContinuousVertical",u),l=u),oo("scrollOverflowReset")&&ve.scrollOverflowReset.setPrevious(l.activeSection),l.localIsResizing||fn(l.activeSection),Z.scrollOverflow&&Z.scrollOverflowHandler.beforeLeave(),ue(e,c),fe(ye(e),c),sn(e),Z.scrollOverflow&&Z.scrollOverflowHandler.onLeave(),Ve=ve.test.isTesting,Fn(i,r,l.anchorLink,l.sectionIndex),function(e){if(Z.css3&&Z.autoScrolling&&!Z.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Vn(t,!0),Z.scrollingSpeed?(clearTimeout(Ue),Ue=setTimeout(function(){ln(e)},Z.scrollingSpeed)):ln(e)}else{var n=rn(e.dtop);ve.test.top=-e.dtop+"px",co(n.element,n.options,Z.scrollingSpeed,function(){Z.scrollBar?setTimeout(function(){ln(e)},30):ln(e)})}}(l),be=l.anchorLink,jn(l.anchorLink,null!=(s=l).wrapAroundElements?s.isMovementUp?_(h).length-1:0:s.sectionIndex)}}var s,u}function tn(e,t){var n,o,r,i,l=(o=e,r=t,(i=Z.v2compatible?{afterRender:function(){return[Pe]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:nn(_(g)[0]),slide:on(_(k,_(g)[0])[0])}},onLeave:function(){return{origin:nn(r.activeSection),destination:nn(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:nn(r.section),origin:on(r.prevSlide),destination:on(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(Z.v2compatible){if(!1===Z[e].apply(l[0],l.slice(1)))return!1}else if(Le(Pe,e,l),!1===Z[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function nn(e){return e?new vo(e):null}function on(e){return e?new function(e){fo.call(this,e,O)}(e):null}function rn(t){var n={};return Z.autoScrolling&&!Z.scrollBar?(n.options=-t,n.element=_(o)[0]):(n.options=t,n.element=e),n}function ln(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?Se(_(h)[0],t.wrapAroundElements):me(_(h)[_(h).length-1],t.wrapAroundElements),$n(_(g)[0].offsetTop),qt(),t.sectionIndex=ie(t.element,h),t.leavingSection=ie(t.activeSection,h)+1),xe(Z.afterLoad)&&!e.localIsResizing&&tn("afterLoad",e),Z.scrollOverflow&&Z.scrollOverflowHandler.afterLoad(),ro("parallax","afterLoad"),oo("scrollOverflowReset")&&ve.scrollOverflowReset.reset(),oo("resetSliders")&&ve.resetSliders.apply(e),e.localIsResizing||cn(e.element),ue(e.element,f),fe(ye(e.element),f),Ve=!0,xe(e.callback)&&e.callback()}function an(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function sn(e){Z.lazyLoading&&_("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",dn(e)).forEach(function(e){if(["src","srcset"].forEach(function(t){var n=e.getAttribute("data-"+t);null!=n&&n&&an(e,t)}),Ae(e,"source")){var t=ge(e,"video, audio");t&&t.load()}})}function cn(e){var t=dn(e);_("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),_('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&un(e),e.onload=function(){e.hasAttribute("data-autoplay")&&un(e)}})}function un(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function fn(e){var t=dn(e);_("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),_('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function dn(e){var t=_(k,e);return t.length&&(e=t[0]),e}function vn(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function n(e){var n,o,r,i,l,a,s="",c=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");c<e.length;)n=t.indexOf(e.charAt(c++))<<2|(i=t.indexOf(e.charAt(c++)))>>4,o=(15&i)<<4|(l=t.indexOf(e.charAt(c++)))>>2,r=(3&l)<<6|(a=t.indexOf(e.charAt(c++))),s+=String.fromCharCode(n),64!=l&&(s+=String.fromCharCode(o)),64!=a&&(s+=String.fromCharCode(r));return s=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):r>191&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(s)}function o(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(t.length>1){var r=t[1];return e.replace(o(t[1]),"").split("_")[0]+"_"+n(r.slice(3).slice(0,-3))}return o(e)}(n(e))}function pn(e){var n=function(){if(t.domain.length){for(var e=t.domain.replace(/^(www\.)/,"").split(".");e.length>2;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),o=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],r=vn(o[0]),i=vn(o[1]),l=vn(o[2]),a=vn(o[3]),s=[r,i,l].indexOf(n)<0&&0!==n.length,c=void 0!==it[e]&&it[e].length;if(!c&&s)return!1;var u=c?vn(it[e]):"",f=(u=u.split("_")).length>1&&u[1].indexOf(e,u[1].length-e.length)>-1;return!(u[0].indexOf(n,u[0].length-n.length)<0&&s&&a!=u[0])&&f||!s}function hn(e){e.forEach(function(e){e.removedNodes[0]&&e.removedNodes[0].isEqualNode(at)&&(clearTimeout(st),st=setTimeout(gn,900))})}function gn(){nt=!1}function mn(n){at=t.createElement("div"),lt=vn("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),at.innerHTML=lt,at=at.firstChild,"MutationObserver"in e&&new MutationObserver(hn).observe(t.body,{childList:!0,subtree:!1}),oo(n)&&ve[n]&&(pn(n)||(Sn(),setInterval(Sn,2e3)))}function Sn(){at&&(nt||(Math.random()<.5?Re(ce,at):de(at,ce),nt=!0),at.setAttribute("style",vn("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,vn("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function bn(){var e=yn(),t=e.section,n=e.slide;t&&(Z.animateAnchor?Zn(t,n):Ot(t,n))}function wn(){if(!ct&&!Z.lockAnchors){var e=yn(),t=e.section,n=e.slide,o=void 0===be,r=void 0===be&&void 0===n&&!Be;t&&t.length&&(t&&t!==be&&!o||r||!Be&&ke!=n)&&Zn(t,n)}}function yn(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function En(e){clearTimeout(Ke);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n,o,r,i,l,a,s,c=e.shiftKey,u=t.activeElement,f=Mn(dn(_(g)[0]));function d(e){return Ee(e),f[0]?f[0].focus():null}(n=e,o=Mn(t),r=o.indexOf(t.activeElement),i=n.shiftKey?r-1:r+1,l=o[i],a=on(ge(l,O)),s=nn(ge(l,h)),a||s)&&(u?null==ge(u,g+","+g+" "+k)&&(u=d(e)):d(e),(!c&&u==f[f.length-1]||c&&u==f[0])&&Ee(e))}(e):Ae(n,"textarea")||Ae(n,"input")||Ae(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!Z.keyboardScrolling||!Z.autoScrolling||([40,38,32,33,34].indexOf(o)>-1&&Ee(e),Ie=e.ctrlKey,Ke=setTimeout(function(){!function(e){var t=e.shiftKey;if(Ve||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:Ze.k.up&&Mt();break;case 32:if(t&&Ze.k.up){Mt();break}case 40:case 34:Ze.k.down&&Tt();break;case 36:Ze.k.up&&kt(1);break;case 35:Ze.k.down&&kt(_(h).length);break;case 37:Ze.k.left&&Ht();break;case 39:Ze.k.right&&Ct()}}(e)},150))}function xn(e){We&&(Ie=e.ctrlKey)}function Ln(e){2==e.which&&(gt=e.pageY,Pe.addEventListener("mousemove",On))}function An(e){2==e.which&&Pe.removeEventListener("mousemove",On)}function Mn(e){return[].slice.call(_(ot,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function Tn(){We=!1,Ie=!1}function On(e){Ve&&(e.pageY<gt&&Ze.m.up?Mt():e.pageY>gt&&Ze.m.down&&Tt()),gt=e.pageY}function kn(e,t,n){var o=ge(e,h),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:ie(t),section:o,sectionIndex:ie(o,h),anchorLink:o.getAttribute("data-anchor"),slidesNav:_(j,o)[0],slideAnchor:_n(t),prevSlide:_(k,o)[0],prevSlideIndex:ie(_(k,o)[0]),localIsResizing:De};r.xMovement=Yn(r.prevSlideIndex,r.slideIndex),r.localIsResizing||(Ve=!1),ro("parallax","applyHorizontal",r),Z.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&xe(Z.onSlideLeave)&&!1===tn("onSlideLeave",r)?Be=!1:(ue(t,c),fe(ye(t),c),r.localIsResizing||(fn(r.prevSlide),sn(t)),Cn(r),J(o,c)&&!r.localIsResizing&&Fn(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),ve.continuousHorizontal&&ve.continuousHorizontal.apply(r),lo()?Hn(r):Rn(e,r,!0),Z.interlockedSlides&&ve.interlockedSlides&&(oo("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||ve.interlockedSlides.apply(r)))}function Cn(e){!Z.loopHorizontal&&Z.controlArrows&&(Me(_(X,e.section),0!==e.slideIndex),Me(_(F,e.section),null!=oe(e.destiny)))}function Hn(e){var t,n;ve.continuousHorizontal&&ve.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,Z.slidesNavigation&&null!=t&&(fe(_(u,t),c),ue(_("a",_("li",t)[n]),c)),e.localIsResizing||(ro("parallax","afterSlideLoads"),xe(Z.afterSlideLoad)&&tn("afterSlideLoad",e),Ve=!0,cn(e.destiny)),Be=!1,oo("interlockedSlides")&&ve.interlockedSlides.apply(e)}function Rn(e,t,n){var o=t.destinyPos;if(Z.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";ve.test.translate3dH[t.sectionIndex]=r,q(Bn(_(I,e)),eo(r)),_e=setTimeout(function(){n&&Hn(t)},Z.scrollingSpeed)}else ve.test.left[t.sectionIndex]=Math.round(o.left),co(e,Math.round(o.left),Z.scrollingSpeed,function(){n&&Hn(t)})}function In(){if(Le(Pe,"onResize"),zn(),Ne){var e=t.activeElement;if(!Ae(e,"textarea")&&!Ae(e,"input")&&!Ae(e,"select")){var n=K();Math.abs(n-mt)>20*Math.max(mt,n)/100&&(Rt(!0),mt=n)}}else clearTimeout(Fe),Fe=setTimeout(function(){Rt(!0)},350)}function zn(){var t=Z.responsive||Z.responsiveWidth,n=Z.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?It(o||r):t?It(o):n&&It(r)}function Bn(e){var t="all "+Z.scrollingSpeed+"ms "+Z.easingcss3;return fe(e,i),q(e,{"-webkit-transition":t,transition:t})}function Nn(e){return ue(e,i)}function jn(e,t){var n,o,r,i;n=e,o=_(Z.menu)[0],Z.menu&&null!=o&&(fe(_(u,o),c),ue(_('[data-menuanchor="'+n+'"]',o),c)),r=e,i=t,Z.navigation&&null!=_(E)[0]&&(fe(_(u,_(E)[0]),c),ue(r?_('a[href="#'+r+'"]',_(E)[0]):_("a",_("li",_(E)[0])[i]),c))}function Pn(e){var t=ie(_(g)[0],h),n=ie(e,h);return t==n?"none":t>n?"up":"down"}function Yn(e,t){return e==t?"none":e>t?"left":"right"}function Dn(e){if(!J(e,z)){var n=t.createElement("div");n.className=m,n.style.height=Wn(e)+"px",ue(e,z),he(e,n)}}function Wn(e){var t=Yt(e);if(Z.paddingTop||Z.paddingBottom){var n=e;J(n,p)||(n=ge(e,h)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function Vn(e,t){t?Bn(Pe):Nn(Pe),clearTimeout(qe),q(Pe,eo(e)),ve.test.translate3d=e,qe=setTimeout(function(){fe(Pe,i)},10)}function Xn(e){var t=_(h+'[data-anchor="'+e+'"]',Pe)[0];if(!t){var n=void 0!==e?e-1:0;t=_(h)[n]}return t}function Zn(e,t){var n=Xn(e);if(null!=n){var o,r,i,l=(null==(i=_(O+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=_(O,r)[o]),i);_n(n)===be||J(n,c)?Gn(l):en(n,function(){Gn(l)})}}function Gn(e){null!=e&&kn(ge(e,H),e)}function Fn(e,t,n,o){var r="";Z.anchors.length&&!Z.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),ke=t,Un(r+"/"+t)):null!=e?(ke=t,Un(n)):Un(n)),Qn()}function Un(t){if(Z.recordHistory)location.hash=t;else if(Ne||je)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function _n(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=ie(e);return null==t&&(t=n),t}function Qn(){var e=_(g)[0],t=_(k,e)[0],n=_n(e),o=_n(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+s+"-[^\\s]+\\b","g");ce.className=ce.className.replace(i,""),ue(ce,s+"-"+r)}function Jn(){return e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Kn(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,je&&Ut(e)&&Z.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function qn(e,t){wt(0,"internal"),void 0!==t&&(De=!0),kn(ge(e,H),e),void 0!==t&&(De=!1),wt(rt.scrollingSpeed,"internal")}function $n(e){var t=Math.round(e);if(Z.css3&&Z.autoScrolling&&!Z.scrollBar)Vn("translate3d(0px, -"+t+"px, 0px)",!1);else if(Z.autoScrolling&&!Z.scrollBar)q(Pe,{top:-t+"px"}),ve.test.top=-t+"px";else{var n=rn(t);uo(n.element,n.options)}}function eo(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function to(e,t,n){"all"!==t?Ze[n][t]=e:Object.keys(Ze[n]).forEach(function(t){Ze[n][t]=e})}function no(e){return q(e,{"-webkit-transition":"none",transition:"none"})}function oo(e){return null!==Z[e]&&"[object Array]"===Object.prototype.toString.call(Z[e])?Z[e].length&&ve[e]:Z[e]&&ve[e]}function ro(e,t,n){if(oo(e))return ve[e][t](n)}function io(){return oo("dragAndMove")&&ve.dragAndMove.isAnimating}function lo(){return oo("dragAndMove")&&ve.dragAndMove.isGrabbing}function ao(e,t,n){Z[e]=t,"internal"!==n&&(rt[e]=t)}function so(){$||(U("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),U("error","https://github.com/alvarotrigo/fullPage.js#options.")),J(_("html"),a)?U("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(Z.continuousVertical&&(Z.loopTop||Z.loopBottom)&&(Z.continuousVertical=!1,U("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!Z.scrollOverflow||!Z.scrollBar&&Z.autoScrolling||U("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!Z.continuousVertical||!Z.scrollBar&&Z.autoScrolling||(Z.continuousVertical=!1,U("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),Z.scrollOverflow&&null==Z.scrollOverflowHandler&&(Z.scrollOverflow=!1,U("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),Z.anchors.forEach(function(e){var t=[].slice.call(_("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(_("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});(n.length||t.length)&&(U("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&U("error",'"'+e+'" is is being used by another element `id` property'),t.length&&U("error",'"'+e+'" is is being used by another element `name` property'))}))}function co(t,n,o,r){var i,l=(i=t).self!=e&&J(i,C)?i.scrollLeft:!Z.autoScrolling||Z.scrollBar?we():i.offsetTop,a=n-l,s=0;$e=!0;var c=function(){if($e){var i=n;s+=20,o&&(i=e.fp_easings[Z.easing](s,l,a,o)),uo(t,i),s<o?setTimeout(c,20):void 0!==r&&r()}else s<o&&r()};c()}function uo(t,n){!Z.autoScrolling||Z.scrollBar||t.self!=e&&J(t,C)?t.self!=e&&J(t,C)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function fo(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=ie(e,t),this.isLast=this.index===_(t).length-1,this.isFirst=!this.index}function vo(e){fo.call(this,e,h)}so()}}),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){var o=new t("#"+e(this).attr("id"),n);Object.keys(o).forEach(function(t){e.fn.fullpage[t]=o[t]})}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Wrapper/index.js
/* eslint-disable import/no-extraneous-dependencies */var Wrapper_Wrapper=function Wrapper(_ref){var children=_ref.children;return external_react_default.a.createElement(external_react_["Fragment"],null,children);};/* harmony default export */ var components_Wrapper = (Wrapper_Wrapper);
// CONCATENATED MODULE: ./components/index.js
/* eslint-disable *//* harmony default export */ var components = __webpack_exports__["default"] = ((function(){var exported=void 0;if(typeof window!=='undefined'){exported=__webpack_require__(9).default;}else{// NOTE: SSR support
exported=__webpack_require__(3).default;}exported.Wrapper=components_Wrapper;return exported;})());

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* eslint-disable import/no-extraneous-dependencies *//* eslint-disable react/prop-types */// NOTE: SSR support
var ReactFullpageShell=function(_React$Component){_inherits(ReactFullpageShell,_React$Component);function ReactFullpageShell(props){_classCallCheck(this,ReactFullpageShell);var _this=_possibleConstructorReturn(this,(ReactFullpageShell.__proto__||Object.getPrototypeOf(ReactFullpageShell)).call(this,props));_this.state={};return _this;}_createClass(ReactFullpageShell,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"fullpage"},this.props.render(this));}}]);return ReactFullpageShell;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpageShell);

/***/ }),
/* 4 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(4);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 3.0.3\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{position:relative}.fp-scrollable,.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;margin-top:-32px;top:50%;opacity:1;-webkit-transform:translateZ(0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li:hover a.active span,#fp-nav ul li a.active span,.fp-slidesNav ul li:hover a.active span,.fp-slidesNav ul li a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav.fp-show-active a.active+.fp-tooltip,#fp-nav ul li:hover .fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height.fp-section,.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section,.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", "", {"version":3,"sources":["/Users/mwalker/opensource/react-fullpage/node_modules/fullpage.js/dist/fullpage.min.css"],"names":[],"mappings":"AAAA;;;;;;;;;GASG,iCAAiC,SAAS,UAAU,gBAAgB,yCAAyC,CAAC,YAAY,kBAAkB,8BAA8B,2BAA2B,qBAAqB,CAAC,UAAU,UAAU,CAAC,8BAA8B,YAAY,aAAa,CAAC,WAAW,UAAU,YAAY,gBAAgB,kBAAkB,oCAAoC,2BAA2B,CAAC,wCAAwC,cAAc,mBAAmB,UAAU,CAAC,cAAc,mBAAmB,sBAAsB,WAAW,WAAW,CAAC,oBAAoB,WAAW,iBAAiB,CAAC,iBAAiB,yBAAyB,sBAAsB,wBAAwB,qBAAqB,kBAAkB,UAAU,QAAQ,eAAe,QAAQ,SAAS,mBAAmB,iBAAiB,gCAAqC,4BAAiC,uBAA4B,CAAC,yBAAyB,UAAU,QAAQ,kCAAkC,qDAAqD,CAAC,yBAAyB,WAAW,kCAAkC,qDAAqD,CAAC,eAA+B,iBAAiB,CAAC,4BAAlC,eAAgB,CAA+C,kBAAkB,kBAAkB,CAAC,iBAAiB,kCAAkC,yBAAyB,CAAC,QAAQ,eAAe,YAAY,iBAAiB,QAAQ,UAAU,+BAAoC,CAAC,iBAAiB,UAAU,CAAC,gBAAgB,SAAS,CAAC,cAAc,kBAAkB,UAAU,UAAU,gCAAqC,4BAAiC,wBAA6B,iBAAiB,QAAQ,uBAAuB,CAAC,wBAAwB,WAAW,CAAC,qBAAqB,QAAQ,CAAC,4BAA4B,SAAS,SAAS,CAAC,kCAAkC,cAAc,WAAW,YAAY,WAAW,iBAAiB,CAAC,oBAAoB,oBAAoB,CAAC,sCAAsC,cAAc,kBAAkB,UAAU,WAAW,YAAY,eAAe,oBAAoB,CAAC,wIAAwI,YAAY,WAAW,qBAAqB,kBAAkB,CAAC,gDAAgD,kBAAkB,kBAAkB,UAAU,WAAW,UAAU,SAAS,gBAAgB,SAAS,QAAQ,qBAAqB,uCAAuC,oCAAoC,kCAAkC,8BAA8B,CAAC,4DAA4D,WAAW,YAAY,oBAAoB,CAAC,0BAA0B,kBAAkB,SAAS,WAAW,eAAe,uCAAuC,mBAAmB,gBAAgB,gBAAgB,cAAc,UAAU,QAAQ,cAAc,CAAC,4EAA4E,uCAAuC,+BAA+B,WAAW,SAAS,CAAC,mCAAmC,UAAU,CAAC,kCAAkC,SAAS,CAAC,AAAyG,oPAAiK,qBAAqB,CAAC,YAAY,kBAAkB,UAAU,WAAW,UAAU,gBAAgB,mBAAmB,mBAAmB,QAAQ,CAAC","file":"fullpage.min.css","sourcesContent":["/*!\r\n * fullPage 3.0.3\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{overflow:hidden;position:relative}.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;margin-top:-32px;top:50%;opacity:1;-webkit-transform:translate3d(0,0,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li a.active span,#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav ul li:hover .fp-tooltip,#fp-nav.fp-show-active a.active+.fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-auto-height.fp-section{height:auto!important}.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}\r\n/*# sourceMappingURL=fullpage.min.css.map */\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_2__);
var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* eslint-disable import/no-extraneous-dependencies *//* eslint-disable react/prop-types */// eslint-disable-line no-unused-vars
var isFunc=function isFunc(val){return typeof val==='function';};var fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];var ReactFullpage=function(_React$Component){_inherits(ReactFullpage,_React$Component);function ReactFullpage(props){_classCallCheck(this,ReactFullpage);var _this=_possibleConstructorReturn(this,(ReactFullpage.__proto__||Object.getPrototypeOf(ReactFullpage)).call(this,props));var render=_this.props.render;if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}_this.state={initialized:false};return _this;}_createClass(ReactFullpage,[{key:'componentDidMount',value:function componentDidMount(){var opts=this.buildOptions();if(fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1___default.a){this.init(opts);this.markInitialized();}}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var newSectionCount=this.getSectionCount();var newSlideCount=this.getSlideCount();var _state=this.state,sectionCount=_state.sectionCount,slideCount=_state.slideCount;/* TODO: add a list of fullpage.js specific props to subscribe too
      similar to how callbacks are handled)
    */if(this.props.sectionsColor!==prevProps.sectionsColor){console.log('rebuilding due to a change in fullpage.js props');// NOTE: if fullpage props have changed we need to rebuild
this.destroy();this.init(this.buildOptions());return;}if(sectionCount===newSectionCount&&slideCount===newSlideCount){return;}console.log('rebuilding due to a change in fullpage.js sections/slides');// NOTE: if sections have changed we need to rebuild
this.destroy();this.init(this.buildOptions());}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.destroy();}},{key:'getSectionCount',value:function getSectionCount(){var _props$sectionSelecto=this.props.sectionSelector,sectionSelector=_props$sectionSelecto===undefined?'.section':_props$sectionSelecto;return document.querySelectorAll(sectionSelector).length;}},{key:'getSlideCount',value:function getSlideCount(){var _props$slideSelector=this.props.slideSelector,slideSelector=_props$slideSelector===undefined?'.slide':_props$slideSelector;return document.querySelectorAll(slideSelector).length;}},{key:'init',value:function init(opts){new fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1___default.a('#fullpage',opts);// eslint-disable-line
this.fullpageApi=window.fullpage_api;this.fpUtils=window.fp_utils;this.fpEasings=window.fp_easings;}},{key:'destroy',value:function destroy(){// NOTE: need to check for init to support SSR
if(typeof window!=='undefined'){this.fullpageApi.destroy('all');}}},{key:'markInitialized',value:function markInitialized(){this.setState({initialized:true,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});}},{key:'buildOptions',value:function buildOptions(){var _this2=this;var filterCb=function filterCb(key){return!!Object.keys(_this2.props).find(function(cb){return cb===key;});};var registered=fullpageCallbacks.filter(filterCb);var listeners=registered.reduce(function(result,key){var agg=_extends({},result);agg[key]=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var newArgs=[key].concat(args);_this2.update.apply(_this2,_toConsumableArray(newArgs));};return agg;},{});return _extends({},this.props,listeners);}},{key:'update',value:function update(lastEvent){var _this3=this;for(var _len2=arguments.length,args=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}var state=_extends({},this.state,{sectionCount:this.getSectionCount(),getSlideCount:this.getSlideCount()});var makeState=function makeState(callbackParameters){return _extends({},state,callbackParameters,{lastEvent:lastEvent});};var fromArgs=function fromArgs(argList){return argList.reduce(function(result,key,i){var value=args[i];result[key]=value;// eslint-disable-line
return result;},{});};// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}this.setState(state,function(){var _props;(_props=_this3.props)[lastEvent].apply(_props,args);});}},{key:'render',value:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div',{id:'fullpage'},this.props.render(this));}}]);return ReactFullpage;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpage);

/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_52339ab353c8e0db40da ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_52339ab353c8e0db40da */ "dll-reference dll_52339ab353c8e0db40da"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_52339ab353c8e0db40da ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_52339ab353c8e0db40da */ "dll-reference dll_52339ab353c8e0db40da"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mwalker/opensource/react-fullpage-next/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

var originalColors = ["#282c34", "#ff5f45", "#0798ec"];

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      sectionsColor: originalColors.concat(),
      fullpages: [{
        text: "section 1"
      }, {
        text: "section 2"
      }]
    };
    return _this;
  }

  _createClass(App, [{
    key: "onLeave",
    value: function onLeave(origin, destination, direction) {
      console.log("onLeave", {
        origin: origin,
        destination: destination,
        direction: direction
      }); // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    }
  }, {
    key: "handleChangeColors",
    value: function handleChangeColors() {
      var newColors = this.state.sectionsColor[0] === "yellow" ? originalColors.concat() : ["yellow", "blue", "white"];
      this.setState({
        sectionsColor: newColors
      });
    }
  }, {
    key: "handleAddSection",
    value: function handleAddSection() {
      this.setState(function (state) {
        var fullpages = state.fullpages;
        var length = fullpages.length;
        fullpages.push({
          text: "section ".concat(length + 1),
          id: Math.random()
        });
        return {
          fullpages: _toConsumableArray(fullpages)
        };
      });
    }
  }, {
    key: "handleRemoveSection",
    value: function handleRemoveSection() {
      this.setState(function (state) {
        var fullpages = state.fullpages;

        var newPages = _toConsumableArray(fullpages);

        newPages.pop();
        return {
          fullpages: newPages
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var fullpages = this.state.fullpages;

      if (!fullpages.length) {
        return null;
      }

      var Menu = function Menu() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "menu",
          style: {
            position: "fixed",
            top: 0,
            zIndex: 100
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.handleAddSection();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "+ Section"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.handleRemoveSection();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "- Section"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.handleChangeColors();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "Change colors"))));
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a, {
        navigation: true,
        onLeave: this.onLeave.bind(this),
        sectionsColor: this.state.sectionsColor,
        render: function render(comp) {
          return console.log("render prop change") || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a.Wrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, fullpages.map(function (_ref) {
            var text = _ref.text;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: text,
              className: "section",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }, text));
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_52339ab353c8e0db40da":
/*!*******************************************!*\
  !*** external "dll_52339ab353c8e0db40da" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_52339ab353c8e0db40da;

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map