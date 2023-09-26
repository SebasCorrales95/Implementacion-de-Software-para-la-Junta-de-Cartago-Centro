/*!
 * Responsive Tables v5.3.3 (http://gergeo.se/RWD-Table-Patterns)
 * This is an awesome solution for responsive tables with complex data.
 * Authors: Nadan Gergeo <nadan@blimp.se> (www.blimp.se), Lucas Wiener <lucas@blimp.se> & "Maggie Wachs (www.filamentgroup.com)"
 * Licensed under MIT (https://github.com/nadangergeo/RWD-Table-Patterns/blob/master/LICENSE-MIT)
 */(function(i){var l=function(t,e){var o=this;if(this.options=e,this.$tableWrapper=null,this.$tableScrollWrapper=i(t),this.$table=i(t).find("table"),this.$table.length!==1)throw new Error("Exactly one table is expected in a .table-responsive div.");this.$tableScrollWrapper.attr("data-pattern",this.options.pattern),this.id=this.$table.prop("id")||this.$tableScrollWrapper.prop("id")||"id"+Math.random().toString(16).slice(2),this.$tableClone=null,this.$stickyTableHeader=null,this.$thead=this.$table.find("thead"),this.$hdrCells=this.$thead.find("tr").first().find("th"),this.$bodyRows=this.$table.find("tbody, tfoot").find("tr"),this.$btnToolbar=null,this.$dropdownGroup=null,this.$dropdownBtn=null,this.$dropdownContainer=null,this.$displayAllBtn=null,this.$focusGroup=null,this.$focusBtn=null,this.displayAllTrigger="display-all-"+this.id+".responsive-table",this.idPrefix=this.id+"-col-",this.headerColIndices={},this.headerRowIndices={},this.wrapTable(),this.createButtonToolbar(),this.buildHeaderCellIndices(),this.setupTableHeader(),this.setupBodyRows(),this.options.stickyTableHeader&&this.createStickyTableHeader(),this.$dropdownContainer.is(":empty")&&this.$dropdownGroup.hide(),i(window).bind("orientationchange resize "+this.displayAllTrigger,function(){o.$dropdownContainer.find("input").trigger("updateCheck"),i.proxy(o.updateSpanningCells(),o)}).trigger("resize")};l.DEFAULTS={pattern:"priority-columns",stickyTableHeader:!0,fixedNavbar:".navbar-fixed-top",addDisplayAllBtn:!0,addFocusBtn:!0,focusBtnIcon:"glyphicon glyphicon-screenshot",mainContainer:window,i18n:{focus:"Focus",display:"Display",displayAll:"Display all"}},l.prototype.wrapTable=function(){this.$tableScrollWrapper.wrap('<div class="table-wrapper"/>'),this.$tableWrapper=this.$tableScrollWrapper.parent()},l.prototype.createButtonToolbar=function(){var t=this;this.$btnToolbar=i('[data-responsive-table-toolbar="'+this.id+'"]').addClass("btn-toolbar"),this.$btnToolbar.length===0&&(this.$btnToolbar=i('<div class="btn-toolbar" />')),this.$dropdownGroup=i('<div class="btn-group dropdown-btn-group pull-right" />'),this.$dropdownBtn=i('<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+this.options.i18n.display+' <span class="caret"></span></button>'),this.$dropdownContainer=i('<ul class="dropdown-menu"/>'),this.options.addFocusBtn&&(this.$focusGroup=i('<div class="btn-group focus-btn-group" />'),this.$focusBtn=i('<button type="button" class="btn btn-default">'+this.options.i18n.focus+"</button>"),this.options.focusBtnIcon&&this.$focusBtn.prepend('<span class="'+this.options.focusBtnIcon+'"></span> '),this.$focusGroup.append(this.$focusBtn),this.$btnToolbar.append(this.$focusGroup),this.$focusBtn.click(function(){i.proxy(t.activateFocus(),t)}),this.$bodyRows.click(function(){i.proxy(t.focusOnRow(i(this)),t)})),this.options.addDisplayAllBtn&&(this.$displayAllBtn=i('<button type="button" class="btn btn-default">'+this.options.i18n.displayAll+"</button>"),this.$dropdownGroup.append(this.$displayAllBtn),this.$table.hasClass("display-all")&&this.$displayAllBtn.addClass("btn-primary"),this.$displayAllBtn.click(function(){i.proxy(t.displayAll(null,!0),t)})),this.$dropdownGroup.append(this.$dropdownBtn).append(this.$dropdownContainer),this.$btnToolbar.append(this.$dropdownGroup),this.$tableScrollWrapper.before(this.$btnToolbar)},l.prototype.clearAllFocus=function(){this.$bodyRows.removeClass("unfocused"),this.$bodyRows.removeClass("focused")},l.prototype.activateFocus=function(){this.clearAllFocus(),this.$focusBtn&&this.$focusBtn.toggleClass("btn-primary"),this.$table.toggleClass("focus-on")},l.prototype.focusOnRow=function(t){if(this.$table.hasClass("focus-on")){var e=i(t).hasClass("focused");this.clearAllFocus(),e||(this.$bodyRows.addClass("unfocused"),i(t).addClass("focused"))}},l.prototype.displayAll=function(t,e){this.$displayAllBtn&&this.$displayAllBtn.toggleClass("btn-primary",t),this.$table.toggleClass("display-all",t),this.$tableClone&&this.$tableClone.toggleClass("display-all",t),e&&i(window).trigger(this.displayAllTrigger)},l.prototype.preserveDisplayAll=function(){var t="table-cell";i("html").hasClass("lt-ie9")&&(t="inline"),i(this.$table).find("th, td").css("display",t),this.$tableClone&&i(this.$tableClone).find("th, td").css("display",t)},l.prototype.createStickyTableHeader=function(){var t=this;t.$tableClone=t.$table.clone(),t.$tableClone.prop("id",this.id+"-clone"),t.$tableClone.find("[id]").each(function(){i(this).prop("id",i(this).prop("id")+"-clone")}),t.$tableClone.wrap('<div class="sticky-table-header"/>'),t.$stickyTableHeader=t.$tableClone.parent(),t.$stickyTableHeader.css("height",t.$thead.height()+2),t.$table.before(t.$stickyTableHeader),i(this.options.mainContainer).bind("scroll",function(){i.proxy(t.updateStickyTableHeader(),t)}),i(window).bind("resize",function(e){i.proxy(t.updateStickyTableHeader(),t)}),i(t.$tableScrollWrapper).bind("scroll",function(){i.proxy(t.updateStickyTableHeader(),t)}),t.useFixedSolution=!c()||8<=function(){{if(c()){var e=parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""));return e}return 0}}(),t.useFixedSolution?t.$tableScrollWrapper.addClass("fixed-solution"):t.$tableScrollWrapper.addClass("absolute-solution")},l.prototype.updateStickyTableHeader=function(){var t,e=this,o=0,a=e.$table.offset().top,s=i(this.options.mainContainer).scrollTop()-1,n=e.$table.height()-e.$stickyTableHeader.height(),p=s+i(this.options.mainContainer).height()-i(document).height(),r=0;if(i(e.options.fixedNavbar).length&&(s+=r=i(e.options.fixedNavbar).first().height()),t=this.options.mainContainer===window?a<s&&s<a+e.$table.height():a<=0&&-a<e.$table.height(),e.useFixedSolution){if(e.$stickyTableHeader.scrollLeft(e.$tableScrollWrapper.scrollLeft()),o=r-1,this.options.mainContainer===window&&n<s-a?(o-=s-a-n,e.$stickyTableHeader.addClass("border-radius-fix")):this.options.mainContainer!==window&&n<-a?(o-=-a-n,e.$stickyTableHeader.addClass("border-radius-fix")):e.$stickyTableHeader.removeClass("border-radius-fix"),t)return void e.$stickyTableHeader.css({visibility:"visible",top:o+"px",width:e.$tableScrollWrapper.innerWidth()+"px"});e.$stickyTableHeader.css({visibility:"hidden",width:"auto"})}else(o=this.options.mainContainer===window?s-a-1:-a-1)<0?o=0:n<o&&(o=n),this.options.mainContainer===window&&0<p&&(o-=p),t?(e.$stickyTableHeader.css({visibility:"visible"}),e.$stickyTableHeader.animate({top:o+"px"},400),e.$thead.css({visibility:"hidden"})):e.$stickyTableHeader.animate({top:"0"},400,function(){e.$thead.css({visibility:"visible"}),e.$stickyTableHeader.css({visibility:"hidden"})})},l.prototype.setupTableHeader=function(){var t=this;t.$hdrCells.each(function(e){var o=i(this),a=o.prop("id"),s=o.text();if(a||(a=t.idPrefix+e,o.prop("id",a)),s===""&&(s=o.attr("data-col-name")),o.is("[data-priority]")&&o.data("priority")!==-1){var n=i('<li class="checkbox-row"><input type="checkbox" name="toggle-'+a+'" id="toggle-'+a+'" value="'+a+'" /> <label for="toggle-'+a+'">'+s+"</label></li>"),p=n.find("input");t.$dropdownContainer.append(n),n.click(function(){p.prop("checked",!p.prop("checked")),p.trigger("change")}),i("html").hasClass("lt-ie9")&&p.click(function(){i(this).trigger("change")}),n.find("label").click(function(r){r.stopPropagation()}),n.find("input").click(function(r){r.stopPropagation()}).change(function(){var r=i(this),d=r.val(),b=t.$tableWrapper.find("#"+d+", #"+d+"-clone, [data-columns~="+d+"]");t.$table.hasClass("display-all")&&(i.proxy(t.preserveDisplayAll(),t),t.$table.removeClass("display-all"),t.$tableClone&&t.$tableClone.removeClass("display-all"),t.$displayAllBtn.removeClass("btn-primary")),b.each(function(){var h=i(this);if(r.is(":checked")){if(!h.closest("thead").length&&h.css("display")!=="none"){var f=Math.min(parseInt(h.prop("colSpan"))+1,h.attr("data-org-colspan"));h.prop("colSpan",f)}h.show()}else!h.closest("thead").length&&1<parseInt(h.prop("colSpan"))?h.prop("colSpan",parseInt(h.prop("colSpan"))-1):h.hide()})}).bind("updateCheck",function(){o.css("display")!=="none"?i(this).prop("checked",!0):i(this).prop("checked",!1)})}}),i.isEmptyObject(this.headerRowIndices)||t.setupRow(this.$thead.find("tr:eq(1)"),this.headerRowIndices)},l.prototype.setupBodyRows=function(){var t=this;t.$bodyRows.each(function(){t.setupRow(i(this),t.headerColIndices)})},l.prototype.setupRow=function(t,e){var o=this;if(!t.data("setup")){t.data("setup",!0);var a=0;t.find("th, td").each(function(){var s=i(this),n="",p=s.prop("colSpan");s.attr("data-org-colspan",p),1<p&&s.addClass("spn-cell");for(var r=a;r<a+p;r++){n=n+" "+o.idPrefix+e[r];var d=o.$table.find("#"+o.idPrefix+e[r]).attr("data-priority");d&&s.attr("data-priority",d)}n=n.substring(1),s.attr("data-columns",n),a+=p})}},l.prototype.buildHeaderCellIndices=function(){var t=this,e={};this.headerColIndices={},this.headerRowIndices={};var o=0,a=0;if(this.$thead.find("tr").first().find("th").each(function(s){for(var n=i(this),p=n.prop("colSpan"),r=n.prop("rowSpan"),d=0;d<p;d++)t.headerColIndices[o+s+d]=s,0<=o+s+d&&(e[o+s+d-a]=a);1<r&&a++,o+=p-1}),2<this.$thead.find("tr").length)throw new Error("This plugin doesnt support more than two rows in thead.");this.$thead.find("tr").length===2&&i(this.$thead.find("tr")[1]).find("th").each(function(s){t.headerRowIndices[s]=t.headerColIndices[e[s]+s]})},l.prototype.update=function(){this.$bodyRows=this.$table.find("tbody, tfoot").find("tr"),this.setupBodyRows(),this.$tableClone.find("tbody, tfoot").remove();var t=this.$table.find("tbody, tfoot").clone();t.find("[id]").each(function(){i(this).prop("id",i(this).prop("id")+"-clone")}),t.appendTo(this.$tableClone),this.$dropdownContainer.find("input").trigger("change")},l.prototype.updateSpanningCells=function(){this.$table.find(".spn-cell").each(function(){for(var t=i(this),e=t.attr("data-columns").split(" "),o=e.length,a=0,s=0;s<o;s++)i("#"+e[s]).css("display")==="none"&&a++;a!==o?t.show():t.hide(),t.prop("colSpan",Math.max(o-a,1))})};var u=i.fn.responsiveTable;function c(){return!!(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i))}i.fn.responsiveTable=function(t){return this.each(function(){var e=i(this),o=e.data("responsiveTable"),a=i.extend({},l.DEFAULTS,e.data(),typeof t=="object"&&t);a.pattern!==""&&(o||e.data("responsiveTable",o=new l(this,a)),typeof t=="string"&&o[t]())})},i.fn.responsiveTable.Constructor=l,i.fn.responsiveTable.noConflict=function(){return i.fn.responsiveTable=u,this},i(document).on("ready.responsive-table.data-api",function(){i(".table-responsive[data-pattern]").each(function(){var t=i(this);t.responsiveTable(t.data())})}),i(document).on("click.dropdown.data-api",".dropdown-menu .checkbox-row",function(t){t.stopPropagation()}),i(document).ready(function(){i("html").removeClass("no-js").addClass("js"),window.matchMedia!==void 0||window.msMatchMedia!==void 0||window.styleMedia!==void 0?i("html").addClass("mq"):i("html").addClass("no-mq"),"ontouchstart"in window?i("html").addClass("touch"):i("html").addClass("no-touch")})})(jQuery);