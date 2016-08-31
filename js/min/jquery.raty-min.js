!function($){var t={init:function(a){return this.each(function(){t.destroy.call(this),this.opt=$.extend(!0,{},$.fn.raty.defaults,a);var e=$(this),i=["number","readOnly","score","scoreName"];t._callback.call(this,i),this.opt.precision&&t._adjustPrecision.call(this),this.opt.number=t._between(this.opt.number,0,this.opt.numberMax),this.opt.path=this.opt.path||"",this.opt.path&&"/"!==this.opt.path.charAt(this.opt.path.length-1)&&(this.opt.path+="/"),this.stars=t._createStars.call(this),this.score=t._createScore.call(this),t._apply.call(this,this.opt.score);var o=this.opt.space?4:0,s=this.opt.width||this.opt.number*this.opt.size+this.opt.number*o;this.opt.cancel&&(this.cancel=t._createCancel.call(this),s+=this.opt.size+o),this.opt.readOnly?t._lock.call(this):(e.css("cursor","pointer"),t._binds.call(this)),this.opt.width!==!1&&e.css("width",s),t._target.call(this,this.opt.score),e.data({settings:this.opt,raty:!0})})},_adjustPrecision:function(){this.opt.targetType="score",this.opt.half=!0},_apply:function(a){a&&a>0&&(a=t._between(a,0,this.opt.number),this.score.val(a)),t._fill.call(this,a),a&&t._roundStars.call(this,a)},_between:function(t,a,e){return Math.min(Math.max(parseFloat(t),a),e)},_binds:function(){this.cancel&&t._bindCancel.call(this),t._bindClick.call(this),t._bindOut.call(this),t._bindOver.call(this)},_bindCancel:function(){t._bindClickCancel.call(this),t._bindOutCancel.call(this),t._bindOverCancel.call(this)},_bindClick:function(){var t=this,a=$(t);t.stars.on("click.raty",function(e){t.score.val(t.opt.half||t.opt.precision?a.data("score"):this.alt),t.opt.click&&t.opt.click.call(t,parseFloat(t.score.val()),e)})},_bindClickCancel:function(){var t=this;t.cancel.on("click.raty",function(a){t.score.removeAttr("value"),t.opt.click&&t.opt.click.call(t,null,a)})},_bindOut:function(){var a=this;$(this).on("mouseleave.raty",function(e){var i=parseFloat(a.score.val())||void 0;t._apply.call(a,i),t._target.call(a,i,e),a.opt.mouseout&&a.opt.mouseout.call(a,i,e)})},_bindOutCancel:function(){var t=this;t.cancel.on("mouseleave.raty",function(a){$(this).attr("src",t.opt.path+t.opt.cancelOff),t.opt.mouseout&&t.opt.mouseout.call(t,t.score.val()||null,a)})},_bindOverCancel:function(){var a=this;a.cancel.on("mouseover.raty",function(e){$(this).attr("src",a.opt.path+a.opt.cancelOn),a.stars.attr("src",a.opt.path+a.opt.starOff),t._target.call(a,null,e),a.opt.mouseover&&a.opt.mouseover.call(a,null)})},_bindOver:function(){var a=this,e=$(a),i=a.opt.half?"mousemove.raty":"mouseover.raty";a.stars.on(i,function(i){var o=parseInt(this.alt,10);if(a.opt.half){var s=parseFloat((i.pageX-$(this).offset().left)/a.opt.size),r=s>.5?1:.5;o=o-1+r,t._fill.call(a,o),a.opt.precision&&(o=o-r+s),t._roundStars.call(a,o),e.data("score",o)}else t._fill.call(a,o);t._target.call(a,o,i),a.opt.mouseover&&a.opt.mouseover.call(a,o,i)})},_callback:function(t){for(var a in t)"function"==typeof this.opt[t[a]]&&(this.opt[t[a]]=this.opt[t[a]].call(this))},_createCancel:function(){var t=$(this),a=this.opt.path+this.opt.cancelOff,e=$("<img />",{src:a,alt:"x",title:this.opt.cancelHint,"class":"raty-cancel"});return"left"==this.opt.cancelPlace?t.prepend("&#160;").prepend(e):t.append("&#160;").append(e),e},_createScore:function(){return $("<input />",{type:"hidden",name:this.opt.scoreName}).appendTo(this)},_createStars:function(){for(var a=$(this),e=1;e<=this.opt.number;e++){var i=t._getHint.call(this,e),o=this.opt.score&&this.opt.score>=e?"starOn":"starOff";o=this.opt.path+this.opt[o],$("<img />",{src:o,alt:e,title:i}).appendTo(this),this.opt.space&&a.append(e<this.opt.number?"&#160;":"")}return a.children("img")},_error:function(t){$(this).html(t),$.error(t)},_fill:function(t){for(var a=this,e=0,i=1;i<=a.stars.length;i++){var o=a.stars.eq(i-1),s=a.opt.single?i==t:t>=i;if(a.opt.iconRange&&a.opt.iconRange.length>e){var r=a.opt.iconRange[e],n=r.on||a.opt.starOn,c=r.off||a.opt.starOff,l=s?n:c;i<=r.range&&o.attr("src",a.opt.path+l),i==r.range&&e++}else{var l=s?"starOn":"starOff";o.attr("src",this.opt.path+this.opt[l])}}},_getHint:function(t){var a=this.opt.hints[t-1];return""===a?"":a||t},_lock:function(){var a=parseInt(this.score.val(),10),e=a?t._getHint.call(this,a):this.opt.noRatedMsg;$(this).data("readonly",!0).css("cursor","").attr("title",e),this.score.attr("readonly","readonly"),this.stars.attr("title",e),this.cancel&&this.cancel.hide()},_roundStars:function(t){var a=(t-Math.floor(t)).toFixed(2);if(a>this.opt.round.down){var e="starOn";this.opt.halfShow&&a<this.opt.round.up?e="starHalf":a<this.opt.round.full&&(e="starOff"),this.stars.eq(Math.ceil(t)-1).attr("src",this.opt.path+this.opt[e])}},_target:function(a,e){if(this.opt.target){var i=$(this.opt.target);0===i.length&&t._error.call(this,"Target selector invalid or missing!"),this.opt.targetFormat.indexOf("{score}")<0&&t._error.call(this,'Template "{score}" missing!');var o=e&&"mouseover"==e.type;void 0===a?a=this.opt.targetText:null===a?a=o?this.opt.cancelHint:this.opt.targetText:("hint"==this.opt.targetType?a=t._getHint.call(this,Math.ceil(a)):this.opt.precision&&(a=parseFloat(a).toFixed(1)),o||this.opt.targetKeep||(a=this.opt.targetText)),a&&(a=this.opt.targetFormat.toString().replace("{score}",a)),i.is(":input")?i.val(a):i.html(a)}},_unlock:function(){$(this).data("readonly",!1).css("cursor","pointer").removeAttr("title"),this.score.removeAttr("readonly","readonly");for(var a=0;a<this.opt.number;a++)this.stars.eq(a).attr("title",t._getHint.call(this,a+1));this.cancel&&this.cancel.css("display","")},cancel:function(a){return this.each(function(){$(this).data("readonly")!==!0&&(t[a?"click":"score"].call(this,null),this.score.removeAttr("value"))})},click:function(a){return $(this).each(function(){$(this).data("readonly")!==!0&&(t._apply.call(this,a),this.opt.click||t._error.call(this,'You must add the "click: function(score, evt) { }" callback.'),this.opt.click.call(this,a,$.Event("click")),t._target.call(this,a))})},destroy:function(){return $(this).each(function(){var t=$(this),a=t.data("raw");a?t.off(".raty").empty().css({cursor:a.style.cursor,width:a.style.width}).removeData("readonly"):t.data("raw",t.clone()[0])})},getScore:function(){var t=[],a;return $(this).each(function(){a=this.score.val(),t.push(a?parseFloat(a):void 0)}),t.length>1?t:t[0]},readOnly:function(a){return this.each(function(){var e=$(this);e.data("readonly")!==a&&(a?(e.off(".raty").children("img").off(".raty"),t._lock.call(this)):(t._binds.call(this),t._unlock.call(this)),e.data("readonly",a))})},reload:function(){return t.set.call(this,{})},score:function(){return arguments.length?t.setScore.apply(this,arguments):t.getScore.call(this)},set:function(t){return this.each(function(){var a=$(this),e=a.data("settings"),i=$.extend({},e,t);a.raty(i)})},setScore:function(a){return $(this).each(function(){$(this).data("readonly")!==!0&&(t._apply.call(this,a),t._target.call(this,a))})}};$.fn.raty=function(a){return t[a]?t[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void $.error("Method "+a+" does not exist!"):t.init.apply(this,arguments)},$.fn.raty.defaults={cancel:!1,cancelHint:"Cancel this rating!",cancelOff:"cancel-off.png",cancelOn:"cancel-on.png",cancelPlace:"left",click:void 0,half:!1,halfShow:!0,hints:["bad","poor","regular","good","gorgeous"],iconRange:void 0,mouseout:void 0,mouseover:void 0,noRatedMsg:"Not rated yet!",number:5,numberMax:20,path:"",precision:!1,readOnly:!1,round:{down:.25,full:.6,up:.76},score:void 0,scoreName:"score",single:!1,size:16,space:!0,starHalf:"star-half.png",starOff:"star-off.png",starOn:"star-on.png",target:void 0,targetFormat:"{score}",targetKeep:!1,targetText:"",targetType:"hint",width:void 0}}(jQuery);