!function($){$.fn.jflickrfeed=function(e,i){e=$.extend(!0,{flickrbase:"http://api.flickr.com/services/feeds/",feedapi:"photos_public.gne",limit:20,qstrings:{lang:"en-us",format:"json",jsoncallback:"?"},cleanDescription:!0,useTemplate:!0,itemTemplate:"",itemCallback:function(){}},e);var a=e.flickrbase+e.feedapi+"?",t=!0;for(var c in e.qstrings)t||(a+="&"),a+=c+"="+e.qstrings[c],t=!1;return $(this).each(function(){var t=$(this),c=this;$.getJSON(a,function(a){$.each(a.items,function(i,a){if(i<e.limit){if(e.cleanDescription){var m=/<p>(.*?)<\/p>/g,n=a.description;m.test(n)&&(a.description=n.match(m)[2],void 0!=a.description&&(a.description=a.description.replace("<p>","").replace("</p>","")))}if(a.image_s=a.media.m.replace("_m","_s"),a.image_q=a.media.m.replace("_m","_q"),a.image_t=a.media.m.replace("_m","_t"),a.image_m=a.media.m.replace("_m","_m"),a.image=a.media.m.replace("_m",""),a.image_b=a.media.m.replace("_m","_b"),delete a.media,e.useTemplate){var r=e.itemTemplate;for(var l in a){var p=new RegExp("{{"+l+"}}","g");r=r.replace(p,a[l])}t.append(r)}e.itemCallback.call(c,a)}}),$.isFunction(i)&&i.call(c,a)})})}}(jQuery);