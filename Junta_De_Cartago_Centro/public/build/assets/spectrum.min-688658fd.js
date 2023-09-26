import{r as bt}from"./jquery-4e911315.js";import"./_commonjsHelpers-042e6b4d.js";var ut={},mt={get exports(){return ut},set exports(Ie){ut=Ie}};(function(Ie,vt){(function(c){Ie.exports=c(bt())})(function(c,Fe){var qe,Je={beforeShow:je,move:je,change:je,show:je,hide:je,color:!1,flat:!1,type:"",showInput:!1,allowEmpty:!0,showButtons:!0,clickoutFiresChange:!0,showInitial:!1,showPalette:!0,showPaletteOnly:!1,hideAfterPaletteSelect:!1,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:8,locale:"en",cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:"name",className:"",containerClassName:"",replacerClassName:"",showAlpha:!0,theme:"sp-light",palette:[["#000000","#444444","#5b5b5b","#999999","#bcbcbc","#eeeeee","#f3f6f4","#ffffff"],["#f44336","#744700","#ce7e00","#8fce00","#2986cc","#16537e","#6a329f","#c90076"],["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],["#cc0000","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],["#990000","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],["#660000","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]],selectionPalette:[],disabled:!1,offset:null},_e=[],ke=!!/msie/i.exec(window.navigator.userAgent),Ze=((qe=document.createElement("div").style).cssText="background-color:rgba(0,0,0,.5)",Ne(qe.backgroundColor,"rgba")||Ne(qe.backgroundColor,"hsla")),ft=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),ht=function(){var m="";if(ke)for(var C=1;C<=6;C++)m+="<div class='sp-"+C+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",m,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<button class='sp-cancel' href='#'></button>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}();function Ne(m,C){return!!~(""+m).indexOf(C)}function De(m,C,z,S){for(var s=[],o=0;o<m.length;o++){var P=m[o];if(P){var M=tinycolor(P),i=M.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";i+=tinycolor.equals(C,P)?" sp-thumb-active":"";var Q=M.toString(S.preferredFormat||"rgb"),F=Ze?"background-color:"+M.toRgbString():"filter:"+M.toFilter();s.push('<span title="'+Q+'" data-color="'+M.toRgbString()+'" class="'+i+'"><span class="sp-thumb-inner" style="'+F+';"></span></span>')}else s.push('<span class="sp-thumb-el sp-clear-display" ><span class="sp-clear-palette-only" style="background-color: transparent;"></span></span>')}return"<div class='sp-cf "+z+"'>"+s.join("")+"</div>"}function dt(m,C){var z,S,s,o=function(n,u){n.locale=n.locale||window.navigator.language,n.locale&&(n.locale=n.locale.split("-")[0].toLowerCase()),n.locale!="en"&&c.spectrum.localization[n.locale]&&(n=c.extend({},c.spectrum.localization[n.locale],n));var b=c.extend({},Je,n);return b.callbacks={move:Ae(b.move,u),change:Ae(b.change,u),show:Ae(b.show,u),hide:Ae(b.hide,u),beforeShow:Ae(b.beforeShow,u)},b}(C,m),P=o.type,M=P=="flat",i=o.showSelectionPalette,Q=o.localStorageKey,F=o.theme,E=o.callbacks,le=(z=we,function(){var n=this,u=arguments;s||(s=setTimeout(function(){s=null,z.apply(n,u)},S))}),$=!(S=10),k=!1,I=0,q=0,X=0,ce=0,be=0,Le=0,Oe=0,me=0,ve=0,xe=0,W=1,Z=[],ye=[],ue={},x=o.selectionPalette.slice(0),Pe=o.maxSelectionSize,D="sp-dragging",Y=!1,H=null,L=m.ownerDocument,v=(L.body,c(m)),fe=!1,d=c(ht,L).addClass(F),e=d.find(".sp-picker-container"),t=d.find(".sp-color"),r=d.find(".sp-dragger"),a=d.find(".sp-hue"),f=d.find(".sp-slider"),p=d.find(".sp-alpha-inner"),T=d.find(".sp-alpha"),_=d.find(".sp-alpha-handle"),h=d.find(".sp-input"),l=d.find(".sp-palette"),y=d.find(".sp-initial"),G=d.find(".sp-cancel"),N=d.find(".sp-clear"),V=d.find(".sp-choose"),U=d.find(".sp-palette-toggle"),B=v.is("input"),J=(B&&v.attr("type")==="color"&&et(),B&&P=="color"),K=J?c(ft).addClass(F).addClass(o.className).addClass(o.replacerClassName):c([]),ae=J?K:v,j=K.find(".sp-preview-inner"),oe=o.color||B&&v.val(),Ce=!1,Se=o.preferredFormat,gt=!o.showButtons||o.clickoutFiresChange,he=!oe,Te=o.allowEmpty,Me=null,de=null,We=null,Be=null,Ke=v.attr("id");if(Ke!==Fe&&0<Ke.length){var tt=c('label[for="'+Ke+'"]');tt.length&&tt.on("click",function(n){return n.preventDefault(),v.spectrum("show"),!1})}function $e(){if(o.showPaletteOnly&&(o.showPalette=!0),U.text(o.showPaletteOnly?o.togglePaletteMoreText:o.togglePaletteLessText),o.palette){Z=o.palette.slice(0),ye=c.isArray(Z[0])?Z:[Z],ue={};for(var n=0;n<ye.length;n++)for(var u=0;u<ye[n].length;u++){var b=tinycolor(ye[n][u]).toRgbString();ue[b]=!0}o.showPaletteOnly&&!oe&&(oe=Z[0][0]===""?Z[0][0]:Object.keys(ue)[0])}d.toggleClass("sp-flat",M),d.toggleClass("sp-input-disabled",!o.showInput),d.toggleClass("sp-alpha-enabled",o.showAlpha),d.toggleClass("sp-clear-enabled",Te),d.toggleClass("sp-buttons-disabled",!o.showButtons),d.toggleClass("sp-palette-buttons-disabled",!o.togglePaletteOnly),d.toggleClass("sp-palette-disabled",!o.showPalette),d.toggleClass("sp-palette-only",o.showPaletteOnly),d.toggleClass("sp-initial-disabled",!o.showInitial),d.addClass(o.className).addClass(o.containerClassName),we()}function rt(){if(Q){try{var n=window.localStorage,u=n[Q].split(",#");1<u.length&&(delete n[Q],c.each(u,function(b,w){Xe(w)}))}catch{}try{x=window.localStorage[Q].split(";")}catch{}}}function Xe(n){if(i){var u=tinycolor(n).toRgbString();if(!ue[u]&&c.inArray(u,x)===-1)for(x.push(u);x.length>Pe;)x.shift();if(Q)try{window.localStorage[Q]=x.join(";")}catch{}}}function at(){var n=R(),u=c.map(ye,function(b,w){return De(b,n,"sp-palette-row sp-palette-row-"+w,o)});rt(),x&&u.push(De(function(){var b=[];if(o.showPalette)for(var w=0;w<x.length;w++){var g=tinycolor(x[w]).toRgbString();ue[g]||b.push(x[w])}return b.reverse().slice(0,o.maxSelectionSize)}(),n,"sp-palette-row sp-palette-row-selection",o)),l.html(u.join(""))}function ot(){if(o.showInitial){var n=Ce,u=R();y.html(De([n,u],u,"sp-palette-row-initial",o))}}function Ye(){(q<=0||I<=0||ce<=0)&&we(),k=!0,d.addClass(D),H=null,v.trigger("dragstart.spectrum",[R()])}function Ge(){k=!1,d.removeClass(D),v.trigger("dragstop.spectrum",[R()])}function Ue(n){if(Y)Y=!1;else if(n!==null&&n!==""||!Te){var u=tinycolor(n);u.isValid()?(pe(u),ge(),se()):h.addClass("sp-validation-error")}else pe(null),ge(),se()}function Qe(){var n=c.Event("beforeShow.spectrum");$?we():(v.trigger(n,[R()]),E.beforeShow(R())===!1||n.isDefaultPrevented()||(function(){for(var u=0;u<_e.length;u++)_e[u]&&_e[u].hide()}(),$=!0,c(L).on("keydown.spectrum",nt),c(L).on("click.spectrum",st),c(window).on("resize.spectrum",le),K.addClass("sp-active"),d.removeClass("sp-hidden"),we(),ze(),Ce=R(),ot(),E.show(Ce),v.trigger("show.spectrum",[Ce])))}function nt(n){n.keyCode===27&&ne()}function st(n){n.button!=2&&(k||(gt?se(!0):it(),ne()))}function ne(){$&&!M&&($=!1,c(L).off("keydown.spectrum",nt),c(L).off("click.spectrum",st),c(window).off("resize.spectrum",le),K.removeClass("sp-active"),d.addClass("sp-hidden"),E.hide(R()),v.trigger("hide.spectrum",[R()]))}function it(){pe(Ce,!0),se(!0)}function pe(n,u){var b,w;tinycolor.equals(n,R())?ze():(n&&n!==Fe||!Te?(he=!1,w=(b=tinycolor(n)).toHsv(),me=w.h%360/360,ve=w.s,xe=w.v,W=w.a):he=!0,ze(),b&&b.isValid()&&!u&&(Se=o.preferredFormat||b.getFormat()))}function R(n){return n=n||{},Te&&he?null:tinycolor.fromRatio({h:me,s:ve,v:xe,a:Math.round(1e3*W)/1e3},{format:n.format||Se})}function ge(){ze(),E.move(R()),v.trigger("move.spectrum",[R()])}function ze(){h.removeClass("sp-validation-error"),lt();var n=tinycolor.fromRatio({h:me,s:1,v:1});t.css("background-color",n.toHexString());var u=Se;W<1&&(W!==0||u!=="name")&&(u!=="hex"&&u!=="hex3"&&u!=="hex6"&&u!=="name"||(u="rgb"));var b=R({format:u}),w="";if(j.removeClass("sp-clear-display"),j.css("background-color","transparent"),!b&&Te)j.addClass("sp-clear-display");else{var g=b.toHexString(),A=b.toRgbString();if(Ze||b.alpha===1?j.css("background-color",A):(j.css("background-color","transparent"),j.css("filter",b.toFilter())),o.showAlpha){var ee=b.toRgb();ee.a=0;var te=tinycolor(ee).toRgbString(),ie="linear-gradient(left, "+te+", "+g+")";ke?p.css("filter",tinycolor(te).toFilter({gradientType:1},g)):(p.css("background","-webkit-"+ie),p.css("background","-moz-"+ie),p.css("background","-ms-"+ie),p.css("background","linear-gradient(to right, "+te+", "+g+")"))}w=b.toString(u)}if(o.showInput&&h.val(w),v.val(w),o.type=="text"||o.type=="component"){var O=b;if(O&&de){var re=O.isLight()||O.getAlpha()<.4?"black":"white";de.css("background-color",O.toRgbString()).css("color",re)}else de.css("background-color",Be).css("color",We)}o.showPalette&&at(),ot()}function lt(){var n=ve,u=xe;if(Te&&he)_.hide(),f.hide(),r.hide();else{_.show(),f.show(),r.show();var b=n*I,w=q-u*q;b=Math.max(-X,Math.min(I-X,b-X)),w=Math.max(-X,Math.min(q-X,w-X)),r.css({top:w+"px",left:b+"px"});var g=W*be;_.css({left:g-Le/2+"px"});var A=me*ce;f.css({top:A-Oe+"px"})}}function se(n){var u=R(),b=!tinycolor.equals(u,Ce);u&&(u.toString(Se),Xe(u)),n&&b&&(E.change(u),Y=!0,v.trigger("change",[u]))}function we(){var n,u,b,w,g,A,ee,te,ie,O,re,Re;$&&(I=t.width(),q=t.height(),X=r.height(),a.width(),ce=a.height(),Oe=f.height(),be=T.width(),Le=_.width(),M||(d.css("position","absolute"),o.offset?d.offset(o.offset):d.offset((u=ae,b=(n=d).outerWidth(),w=n.outerHeight(),g=u.outerHeight(),A=n[0].ownerDocument,ee=A.documentElement,te=ee.clientWidth+c(A).scrollLeft(),ie=ee.clientHeight+c(A).scrollTop(),O=u.offset(),re=O.left,Re=O.top,Re+=g,re-=Math.min(re,te<re+b&&b<te?Math.abs(re+b-te):0),{top:Re-=Math.min(Re,ie<Re+w&&w<ie?Math.abs(+(w+g)):0),bottom:O.bottom,left:re,right:O.right,width:O.width,height:O.height}))),lt(),o.showPalette&&at(),v.trigger("reflow.spectrum"))}function ct(){ne(),fe=!0,v.attr("disabled",!0),ae.addClass("sp-disabled")}(function(){if(ke&&d.find("*:not(input)").attr("unselectable","on"),$e(),Me=c('<span class="sp-original-input-container"></span>'),["margin"].forEach(function(g){Me.css(g,v.css(g))}),v.css("display")=="block"&&Me.css("display","flex"),J)v.after(K).hide();else if(P=="text")Me.addClass("sp-colorize-container"),v.addClass("spectrum sp-colorize").wrap(Me);else if(P=="component"){v.addClass("spectrum").wrap(Me);var n=c(["<div class='sp-colorize-container sp-add-on'>","<div class='sp-colorize'></div> ","</div>"].join(""));n.width(v.outerHeight()+"px").css("border-radius",v.css("border-radius")).css("border",v.css("border")),v.addClass("with-add-on").before(n)}if(de=v.parent().find(".sp-colorize"),We=de.css("color"),Be=de.css("background-color"),Te||N.hide(),M)v.after(d).hide();else{var u=o.appendTo==="parent"?v.parent():c(o.appendTo);u.length!==1&&(u=c("body")),u.append(d)}function b(g){return g.data&&g.data.ignore?(pe(c(g.target).closest(".sp-thumb-el").data("color")),ge()):(pe(c(g.target).closest(".sp-thumb-el").data("color")),ge(),o.hideAfterPaletteSelect?(se(!0),ne()):se()),!1}rt(),ae.on("click.spectrum touchstart.spectrum",function(g){fe||Qe(),g.stopPropagation(),c(g.target).is("input")||g.preventDefault()}),!v.is(":disabled")&&o.disabled!==!0||ct(),d.click(pt),[h,v].forEach(function(g){g.change(function(){Ue(g.val())}),g.on("paste",function(){setTimeout(function(){Ue(g.val())},1)}),g.keydown(function(A){A.keyCode==13&&(Ue(c(g).val()),g==v&&ne())})}),G.text(o.cancelText),G.on("click.spectrum",function(g){g.stopPropagation(),g.preventDefault(),it(),ne()}),N.attr("title",o.clearText),N.on("click.spectrum",function(g){g.stopPropagation(),g.preventDefault(),he=!0,ge(),M&&se(!0)}),V.text(o.chooseText),V.on("click.spectrum",function(g){g.stopPropagation(),g.preventDefault(),ke&&h.is(":focus")&&h.trigger("change"),h.hasClass("sp-validation-error")||(se(!0),ne())}),U.text(o.showPaletteOnly?o.togglePaletteMoreText:o.togglePaletteLessText),U.on("click.spectrum",function(g){g.stopPropagation(),g.preventDefault(),o.showPaletteOnly=!o.showPaletteOnly,o.showPaletteOnly||M||d.css("left","-="+(e.outerWidth(!0)+5)),$e()}),He(T,function(g,A,ee){W=g/be,he=!1,ee.shiftKey&&(W=Math.round(10*W)/10),ge()},Ye,Ge),He(a,function(g,A){me=parseFloat(A/ce),he=!1,o.showAlpha||(W=1),ge()},Ye,Ge),He(t,function(g,A,ee){if(ee.shiftKey){if(!H){var te=ve*I,ie=q-xe*q,O=Math.abs(g-te)>Math.abs(A-ie);H=O?"x":"y"}}else H=null;var re=!H||H==="y";H&&H!=="x"||(ve=parseFloat(g/I)),re&&(xe=parseFloat((q-A)/q)),he=!1,o.showAlpha||(W=1),ge()},Ye,Ge),oe?(pe(oe),ze(),Se=tinycolor(oe).format||o.preferredFormat,Xe(oe)):(oe===""&&pe(oe),ze()),M&&Qe();var w=ke?"mousedown.spectrum":"click.spectrum touchstart.spectrum";l.on(w,".sp-thumb-el",b),y.on(w,".sp-thumb-el:nth-child(1)",{ignore:!0},b)})();var Ee={show:Qe,hide:ne,toggle:function(){($?ne:Qe)()},reflow:we,option:function(n,u){return n===Fe?c.extend({},o):u===Fe?o[n]:(o[n]=u,n==="preferredFormat"&&(Se=o.preferredFormat),void $e())},enable:function(){fe=!1,v.attr("disabled",!1),ae.removeClass("sp-disabled")},disable:ct,offset:function(n){o.offset=n,we()},set:function(n){pe(n),se()},get:R,destroy:function(){v.show().removeClass("spectrum with-add-on sp-colorize"),ae.off("click.spectrum touchstart.spectrum"),d.remove(),K.remove(),de&&de.css("background-color",Be).css("color",We);var n=v.closest(".sp-original-input-container");0<n.length&&n.after(v).remove(),_e[Ee.id]=null},container:d};return Ee.id=_e.push(Ee)-1,Ee}function je(){}function pt(m){m.stopPropagation()}function Ae(m,C){var z=Array.prototype.slice,S=z.call(arguments,2);return function(){return m.apply(C,S.concat(z.call(arguments)))}}function He(m,C,z,S){C=C||function(){},z=z||function(){},S=S||function(){};var s=document,o=!1,P={},M=0,i=0,Q="ontouchstart"in window,F={};function E(k){k.stopPropagation&&k.stopPropagation(),k.preventDefault&&k.preventDefault(),k.returnValue=!1}function le(k){if(o){if(ke&&s.documentMode<9&&!k.button)return $();var I=k.originalEvent&&k.originalEvent.touches&&k.originalEvent.touches[0],q=I&&I.pageX||k.pageX,X=I&&I.pageY||k.pageY,ce=Math.max(0,Math.min(q-P.left,i)),be=Math.max(0,Math.min(X-P.top,M));Q&&E(k),C.apply(m,[ce,be,k])}}function $(){o&&(c(s).off(F),c(s.body).removeClass("sp-dragging"),setTimeout(function(){S.apply(m,arguments)},0)),o=!1}F.selectstart=E,F.dragstart=E,F["touchmove mousemove"]=le,F["touchend mouseup"]=$,c(m).on("touchstart mousedown",function(k){(k.which?k.which==3:k.button==2)||o||z.apply(m,arguments)!==!1&&(o=!0,M=c(m).height(),i=c(m).width(),P=c(m).offset(),c(s).on(F),c(s.body).addClass("sp-dragging"),le(k),E(k))})}function et(){return c.fn.spectrum.inputTypeColorSupport()}var Ve="spectrum.id";c.fn.spectrum=function(m,C){if(typeof m!="string")return this.spectrum("destroy").each(function(){var s=c.extend({},c(this).data(),m);c(this).is("input")?s.flat||s.type=="flat"?s.type="flat":c(this).attr("type")=="color"?s.type="color":s.type=s.type||"component":s.type="noInput";var o=dt(this,s);c(this).data(Ve,o.id)});var z=this,S=Array.prototype.slice.call(arguments,1);return this.each(function(){var s=_e[c(this).data(Ve)];if(s){var o=s[m];if(!o)throw new Error("Spectrum: no such method: '"+m+"'");m=="get"?z=s.get():m=="container"?z=s.container:m=="option"?z=s.option.apply(s,S):m=="destroy"?(s.destroy(),c(this).removeData(Ve)):o.apply(s,S)}}),z},c.fn.spectrum.load=!0,c.fn.spectrum.loadOpts={},c.fn.spectrum.draggable=He,c.fn.spectrum.defaults=Je,c.fn.spectrum.inputTypeColorSupport=function m(){if(m._cachedResult===void 0){var C=c("<input type='color'/>")[0];m._cachedResult=C.type==="color"&&C.value!==""}return m._cachedResult},c.spectrum={},c.spectrum.localization={},c.spectrum.palettes={},c.fn.spectrum.processNativeColorInputs=function(){var m=c("input[type=color]");m.length&&!et()&&m.spectrum({preferredFormat:"hex6"})},function(){var m=/^[\s,#]+/,C=/\s+$/,z=0,S=Math,s=S.round,o=S.min,P=S.max,M=S.random,i=function(e,t){if(t=t||{},(e=e||"")instanceof i)return e;if(!(this instanceof i))return new i(e,t);var r=function(a){var f={r:0,g:0,b:0},p=1,T=!1,_=!1;return typeof a=="string"&&(a=function(h){h=h.replace(m,"").replace(C,"").toLowerCase();var l,y=!1;if(Z[h])h=Z[h],y=!0;else if(h=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(l=d.rgb.exec(h))?{r:l[1],g:l[2],b:l[3]}:(l=d.rgba.exec(h))?{r:l[1],g:l[2],b:l[3],a:l[4]}:(l=d.hsl.exec(h))?{h:l[1],s:l[2],l:l[3]}:(l=d.hsla.exec(h))?{h:l[1],s:l[2],l:l[3],a:l[4]}:(l=d.hsv.exec(h))?{h:l[1],s:l[2],v:l[3]}:(l=d.hsva.exec(h))?{h:l[1],s:l[2],v:l[3],a:l[4]}:(l=d.hex8.exec(h))?{a:function(G){return D(G)/255}(l[1]),r:D(l[2]),g:D(l[3]),b:D(l[4]),format:y?"name":"hex8"}:(l=d.hex6.exec(h))?{r:D(l[1]),g:D(l[2]),b:D(l[3]),format:y?"name":"hex"}:(l=d.hex3.exec(h))?{r:D(l[1]+""+l[1]),g:D(l[2]+""+l[2]),b:D(l[3]+""+l[3]),format:y?"name":"hex"}:!1}(a)),typeof a=="object"&&(a.hasOwnProperty("r")&&a.hasOwnProperty("g")&&a.hasOwnProperty("b")?(f=function(h,l,y){return{r:255*x(h,255),g:255*x(l,255),b:255*x(y,255)}}(a.r,a.g,a.b),T=!0,_=String(a.r).substr(-1)==="%"?"prgb":"rgb"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("v")?(a.s=H(a.s),a.v=H(a.v),f=function(h,l,y){h=6*x(h,360),l=x(l,100),y=x(y,100);var G=S.floor(h),N=h-G,V=y*(1-l),U=y*(1-N*l),B=y*(1-(1-N)*l),J=G%6;return{r:255*[y,U,V,V,B,y][J],g:255*[B,y,y,U,V,V][J],b:255*[V,V,B,y,y,U][J]}}(a.h,a.s,a.v),T=!0,_="hsv"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("l")&&(a.s=H(a.s),a.l=H(a.l),f=function(h,l,y){var G,N,V;function U(K,ae,j){return j<0&&(j+=1),1<j&&--j,j<1/6?K+6*(ae-K)*j:j<.5?ae:j<2/3?K+(ae-K)*(2/3-j)*6:K}if(h=x(h,360),l=x(l,100),y=x(y,100),l===0)G=N=V=y;else{var B=y<.5?y*(1+l):y+l-y*l,J=2*y-B;G=U(J,B,h+1/3),N=U(J,B,h),V=U(J,B,h-1/3)}return{r:255*G,g:255*N,b:255*V}}(a.h,a.s,a.l),T=!0,_="hsl"),a.hasOwnProperty("a")&&(p=a.a)),p=ue(p),{ok:T,format:a.format||_,r:o(255,P(f.r,0)),g:o(255,P(f.g,0)),b:o(255,P(f.b,0)),a:p}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=s(1e3*this._a)/1e3,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=s(this._r)),this._g<1&&(this._g=s(this._g)),this._b<1&&(this._b=s(this._b)),this._ok=r.ok,this._tc_id=z++};function Q(e,t,r){e=x(e,255),t=x(t,255),r=x(r,255);var a,f,p=P(e,t,r),T=o(e,t,r),_=(p+T)/2;if(p==T)a=f=0;else{var h=p-T;switch(f=.5<_?h/(2-p-T):h/(p+T),p){case e:a=(t-r)/h+(t<r?6:0);break;case t:a=(r-e)/h+2;break;case r:a=(e-t)/h+4}a/=6}return{h:a,s:f,l:_}}function F(e,t,r){e=x(e,255),t=x(t,255),r=x(r,255);var a,f,p=P(e,t,r),T=o(e,t,r),_=p,h=p-T;if(f=p===0?0:h/p,p==T)a=0;else{switch(p){case e:a=(t-r)/h+(t<r?6:0);break;case t:a=(r-e)/h+2;break;case r:a=(e-t)/h+4}a/=6}return{h:a,s:f,v:_}}function E(e,t,r,a){var f=[Y(s(e).toString(16)),Y(s(t).toString(16)),Y(s(r).toString(16))];return a&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0):f.join("")}function le(e,t,r,a){var f;return[Y((f=a,Math.round(255*parseFloat(f)).toString(16))),Y(s(e).toString(16)),Y(s(t).toString(16)),Y(s(r).toString(16))].join("")}function $(e,t){t=t===0?0:t||10;var r=i(e).toHsl();return r.s-=t/100,r.s=Pe(r.s),i(r)}function k(e,t){t=t===0?0:t||10;var r=i(e).toHsl();return r.s+=t/100,r.s=Pe(r.s),i(r)}function I(e){return i(e).desaturate(100)}function q(e,t){t=t===0?0:t||10;var r=i(e).toHsl();return r.l+=t/100,r.l=Pe(r.l),i(r)}function X(e,t){t=t===0?0:t||10;var r=i(e).toRgb();return r.r=P(0,o(255,r.r-s(-t/100*255))),r.g=P(0,o(255,r.g-s(-t/100*255))),r.b=P(0,o(255,r.b-s(-t/100*255))),i(r)}function ce(e,t){t=t===0?0:t||10;var r=i(e).toHsl();return r.l-=t/100,r.l=Pe(r.l),i(r)}function be(e,t){var r=i(e).toHsl(),a=(s(r.h)+t)%360;return r.h=a<0?360+a:a,i(r)}function Le(e){var t=i(e).toHsl();return t.h=(t.h+180)%360,i(t)}function Oe(e){var t=i(e).toHsl(),r=t.h;return[i(e),i({h:(r+120)%360,s:t.s,l:t.l}),i({h:(r+240)%360,s:t.s,l:t.l})]}function me(e){var t=i(e).toHsl(),r=t.h;return[i(e),i({h:(r+90)%360,s:t.s,l:t.l}),i({h:(r+180)%360,s:t.s,l:t.l}),i({h:(r+270)%360,s:t.s,l:t.l})]}function ve(e){var t=i(e).toHsl(),r=t.h;return[i(e),i({h:(r+72)%360,s:t.s,l:t.l}),i({h:(r+216)%360,s:t.s,l:t.l})]}function xe(e,t,r){t=t||6,r=r||30;var a=i(e).toHsl(),f=360/r,p=[i(e)];for(a.h=(a.h-(f*t>>1)+720)%360;--t;)a.h=(a.h+f)%360,p.push(i(a));return p}function W(e,t){t=t||6;for(var r=i(e).toHsv(),a=r.h,f=r.s,p=r.v,T=[],_=1/t;t--;)T.push(i({h:a,s:f,v:p})),p=(p+_)%1;return T}i.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},setAlpha:function(e){return this._a=ue(e),this._roundA=s(1e3*this._a)/1e3,this},toHsv:function(){var e=F(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=F(this._r,this._g,this._b),t=s(360*e.h),r=s(100*e.s),a=s(100*e.v);return this._a==1?"hsv("+t+", "+r+"%, "+a+"%)":"hsva("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var e=Q(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Q(this._r,this._g,this._b),t=s(360*e.h),r=s(100*e.s),a=s(100*e.l);return this._a==1?"hsl("+t+", "+r+"%, "+a+"%)":"hsla("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(e){return E(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(){return le(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:s(this._r),g:s(this._g),b:s(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+s(this._r)+", "+s(this._g)+", "+s(this._b)+")":"rgba("+s(this._r)+", "+s(this._g)+", "+s(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:s(100*x(this._r,255))+"%",g:s(100*x(this._g,255))+"%",b:s(100*x(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+s(100*x(this._r,255))+"%, "+s(100*x(this._g,255))+"%, "+s(100*x(this._b,255))+"%)":"rgba("+s(100*x(this._r,255))+"%, "+s(100*x(this._g,255))+"%, "+s(100*x(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(ye[E(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+le(this._r,this._g,this._b,this._a),r=t,a=this._gradientType?"GradientType = 1, ":"";return e&&(r=i(e).toHex8String()),"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,a=this._a<1&&0<=this._a;return t||!a||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="name"?(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(q,arguments)},brighten:function(){return this._applyModification(X,arguments)},darken:function(){return this._applyModification(ce,arguments)},desaturate:function(){return this._applyModification($,arguments)},saturate:function(){return this._applyModification(k,arguments)},greyscale:function(){return this._applyModification(I,arguments)},spin:function(){return this._applyModification(be,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(xe,arguments)},complement:function(){return this._applyCombination(Le,arguments)},monochromatic:function(){return this._applyCombination(W,arguments)},splitcomplement:function(){return this._applyCombination(ve,arguments)},triad:function(){return this._applyCombination(Oe,arguments)},tetrad:function(){return this._applyCombination(me,arguments)}},i.fromRatio=function(e,t){if(typeof e=="object"){var r={};for(var a in e)e.hasOwnProperty(a)&&(r[a]=a==="a"?e[a]:H(e[a]));e=r}return i(e,t)},i.equals=function(e,t){return!(!e||!t)&&i(e).toRgbString()==i(t).toRgbString()},i.random=function(){return i.fromRatio({r:M(),g:M(),b:M()})},i.mix=function(e,t,r){r=r===0?0:r||50;var a,f=i(e).toRgb(),p=i(t).toRgb(),T=r/100,_=2*T-1,h=p.a-f.a,l=1-(a=((a=_*h==-1?_:(_+h)/(1+_*h))+1)/2),y={r:p.r*a+f.r*l,g:p.g*a+f.g*l,b:p.b*a+f.b*l,a:p.a*T+f.a*(1-T)};return i(y)},i.readability=function(e,t){var r=i(e),a=i(t),f=r.toRgb(),p=a.toRgb(),T=r.getBrightness(),_=a.getBrightness(),h=Math.max(f.r,p.r)-Math.min(f.r,p.r)+Math.max(f.g,p.g)-Math.min(f.g,p.g)+Math.max(f.b,p.b)-Math.min(f.b,p.b);return{brightness:Math.abs(T-_),color:h}},i.isReadable=function(e,t){var r=i.readability(e,t);return 125<r.brightness&&500<r.color},i.mostReadable=function(e,t){for(var r=null,a=0,f=!1,p=0;p<t.length;p++){var T=i.readability(e,t[p]),_=125<T.brightness&&500<T.color,h=T.brightness/125*3+T.color/500;(_&&!f||_&&f&&a<h||!_&&!f&&a<h)&&(f=_,a=h,r=i(t[p]))}return r};var Z=i.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ye=i.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(Z);function ue(e){return e=parseFloat(e),(isNaN(e)||e<0||1<e)&&(e=1),e}function x(e,t){var r;typeof(r=e)=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1&&(e="100%");var a,f=typeof(a=e)=="string"&&a.indexOf("%")!=-1;return e=o(t,P(0,parseFloat(e))),f&&(e=parseInt(e*t,10)/100),S.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Pe(e){return o(1,P(0,e))}function D(e){return parseInt(e,16)}function Y(e){return e.length==1?"0"+e:""+e}function H(e){return e<=1&&(e=100*e+"%"),e}var L,v,fe,d=(v="[\\s|\\(]+("+(L="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",fe="[\\s|\\(]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",{rgb:new RegExp("rgb"+v),rgba:new RegExp("rgba"+fe),hsl:new RegExp("hsl"+v),hsla:new RegExp("hsla"+fe),hsv:new RegExp("hsv"+v),hsva:new RegExp("hsva"+fe),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});window.tinycolor=i}(),c(function(){c.fn.spectrum.load&&c.fn.spectrum.processNativeColorInputs()})}),jQuery.spectrum.localization.ar={cancelText:"إلغاء",chooseText:"إختار",clearText:"إرجاع الألوان على ما كانت",noColorSelectedText:"لم تختار أي لون",togglePaletteMoreText:"أكثر",togglePaletteLessText:"أقل"},jQuery.spectrum.localization.ca={cancelText:"Cancel·lar",chooseText:"Escollir",clearText:"Esborrar color seleccionat",noColorSelectedText:"Cap color seleccionat",togglePaletteMoreText:"Més",togglePaletteLessText:"Menys"},jQuery.spectrum.localization.cs={cancelText:"zrušit",chooseText:"vybrat",clearText:"Resetovat výběr barev",noColorSelectedText:"Žádná barva nebyla vybrána",togglePaletteMoreText:"více",togglePaletteLessText:"méně"},jQuery.spectrum.localization.de={cancelText:"Abbrechen",chooseText:"Wählen",clearText:"Farbauswahl zurücksetzen",noColorSelectedText:"Keine Farbe ausgewählt",togglePaletteMoreText:"Mehr",togglePaletteLessText:"Weniger"},jQuery.spectrum.localization.dk={cancelText:"annuller",chooseText:"Vælg"},jQuery.spectrum.localization.es={cancelText:"Cancelar",chooseText:"Elegir",clearText:"Borrar color seleccionado",noColorSelectedText:"Ningún color seleccionado",togglePaletteMoreText:"Más",togglePaletteLessText:"Menos"},jQuery.spectrum.localization.et={cancelText:"Katkesta",chooseText:"Vali",clearText:"Tühista värvivalik",noColorSelectedText:"Ühtki värvi pole valitud",togglePaletteMoreText:"Rohkem",togglePaletteLessText:"Vähem"},jQuery.spectrum.localization.fa={cancelText:"لغو",chooseText:"انتخاب",clearText:"تنظیم مجدد رنگ",noColorSelectedText:"هیچ رنگی انتخاب نشده است!",togglePaletteMoreText:"بیشتر",togglePaletteLessText:"کمتر"},jQuery.spectrum.localization.fi={cancelText:"Kumoa",chooseText:"Valitse"},jQuery.spectrum.localization.fr={cancelText:"Annuler",chooseText:"Valider",clearText:"Effacer couleur sélectionnée",noColorSelectedText:"Aucune couleur sélectionnée",togglePaletteMoreText:"Plus",togglePaletteLessText:"Moins"},jQuery.spectrum.localization.gr={cancelText:"Ακύρωση",chooseText:"Επιλογή",clearText:"Καθαρισμός επιλεγμένου χρώματος",noColorSelectedText:"Δεν έχει επιλεχθεί κάποιο χρώμα",togglePaletteMoreText:"Περισσότερα",togglePaletteLessText:"Λιγότερα"},jQuery.spectrum.localization.he={cancelText:"בטל בחירה",chooseText:"בחר צבע",clearText:"אפס בחירה",noColorSelectedText:"לא נבחר צבע",togglePaletteMoreText:"עוד צבעים",togglePaletteLessText:"פחות צבעים"},jQuery.spectrum.localization.hr={cancelText:"Odustani",chooseText:"Odaberi",clearText:"Poništi odabir",noColorSelectedText:"Niti jedna boja nije odabrana",togglePaletteMoreText:"Više",togglePaletteLessText:"Manje"},jQuery.spectrum.localization.hu={cancelText:"Mégsem",chooseText:"Mentés",clearText:"A színválasztás visszaállítása",noColorSelectedText:"Nincs szín kijelölve",togglePaletteMoreText:"Több",togglePaletteLessText:"Kevesebb"},jQuery.spectrum.localization.id={cancelText:"Batal",chooseText:"Pilih",clearText:"Hapus Pilihan Warna",noColorSelectedText:"Warna Tidak Dipilih",togglePaletteMoreText:"tambah",togglePaletteLessText:"kurangi"},jQuery.spectrum.localization.it={cancelText:"annulla",chooseText:"scegli",clearText:"Annulla selezione colore",noColorSelectedText:"Nessun colore selezionato"},jQuery.spectrum.localization.ja={cancelText:"中止",chooseText:"選択"},jQuery.spectrum.localization.ko={cancelText:"취소",chooseText:"선택",clearText:"선택 초기화",noColorSelectedText:"선택된 색상 없음",togglePaletteMoreText:"더보기",togglePaletteLessText:"줄이기"},jQuery.spectrum.localization.lt={cancelText:"Atšaukti",chooseText:"Pasirinkti",clearText:"Išvalyti pasirinkimą",noColorSelectedText:"Spalva nepasirinkta",togglePaletteMoreText:"Daugiau",togglePaletteLessText:"Mažiau"},jQuery.spectrum.localization["nb-no"]={cancelText:"Avbryte",chooseText:"Velg",clearText:"Tilbakestill",noColorSelectedText:"Farge er ikke valgt",togglePaletteMoreText:"Mer",togglePaletteLessText:"Mindre"},jQuery.spectrum.localization["nl-nl"]={cancelText:"Annuleer",chooseText:"Kies",clearText:"Wis kleur selectie",togglePaletteMoreText:"Meer",togglePaletteLessText:"Minder"},jQuery.spectrum.localization.pl={cancelText:"Anuluj",chooseText:"Wybierz",clearText:"Usuń wybór koloru",noColorSelectedText:"Nie wybrano koloru",togglePaletteMoreText:"Więcej",togglePaletteLessText:"Mniej"},jQuery.spectrum.localization["pt-br"]={cancelText:"Cancelar",chooseText:"Escolher",clearText:"Limpar cor selecionada",noColorSelectedText:"Nenhuma cor selecionada",togglePaletteMoreText:"Mais",togglePaletteLessText:"Menos"},jQuery.spectrum.localization["pt-pt"]={cancelText:"Cancelar",chooseText:"Escolher",clearText:"Limpar cor seleccionada",noColorSelectedText:"Nenhuma cor seleccionada",togglePaletteMoreText:"Mais",togglePaletteLessText:"Menos"},jQuery.spectrum.localization.ru={cancelText:"Отмена",chooseText:"Выбрать",clearText:"Сбросить",noColorSelectedText:"Цвет не выбран",togglePaletteMoreText:"Ещё",togglePaletteLessText:"Скрыть"},jQuery.spectrum.localization.sv={cancelText:"Avbryt",chooseText:"Välj"},jQuery.spectrum.localization.tr={cancelText:"iptal",chooseText:"tamam"},jQuery.spectrum.localization["zh-cn"]={cancelText:"取消",chooseText:"选择",clearText:"清除",togglePaletteMoreText:"更多选项",togglePaletteLessText:"隐藏",noColorSelectedText:"尚未选择任何颜色"},jQuery.spectrum.localization["zh-tw"]={cancelText:"取消",chooseText:"選擇",clearText:"清除",togglePaletteMoreText:"更多選項",togglePaletteLessText:"隱藏",noColorSelectedText:"尚未選擇任何顏色"}})(mt);
