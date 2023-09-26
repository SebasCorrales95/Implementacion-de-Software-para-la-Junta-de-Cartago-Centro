import{r as M}from"./jquery-4e911315.js";import{r as P}from"./raphael.min-abc5308a.js";import{r as j}from"./jquery.mousewheel-0f37ab72.js";import"./_commonjsHelpers-042e6b4d.js";var V={},F={get exports(){return V},set exports($){V=$}};(function($,q){(function(h){$.exports=h(M(),P(),j())})(function(h,L,X,r){var B=function(t,o){var e=this;e.container=t,e.$container=h(t),e.options=e.extendDefaultOptions(o),e.zoomTO=0,e.zoomCenterX=0,e.zoomCenterY=0,e.previousPinchDist=0,e.zoomData={zoomLevel:0,zoomX:0,zoomY:0,panX:0,panY:0},e.currentViewBox={x:0,y:0,w:0,h:0},e.panning=!1,e.zoomAnimID=null,e.zoomAnimStartTime=null,e.zoomAnimCVBTarget=null,e.$map=h("."+e.options.map.cssClass,e.container),e.initialMapHTMLContent=e.$map.html(),e.$tooltip={},e.paper={},e.areas={},e.plots={},e.links={},e.legends={},e.mapConf={},e.customEventHandlers={},e.init()};return B.prototype={MouseOverFilteringTO:120,panningFilteringTO:150,panningEndFilteringTO:50,zoomFilteringTO:150,resizeFilteringTO:150,init:function(){var t=this;if(t.options.map.cssClass===""||h("."+t.options.map.cssClass,t.container).length===0)throw new Error("The map class `"+t.options.map.cssClass+"` doesn't exists");if(t.$tooltip=h("<div>").addClass(t.options.map.tooltip.cssClass).css("display","none"),t.$map.empty().append(t.$tooltip),h.mapael&&h.mapael.maps&&h.mapael.maps[t.options.map.name])t.mapConf=h.mapael.maps[t.options.map.name];else{if(!(h.fn.mapael&&h.fn.mapael.maps&&h.fn.mapael.maps[t.options.map.name]))throw new Error("Unknown map '"+t.options.map.name+"'");t.mapConf=h.fn.mapael.maps[t.options.map.name],window.console&&window.console.warn&&window.console.warn("Extending $.fn.mapael is deprecated (map '"+t.options.map.name+"')")}if(t.paper=new L(t.$map[0],t.mapConf.width,t.mapConf.height),t.isRaphaelBBoxBugPresent()===!0)throw t.destroy(),new Error("Can't get boundary box for text (is your container hidden? See #135)");t.$container.addClass("mapael"),t.options.map.tooltip.css&&t.$tooltip.css(t.options.map.tooltip.css),t.setViewBox(0,0,t.mapConf.width,t.mapConf.height),t.options.map.width?t.paper.setSize(t.options.map.width,t.mapConf.height*(t.options.map.width/t.mapConf.width)):t.initResponsiveSize(),h.each(t.mapConf.elems,function(o){t.areas[o]={},t.areas[o].options=t.getElemOptions(t.options.map.defaultArea,t.options.areas[o]?t.options.areas[o]:{},t.options.legend.area),t.areas[o].mapElem=t.paper.path(t.mapConf.elems[o])}),t.options.map.beforeInit&&t.options.map.beforeInit(t.$container,t.paper,t.options),h.each(t.mapConf.elems,function(o){t.initElem(o,"area",t.areas[o])}),t.links=t.drawLinksCollection(t.options.links),h.each(t.options.plots,function(o){t.plots[o]=t.drawPlot(o)}),t.$container.on("zoom.mapael",function(o,e){t.onZoomEvent(o,e)}),t.options.map.zoom.enabled&&t.initZoom(t.mapConf.width,t.mapConf.height,t.options.map.zoom),t.options.map.zoom.init!==r&&(t.options.map.zoom.init.animDuration===r&&(t.options.map.zoom.init.animDuration=0),t.$container.trigger("zoom",t.options.map.zoom.init)),t.createLegends("area",t.areas,1),t.createLegends("plot",t.plots,t.paper.width/t.mapConf.width),t.$container.on("update.mapael",function(o,e){t.onUpdateEvent(o,e)}),t.$container.on("showElementsInRange.mapael",function(o,e){t.onShowElementsInRange(o,e)}),t.initDelegatedMapEvents(),t.initDelegatedCustomEvents(),t.options.map.afterInit&&t.options.map.afterInit(t.$container,t.paper,t.areas,t.plots,t.options),h(t.paper.desc).append(" and Mapael "+t.version+" (https://www.vincentbroute.fr/mapael/)")},destroy:function(){var t=this;t.$container.off(".mapael"),t.$map.off(".mapael"),t.onResizeEvent&&h(window).off("resize.mapael",t.onResizeEvent),t.$map.empty(),t.$map.html(t.initialMapHTMLContent),h.each(t.legends,function(o){h.each(t.legends[o],function(e){var n=t.legends[o][e];n.container.empty(),n.container.html(n.initialHTMLContent)})}),t.$container.removeClass("mapael"),t.$container.removeData("mapael"),t.container=r,t.$container=r,t.options=r,t.paper=r,t.$map=r,t.$tooltip=r,t.mapConf=r,t.areas=r,t.plots=r,t.links=r,t.customEventHandlers=r},initResponsiveSize:function(){var t=this,o=null,e=function(n){var i=t.$map.width();if(t.paper.width!==i){var s=i/t.mapConf.width;t.paper.setSize(i,t.mapConf.height*s),n!==!0&&t.options.legend.redrawOnResize&&t.createLegends("plot",t.plots,s)}};t.onResizeEvent=function(){clearTimeout(o),o=setTimeout(function(){e()},t.resizeFilteringTO)},h(window).on("resize.mapael",t.onResizeEvent),e(!0)},extendDefaultOptions:function(t){return t=h.extend(!0,{},B.prototype.defaultOptions,t),h.each(["area","plot"],function(o,e){if(h.isArray(t.legend[e]))for(var n=0;n<t.legend[e].length;++n)t.legend[e][n]=h.extend(!0,{},B.prototype.legendDefaultOptions[e],t.legend[e][n]);else t.legend[e]=h.extend(!0,{},B.prototype.legendDefaultOptions[e],t.legend[e])}),t},initDelegatedMapEvents:function(){var t,o=this,e={area:o.areas,"area-text":o.areas,plot:o.plots,"plot-text":o.plots,link:o.links,"link-text":o.links};o.$container.on("mouseover.mapael","[data-id]",function(){var i=this;clearTimeout(t),t=setTimeout(function(){var s=h(i),l=s.attr("data-id"),a=s.attr("data-type");if(e[a]!==r)o.elemEnter(e[a][l]);else if(a==="legend-elem"||a==="legend-label"){var d=s.attr("data-legend-id"),m=s.attr("data-legend-type");o.elemEnter(o.legends[m][d].elems[l])}},o.MouseOverFilteringTO)});var n;o.$container.on("mousemove.mapael","[data-id]",function(i){var s=this;clearTimeout(n),n=setTimeout(function(){var l=h(s),a=l.attr("data-id"),d=l.attr("data-type");e[d]!==r&&o.elemHover(e[d][a],i)},0)}),o.$container.on("mouseout.mapael","[data-id]",function(){var i=this;clearTimeout(t),clearTimeout(n);var s=h(i),l=s.attr("data-id"),a=s.attr("data-type");if(e[a]!==r)o.elemOut(e[a][l]);else if(a==="legend-elem"||a==="legend-label"){var d=s.attr("data-legend-id"),m=s.attr("data-legend-type");o.elemOut(o.legends[m][d].elems[l])}}),o.$container.on("click.mapael","[data-id]",function(i,s){var l=h(this),a=l.attr("data-id"),d=l.attr("data-type");if(e[d]!==r)o.elemClick(e[d][a]);else if(d==="legend-elem"||d==="legend-label"){var m=l.attr("data-legend-id"),f=l.attr("data-legend-type");o.handleClickOnLegendElem(o.legends[f][m].elems[a],a,m,f,s)}})},initDelegatedCustomEvents:function(){var t=this;h.each(t.customEventHandlers,function(o){var e=o+".mapael.custom";t.$container.off(e).on(e,"[data-id]",function(n){var i=h(this),s=i.attr("data-id"),l=i.attr("data-type").replace("-text","");if(!t.panning&&t.customEventHandlers[o][l]!==r&&t.customEventHandlers[o][l][s]!==r){var a=t.customEventHandlers[o][l][s];a.options.eventHandlers[o](n,s,a.mapElem,a.textElem,a.options)}})})},initElem:function(t,o,e){var n=this,i=h(e.mapElem.node);if(e.options.href&&(e.options.attrs.cursor="pointer",e.options.text&&(e.options.text.attrs.cursor="pointer")),e.mapElem.attr(e.options.attrs),i.attr({"data-id":t,"data-type":o}),e.options.cssClass!==r&&i.addClass(e.options.cssClass),e.options.text&&e.options.text.content!==r){var s=n.getTextPosition(e.mapElem.getBBox(),e.options.text.position,e.options.text.margin);e.options.text.attrs.text=e.options.text.content,e.options.text.attrs.x=s.x,e.options.text.attrs.y=s.y,e.options.text.attrs["text-anchor"]=s.textAnchor,e.textElem=n.paper.text(s.x,s.y,e.options.text.content),e.textElem.attr(e.options.text.attrs),h(e.textElem.node).attr({"data-id":t,"data-type":o+"-text"})}e.options.eventHandlers&&n.setEventHandlers(t,o,e),n.setHoverOptions(e.mapElem,e.options.attrs,e.options.attrsHover),e.textElem&&n.setHoverOptions(e.textElem,e.options.text.attrs,e.options.text.attrsHover)},initZoom:function(t,o,e){var n=this,i=!1,s=0,l=0,a={reset:function(){n.$container.trigger("zoom",{level:0})},in:function(){n.$container.trigger("zoom",{level:"+1"})},out:function(){n.$container.trigger("zoom",{level:-1})}};h.extend(n.zoomData,{zoomLevel:0,panX:0,panY:0}),h.each(e.buttons,function(f,g){if(a[f]===r)throw new Error("Unknown zoom button '"+f+"'");var c=h("<div>").addClass(g.cssClass).html(g.content).attr("title",g.title);c.on("click.mapael",a[f]),n.$map.append(c)}),n.options.map.zoom.mousewheel&&n.$map.on("mousewheel.mapael",function(f){var g=f.deltaY>0?1:-1,c=n.mapPagePositionToXY(f.pageX,f.pageY);n.$container.trigger("zoom",{fixedCenter:!0,level:n.zoomData.zoomLevel+g,x:c.x,y:c.y}),f.preventDefault()}),n.options.map.zoom.touch&&(n.$map.on("touchstart.mapael",function(f){f.originalEvent.touches.length===2&&(n.zoomCenterX=(f.originalEvent.touches[0].pageX+f.originalEvent.touches[1].pageX)/2,n.zoomCenterY=(f.originalEvent.touches[0].pageY+f.originalEvent.touches[1].pageY)/2,n.previousPinchDist=Math.sqrt(Math.pow(f.originalEvent.touches[1].pageX-f.originalEvent.touches[0].pageX,2)+Math.pow(f.originalEvent.touches[1].pageY-f.originalEvent.touches[0].pageY,2)))}),n.$map.on("touchmove.mapael",function(f){var g=0,c=0;if(f.originalEvent.touches.length===2){if(g=Math.sqrt(Math.pow(f.originalEvent.touches[1].pageX-f.originalEvent.touches[0].pageX,2)+Math.pow(f.originalEvent.touches[1].pageY-f.originalEvent.touches[0].pageY,2)),Math.abs(g-n.previousPinchDist)>15){var p=n.mapPagePositionToXY(n.zoomCenterX,n.zoomCenterY);c=(g-n.previousPinchDist)/Math.abs(g-n.previousPinchDist),n.$container.trigger("zoom",{fixedCenter:!0,level:n.zoomData.zoomLevel+c,x:p.x,y:p.y}),n.previousPinchDist=g}return!1}})),n.$map.on("dragstart",function(){return!1});var d=null,m=null;h("body").on("mouseup.mapael"+(e.touch?" touchend.mapael":""),function(){i=!1,clearTimeout(d),clearTimeout(m),d=setTimeout(function(){n.panning=!1},n.panningEndFilteringTO)}),n.$map.on("mousedown.mapael"+(e.touch?" touchstart.mapael":""),function(f){clearTimeout(d),clearTimeout(m),f.pageX!==r?(i=!0,s=f.pageX,l=f.pageY):f.originalEvent.touches.length===1&&(i=!0,s=f.originalEvent.touches[0].pageX,l=f.originalEvent.touches[0].pageY)}).on("mousemove.mapael"+(e.touch?" touchmove.mapael":""),function(f){var g=n.zoomData.zoomLevel,c=0,p=0;if(clearTimeout(d),clearTimeout(m),f.pageX!==r?(c=f.pageX,p=f.pageY):f.originalEvent.touches.length===1?(c=f.originalEvent.touches[0].pageX,p=f.originalEvent.touches[0].pageY):i=!1,i&&g!==0){var v=(s-c)/(1+g*e.step)*(t/n.paper.width),w=(l-p)/(1+g*e.step)*(o/n.paper.height),x=Math.min(Math.max(0,n.currentViewBox.x+v),t-n.currentViewBox.w),u=Math.min(Math.max(0,n.currentViewBox.y+w),o-n.currentViewBox.h);return(Math.abs(v)>5||Math.abs(w)>5)&&(h.extend(n.zoomData,{panX:x,panY:u,zoomX:x+n.currentViewBox.w/2,zoomY:u+n.currentViewBox.h/2}),n.setViewBox(x,u,n.currentViewBox.w,n.currentViewBox.h),m=setTimeout(function(){n.$map.trigger("afterPanning",{x1:x,y1:u,x2:x+n.currentViewBox.w,y2:u+n.currentViewBox.h})},n.panningFilteringTO),s=c,l=p,n.panning=!0),!1}})},mapPagePositionToXY:function(t,o){var e=this,n=e.$map.offset(),i=e.options.map.width?e.mapConf.width/e.options.map.width:e.mapConf.width/e.$map.width(),s=1/(1+e.zoomData.zoomLevel*e.options.map.zoom.step);return{x:s*i*(t-n.left)+e.zoomData.panX,y:s*i*(o-n.top)+e.zoomData.panY}},onZoomEvent:function(t,o){var e,n,i,s,l,a=this,d=a.zoomData.zoomLevel,m=1+a.zoomData.zoomLevel*a.options.map.zoom.step,f=o.animDuration!==r?o.animDuration:a.options.map.zoom.animDuration;if(o.area!==r){if(a.areas[o.area]===r)throw new Error("Unknown area '"+o.area+"'");var g=o.areaMargin!==r?o.areaMargin:10,c=a.areas[o.area].mapElem.getBBox(),p=c.width+2*g,v=c.height+2*g;o.x=c.cx,o.y=c.cy,d=Math.min(Math.floor((a.mapConf.width/p-1)/a.options.map.zoom.step),Math.floor((a.mapConf.height/v-1)/a.options.map.zoom.step))}else if(o.level!==r&&(d=typeof o.level=="string"?o.level.slice(0,1)==="+"||o.level.slice(0,1)==="-"?a.zoomData.zoomLevel+parseInt(o.level,10):parseInt(o.level,10):o.level<0?a.zoomData.zoomLevel+o.level:o.level),o.plot!==r){if(a.plots[o.plot]===r)throw new Error("Unknown plot '"+o.plot+"'");o.x=a.plots[o.plot].coords.x,o.y=a.plots[o.plot].coords.y}else{if(o.latitude!==r&&o.longitude!==r){var w=a.mapConf.getCoords(o.latitude,o.longitude);o.x=w.x,o.y=w.y}o.x===r&&(o.x=a.currentViewBox.x+a.currentViewBox.w/2),o.y===r&&(o.y=a.currentViewBox.y+a.currentViewBox.h/2)}d=Math.min(Math.max(d,a.options.map.zoom.minLevel),a.options.map.zoom.maxLevel),l=1+d*a.options.map.zoom.step,i=a.mapConf.width/l,s=a.mapConf.height/l,d===0?(e=0,n=0):(o.fixedCenter!==r&&o.fixedCenter===!0?(e=a.zoomData.panX+(o.x-a.zoomData.panX)*(l-m)/l,n=a.zoomData.panY+(o.y-a.zoomData.panY)*(l-m)/l):(e=o.x-i/2,n=o.y-s/2),e=Math.min(Math.max(0,e),a.mapConf.width-i),n=Math.min(Math.max(0,n),a.mapConf.height-s)),l===m&&e===a.zoomData.panX&&n===a.zoomData.panY||(f>0?a.animateViewBox(e,n,i,s,f,a.options.map.zoom.animEasing):(a.setViewBox(e,n,i,s),clearTimeout(a.zoomTO),a.zoomTO=setTimeout(function(){a.$map.trigger("afterZoom",{x1:e,y1:n,x2:e+i,y2:n+s})},a.zoomFilteringTO)),h.extend(a.zoomData,{zoomLevel:d,panX:e,panY:n,zoomX:e+i/2,zoomY:n+s/2}))},onShowElementsInRange:function(t,o){var e=this;o.animDuration===r&&(o.animDuration=0),o.hiddenOpacity===r&&(o.hiddenOpacity=.3),o.ranges&&o.ranges.area&&e.showElemByRange(o.ranges.area,e.areas,o.hiddenOpacity,o.animDuration),o.ranges&&o.ranges.plot&&e.showElemByRange(o.ranges.plot,e.plots,o.hiddenOpacity,o.animDuration),o.ranges&&o.ranges.link&&e.showElemByRange(o.ranges.link,e.links,o.hiddenOpacity,o.animDuration),o.afterShowRange&&o.afterShowRange()},showElemByRange:function(t,o,e,n){var i=this,s={};t.min===r&&t.max===r||(t={0:t}),h.each(t,function(l){var a=t[l];if(a.min===r&&a.max===r)return!0;h.each(o,function(d){var m=o[d].options.value;if(typeof m!="object"&&(m=[m]),m[l]===r)return!0;a.min!==r&&m[l]<a.min||a.max!==r&&m[l]>a.max?s[d]=e:s[d]=1})}),h.each(s,function(l){i.setElementOpacity(o[l],s[l],n)})},setElementOpacity:function(t,o,e){var n=this;o>0&&(t.mapElem.show(),t.textElem&&t.textElem.show()),n.animate(t.mapElem,{opacity:o},e,function(){o===0&&t.mapElem.hide()}),n.animate(t.textElem,{opacity:o},e,function(){o===0&&t.textElem.hide()})},onUpdateEvent:function(t,o){var e=this;if(typeof o=="object"){var n=0,i=o.animDuration?o.animDuration:0,s=function(m){e.animate(m.mapElem,{opacity:0},i,function(){m.mapElem.remove()}),e.animate(m.textElem,{opacity:0},i,function(){m.textElem.remove()})},l=function(m){m.mapElem.attr({opacity:0}),m.textElem&&m.textElem.attr({opacity:0}),e.setElementOpacity(m,m.mapElem.originalAttrs.opacity!==r?m.mapElem.originalAttrs.opacity:1,i)};if(typeof o.mapOptions=="object"&&(o.replaceOptions===!0?e.options=e.extendDefaultOptions(o.mapOptions):h.extend(!0,e.options,o.mapOptions),o.mapOptions.areas===r&&o.mapOptions.plots===r&&o.mapOptions.legend===r||h("[data-type='legend-elem']",e.$container).each(function(m,f){h(f).attr("data-hidden")==="1"&&h(f).trigger("click",{hideOtherElems:!1,animDuration:i})})),typeof o.deletePlotKeys=="object")for(;n<o.deletePlotKeys.length;n++)e.plots[o.deletePlotKeys[n]]!==r&&(s(e.plots[o.deletePlotKeys[n]]),delete e.plots[o.deletePlotKeys[n]]);else o.deletePlotKeys==="all"&&(h.each(e.plots,function(m,f){s(f)}),e.plots={});if(typeof o.deleteLinkKeys=="object")for(n=0;n<o.deleteLinkKeys.length;n++)e.links[o.deleteLinkKeys[n]]!==r&&(s(e.links[o.deleteLinkKeys[n]]),delete e.links[o.deleteLinkKeys[n]]);else o.deleteLinkKeys==="all"&&(h.each(e.links,function(m,f){s(f)}),e.links={});if(typeof o.newPlots=="object"&&h.each(o.newPlots,function(m){e.plots[m]===r&&(e.options.plots[m]=o.newPlots[m],e.plots[m]=e.drawPlot(m),i>0&&l(e.plots[m]))}),typeof o.newLinks=="object"){var a=e.drawLinksCollection(o.newLinks);h.extend(e.links,a),h.extend(e.options.links,o.newLinks),i>0&&h.each(a,function(m){l(a[m])})}if(h.each(e.areas,function(m){(typeof o.mapOptions=="object"&&(typeof o.mapOptions.map=="object"&&typeof o.mapOptions.map.defaultArea=="object"||typeof o.mapOptions.areas=="object"&&typeof o.mapOptions.areas[m]=="object"||typeof o.mapOptions.legend=="object"&&typeof o.mapOptions.legend.area=="object")||o.replaceOptions===!0)&&(e.areas[m].options=e.getElemOptions(e.options.map.defaultArea,e.options.areas[m]?e.options.areas[m]:{},e.options.legend.area),e.updateElem(e.areas[m],i))}),h.each(e.plots,function(m){(typeof o.mapOptions=="object"&&(typeof o.mapOptions.map=="object"&&typeof o.mapOptions.map.defaultPlot=="object"||typeof o.mapOptions.plots=="object"&&typeof o.mapOptions.plots[m]=="object"||typeof o.mapOptions.legend=="object"&&typeof o.mapOptions.legend.plot=="object")||o.replaceOptions===!0)&&(e.plots[m].options=e.getElemOptions(e.options.map.defaultPlot,e.options.plots[m]?e.options.plots[m]:{},e.options.legend.plot),e.setPlotCoords(e.plots[m]),e.setPlotAttributes(e.plots[m]),e.updateElem(e.plots[m],i))}),h.each(e.links,function(m){(typeof o.mapOptions=="object"&&(typeof o.mapOptions.map=="object"&&typeof o.mapOptions.map.defaultLink=="object"||typeof o.mapOptions.links=="object"&&typeof o.mapOptions.links[m]=="object")||o.replaceOptions===!0)&&(e.links[m].options=e.getElemOptions(e.options.map.defaultLink,e.options.links[m]?e.options.links[m]:{},{}),e.updateElem(e.links[m],i))}),o.mapOptions&&(typeof o.mapOptions.legend=="object"||typeof o.mapOptions.map=="object"&&typeof o.mapOptions.map.defaultArea=="object"||typeof o.mapOptions.map=="object"&&typeof o.mapOptions.map.defaultPlot=="object")&&(h("[data-type='legend-elem']",e.$container).each(function(m,f){h(f).attr("data-hidden")==="1"&&h(f).trigger("click",{hideOtherElems:!1,animDuration:i})}),e.createLegends("area",e.areas,1),e.options.map.width?e.createLegends("plot",e.plots,e.options.map.width/e.mapConf.width):e.createLegends("plot",e.plots,e.$map.width()/e.mapConf.width)),typeof o.setLegendElemsState=="object")h.each(o.setLegendElemsState,function(m,f){var g=e.$container.find("."+m)[0];g!==r&&h("[data-type='legend-elem']",g).each(function(c,p){(h(p).attr("data-hidden")==="0"&&f==="hide"||h(p).attr("data-hidden")==="1"&&f==="show")&&h(p).trigger("click",{hideOtherElems:!1,animDuration:i})})});else{var d=o.setLegendElemsState==="hide"?"hide":"show";h("[data-type='legend-elem']",e.$container).each(function(m,f){(h(f).attr("data-hidden")==="0"&&d==="hide"||h(f).attr("data-hidden")==="1"&&d==="show")&&h(f).trigger("click",{hideOtherElems:!1,animDuration:i})})}e.initDelegatedCustomEvents(),o.afterUpdate&&o.afterUpdate(e.$container,e.paper,e.areas,e.plots,e.options,e.links)}},setPlotCoords:function(t){var o=this;if(t.options.x!==r&&t.options.y!==r)t.coords={x:t.options.x,y:t.options.y};else if(t.options.plotsOn!==r&&o.areas[t.options.plotsOn]!==r){var e=o.areas[t.options.plotsOn].mapElem.getBBox();t.coords={x:e.cx,y:e.cy}}else t.coords=o.mapConf.getCoords(t.options.latitude,t.options.longitude)},setPlotAttributes:function(t){t.options.type==="square"?(t.options.attrs.width=t.options.size,t.options.attrs.height=t.options.size,t.options.attrs.x=t.coords.x-t.options.size/2,t.options.attrs.y=t.coords.y-t.options.size/2):t.options.type==="image"?(t.options.attrs.src=t.options.url,t.options.attrs.width=t.options.width,t.options.attrs.height=t.options.height,t.options.attrs.x=t.coords.x-t.options.width/2,t.options.attrs.y=t.coords.y-t.options.height/2):t.options.type==="svg"?(t.options.attrs.path=t.options.path,t.options.attrs.transform===r&&(t.options.attrs.transform=""),t.mapElem.originalBBox===r&&(t.mapElem.originalBBox=t.mapElem.getBBox()),t.mapElem.baseTransform="m"+t.options.width/t.mapElem.originalBBox.width+",0,0,"+t.options.height/t.mapElem.originalBBox.height+","+(t.coords.x-t.options.width/2)+","+(t.coords.y-t.options.height/2),t.options.attrs.transform=t.mapElem.baseTransform+t.options.attrs.transform):(t.options.attrs.x=t.coords.x,t.options.attrs.y=t.coords.y,t.options.attrs.r=t.options.size/2)},drawLinksCollection:function(t){var o=this,e={},n={},i={},s={},l={};return h.each(t,function(a){var d=o.getElemOptions(o.options.map.defaultLink,t[a],{});if(e=typeof t[a].between[0]=="string"?o.options.plots[t[a].between[0]]:t[a].between[0],n=typeof t[a].between[1]=="string"?o.options.plots[t[a].between[1]]:t[a].between[1],e.plotsOn!==r&&o.areas[e.plotsOn]!==r){var m=o.areas[e.plotsOn].mapElem.getBBox();i={x:m.cx,y:m.cy}}else e.latitude!==r&&e.longitude!==r?i=o.mapConf.getCoords(e.latitude,e.longitude):(i.x=e.x,i.y=e.y);if(n.plotsOn!==r&&o.areas[n.plotsOn]!==r){var f=o.areas[n.plotsOn].mapElem.getBBox();s={x:f.cx,y:f.cy}}else n.latitude!==r&&n.longitude!==r?s=o.mapConf.getCoords(n.latitude,n.longitude):(s.x=n.x,s.y=n.y);l[a]=o.drawLink(a,i.x,i.y,s.x,s.y,d)}),l},drawLink:function(t,o,e,n,i,s){var l=this,a={options:s},d=(o+n)/2,m=(e+i)/2,f=-1/((i-e)/(n-o)),g=m-f*d,c=Math.sqrt((n-o)*(n-o)+(i-e)*(i-e)),p=1+f*f,v=-2*d+2*f*g-2*f*m,w=d*d+g*g-g*m-m*g+m*m-s.factor*c*(s.factor*c),x=v*v-4*p*w,u=0,E=0;return s.factor>0?(u=(-v+Math.sqrt(x))/(2*p),E=f*u+g):(u=(-v-Math.sqrt(x))/(2*p),E=f*u+g),a.mapElem=l.paper.path("m "+o+","+e+" C "+u+","+E+" "+n+","+i+" "+n+","+i),l.initElem(t,"link",a),a},isAttrsChanged:function(t,o){for(var e in o)if(o.hasOwnProperty(e)&&t[e]===void 0||o[e]!==t[e])return!0;return!1},updateElem:function(t,o){var e,n,i,s=this;if(t.options.toFront===!0&&t.mapElem.toFront(),t.options.href!==r?(t.options.attrs.cursor="pointer",t.options.text&&(t.options.text.attrs.cursor="pointer")):t.mapElem.attrs.cursor==="pointer"&&(t.options.attrs.cursor="auto",t.options.text&&(t.options.text.attrs.cursor="auto")),t.textElem){t.options.text.attrs.text=t.options.text.content,e=t.mapElem.getBBox(),(t.options.size||t.options.width&&t.options.height)&&(t.options.type==="image"||t.options.type==="svg"?(n=(t.options.width-e.width)/2,i=(t.options.height-e.height)/2):(n=(t.options.size-e.width)/2,i=(t.options.size-e.height)/2),e.x-=n,e.x2+=n,e.y-=i,e.y2+=i);var l=s.getTextPosition(e,t.options.text.position,t.options.text.margin);t.options.text.attrs.x=l.x,t.options.text.attrs.y=l.y,t.options.text.attrs["text-anchor"]=l.textAnchor,s.setHoverOptions(t.textElem,t.options.text.attrs,t.options.text.attrsHover),s.isAttrsChanged(t.textElem.attrs,t.options.text.attrs)&&s.animate(t.textElem,t.options.text.attrs,o)}s.setHoverOptions(t.mapElem,t.options.attrs,t.options.attrsHover),s.isAttrsChanged(t.mapElem.attrs,t.options.attrs)&&s.animate(t.mapElem,t.options.attrs,o),t.options.cssClass!==r&&h(t.mapElem.node).removeClass().addClass(t.options.cssClass)},drawPlot:function(t){var o=this,e={};return e.options=o.getElemOptions(o.options.map.defaultPlot,o.options.plots[t]?o.options.plots[t]:{},o.options.legend.plot),o.setPlotCoords(e),e.options.type==="svg"&&(e.mapElem=o.paper.path(e.options.path)),o.setPlotAttributes(e),e.options.type==="square"?e.mapElem=o.paper.rect(e.options.attrs.x,e.options.attrs.y,e.options.attrs.width,e.options.attrs.height):e.options.type==="image"?e.mapElem=o.paper.image(e.options.attrs.src,e.options.attrs.x,e.options.attrs.y,e.options.attrs.width,e.options.attrs.height):e.options.type==="svg"||(e.mapElem=o.paper.circle(e.options.attrs.x,e.options.attrs.y,e.options.attrs.r)),o.initElem(t,"plot",e),e},setEventHandlers:function(t,o,e){var n=this;h.each(e.options.eventHandlers,function(i){n.customEventHandlers[i]===r&&(n.customEventHandlers[i]={}),n.customEventHandlers[i][o]===r&&(n.customEventHandlers[i][o]={}),n.customEventHandlers[i][o][t]=e})},drawLegend:function(t,o,e,n,i){var s=this,l={},a={},d=0,m=0,f=null,g=null,c={},p=0,v=0,w=0,x=0,u=[];l=h("."+t.cssClass,s.$container);var E=l.html();for(l.empty(),a=new L(l.get(0)),h(a.canvas).attr({"data-legend-type":o,"data-legend-id":i}),m=d=0,t.title&&t.title!==""&&(f=a.text(t.marginLeftTitle,0,t.title).attr(t.titleAttrs),g=f.getBBox(),f.attr({y:.5*g.height}),d=t.marginLeftTitle+g.width,m+=t.marginBottomTitle+g.height),p=0;p<t.slices.length;++p){var k=0;u[p]=h.extend(!0,{},o==="plot"?s.options.map.defaultPlot:s.options.map.defaultArea,t.slices[p]),t.slices[p].legendSpecificAttrs===r&&(t.slices[p].legendSpecificAttrs={}),h.extend(!0,u[p].attrs,t.slices[p].legendSpecificAttrs),o==="area"?(u[p].attrs.width===r&&(u[p].attrs.width=30),u[p].attrs.height===r&&(u[p].attrs.height=20)):u[p].type==="square"?(u[p].attrs.width===r&&(u[p].attrs.width=u[p].size),u[p].attrs.height===r&&(u[p].attrs.height=u[p].size)):u[p].type==="image"||u[p].type==="svg"?(u[p].attrs.width===r&&(u[p].attrs.width=u[p].width),u[p].attrs.height===r&&(u[p].attrs.height=u[p].height)):u[p].attrs.r===r&&(u[p].attrs.r=u[p].size/2),k=t.marginBottomTitle,f&&(k+=g.height),o!=="plot"||u[p].type!==r&&u[p].type!=="circle"?k+=n*u[p].attrs.height/2:k+=n*u[p].attrs.r,x=Math.max(x,k)}for(t.mode==="horizontal"&&(d=t.marginLeft),p=0;p<u.length;++p){var z={},y={},C={};if(u[p].display===r||u[p].display===!0){if(o==="area"||u[p].type==="square"?(t.mode==="horizontal"?(v=d+t.marginLeft,w=x-.5*n*u[p].attrs.height):(v=t.marginLeft,w=m),z=a.rect(v,w,n*u[p].attrs.width,n*u[p].attrs.height)):u[p].type==="image"||u[p].type==="svg"?(t.mode==="horizontal"?(v=d+t.marginLeft,w=x-.5*n*u[p].attrs.height):(v=t.marginLeft,w=m),u[p].type==="image"?z=a.image(u[p].url,v,w,n*u[p].attrs.width,n*u[p].attrs.height):(z=a.path(u[p].path),u[p].attrs.transform===r&&(u[p].attrs.transform=""),y=z.getBBox(),u[p].attrs.transform="m"+n*u[p].width/y.width+",0,0,"+n*u[p].height/y.height+","+v+","+w+u[p].attrs.transform)):(t.mode==="horizontal"?(v=d+t.marginLeft+n*u[p].attrs.r,w=x):(v=t.marginLeft+n*u[p].attrs.r,w=m+n*u[p].attrs.r),z=a.circle(v,w,n*u[p].attrs.r)),delete u[p].attrs.width,delete u[p].attrs.height,delete u[p].attrs.r,z.attr(u[p].attrs),y=z.getBBox(),t.mode==="horizontal"?(v=d+t.marginLeft+y.width+t.marginLeftLabel,w=x):(v=t.marginLeft+y.width+t.marginLeftLabel,w=m+y.height/2),C=a.text(v,w,u[p].label).attr(t.labelAttrs),t.mode==="horizontal"){var O=t.marginBottom+y.height;d+=t.marginLeft+y.width+t.marginLeftLabel+C.getBBox().width,u[p].type!=="image"&&o!=="area"&&(O+=t.marginBottomTitle),f&&(O+=g.height),m=Math.max(m,O)}else d=Math.max(d,t.marginLeft+y.width+t.marginLeftLabel+C.getBBox().width),m+=t.marginBottom+y.height;h(z.node).attr({"data-legend-id":i,"data-legend-type":o,"data-type":"legend-elem","data-id":p,"data-hidden":0}),h(C.node).attr({"data-legend-id":i,"data-legend-type":o,"data-type":"legend-label","data-id":p,"data-hidden":0}),c[p]={mapElem:z,textElem:C},t.hideElemsOnClick.enabled&&(C.attr({cursor:"pointer"}),z.attr({cursor:"pointer"}),s.setHoverOptions(z,u[p].attrs,u[p].attrs),s.setHoverOptions(C,t.labelAttrs,t.labelAttrsHover),u[p].clicked!==r&&u[p].clicked===!0&&s.handleClickOnLegendElem(c[p],p,i,o,{hideOtherElems:!1}))}}return L.type!=="SVG"&&t.VMLWidth&&(d=t.VMLWidth),a.setSize(d,m),{container:l,initialHTMLContent:E,elems:c}},handleClickOnLegendElem:function(t,o,e,n,i){var s,l=this;i=i||{},s=h.isArray(l.options.legend[n])?l.options.legend[n][e]:l.options.legend[n];var a=t.mapElem,d=t.textElem,m=h(a.node),f=h(d.node),g=s.slices[o],c=n==="area"?l.areas:l.plots,p=i.animDuration!==r?i.animDuration:s.hideElemsOnClick.animDuration,v=m.attr("data-hidden"),w=v==="0"?{"data-hidden":"1"}:{"data-hidden":"0"};v==="0"?l.animate(d,{opacity:.5},p):l.animate(d,{opacity:1},p),h.each(c,function(x){var u,E=c[x].mapElem.data("hidden-by");E===r&&(E={}),u=h.isArray(c[x].options.value)?c[x].options.value[e]:c[x].options.value,l.getLegendSlice(u,s)===g&&(v==="0"?(E[e]=!0,l.setElementOpacity(c[x],s.hideElemsOnClick.opacity,p)):(delete E[e],h.isEmptyObject(E)&&l.setElementOpacity(c[x],c[x].mapElem.originalAttrs.opacity!==r?c[x].mapElem.originalAttrs.opacity:1,p)),c[x].mapElem.data("hidden-by",E))}),m.attr(w),f.attr(w),i.hideOtherElems!==r&&i.hideOtherElems!==!0||s.exclusive!==!0||h("[data-type='legend-elem'][data-hidden=0]",l.$container).each(function(){var x=h(this);x.attr("data-id")!==o&&x.trigger("click",{hideOtherElems:!1})})},createLegends:function(t,o,e){var n=this,i=n.options.legend[t];h.isArray(n.options.legend[t])||(i=[n.options.legend[t]]),n.legends[t]={};for(var s=0;s<i.length;++s)i[s].display===!0&&h.isArray(i[s].slices)&&i[s].slices.length>0&&i[s].cssClass!==""&&h("."+i[s].cssClass,n.$container).length!==0&&(n.legends[t][s]=n.drawLegend(i[s],t,o,e,s))},setHoverOptions:function(t,o,e){L.type!=="SVG"&&delete e.transform,t.attrsHover=e,t.attrsHover.transform?t.originalAttrs=h.extend({transform:"s1"},o):t.originalAttrs=o},elemEnter:function(t){var o=this;if(t!==r){if(t.mapElem!==r&&o.animate(t.mapElem,t.mapElem.attrsHover,t.mapElem.attrsHover.animDuration),t.textElem!==r&&o.animate(t.textElem,t.textElem.attrsHover,t.textElem.attrsHover.animDuration),t.options&&t.options.tooltip!==r){var e="";o.$tooltip.removeClass().addClass(o.options.map.tooltip.cssClass),t.options.tooltip.content!==r&&(e=typeof t.options.tooltip.content=="function"?t.options.tooltip.content(t.mapElem):t.options.tooltip.content),t.options.tooltip.cssClass!==r&&o.$tooltip.addClass(t.options.tooltip.cssClass),o.$tooltip.html(e).css("display","block")}t.mapElem===r&&t.textElem===r||o.paper.safari&&o.paper.safari()}},elemHover:function(t,o){var e=this;if(t!==r&&t.options.tooltip!==r){var n=o.pageX,i=o.pageY,s=10,l=20;typeof t.options.tooltip.offset=="object"&&(t.options.tooltip.offset.left!==void 0&&(s=t.options.tooltip.offset.left),t.options.tooltip.offset.top!==void 0&&(l=t.options.tooltip.offset.top));var a={left:Math.min(e.$map.width()-e.$tooltip.outerWidth()-5,n-e.$map.offset().left+s),top:Math.min(e.$map.height()-e.$tooltip.outerHeight()-5,i-e.$map.offset().top+l)};typeof t.options.tooltip.overflow=="object"&&(t.options.tooltip.overflow.right===!0&&(a.left=n-e.$map.offset().left+10),t.options.tooltip.overflow.bottom===!0&&(a.top=i-e.$map.offset().top+20)),e.$tooltip.css(a)}},elemOut:function(t){var o=this;t!==r&&(t.mapElem!==r&&o.animate(t.mapElem,t.mapElem.originalAttrs,t.mapElem.attrsHover.animDuration),t.textElem!==r&&o.animate(t.textElem,t.textElem.originalAttrs,t.textElem.attrsHover.animDuration),t.options&&t.options.tooltip!==r&&o.$tooltip.css({display:"none",top:-1e3,left:-1e3}),t.mapElem===r&&t.textElem===r||o.paper.safari&&o.paper.safari())},elemClick:function(t){var o=this;t!==r&&(o.panning||t.options.href===r||window.open(t.options.href,t.options.target))},getElemOptions:function(t,o,e){var n=this,i=h.extend(!0,{},t,o);if(i.value!==r)if(h.isArray(e))for(var s=0;s<e.length;++s)i=h.extend(!0,{},i,n.getLegendSlice(i.value[s],e[s]));else i=h.extend(!0,{},i,n.getLegendSlice(i.value,e));return i},getTextPosition:function(t,o,e){var n=0,i=0,s="";switch(typeof e=="number"&&(e=o==="bottom"||o==="top"?{x:0,y:e}:o==="right"||o==="left"?{x:e,y:0}:{x:0,y:0}),o){case"bottom":n=(t.x+t.x2)/2+e.x,i=t.y2+e.y,s="middle";break;case"top":n=(t.x+t.x2)/2+e.x,i=t.y-e.y,s="middle";break;case"left":n=t.x-e.x,i=(t.y+t.y2)/2+e.y,s="end";break;case"right":n=t.x2+e.x,i=(t.y+t.y2)/2+e.y,s="start";break;default:n=(t.x+t.x2)/2+e.x,i=(t.y+t.y2)/2+e.y,s="middle"}return{x:n,y:i,textAnchor:s}},getLegendSlice:function(t,o){for(var e=0;e<o.slices.length;++e)if(o.slices[e].sliceValue!==r&&t===o.slices[e].sliceValue||o.slices[e].sliceValue===r&&(o.slices[e].min===r||t>=o.slices[e].min)&&(o.slices[e].max===r||t<=o.slices[e].max))return o.slices[e];return{}},animateViewBox:function(t,o,e,n,i,s){var l=this,a=l.currentViewBox.x,d=t-a,m=l.currentViewBox.y,f=o-m,g=l.currentViewBox.w,c=e-g,p=l.currentViewBox.h,v=n-p;l.zoomAnimCVBTarget||(l.zoomAnimCVBTarget={x:t,y:o,w:e,h:n});var w=g>e?"in":"out",x=L.easing_formulas[s||"linear"],u=i-2*i/100,E=l.zoomAnimStartTime;l.zoomAnimStartTime=new Date().getTime();var k=function(){l.cancelAnimationFrame(l.zoomAnimID);var z=new Date().getTime()-l.zoomAnimStartTime;if(z<u){var y,C,O,A;if(E&&l.zoomAnimCVBTarget&&l.zoomAnimCVBTarget.w!==e){var H=new Date().getTime()-E,D=x(H/i);y=a+(l.zoomAnimCVBTarget.x-a)*D,C=m+(l.zoomAnimCVBTarget.y-m)*D,O=g+(l.zoomAnimCVBTarget.w-g)*D,A=p+(l.zoomAnimCVBTarget.h-p)*D,a=y,d=t-a,m=C,f=o-m,g=O,c=e-g,p=A,v=n-p,l.zoomAnimCVBTarget={x:t,y:o,w:e,h:n}}else{var T=x(z/i);y=a+d*T,C=m+f*T,O=g+c*T,A=p+v*T}w==="in"&&(O>l.currentViewBox.w||O<e)||w==="out"&&(O<l.currentViewBox.w||O>e)||l.setViewBox(y,C,O,A),l.zoomAnimID=l.requestAnimationFrame(k)}else l.zoomAnimStartTime=null,l.zoomAnimCVBTarget=null,l.currentViewBox.w!==e&&l.setViewBox(t,o,e,n),l.$map.trigger("afterZoom",{x1:t,y1:o,x2:t+e,y2:o+n})};k()},requestAnimationFrame:function(t){return this._requestAnimationFrameFn.call(window,t)},cancelAnimationFrame:function(t){this._cancelAnimationFrameFn.call(window,t)},_requestAnimationFrameFn:function(){var t=function(){var o=new Date().getTime();return function(e){var n=new Date().getTime();if(!(n-o>16))return setTimeout(function(){t(e)},0);o=n,e(n)}}();return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||t}(),_cancelAnimationFrameFn:function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||clearTimeout}(),setViewBox:function(t,o,e,n){var i=this;i.currentViewBox.x=t,i.currentViewBox.y=o,i.currentViewBox.w=e,i.currentViewBox.h=n,i.paper.setViewBox(t,o,e,n,!1)},_nonAnimatedAttrs:["arrow-end","arrow-start","gradient","class","cursor","text-anchor","font","font-family","font-style","font-weight","letter-spacing","src","href","target","title","stroke-dasharray","stroke-linecap","stroke-linejoin","stroke-miterlimit"],animate:function(t,o,e,n){var i=this;if(t)if(e>0){for(var s={},l=0;l<i._nonAnimatedAttrs.length;l++){var a=i._nonAnimatedAttrs[l];o[a]!==r&&(s[a]=o[a])}t.attr(s),t.animate(o,e,"linear",function(){n&&n()})}else t.attr(o),n&&n()},isRaphaelBBoxBugPresent:function(){var t=this,o=t.paper.text(-50,-50,"TEST"),e=o.getBBox();return o.remove(),e.width===0&&e.height===0},defaultOptions:{map:{cssClass:"map",tooltip:{cssClass:"mapTooltip"},defaultArea:{attrs:{fill:"#343434",stroke:"#5d5d5d","stroke-width":1,"stroke-linejoin":"round"},attrsHover:{fill:"#f38a03",animDuration:300},text:{position:"inner",margin:10,attrs:{"font-size":15,fill:"#c7c7c7"},attrsHover:{fill:"#eaeaea",animDuration:300}},target:"_self",cssClass:"area"},defaultPlot:{type:"circle",size:15,attrs:{fill:"#0088db",stroke:"#fff","stroke-width":0,"stroke-linejoin":"round"},attrsHover:{"stroke-width":3,animDuration:300},text:{position:"right",margin:10,attrs:{"font-size":15,fill:"#c7c7c7"},attrsHover:{fill:"#eaeaea",animDuration:300}},target:"_self",cssClass:"plot"},defaultLink:{factor:.5,attrs:{stroke:"#0088db","stroke-width":2},attrsHover:{animDuration:300},text:{position:"inner",margin:10,attrs:{"font-size":15,fill:"#c7c7c7"},attrsHover:{fill:"#eaeaea",animDuration:300}},target:"_self",cssClass:"link"},zoom:{enabled:!1,minLevel:0,maxLevel:10,step:.25,mousewheel:!0,touch:!0,animDuration:200,animEasing:"linear",buttons:{reset:{cssClass:"zoomButton zoomReset",content:"&#8226;",title:"Reset zoom"},in:{cssClass:"zoomButton zoomIn",content:"+",title:"Zoom in"},out:{cssClass:"zoomButton zoomOut",content:"&#8722;",title:"Zoom out"}}}},legend:{redrawOnResize:!0,area:[],plot:[]},areas:{},plots:{},links:{}},legendDefaultOptions:{area:{cssClass:"areaLegend",display:!0,marginLeft:10,marginLeftTitle:5,marginBottomTitle:10,marginLeftLabel:10,marginBottom:10,titleAttrs:{"font-size":16,fill:"#343434","text-anchor":"start"},labelAttrs:{"font-size":12,fill:"#343434","text-anchor":"start"},labelAttrsHover:{fill:"#787878",animDuration:300},hideElemsOnClick:{enabled:!0,opacity:.2,animDuration:300},slices:[],mode:"vertical"},plot:{cssClass:"plotLegend",display:!0,marginLeft:10,marginLeftTitle:5,marginBottomTitle:10,marginLeftLabel:10,marginBottom:10,titleAttrs:{"font-size":16,fill:"#343434","text-anchor":"start"},labelAttrs:{"font-size":12,fill:"#343434","text-anchor":"start"},labelAttrsHover:{fill:"#787878",animDuration:300},hideElemsOnClick:{enabled:!0,opacity:.2,animDuration:300},slices:[],mode:"vertical"}}},B.version="2.2.0",h.mapael===r&&(h.mapael=B),h.fn.mapael=function(t){return this.each(function(){h.data(this,"mapael")&&h.data(this,"mapael").destroy(),h.data(this,"mapael",new B(this,t))})},B})})(F);
