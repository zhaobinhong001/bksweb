$(document).ready(function(){function t(t){return t=t.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,function(t){return'<a href="'+t+'"  target="_blank">'+t+"</a>"}),t=t.replace(/\B@([_a-z0-9]+)/gi,function(t){return'<a href="http://twitter.com/'+t.substring(1)+'" style="font-weight:lighter;" target="_blank">'+t.charAt(0)+t.substring(1)+"</a>"}),t=t.replace(/\B#([_a-z0-9]+)/gi,function(t){return'<a href="https://twitter.com/search?q='+t.substring(1)+'" style="font-weight:lighter;" target="_blank">'+t.charAt(0)+t.substring(1)+"</a>"})}function e(t){var e=t.split(" ");t=e[1]+" "+e[2]+", "+e[5]+" "+e[3];var i=Date.parse(t),r=arguments.length>1?arguments[1]:new Date,a=parseInt((r.getTime()-i)/1e3),n=t.substr(4,2)+" "+t.substr(0,3);return a+=60*r.getTimezoneOffset(),60>a?"1m":120>a?"1m":3600>a?parseInt(a/60).toString()+"m":7200>a?"1h":86400>a?parseInt(a/3600).toString()+"h":172800>a?n:n}var i=2,r="OliaGozha",a="Appconrner",n=!0,s=!0,o=!0,c=!0,l=!0,d=!0,p="https://twitter.com/intent/follow?original_referer=&screen_name=ne4iporuk92&tw_p=followbutton&variant=2.0",w="",u="";w+="",u+='<div id="loading-container"><img src="images/ajax-loader.GIF" width="32" height="32"/></div>',$("#twitter-feed").html(w+u),$.getJSON("../get-tweets1.1.php",function(r){for(var c="",u=1,h=0;h<r.length;h++){var f=r[h].user.name,g=r[h].user.screen_name;console.log(r[h].user);var m=r[h].user.profile_image_url_https,v=r[h].text,_=!1,b=!1,k=r[h].id_str;"undefined"!=typeof r[h].retweeted_status&&(m=r[h].retweeted_status.user.profile_image_url_https,f=r[h].retweeted_status.user.name,g=r[h].retweeted_status.user.screen_name,k=r[h].retweeted_status.id_str,v=r[h].retweeted_status.text,_=!0),"@"==r[h].text.substr(0,1)&&(b=!0),(1==s||0==_&&0==s)&&(1==n||0==n&&0==b)&&r[h].text.length>1&&i>=u&&(1==o&&(v=t(v)),1==u&&(c+=w),c+='<div class="twitter-article" id="tw'+u+'">',c+=" <a href="+p+' target="_blank" class="twitter-follow-button btn btn-info" data-show-count="false" data-size="large" data-show-screen-name="false"><i class="icon-twitter"></i><i class="icon-plus3"></i></a>',c+='<div class="twitter-pic"><a href="https://twitter.com/'+g+'" target="_blank"><img src="'+m+'"images/twitter-feed-icon.png" width="42" height="42" alt="twitter icon" /></a></div>',c+='<p class="twitter-author">'+a+"</p>",c+='<p><span class="tweetprofilelink"><a href="https://twitter.com/'+g+'" target="_blank">@'+g+"</a></span></p>",c+='<div class="twitter-text"><p><span  class="tweet-time"><a href="https://twitter.com/'+g+"/status/"+k+'" target="_blank">'+e(r[h].created_at)+"</a></span>"+v+"</p>",1==_&&1==d&&(c+='<div id="retweet-indicator"></div>'),1==l&&(c+='<div id="twitter-actions"><div class="intent" id="intent-reply"><a href="https://twitter.com/intent/tweet?in_reply_to='+k+'" title="Reply"></a></div><div class="intent" id="intent-retweet"><a href="https://twitter.com/intent/retweet?tweet_id='+k+'" title="Retweet"></a></div><div class="intent" id="intent-fave"><a href="https://twitter.com/intent/favorite?tweet_id='+k+'" title="Favourite"></a></div></div>'),c+="</div>",c+="</div>",u++)}$("#twitter-feed").html(c),0==l&&($(".twitter-article").hover(function(){$(this).find("#twitter-actions").css({display:"block",opacity:0,"margin-top":-20}),$(this).find("#twitter-actions").animate({opacity:1,"margin-top":0},200)},function(){$(this).find("#twitter-actions").animate({opacity:0,"margin-top":-20},120,function(){$(this).css("display","none")})}),$("#twitter-actions a").click(function(){var t=$(this).attr("href");return window.open(t,"tweet action window","width=580,height=500"),!1}))}).error(function(t,e,i){var r="";r=0===t.status?"Connection problem. Check file path and www vs non-www in getJSON request":404==t.status?"Requested page not found. [404]":500==t.status?"Internal Server Error [500].":"parsererror"===exception?"Requested JSON parse failed.":"timeout"===exception?"Time out error.":"abort"===exception?"Ajax request aborted.":"Uncaught Error.\n"+t.responseText,alert("error: "+r)})});