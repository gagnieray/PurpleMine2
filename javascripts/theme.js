var PurpleMine=PurpleMine||{};PurpleMine.SidebarToggler=function(){"use strict";function a(){b=this,this.sidebarVisible=!0,this.sidebarHiding=null,this.$toggler=null,this.$main=$("#main"),this.$sidebar=$("#sidebar"),window.localStorage&&(this.sidebarVisible=null===localStorage.getItem("PurpleMine:sidebarHidden")),this.$sidebar.length>0&&!1===this.$main.hasClass("nosidebar")&&(this.buildButton(),this.bindKeyHandler()),!1===this.sidebarVisible&&this.hideSidebar(!0)}var b;return a.prototype.bindKeyHandler=function(){var a=document.getElementsByTagName("body")[0];window.onkeydown=function(c){a===c.target&&83===c.keyCode&&!1===c.ctrlKey&&!1===c.altKey&&!1===c.shiftKey&&b.toggleSidebar()}},a.prototype.buildButton=function(){var a,b="pl"===document.documentElement.lang?"Pokaż/ukryj panel boczny":"Toggle sidebar",c="sidebar-toggler";c+="left"===this.$sidebar.css("float")?" sidebar-toggler--left":" sidebar-toggler--right",a='<a href="javascript:;" class="'+c+'" title="'+b+'"></a>',this.$toggler=$(a),this.$main.append(this.$toggler),this.$toggler.on("click",this.toggleSidebar)},a.prototype.toggleSidebar=function(){b.sidebarVisible?b.hideSidebar():b.showSidebar()},a.prototype.hideSidebar=function(a){!0===a?this.$sidebar.addClass("sidebar-hiding sidebar-hidden"):(this.$sidebar.addClass("sidebar-hiding"),this.sidebarHiding=setTimeout(function(){b.$sidebar.addClass("sidebar-hidden")},500)),this.$toggler.addClass("sidebar-hidden"),this.sidebarVisible=!1,window.localStorage&&localStorage.setItem("PurpleMine:sidebarHidden","x")},a.prototype.showSidebar=function(){clearTimeout(this.sidebarHiding),this.$sidebar.removeClass("sidebar-hidden",0).removeClass("sidebar-hiding"),this.$toggler.removeClass("sidebar-hidden"),this.sidebarVisible=!0,window.localStorage&&localStorage.removeItem("PurpleMine:sidebarHidden")},a}(),$(function(){"use strict";new PurpleMine.SidebarToggler});