class y{constructor(){this.html=document.getElementsByTagName("html")[0],this.config={},this.defaultConfig=window.config,this.mainNavScrollbar=document.getElementsByClassName("scrollbar")[0]}initConfig(){this.defaultConfig=JSON.parse(JSON.stringify(window.defaultConfig)),this.config=JSON.parse(JSON.stringify(window.config)),this.setSwitchFromConfig()}initScrollBars(){var e,a;this.initLeftSidebar(),(e=document.querySelector(".app-menu .scrollbar"))==null||e.setAttribute("data-simplebar",""),(a=document.querySelector(".app-menu .scrollbar"))==null||a.classList.add("h-100")}initLeftSidebar(){var e=this;if($(".menu").length){var a=$(".menu li .collapse"),c=$(".menu li [data-bs-toggle='collapse']");c.on("click",function(i){return!1}),a.on({"show.bs.collapse":function(i){var o=$(i.target).parents(".collapse.show");$(".menu .collapse.show").not(i.target).not(o).collapse("hide")}}),$(".menu a").each(function(){var i=window.location.href.split(/[?#]/)[0];if(this.href==i){$(this).addClass("active"),$(this).parent().addClass("menuitem-active"),$(this).parent().parent().parent().addClass("show"),$(this).parent().parent().parent().parent().addClass("menuitem-active"),$(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active");var o=$(this).parent().parent().parent().parent().parent().parent();o.attr("id")!=="sidebar-menu"&&o.addClass("show");var r=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();r.attr("id")!=="wrapper"&&r.addClass("show");var s=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();s.is("body")||s.addClass("menuitem-active")}})}var u=$("#two-col-sidenav-main");if(u.length){var d=$("#two-col-sidenav-main .menu-link"),t=$(".twocolumn-menu-item"),n=$(".twocolumn-menu-item .sub-menu"),a=$("#two-col-menu menu-item .collapse");a.on({"show.bs.collapse":function(){var o=$(this).closest(n).closest(n).find(a);o.length?o.not($(this)).collapse("hide"):a.not($(this)).collapse("hide")}}),d.on("click",function(o){var r=$($(this).attr("href"));return r.length&&(o.preventDefault(),d.removeClass("active"),$(this).addClass("active"),t.removeClass("d-block"),r.addClass("d-block"),window.innerWidth>=1040&&e.changeLeftbarSize("default")),!0});var l=window.location.href;d.each(function(){this.href===l&&$(this).addClass("active")}),$("#two-col-menu a").each(function(){if(this.href==l){$(this).addClass("active"),$(this).parent().addClass("menuitem-active"),$(this).parent().parent().parent().addClass("show"),$(this).parent().parent().parent().parent().addClass("menuitem-active");var o=$(this).parent().parent().parent().parent().parent().parent();o.attr("id")!=="sidebar-menu"&&o.addClass("show"),$(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active");var r=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();r.attr("id")!=="wrapper"&&r.addClass("show");var s=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();s.is("body")||s.addClass("menuitem-active");var h=null,f="#"+$(this).parents(".twocolumn-menu-item").attr("id");$("#two-col-sidenav-main .menu-link").each(function(){$(this).attr("href")===f&&(h=$(this))}),h&&h.trigger("click")}})}setTimeout(function(){var i=document.querySelector("li.menuitem-active .active");if(i!=null){var o=document.querySelector(".app-menu .simplebar-content-wrapper"),r=i.offsetTop-300;o&&r>100&&p(o,r,600)}},200);function m(i,o,r,s){return i/=s/2,i<1?r/2*i*i+o:(i--,-r/2*(i*(i-2)-1)+o)}function p(i,o,r){var s=i.scrollTop,h=o-s,f=0,g=20,v=function(){f+=g;var b=m(f,s,h,r);i.scrollTop=b,f<r&&setTimeout(v,g)};v()}}initHorizontalLayout(){html.getAttribute("data-layout")==="horizontal"&&window.innerWidth>1040&&this.initLeftSidebar(!0)}reverseQuery(e,a){for(;e;){if(e.parentElement&&e.parentElement.querySelector(a)===e)return e;e=e.parentElement}return null}changeThemeMode(e){this.config.theme=e,this.html.setAttribute("data-bs-theme",e),this.setSwitchFromConfig()}changeLayoutMode(e){this.html.setAttribute("data-layout-mode",e),this.config.layout.mode=e,this.setSwitchFromConfig()}changeLayoutWidth(e,a=!0){this.html.setAttribute("data-layout-width",e),a&&(this.config.layout.width=e,this.setSwitchFromConfig())}changeMenuIcon(e,a=!0){this.html.setAttribute("data-menu-icon",e),a&&(this.config.menu.icon=e,this.setSwitchFromConfig())}changeMenuColor(e){this.config.menu.color=e,this.html.setAttribute("data-menu-color",e),this.setSwitchFromConfig()}changeLeftbarSize(e,a=!0){this.html.setAttribute("data-sidenav-size",e),a&&(this.config.sidenav.size=e,this.setSwitchFromConfig())}changeTwocolumnColor(e){this.html.setAttribute("data-two-column-color",e),this.config.sidenav.twocolumn=e,this.setSwitchFromConfig()}changeTopbarColor(e){this.config.topbar.color=e,this.html.setAttribute("data-topbar-color",e),this.setSwitchFromConfig()}changeSidebarUser(e){this.config.sidenav.user=e,e?this.html.setAttribute("data-sidenav-user",e):this.html.removeAttribute("data-sidenav-user"),this.setSwitchFromConfig()}resetTheme(){this.config=JSON.parse(JSON.stringify(window.defaultConfig)),this.changeThemeMode(this.config.theme),this.changeLayoutMode(this.config.layout.mode),this.changeLayoutWidth(this.config.layout.width),this.changeMenuColor(this.config.menu.color),this.changeMenuIcon(this.config.menu.icon),this.changeTopbarColor(this.config.topbar.color),this.changeLeftbarSize(this.config.sidenav.size),this.changeTwocolumnColor(this.config.sidenav.twocolumn),this.adjustLayout()}initSwitchListener(){var e=this;document.querySelectorAll("input[name=data-layout]").forEach(function(t){t.addEventListener("change",function(n){e.changeLayout(t.value)})}),document.querySelectorAll("input[name=data-menu-color]").forEach(function(t){t.addEventListener("change",function(n){e.changeMenuColor(t.value)})}),document.querySelectorAll("input[name=data-sidenav-size]").forEach(function(t){t.addEventListener("change",function(n){e.changeLeftbarSize(t.value)})}),document.querySelectorAll("input[name=data-menu-icon]").forEach(function(t){t.addEventListener("change",function(n){e.changeMenuIcon(t.value)})}),document.querySelectorAll("input[name=data-bs-theme]").forEach(function(t){t.addEventListener("change",function(n){e.changeThemeMode(t.value)})}),document.querySelectorAll("input[name=data-layout-mode]").forEach(function(t){t.addEventListener("change",function(n){e.changeLayoutMode(t.value)})}),document.querySelectorAll("input[name=data-layout-width]").forEach(function(t){t.addEventListener("change",function(n){e.changeLayoutWidth(t.value)})}),document.querySelectorAll("input[name=data-topbar-color]").forEach(function(t){t.addEventListener("change",function(n){e.changeTopbarColor(t.value)})}),document.querySelectorAll("input[name=data-two-column-color]").forEach(function(t){t.addEventListener("change",function(n){e.changeTwocolumnColor(t.value)})}),document.querySelectorAll("input[name=data-sidebar-user]").forEach(function(t){t.addEventListener("change",function(n){e.changeSidebarUser(t.checked)})});var a=document.getElementById("light-dark-mode");a&&a.addEventListener("click",function(t){e.config.theme==="light"?e.changeThemeMode("dark"):e.changeThemeMode("light")});var c=document.querySelector("#reset-layout");c&&c.addEventListener("click",function(t){e.resetTheme()});var u=document.querySelector(".button-toggle-menu");u&&u.addEventListener("click",function(){var t=e.config.sidenav.size,n=e.html.getAttribute("data-sidenav-size",t);n==="full"?e.showBackdrop():t=="fullscreen"?n==="fullscreen"?e.changeLeftbarSize(t=="fullscreen"?"default":t,!1):e.changeLeftbarSize("fullscreen",!1):n==="condensed"?e.changeLeftbarSize(t=="condensed"?"default":t,!1):e.changeLeftbarSize("condensed",!1),e.html.classList.toggle("sidebar-enable")});var d=document.querySelectorAll(".button-sm-hover");d.forEach(function(t){t.addEventListener("click",function(){var n=e.config.sidenav.size,l=e.html.getAttribute("data-sidenav-size",n);l==="sm-hover-active"?e.changeLeftbarSize("sm-hover",!1):e.changeLeftbarSize("sm-hover-active",!1)})})}showBackdrop(){var c;const e=document.createElement("div");e.id="custom-backdrop",e.classList="offcanvas-backdrop fade show",document.body.appendChild(e),((c=document.getElementsByTagName("html")[0])==null?void 0:c.getAttribute("dir"))!="rtl"&&(document.body.style.overflow="hidden",window.innerWidth>1140&&(document.body.style.paddingRight="15px"));const a=this;e.addEventListener("click",function(u){a.html.classList.remove("sidebar-enable"),a.hideBackdrop()})}hideBackdrop(){var e=document.getElementById("custom-backdrop");e&&(document.body.removeChild(e),document.body.style.overflow=null,document.body.style.paddingRight=null)}initWindowSize(){var e=this;window.addEventListener("resize",function(a){e.adjustLayout()})}adjustLayout(){var e=this;window.innerWidth<=1140?e.changeLeftbarSize("full",!1):e.changeLeftbarSize(e.config.sidenav.size)}setSwitchFromConfig(){sessionStorage.setItem("__UBOLD_CONFIG__",JSON.stringify(this.config)),document.querySelectorAll(".right-bar input[type=checkbox]").forEach(function(i){i.checked=!1});var e=this.config;if(e){var a=document.querySelector("input[type=checkbox][name=data-bs-theme][value="+e.theme+"]"),c=document.querySelector("input[type=checkbox][name=data-layout-mode][value="+e.layout.mode+"]"),u=document.querySelector("input[type=checkbox][name=data-layout-width][value="+e.layout.width+"]"),d=document.querySelector("input[type=checkbox][name=data-topbar-color][value="+e.topbar.color+"]"),t=document.querySelector("input[type=checkbox][name=data-menu-color][value="+e.menu.color+"]"),n=document.querySelector("input[type=checkbox][name=data-menu-icon][value="+e.menu.icon+"]"),l=document.querySelector("input[type=checkbox][name=data-sidenav-size][value="+e.sidenav.size+"]"),m=document.querySelector("input[type=checkbox][name=data-two-column-color][value="+e.sidenav.twocolumn+"]"),p=document.querySelector("input[type=checkbox][name=data-sidebar-user]");a&&(a.checked=!0),c&&(c.checked=!0),u&&(u.checked=!0),d&&(d.checked=!0),t&&(t.checked=!0),n&&(n.checked=!0),l&&(l.checked=!0),m&&(m.checked=!0),p&&e.sidenav.user.toString()==="true"&&(p.checked=!0)}}init(){this.initConfig(),this.initScrollBars(),this.initLeftSidebar(),this.initSwitchListener(),this.initWindowSize(),this.adjustLayout(),this.setSwitchFromConfig()}}new y().init();