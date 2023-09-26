(function(l,u,c,m){function v(t,e){this.w=l(c),this.el=l(t),(e=e||E).rootClass!==m&&e.rootClass!=="dd"&&(e.listClass=e.listClass?e.listClass:e.rootClass+"-list",e.itemClass=e.itemClass?e.itemClass:e.rootClass+"-item",e.dragClass=e.dragClass?e.dragClass:e.rootClass+"-dragel",e.handleClass=e.handleClass?e.handleClass:e.rootClass+"-handle",e.collapsedClass=e.collapsedClass?e.collapsedClass:e.rootClass+"-collapsed",e.placeClass=e.placeClass?e.placeClass:e.rootClass+"-placeholder",e.noDragClass=e.noDragClass?e.noDragClass:e.rootClass+"-nodrag",e.noChildrenClass=e.noChildrenClass?e.noChildrenClass:e.rootClass+"-nochildren",e.emptyClass=e.emptyClass?e.emptyClass:e.rootClass+"-empty"),this.options=l.extend({},E,e),this.options.json!==m&&this._build(),this.init()}var N="ontouchstart"in c,C=function(){var t=c.createElement("div"),e=c.documentElement;if(!("pointerEvents"in t.style))return!1;t.style.pointerEvents="auto",t.style.pointerEvents="x",e.appendChild(t);var n=u.getComputedStyle&&u.getComputedStyle(t,"").pointerEvents==="auto";return e.removeChild(t),!!n}(),E={contentCallback:function(t){return t.content?t.content:t.id},listNodeName:"ol",itemNodeName:"li",handleNodeName:"div",contentNodeName:"span",rootClass:"dd",listClass:"dd-list",itemClass:"dd-item",dragClass:"dd-dragel",handleClass:"dd-handle",contentClass:"dd-content",collapsedClass:"dd-collapsed",placeClass:"dd-placeholder",noDragClass:"dd-nodrag",noChildrenClass:"dd-nochildren",emptyClass:"dd-empty",expandBtnHTML:'<button class="dd-expand" data-action="expand" type="button">Expand</button>',collapseBtnHTML:'<button class="dd-collapse" data-action="collapse" type="button">Collapse</button>',group:0,maxDepth:5,threshold:20,fixedDepth:!1,fixed:!1,includeContent:!1,scroll:!1,scrollSensitivity:1,scrollSpeed:5,scrollTriggers:{top:40,left:40,right:-40,bottom:-40},effect:{animation:"none",time:"slow"},callback:function(t,e,n){},onDragStart:function(t,e,n){},beforeDragStop:function(t,e,n){},listRenderer:function(t,e){var n="<"+e.listNodeName+' class="'+e.listClass+'">';return n+=t,n+="</"+e.listNodeName+">"},itemRenderer:function(t,e,n,o,i){var s=l.map(t,function(r,d){return" "+d+'="'+r+'"'}).join(" "),a="<"+o.itemNodeName+s+">";return a+="<"+o.handleNodeName+' class="'+o.handleClass+'">',a+="<"+o.contentNodeName+' class="'+o.contentClass+'">',a+=e,a+="</"+o.contentNodeName+">",a+="</"+o.handleNodeName+">",a+=n,a+="</"+o.itemNodeName+">"}};v.prototype={init:function(){var t=this;t.reset(),t.el.data("nestable-group",this.options.group),t.placeEl=l('<div class="'+t.options.placeClass+'"/>');var e=this.el.find(t.options.itemNodeName);l.each(e,function(s,a){var r=l(a),d=r.parent();t.setParent(r),d.hasClass(t.options.collapsedClass)&&t.collapseItem(d.parent())}),e.length||this.appendEmptyElement(this.el),t.el.on("click","button",function(s){if(!t.dragEl){var a=l(s.currentTarget),r=a.data("action"),d=a.parents(t.options.itemNodeName).eq(0);r==="collapse"&&t.collapseItem(d),r==="expand"&&t.expandItem(d)}});var n=function(s){var a=l(s.target);if(!a.hasClass(t.options.handleClass)){if(a.closest("."+t.options.noDragClass).length)return;a=a.closest("."+t.options.handleClass)}a.length&&!t.dragEl&&(t.isTouch=/^touch/.test(s.type),t.isTouch&&s.touches.length!==1||(s.preventDefault(),t.dragStart(s.touches?s.touches[0]:s)))},o=function(s){t.dragEl&&(s.preventDefault(),t.dragMove(s.touches?s.touches[0]:s))},i=function(s){t.dragEl&&(s.preventDefault(),t.dragStop(s.touches?s.changedTouches[0]:s))};N&&(t.el[0].addEventListener("touchstart",n,!1),u.addEventListener("touchmove",o,!1),u.addEventListener("touchend",i,!1),u.addEventListener("touchcancel",i,!1)),t.el.on("mousedown",n),t.w.on("mousemove",o),t.w.on("mouseup",i),t.el.bind("destroy-nestable",function(){N&&(t.el[0].removeEventListener("touchstart",n,!1),u.removeEventListener("touchmove",o,!1),u.removeEventListener("touchend",i,!1),u.removeEventListener("touchcancel",i,!1)),t.el.off("mousedown",n),t.w.off("mousemove",o),t.w.off("mouseup",i),t.el.off("click"),t.el.unbind("destroy-nestable"),t.el.data("nestable",null)})},destroy:function(){this.el.trigger("destroy-nestable")},add:function(t){var e="."+this.options.listClass,n=l(this.el).children(e);t.parent_id!==m&&(n=n.find('[data-id="'+t.parent_id+'"]'),delete t.parent_id,n.children(e).length===0&&(n=n.append(this.options.listRenderer("",this.options))),n=n.find(e+":first"),this.setParent(n.parent())),n.append(this._buildItem(t,this.options))},replace:function(t){var e=this._buildItem(t,this.options);this._getItemById(t.id).replaceWith(e)},removeItem:function(t){var e=this.options,n=this.el;(t=t||this).remove();var o="."+e.listClass+" ."+e.listClass+":not(:has(*))";l(n).find(o).remove(),l(n).find('[data-action="expand"], [data-action="collapse"]').each(function(){l(this).siblings("."+e.listClass).length===0&&l(this).remove()})},remove:function(t,e){var n=this.options,o=this,i=this._getItemById(t),s=n.effect.animation||"fade",a=n.effect.time||"slow";s==="fade"?i.fadeOut(a,function(){o.removeItem(i)}):this.removeItem(i),e&&e()},removeAll:function(t){function e(){s.each(function(){n.removeItem(l(this))}),i.show(),t&&t()}var n=this,o=this.options,i=n.el.find(o.listNodeName).first(),s=i.children(o.itemNodeName),a=o.effect.animation||"fade",r=o.effect.time||"slow";a==="fade"?i.fadeOut(r,e):e()},_getItemById:function(t){return l(this.el).children("."+this.options.listClass).find('[data-id="'+t+'"]')},_build:function(){var t=this.options.json;typeof t=="string"&&(t=JSON.parse(t)),l(this.el).html(this._buildList(t,this.options))},_buildList:function(t,e){if(!t)return"";var n="",o=this;return l.each(t,function(i,s){n+=o._buildItem(s,e)}),e.listRenderer(n,e)},_buildItem:function(t,e){function n(d){var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return d+"".replace(/[&<>"']/g,function(p){return h[p]})}function o(d){var h={};for(var p in d)h[d[p]]=d[p];return h}var i=function(d){delete(d=l.extend({},d)).children,delete d.classes,delete d.content;var h={};return l.each(d,function(p,f){typeof f=="object"&&(f=JSON.stringify(f)),h["data-"+p]=n(f)}),h}(t);i.class=function(d,h){var p=d.classes||{};typeof p=="string"&&(p=[p]);var f=o(p);return f[h.itemClass]=h.itemClass,l.map(f,function(g){return g}).join(" ")}(t,e);var s=e.contentCallback(t),a=this._buildList(t.children,e),r=l(e.itemRenderer(i,s,a,e,t));return this.setParent(r),r[0].outerHTML},serialize:function(){var t=this,e=function(n){var o=[];return n.children(t.options.itemNodeName).each(function(){var i=l(this),s=l.extend({},i.data()),a=i.children(t.options.listNodeName);if(t.options.includeContent){var r=i.find("."+t.options.contentClass).html();r&&(s.content=r)}a.length&&(s.children=e(a)),o.push(s)}),o};return e(t.el.find(t.options.listNodeName).first())},asNestedSet:function(){function t(a,r,d){var h,p,f=d+1;return l(a).children(o.listNodeName).children(o.itemNodeName).length>0&&(r++,l(a).children(o.listNodeName).children(o.itemNodeName).each(function(){f=t(l(this),r,f)}),r--),h=l(a).attr("data-id"),e(h)&&(h=parseInt(h)),p=l(a).parent(o.listNodeName).parent(o.itemNodeName).attr("data-id")||"",e(p)&&(h=parseInt(p)),h&&i.push({id:h,parent_id:p,depth:r,lft:d,rgt:f}),d=f+1}function e(a){return l.isNumeric(a)&&Math.floor(a)==a}var n=this,o=n.options,i=[],s=1;return n.el.find(o.listNodeName).first().children(o.itemNodeName).each(function(){s=t(this,0,s)}),i=i.sort(function(a,r){return a.lft-r.lft})},returnOptions:function(){return this.options},serialise:function(){return this.serialize()},toHierarchy:function(t){function e(i){var s=(l(i).attr(n.attribute||"id")||"").match(n.expression||/(.+)[-=_](.+)/);if(s){var a={id:s[2]};return l(i).children(n.listType).children(n.items).length>0&&(a.children=[],l(i).children(n.listType).children(n.items).each(function(){var r=e(this);a.children.push(r)})),a}}var n=l.extend({},this.options,t),o=[];return l(this.element).children(n.items).each(function(){var i=e(this);o.push(i)}),o},toArray:function(){function t(a,r,d){var h,p,f=d+1;return a.children(e.options.listNodeName).children(e.options.itemNodeName).length>0&&(r++,a.children(e.options.listNodeName).children(e.options.itemNodeName).each(function(){f=t(l(this),r,f)}),r--),h=a.data().id,p=r===n+1?e.rootID:a.parent(e.options.listNodeName).parent(e.options.itemNodeName).data().id,h&&o.push({id:h,parent_id:p,depth:r,left:d,right:f}),d=f+1}var e=l.extend({},this.options,this),n=e.startDepthCount||0,o=[],i=2,s=this;return s.el.find(s.options.listNodeName).first().children(s.options.itemNodeName).each(function(){i=t(l(this),n+1,i)}),o=o.sort(function(a,r){return a.left-r.left})},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0},this.isTouch=!1,this.moving=!1,this.dragEl=null,this.dragRootEl=null,this.dragDepth=0,this.hasNewRoot=!1,this.pointEl=null},expandItem:function(t){t.removeClass(this.options.collapsedClass)},collapseItem:function(t){t.children(this.options.listNodeName).length&&t.addClass(this.options.collapsedClass)},expandAll:function(){var t=this;t.el.find(t.options.itemNodeName).each(function(){t.expandItem(l(this))})},collapseAll:function(){var t=this;t.el.find(t.options.itemNodeName).each(function(){t.collapseItem(l(this))})},setParent:function(t){t.is(this.options.itemNodeName)&&t.children(this.options.listNodeName).length&&(t.children("[data-action]").remove(),t.prepend(l(this.options.expandBtnHTML)),t.prepend(l(this.options.collapseBtnHTML)))},unsetParent:function(t){t.removeClass(this.options.collapsedClass),t.children("[data-action]").remove(),t.children(this.options.listNodeName).remove()},dragStart:function(t){var e=this.mouse,n=l(t.target).closest(this.options.itemNodeName),o={top:t.pageY,left:t.pageX},i=this.options.onDragStart.call(this,this.el,n,o);if(i===void 0||i!==!1){this.placeEl.css("height",n.height()),e.offsetX=t.pageX-n.offset().left,e.offsetY=t.pageY-n.offset().top,e.startX=e.lastX=t.pageX,e.startY=e.lastY=t.pageY,this.dragRootEl=this.el,this.dragEl=l(c.createElement(this.options.listNodeName)).addClass(this.options.listClass+" "+this.options.dragClass),this.dragEl.css("width",n.outerWidth()),this.setIndexOfItem(n),n.after(this.placeEl),n[0].parentNode.removeChild(n[0]),n.appendTo(this.dragEl),l(c.body).append(this.dragEl),this.dragEl.css({left:t.pageX-e.offsetX,top:t.pageY-e.offsetY});var s,a,r=this.dragEl.find(this.options.itemNodeName);for(s=0;s<r.length;s++)(a=l(r[s]).parents(this.options.listNodeName).length)>this.dragDepth&&(this.dragDepth=a)}},createSubLevel:function(t,e){var n=l("<"+this.options.listNodeName+"/>").addClass(this.options.listClass);return e&&n.append(e),t.append(n),this.setParent(t),n},setIndexOfItem:function(t,e){(e=e||[]).unshift(t.index()),l(t[0].parentNode)[0]!==this.dragRootEl[0]?this.setIndexOfItem(l(t[0].parentNode),e):this.dragEl.data("indexOfItem",e)},restoreItemAtIndex:function(t,e){for(var n=this.el,o=e.length-1,i=0;i<e.length;i++){if(o===parseInt(i))return void function(r,d){e[o]===0?l(r).prepend(d.clone(!0)):l(r.children[e[o]-1]).after(d.clone(!0))}(n,t);var s=n[0]?n[0]:n,a=s.children[e[i]];n=a||this.createSubLevel(l(s))}},dragStop:function(t){var e={top:t.pageY,left:t.pageX},n=this.dragEl.data("indexOfItem"),o=this.dragEl.children(this.options.itemNodeName).first();o[0].parentNode.removeChild(o[0]),this.dragEl.remove();var i=this.options.beforeDragStop.call(this,this.el,o,this.placeEl.parent());if(i!==void 0&&i===!1){var s=this.placeEl.parent();return this.placeEl.remove(),s.children().length||this.unsetParent(s.parent()),this.restoreItemAtIndex(o,n),void this.reset()}this.placeEl.replaceWith(o),this.hasNewRoot?(this.options.fixed===!0?this.restoreItemAtIndex(o,n):this.el.trigger("lostItem"),this.dragRootEl.trigger("gainedItem")):this.dragRootEl.trigger("change"),this.options.callback.call(this,this.dragRootEl,o,e),this.reset()},dragMove:function(t){var e,n,o,i=this.options,s=this.mouse;this.dragEl.css({left:t.pageX-s.offsetX,top:t.pageY-s.offsetY}),s.lastX=s.nowX,s.lastY=s.nowY,s.nowX=t.pageX,s.nowY=t.pageY,s.distX=s.nowX-s.lastX,s.distY=s.nowY-s.lastY,s.lastDirX=s.dirX,s.lastDirY=s.dirY,s.dirX=s.distX===0?0:s.distX>0?1:-1,s.dirY=s.distY===0?0:s.distY>0?1:-1;var a=Math.abs(s.distX)>Math.abs(s.distY)?1:0;if(!s.moving)return s.dirAx=a,void(s.moving=!0);if(i.scroll)if(u.jQuery.fn.scrollParent!==void 0){var r=!1,d=this.el.scrollParent()[0];d!==c&&d.tagName!=="HTML"?(i.scrollTriggers.bottom+d.offsetHeight-t.pageY<i.scrollSensitivity?d.scrollTop=r=d.scrollTop+i.scrollSpeed:t.pageY-i.scrollTriggers.top<i.scrollSensitivity&&(d.scrollTop=r=d.scrollTop-i.scrollSpeed),i.scrollTriggers.right+d.offsetWidth-t.pageX<i.scrollSensitivity?d.scrollLeft=r=d.scrollLeft+i.scrollSpeed:t.pageX-i.scrollTriggers.left<i.scrollSensitivity&&(d.scrollLeft=r=d.scrollLeft-i.scrollSpeed)):(t.pageY-l(c).scrollTop()<i.scrollSensitivity?r=l(c).scrollTop(l(c).scrollTop()-i.scrollSpeed):l(u).height()-(t.pageY-l(c).scrollTop())<i.scrollSensitivity&&(r=l(c).scrollTop(l(c).scrollTop()+i.scrollSpeed)),t.pageX-l(c).scrollLeft()<i.scrollSensitivity?r=l(c).scrollLeft(l(c).scrollLeft()-i.scrollSpeed):l(u).width()-(t.pageX-l(c).scrollLeft())<i.scrollSensitivity&&(r=l(c).scrollLeft(l(c).scrollLeft()+i.scrollSpeed)))}else console.warn("To use scrolling you need to have scrollParent() function, check documentation for more information");this.scrollTimer&&clearTimeout(this.scrollTimer),i.scroll&&r&&(this.scrollTimer=setTimeout(function(){l(u).trigger(t)},10)),s.dirAx!==a?(s.distAxX=0,s.distAxY=0):(s.distAxX+=Math.abs(s.distX),s.dirX!==0&&s.dirX!==s.lastDirX&&(s.distAxX=0),s.distAxY+=Math.abs(s.distY),s.dirY!==0&&s.dirY!==s.lastDirY&&(s.distAxY=0)),s.dirAx=a,s.dirAx&&s.distAxX>=i.threshold&&(s.distAxX=0,o=this.placeEl.prev(i.itemNodeName),s.distX>0&&o.length&&!o.hasClass(i.collapsedClass)&&!o.hasClass(i.noChildrenClass)&&(e=o.find(i.listNodeName).last(),this.placeEl.parents(i.listNodeName).length+this.dragDepth<=i.maxDepth&&(e.length?(e=o.children(i.listNodeName).last()).append(this.placeEl):this.createSubLevel(o,this.placeEl))),s.distX<0&&(this.placeEl.next(i.itemNodeName).length||(n=this.placeEl.parent(),this.placeEl.closest(i.itemNodeName).after(this.placeEl),n.children().length||this.unsetParent(n.parent()))));var h=!1;if(C||(this.dragEl[0].style.visibility="hidden"),this.pointEl=l(c.elementFromPoint(t.pageX-c.body.scrollLeft,t.pageY-(u.pageYOffset||c.documentElement.scrollTop))),C||(this.dragEl[0].style.visibility="visible"),this.pointEl.hasClass(i.handleClass)&&(this.pointEl=this.pointEl.closest(i.itemNodeName)),this.pointEl.hasClass(i.emptyClass))h=!0;else if(!this.pointEl.length||!this.pointEl.hasClass(i.itemClass))return;var p=this.pointEl.closest("."+i.rootClass),f=this.dragRootEl.data("nestable-id")!==p.data("nestable-id");if(!s.dirAx||f||h){if(f&&i.group!==p.data("nestable-group")||this.options.fixedDepth&&this.dragDepth+1!==this.pointEl.parents(i.listNodeName).length||this.dragDepth-1+this.pointEl.parents(i.listNodeName).length>i.maxDepth)return;var g=t.pageY<this.pointEl.offset().top+this.pointEl.height()/2;n=this.placeEl.parent(),h?((e=l(c.createElement(i.listNodeName)).addClass(i.listClass)).append(this.placeEl),this.pointEl.replaceWith(e)):g?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),n.children().length||this.unsetParent(n.parent()),this.dragRootEl.find(i.itemNodeName).length||this.appendEmptyElement(this.dragRootEl),this.dragRootEl=p,f&&(this.hasNewRoot=this.el[0]!==this.dragRootEl[0])}},appendEmptyElement:function(t){t.append('<div class="'+this.options.emptyClass+'"/>')}},l.fn.nestable=function(t){var e=this,n=this,o=arguments;return"Nestable"in u||(u.Nestable={},Nestable.counter=0),e.each(function(){var i=l(this).data("nestable");if(i){if(typeof t=="string"&&typeof i[t]=="function")if(o.length>1){for(var s=[],a=1;a<o.length;a++)s.push(o[a]);n=i[t].apply(i,s)}else n=i[t]()}else Nestable.counter++,l(this).data("nestable",new v(this,t)),l(this).data("nestable-id",Nestable.counter)}),n||e}})(window.jQuery||window.Zepto,window,document);
