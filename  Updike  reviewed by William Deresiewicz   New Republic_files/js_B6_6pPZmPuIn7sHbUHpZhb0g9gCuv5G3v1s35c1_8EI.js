$.extend(!0,site.config,{articlesPerPage:25,paywall:{limit:15,url:"/full-access"},adTimer:60,api:{emailArticle:"/email/article/ajax/{id}",getArticles:"/api/article/{type}/{date}/{responseType}/{$limit}/{/$page}/{/filter}/{/$ignoreID}",homepageArticles:"/tnr-blocks/featured/{homepageID}/{lastID}",latestArticles:"/latest/next/{offset}",search:"/api/search/{query}"},id:{livefyre:"341330",doubleclick:"25738720"},precacheable:[],caption:{saturation:100,lightness:65},popColor:{saturation:80,lightness:40},validation:{emailArticle:{email:{identifier:"email_to",rules:[{type:"empty",prompt:"Please enter your friends e-mail"}]},senderEmail:{identifier:"sender_email",rules:[{type:"email",prompt:"Please enter your e-mail"}]},senderName:{identifier:"sender_name",rules:[{type:"empty",prompt:"Please enter your name"}]}},newsletter:{email:{identifier:"email",rules:[{type:"email",prompt:"Please enter a valid e-mail"}]}},login:{username:{identifier:"username",rules:[{type:"empty",prompt:"Please enter your email"}]},password:{identifier:"password",rules:[{type:"empty",prompt:"Please enter a password"}]}}},share:{twitter:{share:{twitter:!0},enableHover:!1,enableTracking:!0,shorterTotal:!0,buttons:{twitter:{via:"tnr"}},click:function(a){a.simulateClick(),a.openPopup("twitter")}},twitterFollow:{share:{twitterFollow:!0},enableHover:!1,enableTracking:!0,shorterTotal:!0,click:function(a){a.simulateClick(),a.openPopup("twitterFollow")}},facebook:{share:{facebook:!0},enableHover:!1,shorterTotal:!0,enableTracking:!0,click:function(a){a.simulateClick(),a.openPopup("facebook")}},facebookLike:{share:{facebook:!0},enableHover:!1,shorterTotal:!0,enableTracking:!0,buttons:{facebook:{action:"like"}},click:function(a){a.simulateClick(),a.openPopup("facebook")}},googlePlus:{share:{googlePlus:!0},urlCurl:"/api/share",shorterTotal:!0,enableHover:!1,enableTracking:!0,click:function(a){a.simulateClick(),a.openPopup("googlePlus")}}},breakpoint:{mobile:{lower:320,upper:767},tablet:{lower:768,upper:991},computer:{lower:992},twoColumn:{lower:1220},widescreen:{lower:1900}}}),$.isPlainObject(site.page.config)&&$.extend(!0,site.config,site.page.config);;
!function(a,b,c,d,e){a.extend(!0,b,{detect:{all:function(){return{device:b.detect.device(),browserName:b.detect.browserName(),browserVersion:b.detect.browserVersion(),deviceType:b.detect.deviceType(),operatingSystem:b.detect.operatingSystem()}},device:function(){var a=navigator.userAgent;return null!==a.match(/iPad/i)?"iPad":null!==a.match(/iPhone/i)?"iPhone":null!==a.match(/iPod/i)?"iPod":null!==a.match(/BlackBerry/i)?"Blackberry":null!==a.match(/Android/i)?"Android":"Computer"},browserName:function(){var a=navigator.userAgent.toLowerCase();return/chrome/.test(a)?"Chrome":/mozilla/.test(a)&&!/(compatible|webkit)/.test(a)?"Firefox":/webkit/.test(a)&&!/chrome/.test(a)?"Safari":/msie/.test(a)&&!/opera/.test(a)?"IE":/opera/.test(a)?"Opera":"Unknown"},deviceType:function(){var a=b.detect.device();return"iPhone"==a||"iPod"==a||"Blackberry"==a||"Android"==a?"Mobile":"iPad"==a?"Tablet":"Computer"},browserVersion:function(){return(navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1]},operatingSystem:function(){return"iPhone"==b.detect.device()||"iPad"==b.detect.device()?"iOS":b.utilities.toUCWords(/(Win|Mac|Linux|SunOS|Solaris|iPhone)/i.exec(navigator.platform.toLowerCase())[0].replace("sunos","Solaris"))}},track:function(a,b,c,d,e){_gaq.push(["_trackEvent",a,b,c,d,e])},error:{generateHTML:function(b){var c="";return a.each(b,function(a,b){c+="<li>"+b+"</li>"}),c},report:function(e){var f={error:{}};try{f.error.section=b.utilities.toTitleCase(b.section),f.error.url=c.location.pathname,f.error.referrer=d.referrer||!1,f.staging=b.config.staging,f.error.text=e.toString(),f.error.name=e.name,f.error.lineNumber=e.lineNumber||"Unknown",f.error.fileName=e.fileName||"Unknown File",f.error.message=e.message,f.error.source=e.toSource()}catch(g){}finally{a.extend(f.error,b.environment)}}},timer:{alertThreshold:50,start:function(a,c){a=a||"Performance Metrics",c=c!==e?c:!0,b.timer.global=(new Date).getTime(),b.timer.table=[],c?console.groupCollapsed(a):console.group(a)},end:function(a){var c,d=(new Date).getTime(),f="",g=d-b.timer.global,h=g>1e3?parseFloat(g/1e3,3)+" seconds":g+" ms";return a=a||"Execution time",b.timer.global===e?void(b.timer.global=d):(f=a+": "+h,f=b.timer.padLog(f),c="/***************************************\n"+f+"\n***************************************/\n",console.log(c),console.table!==e&&console.table(b.timer.table),console.markTimeline!==e&&console.markTimeline(c),console.groupEnd(),b.timer.global=(new Date).getTime(),void delete b.timer.last)},monitor:{start:function(a){b.timer[a]=(new Date).getTime()},end:function(a,c){var d,f,g,h=(new Date).getTime(),i=localStorage!==e,j=h-b.timer[a],k=i?localStorage.getItem("timer_"+a):!1;if(a=a||"default",c=c||b.timer.alertThreshold,k&&(f=j-k,g=f>1e3?parseFloat(f/1e3,3)+" seconds":Math.abs(f)+" ms",f>c?(d="Warning, current execution time was increased by "+g+" over last browser load. \n\nCurrent Page Load Time: "+j+"ms \nLast Page Load Time: "+k+"ms",b.config.staging&&console.warn(d)):(g=f>=0?g+" more":g+" less",d=a+": "+g+" than last page load",isNaN(f)||console.info(d),console.markTimeline!==e&&console.markTimeline(d))),"number"==typeof j&&localStorage!==e)try{localStorage.setItem("timer_"+a,j)}catch(l){l==QUOTA_EXCEEDED_ERR&&console.log("ERROR: Local Storage is not Available")}}},profile:function(a,c){c=c||"Anon Function",b.timer.start(),a(),b.timer.end(c)},padLog:function(a,b){b=b||40;var c=a.length,d=parseInt((b-c)/2,10),e=(b-c)%2==1,f=d,g="";if(a=a||"",d>0)for(;f--;)g+=" ";return e?" "+g+a+g:g+a+g},log:function(a,c){var c=c!==e?c:!0,d=(new Date).getTime(),f=b.timer.last!==e?b.timer.last:!1,g=d-b.timer.global,h=c&&f?g-f:g,i=h>1e3&&!console.table?parseFloat(h/1e3,3)+" seconds":h+" ms",j=a+": "+i;b.timer.last=g,b.timer.table.push({Name:a,"Execution Time (ms)":h}),console.table===e&&console.log(j)}},utilities:{refresh:{ads:function(f){var g,h=a.isArray(f)&&f.length>0,i=d.hidden!==e&&!d.hidden;c.googletag!==e&&(g=googletag.pubads(),h&&i&&a.each(f,function(c,d){var f,h=a("#"+d.id),i=(h.get(),h.is(":visible"));(i||d.visible)&&(f=googletag.defineSlot(d.name,d.sizes,d.id).addService(g),googletag.display(d.id),g.refresh(f),b.track("Article","Ad Refresh",d.id,e,!0))}))}},load:{ads:function(d,f){f=f||function(){},a.isArray(d)&&d.length>0&&c.googletag!==e&&googletag.cmd.push(function(){var c=googletag.pubads();a.each(d,function(b,d){var g,h,i=a("#"+d.id),j=i.get();g=googletag.defineSlot(d.name,d.sizes,d.id).addService(c),h=g.renderEnded,(d.collapse===e||d.collapse)&&g.setCollapseEmptyDiv(!0),g.renderEnded=function(){a.proxy(f,j)(),h()}}),c.setTargeting("nid",b.config.node.id).setTargeting("tags",b.config.tag.ids).enableAsyncRendering(),googletag.enableServices(),a.each(d,function(b,c){var d=a("#"+c.id),e=d.is(":visible");(e||c.visible)&&googletag.display(c.id)})})}},debounce:function(a,c){c=c||100,clearTimeout(b.timer),b.timer=setTimeout(a,c)},getBackgroundColor:function(a){var b,c,e,f,g=new Image,h=d.createElement("canvas"),i=h.getContext&&h.getContext("2d"),j=4,k=0,l=0,m={r:0,g:0,b:0,a:0},n={r:0,g:0,b:0,a:0},o=!1,p=130;if(g.src=a,!i)return!1;f=h.height=g.naturalHeight||g.offsetHeight||g.height,e=h.width=g.naturalWidth||g.offsetWidth||g.width;try{i.drawImage(g,0,0),c=i.getImageData(0,0,e,f).data}catch(q){return!1}for(b=c.length;b>k&&!(k>=e*f*j);){if(m={r:c[k],g:c[k+1],b:c[k+2],a:c[k+3]},m.r==n.r&&m.g==n.g&&m.b==n.b&&m.a==n.a){if(l++,l>p){o=m;break}}else l=0;n=m,k+=j*e}return o},getColorPalette:function(b,c){var d,e=new Image;c=c||function(){};try{e.src=b,e.width=200,e.height=100,e.onload=function(){d=(new ColorThief).getPalette(e,2),a.each(d,function(a,b){d[a]="rgba ("+b.join(",")+", 1)"}),c(d)},e.onerror=function(){c(!1)}}catch(f){c(!1)}},getColor:function(a,b){var c,d=new Image;b=b||function(){};try{d.src=a,d.width=100,d.height=100,d.onload=function(){c=(new ColorThief).getColor(d),c="rgba ("+c.join(",")+", 1)",b(c)},d.onerror=function(){b(!1)}}catch(e){b(!1)}},findSection:function(){return b.utilities.toCamelCase(a("body").attr("id"))},findTemplate:function(){return b.utilities.toCamelCase(a("body").attr("class"))},redirect:function(b,d){var f=a("base").attr("href")||"";d=d!==e?d:!1,d?c.open(f+b):c.location.href=f+b},precache:function(b,c){b instanceof Array||(b=[b]);for(var e=b.length,f=0,g=[],h=d.createElement("img"),i=function(){f++,f>=b.length&&a.isFunction(c)&&c()};e--;)h=d.createElement("img"),h.onload=i,h.onerror=i,h.src=b[e],g.push(h)},emptyString:function(a){return"string"==typeof a?-1==a.search(/\S/):!1},randomString:function(a){var b="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(""),c="",d=new Date,e=0;for(a||(a=Math.floor(Math.random()*b.length)),e=0;a>e;e++)c+=b[Math.floor(Math.random()*b.length)];return c+d.valueOf()},htmlEncode:function(b){return b?a("<div />").text(b).html():""},htmlDecode:function(b){return b?a("<div />").html(b).text():""},nl2br:function(a){return"string"==typeof a?a.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"):a},isEmail:function(a){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)?!0:!1},toCamelCase:function(b){if("string"==typeof b&&/-[a-z]/g.test(b)){var c=b.match(/-[a-z]/g);return c!==e&&a.each(c,function(a,c){b=b.replace(c,c.toUpperCase()[1])}),b}return b},toNormalCase:function(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},toUCWords:function(a){return(a+"").replace(/^([a-z])|\s+([a-z])/g,function(a){return a.toUpperCase()})},toTitleCase:function(a){function b(a){return a.toLowerCase()}function c(a){return a.substr(0,1).toUpperCase()+a.substr(1)}for(var d="(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)",e="([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)",f=[],g=/[:.;?!] |(?: |^)["Ò]/g,h=0;;){var i=g.exec(a);if(f.push(a.substring(h,i?i.index:a.length).replace(/\b([A-Za-z][a-z.'Õ]*)\b/g,function(a){return/[A-Za-z]\.[A-Za-z]/.test(a)?a:c(a)}).replace(new RegExp("\\b"+d+"\\b","ig"),b).replace(new RegExp("^"+e+d+"\\b","ig"),function(a,b,d){return b+c(d)}).replace(new RegExp("\\b"+d+e+"$","ig"),c)),h=g.lastIndex,!i)break;f.push(i[0])}return f.join("").replace(/ V(s?)\. /gi," v$1. ").replace(/(['Õ])S\b/gi,"$1s").replace(/\b(AT&T|Q&A)\b/gi,function(a){return a.toUpperCase()})}}})}(jQuery,site,window,document);;
!function(a,b,c,d,e){b.sections.global={ready:function(){var d,f=a(".page.navigation"),g=a(".navigation .ui.search"),h=a(".subscribe .dropdown"),i=a(".page.navigation .mobile.button"),j=a(".category.list .sponsored.item"),k=a(".page.navigation .sponsored.popup"),l=a(".page.navigation .user.menu .login.item"),m=a(".page.navigation .login.popup form"),n=a(".page.navigation .login.popup .submit.button"),o=a(".page.navigation .login.popup form .create"),p=a(".page.navigation .login.popup .checkbox"),q=a(".page.navigation .user.dropdown"),r=a(".page.footer"),s=a(".page.footer .signup form"),t=a(".page.footer .signup form .submit"),u=a(".page.footer .sharrre"),v=a(".page.footer select.sections"),w=a("#overlay"),x=(b.utilities,b.config),y=b.timer;y.log("Selectors cached"),d={setup:{overlay:function(){var d=a(c).width()<x.breakpoint.mobile.upper,e="Mobile"===b.environment.deviceType,f=e||d;f||w.tnrOverlay()},paywall:function(){a.visit({path:"/",storageMethod:"cookie"}),x.loggedIn&&a.visit("reset")}},toggle:{mobileMenu:function(){f.find(".mobile.menu").toggleClass("visible")}},login:{load:function(){n.state("set state","disabled")}},initialize:{footerShare:function(){u.filter(".twitter").sharrre(x.share.twitterFollow).end().filter(".facebook").sharrre(x.share.facebookLike).end().filter(".google").sharrre(x.share.googlePlus).end()}},redirect:function(){var b=a(this).val();c.location.href=b}},d.setup.paywall(),m.form(x.validation.login).form("setting","onSuccess",d.login.load),y.log("Initialized header login form"),h.dropdown({on:"hover",delay:{show:0},onShow:function(){b.track("Global","Subscribe Dropdown Opened",e,e,!1)}}),p.checkbox(),l.popup({position:"bottom left",on:"click",transition:"slide down",inline:!0,preserve:!0,offset:40}),o.popup({delay:500,variation:"inverted",on:"hover"}),q.dropdown({action:"hide"}),g.search({type:"categories",transition:"scale"}),y.log("Initialized header navigation UI"),j.popup({position:"bottom center",hoverable:!0,inline:!0,popup:k,preserve:!0,onShow:function(){b.track("Global","Dropdown Opened")},delay:{show:350,hide:1500}}),y.log("Add wide menu"),i.on("click",d.toggle.mobileMenu),y.log("Add mobile menu toggle events"),r.visibility("top visible",d.initialize.footerShare),y.log("Added footer share visibility callbacks"),s.form(x.validation.newsletter).api({method:"post",dataType:"html",stateContext:t,onComplete:function(){s.addClass("success")}}),y.log("Added footer signup validation"),v.on("change",d.redirect),d.setup.overlay(),y.log("Initializing tnrOverlay"),b.sections.global.behaviors=d},load:function(){FastClick.attach(d.body)}}}(jQuery,site,window,document);;
!function(a,b,c,d,e){b.sections.article={ready:function(){var f,g=a("html, body"),h=a("body"),i=a(".ui.sticky"),j=a(".left.article.rail .ui.sticky"),k=a(".right.article.rail .ui.sticky"),l=(a(".taboola"),a(".comments")),m=a(".comments .ui.sticky"),n=a(".newsletter.module form"),o=a(".newsletter.module form .submit"),p=a(".rail .expand.button"),q=a(".mobile.sidebar"),r=a(".mobile.sidebar > .item"),s=a(".recirculation.module .dropdown"),t=a(".inline .recirculation.module .menu .item"),u=a(".comments .recirculation.module .menu .item"),v=a(".share.module"),w=a(".tools.module .icon.menu > .item"),x=a(".tools.module .font.dropdown"),y=a(".tools.module .save.dropdown"),z=a(".tools.module .print.item"),A=a(".tools.module .email.item"),B=a(".email.modal"),C=a(".email.modal form"),D=a(".trending.module .dropdown"),E=a(".trending.module .headlines"),F=a(".story.image"),G=a(".article .content .story > .tracking"),H=a(".article .content .story .body.text"),I=(a(".story.title .caption"),a(".body.text .slideshow-container")),J=a(".body.text .lightbox"),K=(a(".paywall.module"),a(".paywall.module .read.count")),L=a("#sticky-rail-ad"),M=a(".article .content .story .footnote-reference sup"),N=a(".article .content .story .foot-note"),O=b.utilities,P=b.config,Q=b.timer;Q.log("Selectors cached"),f={precacheImage:function(){var a=F.data("image"),b=F.hasClass("loaded");P.precacheable.push(a),b||O.precache(P.precacheable,function(){f.addCustomColors(a)})},addCustomColors:function(a){var b=O.getBackgroundColor(a);O.getColorPalette(a,function(c){var d,e,g,h,i,j,k,l,m,n,o=F.data("type"),p=F.data("color");e=tinycolor(c[0]),e=e.toHsl(e),g=tinycolor(c[1]),g=g.toHsl(g),j=tinycolor({h:e.h,s:e.s,l:e.l}),m=e.s<.75?e.s:P.caption.saturation,n=e.l>.5&&e.l<.8?e.l:P.caption.lightness,h=tinycolor({h:e.h,s:m,l:n}),m=g.s<1?g.s:P.popColor.saturation,n=g.l>0&&g.l<.45?g.l:P.popColor.lightness,i=tinycolor({h:g.h,s:m,l:n}),l=e.l,b?d="solid":l>.5?d="light":.5>=l&&(d="dark"),d=o||d,b=p||b||c[0],"solid"==d?(d="solid",b=tinycolor(b),b=b.toHexString(b)):"light"==d?(d="light",n=e.l<.85?.85:e.l,m=e.s>.15?.15:e.s,b=j.toHexString(),k=tinycolor({h:e.h,s:m,l:n}).toPercentageRgb()):"dark"==d?(n=e.l>.15?.15:e.l,m=e.s>.15?.15:e.s,b=j.toHexString(),k=tinycolor({h:e.h,s:m,l:n}).toPercentageRgb()):"color"==d&&(k=b?tinycolor(b).toPercentageRgb():tinycolor({h:e.h,s:e.s,l:e.l}).toPercentageRgb()),f.addColorStyles(b,h.toHexString(),i.toHexString(),k),f.loadImage(a,d)})},addColorStyles:function(c,d,f,g){var h,i="";i+='<style title="colors">',g!==e&&(h=g.r+", "+g.g+", "+g.b,i+="#article .story.image.loaded:after {  background-image:    radial-gradient(15% 100% at 50% 50%,      rgba("+h+", 0) 0%,      rgba("+h+", 0) 420px,      rgba("+h+", 1) 600px,      rgba("+h+", 1) 700px    ) !important  ;}"),i+="#article .story.image {  background-color: "+c+" !important;}.article.container .story.title .caption {  color: "+d+" !important;}#article .body.text blockquote {  border-left-color: "+d+" !important;}#article .body.text .answer .name,#article .body.text blockquote.pull-left,#article .body.text blockquote.pull-right {  color: "+f+" !important;}</style>",a("head").append(i),b.page.colors={background:c,caption:d,popColor:f}},loadImage:function(a,b){F.css("background-image","url("+a+")").addClass(b).addClass("loaded").transition("fade in",1200)},newsletter:{success:function(){n.addClass("success")}},choose:{refreshAd:function(){b.currentRefresh=b.currentRefresh===e?1:b.currentRefresh+1,b.currentRefresh>10?f.remove.adTimer():(L.html('<div id="sticky-rail-ad-'+b.currentRefresh+'"></div>'),O.refresh.ads([{name:"/25738720/Web-LR2",id:"sticky-rail-ad-"+b.currentRefresh,sizes:[[300,250],[300,600]]}]))}},create:{adTimer:function(){L.filter(":visible").size()>0&&(f.adTimer=setInterval(f.choose.refreshAd,1e3*P.adInterval))},footnote:function(){var b=a(this).closest(".footnote-reference").attr("href"),c=a(b),d=c.html();d+="<p><em>Click to see all footnotes</em></p>",a(this).popup({distanceAway:5,html:d,inline:!0,on:"hover",position:"top right",preserve:!0,variation:"inverted"})},enlargedPhotos:function(){var b=[];J.each(function(){var c=a(this),d=c.closest(".pull-right, .pull-left, .pull-right-wide, .pull-left-wide, .pull-center"),f=c.attr("href"),g=c.attr("title")||d.find(".caption-header").text()||"",h=c.attr("desc")||d.find(".caption-text").text()||"",i=c.find("img").attr("src"),j=c.attr("rel")||"all";b[j]===e&&(b[j]=[]),i===e&&(i=f,c.removeClass("lightbox")),b[j].push({src:f,thumb:i,caption:g,desc:h})}),J.on("click",function(c){var d=a(this).attr("rel")||"all",e="all"===d?J.filter(":not([rel])").index(a(this)):J.filter('[rel="'+d+'"]').index(a(this));a(this).lightGallery({caption:!0,desc:!0,dynamic:!0,dynamicEl:b[d],easing:"ease",index:e,mode:"fade",speed:500}),c.preventDefault()})}},remove:{adTimer:function(){clearInterval(f.adTimer)}},change:{font:function(a){var c=a.split("/"),d=c[0],g=c[1];c?(H.attr("style","font-size:"+d+"rem !important;line-height"+g+"!important;"),f.refresh.sticky()):H.removeAttr("style"),f.hide.popup(),f.hide.sidebar(),b.track("Article","Font Size Changed",a,e,!0)}},increment:{paywall:function(){a.visit("setting",{limit:P.paywall.limit,onLimit:f.subscribeRedirect}),P.loggedIn?b.track("Visit Type","Logged In View",e,e,!0):b.track("Visit Type","Logged Out View",e,e,!0),!P.enablePaywall||P.loggedIn||P.staging?P.loggedIn?b.track("Meter Type","Paywall Skipped","Logged In",e,!0):b.track("Meter Type","Paywall Skipped","Logged Out",e,!0):(b.track("Meter Type","Paywall Incremented",e,e,!0),a.visit("add display",K),a.visit("increment",P.node.id))}},load:{script:function(a,b){var c;b=b||function(){},c=d.createElement("script"),h.append(c),c.onload=b,c.src=a,c.type="text/javascript"},recirculation:function(c){var d=a(this).closest(".tab"),f=d.find(".list"),g=(d.data("tab"),a(this).data("filter")||!1);b.track("Article","Text Recirculation Date Changed",c,e,!0),a.api({method:"GET",action:"getArticles",urlData:{date:c,type:"shares",responseType:"text",limit:5,page:1,filter:g,ignoreID:P.node.id},dataType:"html",stateContext:f,onSuccess:function(b){a(this).html(b)}})},trending:function(c){var d=a(this).data("filter")||!1,f=d?"tag":"trending";b.track("Article","Trending Dates Changed",c,e,!0),a.api({action:"getArticles",urlData:{date:c,type:f,responseType:"headlines",limit:3,page:1,filter:d,ignoreID:P.node.id},dataType:"html",stateContext:E,onSuccess:function(b){a(this).html(b)}})},taboola:function(){P.taboolaLoaded||(P.taboolaLoaded=!0,f.load.script("http://cdn.taboola.com/libtrc/thenewrepublic-thenewrepublic/loader.js"),c._taboola=c._taboola||[],_taboola.push({article:"auto"}),_taboola.push({mode:"thumbs-2r",container:"taboola-main",placement:"below-main-column",onrender:f.refresh.allSticky}),_taboola.push({mode:"text-links-2c",container:"taboola-text",placement:"text-2-columns",target_type:"mix"}))},comments:function(){{var a;P.node.id||null}P.commentsLoaded||(P.commentsLoaded=!0,f.load.script("http://zor.livefyre.com/wjs/v3.0/javascripts/livefyre.js",function(){a=fyre.conv.load.makeArticleId(null),fyre.conv.load({},[{el:"livefyre-comments",network:"livefyre.com",siteId:P.id.livefyre,articleId:a,signed:!1,collectionMeta:{articleId:a,url:fyre.conv.load.makeCollectionUrl()}}],function(a){a.on("initialRenderComplete",f.initialize.comments),a.on("commentPosted",f.refresh.commentSticky),f.initialize.comments(),b.track("Article","Comments Loaded",P.topTerm,null,!0)})}))}},initialize:{comments:function(){l.addClass("loaded"),f.refresh.commentSticky()}},hide:{popup:function(){a(this).popup("hide")},sidebar:function(){q.sidebar("hide")}},refresh:{allSticky:function(){m.data("moduleSticky")===e&&m.sticky({pushing:!0,context:l}),i.sticky("refresh")},commentSticky:function(){m.sticky(m.data("moduleSticky")===e?{pushing:!0,context:l}:"refresh"),k.sticky("refresh")},sticky:function(){var b=a(this).closest(".sticky"),c=b.size()>0;c&&b.sticky("refresh")}},setup:{ebuzzing:function(){c.Ebuzzing!==e&&a.isFunction(c.Ebuzzing.addEventListener)&&(c.Ebuzzing.addEventListener("videoReady",f.refresh.sticky),c.Ebuzzing.addEventListener("skipRequest",function(){setTimeout(f.refresh.sticky,2e3)}))}},send:{shareEmail:function(){return b.track("Article","Article Emailed",e,e,!0),a(this).api({on:"now",action:"emailArticle",dataType:"text",method:"POST",urlData:{id:P.node.id},complete:function(){B.modal("hide")}}),!1}},print:function(){b.track("Article","Article Printed",e,e,!0),c.print()},footnote:{showReference:function(){var c=a(this).html(),d=c-1,f=N.eq(d),h=f.offset().top;b.track("Article","Footnote Clicked",e,e,!0),g.animate({scrollTop:h},1e3,"easeOutQuad")},showNote:function(){var c=a(this).find("sup").html(),d=c-1,f=M.eq(d),h=f.offset().top;b.track("Article","Footer Footnote Reference Clicked",e,e,!0),g.animate({scrollTop:h},1e3,"easeOutQuad")}},initializeShare:function(){v.each(function(){var c=(a(this),a(this).find(".twitter")),d=a(this).find(".facebook");c.sharrre(a.extend(!0,P.share.twitter,{render:function(){c.find(".count").attr("href","https://twitter.com/search?q="+c.data("url")).attr("target","_blank").on("click",function(a){b.track("Share","View Story Tweets",e,e,!0),a.stopImmediatePropagation()})}})).on("click",function(){a.proxy(f.trackSocial,this)("Twitter")}),d.sharrre(P.share.facebook).on("click",function(){a.proxy(f.trackSocial,this)("Facebook")})})},trackArticleStuff:function(){a(".apostrophe").visibility("top visible",function(){b.track("Article","Bottom Visible",P.topTerm,null,!0)}),a("#trending .article.headline").on("click",function(){b.track("Recirc","Trending - Headline",P.node.id,null,!1)}),a("#bottomCenter .article.item").on("click",function(){b.track("Recirc","BottomCenter - Text",P.node.id,null,!1)}),a("#bottomRight .article.item").on("click",function(){b.track("Recirc","BottomRight - Text",P.node.id,null,!1)})},trackSocial:function(c){var d,f=a(this);d=f.closest(".left.rail").size()>0?"computer":f.closest(".right.rail").size()>0&&L.is(":visible")?"laptop":f.closest(".right.rail").size()>0?"tablet":"mobile",b.track("Article","Article Shared on "+c,e,e,!0)},trackBreakpoint:function(){var d=a(c).outerWidth(),f=P.breakpoint;d>f.computer.lower?d>f.widescreen.lower?b.track("Breakpoint","Viewed","Widescreen Computer",e,!0):d>f.twoColumn.lower?b.track("Breakpoint","Viewed","Three Column Computer",e,!0):b.track("Breakpoint","Viewed","Two Column Computer",e,!0):d>f.tablet.lower?d>a(c).height()?b.track("Breakpoint","Viewed","Tablet Landscape",e,!0):b.track("Breakpoint","Viewed","Tablet Portrait",e,!0):b.track("Breakpoint","Viewed","Mobile-"+b.environment.device,e,!0)},subscribeRedirect:function(){c.location.href=P.paywall.url+"?destination=node/"+P.node.id}},j.sticky({context:H}),k.sticky({pushing:!0,context:G}),Q.log("Initializing sticky menus"),f.load.taboola(),l.visibility("top visible",f.load.comments),Q.log("Added visibility load callbacks for comments and taboola"),n.form(P.validation.newsletter).api({method:"post",dataType:"html",stateContext:o,onComplete:f.newsletter.success}),t.tab({context:".inline .recirculation.module",history:!1,onTabLoad:function(a){b.track("Article","Text Recirculation Tab Opened",a,e,!0)}}),u.tab({context:".comments .recirculation.module",history:!1,onTabLoad:function(a){b.track("Article","Text Recirculation Tab Opened",a,e,!0)}}),s.dropdown({onChange:f.load.recirculation}),Q.log("Added trending article behaviors"),M.each(f.create.footnote),Q.log("Created footnote popups"),w.popup({variation:"inverted",position:"top center",inline:!0,preserve:!0,className:{visible:""}}),r.popup({variation:"inverted",position:"right center",className:{visible:""}}),y.dropdown({action:"hide"}),x.dropdown({onChange:f.change.font}),z.on("click",f.print),B.modal({onApprove:function(){return C.form("submit"),!1}}).modal("attach events",A),C.form(P.validation.emailArticle,{onSuccess:f.send.shareEmail}),Q.log("Added article tool behaviors"),P.ads&&O.load.ads(P.ads,f.refresh.sticky),f.create.adTimer(),Q.log("Loaded async ads"),f.setup.ebuzzing(),q.sidebar({overlay:!0,onShow:function(){a(c).one("scroll",f.hide.sidebar)}}).sidebar("attach events",p),Q.log("Initializing Article Tools Sidebar"),D.dropdown({onChange:f.load.trending}),Q.log("Initializing trending module"),M.on("click",f.footnote.showReference),N.on("click",f.footnote.showNote),Q.log("Added footnote events"),f.initializeShare(),Q.log("Initialiazing share widget"),f.increment.paywall(),Q.log("Initializing article paywall"),f.precacheImage(),Q.log("Precaching Top Image"),I.size()>0&&(a.fn.tnrSlideshow!==e?I.tnrSlideshow({}):I.hide()),J.size()>0&&f.create.enlargedPhotos(),f.trackBreakpoint(),f.trackArticleStuff(),b.sections[b.section].behaviors=f},load:function(){a(".ui.sticky").sticky("refresh")}}}(jQuery,site,window,document);;
!function(a,b,c,d,e){b.sections.homepage={ready:function(){var d,f=a(".side.column"),g=a(".lede"),h=a(".lede .image"),i=a(".lede .image .placeholder"),j=a(".lede .title"),k=a(".featured .row:last-child").prev(),l=k.find(".column:last-child .headline"),m=a(".featured .more.button"),n=b.utilities,o=b.config,p=b.timer;p.log("Selectors cached"),d={precacheImage:function(){var a=i.data("image"),b=h.hasClass("loaded");b||(d.resizeLedeImage(),n.precache(a,function(){d.addCustomColors(a)}))},resizeLedeImage:function(){var b,d=a(c).outerWidth()+16,e=(i.data("image"),g.offset().left),j=g.width(),k=e+j+1;h.css("height",""),d>=o.breakpoint.mobile.upper&&(b=f.outerHeight(),h.css("height",b),i.css({width:k}))},addCustomColors:function(a){var b=n.getBackgroundColor(a);n.getColorPalette(a,function(c){var e,f,g,h,i,j,k,l,m,n;f=tinycolor(c[0]),f=f.toHsl(f),g=tinycolor(c[1]),g=g.toHsl(g),j=tinycolor({h:f.h,s:f.s,l:f.l}),m=f.s<.75?f.s:o.caption.saturation,n=f.l>.5&&f.l<.8?f.l:o.caption.lightness,h=tinycolor({h:f.h,s:m,l:n}),m=g.s<1?g.s:o.popColor.saturation,n=g.l>0&&g.l<.45?g.l:o.popColor.lightness,i=tinycolor({h:g.h,s:m,l:n}),l=(f.l+g.l)/2,b?(e="solid",b=tinycolor(b),b=b.toHexString(b)):(b=j.toHexString(),k=tinycolor({h:f.h,s:f.s,l:f.l}).toPercentageRgb(),e=l>.5?"light":"dark"),d.addColorStyles(b,h.toHexString(),i.toHexString(),k),d.loadImage(a,e)})},addColorStyles:function(c,d,f,g){var h,i="";i+='<style title="colors">',g!==e&&(h=g.r+", "+g.g+", "+g.b,i+="#homepage .lede .image .placeholder:after {  background-image:    radial-gradient(20% 135% at 100% 50%,      rgba("+h+", 0) 0%,      rgba("+h+", 0) 800px,      rgba("+h+", 1) 1060px    ) !important  ;}"),i+="#homepage .lede .image .placeholder {  background-color: "+c+" !important;}#homepage .lede .title .caption {  color: "+d+" !important;}</style>",a("head").append(i),b.page.colors={background:c,caption:d}},loadImage:function(a,b){g.addClass("loaded").addClass(b),i.css("background-image","url("+a+")"),j.transition("is supported")?(j.transition("fade in",600),i.transition("fade in",1200)):(j.fadeIn(600),i.fadeIn(1200))},preventDefault:function(a){a.preventDefault()},resize:function(){n.debounce(d.resizeLedeImage)},set:{articleParameters:function(b){return k=a(".featured .row:last-child").prev(),l=k.find(".column:last-child .headline"),a.extend(b,{urlData:{homepageID:o.node.id,lastID:l.data("id")}})}},add:{stories:function(b){a(b).insertAfter(k)}}},m.on("click",d.preventDefault).api({action:"homepageArticles",dataType:"html",beforeSend:d.set.articleParameters,onSuccess:d.add.stories}),n.load.ads(o.ads),a(c).on("resize",d.resize).on("load",d.resizeLedeImage),d.precacheImage(),p.log("Adding resize event for lede image"),b.sections[b.section].behaviors=d},load:function(){}}}(jQuery,site,window,document);;
$.extend(site,{onReady:function(){var a,b,c=site.sections,d=site.utilities,e=site.timer;if(site.configure(),a={title:"Global Ready",exists:void 0!==c.global&&$.isFunction(c.global.ready)},b={title:d.toUCWords(site.section)+" Ready",exists:void 0!==site.sections[site.section]&&$.isFunction(c[site.section].ready)},e.start(a.title),a.exists&&site.sections.global.ready(),e.end(),b.exists){e.start(b.title,!1);try{site.sections[site.section].ready()}catch(f){throw site.error.report(f),f}e.end()}e.monitor.end(b.title)},onLoad:function(){var a=site.sections,b=site.utilities,c=site.timer,d={title:"Global Load",exists:void 0!==a.global&&$.isFunction(a.global.load)},e={title:b.toUCWords(site.section)+" Load",exists:void 0!==site.sections[site.section]&&$.isFunction(a[site.section].load)};if(c.start(d.title),d.exists&&a.global.load(),c.end(),e.exists){c.start(e.title,!1);try{site.sections[site.section].load()}catch(f){throw site.error.report(f),f}c.end()}},configure:function(){$.extend(site,{environment:site.detect.all(),section:site.utilities.toCamelCase(site.utilities.findSection())}),void 0!==$.api&&($.api.settings.api=site.config.api)}}),$(document).ready(site.onReady),$(window).load(site.onLoad);;
