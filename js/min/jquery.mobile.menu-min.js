!function($){function e(){var e=$(this);e.attr("style")&&"none"==e.css("display")&&e.removeAttr("style").removeClass("showen-c").addClass("hidden-c"),e.attr("style")&&"block"==e.css("display")&&e.removeAttr("style").removeClass("hidden-c").addClass("showen-c")}$.fn.mobileMenu=function(n){function t(n){n.preventDefault(),r.slideToggle(animationSpeed,e),$(this).toggleClass("open-menu")}function i(n){n.preventDefault();var t=$(this).toggleClass("plus").parent("li").children("ul");$(this).parent("li").parent("ul").find("li ul.showen-c").not(t).slideUp(animationSpeed,e).siblings(".sub-nav-toggle").toggleClass("plus"),t.slideToggle(animationSpeed,e)}if(!n.triggerMenu)throw new Error("Object options.triggerMenu required!!!");if(!n.subMenuTrigger)throw new Error("Object options.triggerMenu required!!!");animationSpeed=n.animationSpeed||500;var r=this;return"ontouchstart"in window?($(n.triggerMenu).on("touchstart",t),r.find("li "+n.subMenuTrigger).on("touchstart",i)):($(n.triggerMenu).on("click",t),r.find("li "+n.subMenuTrigger).on("click",i)),this}}(jQuery);