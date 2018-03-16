/* UA Parser */
(function(e,h){var n={extend:function(a,c){var d={},g;for(g in a)d[g]=c[g]&&0===c[g].length%2?c[g].concat(a[g]):a[g];return d},has:function(a,c){return"string"===typeof a?-1!==c.toLowerCase().indexOf(a.toLowerCase()):!1},lowerize:function(a){return a.toLowerCase()},major:function(a){return"string"===typeof a?a.replace(/[^\d\.]/g,"").split(".")[0]:h},trim:function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},p=function(a,c){for(var d in c)if("object"===typeof c[d]&&0<c[d].length)for(var g=
0;g<c[d].length;g++){if(n.has(c[d][g],a))return"?"===d?h:d}else if(n.has(c[d],a))return"?"===d?h:d;return a},t={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2E3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},u={os:[[/microsoft\s(windows)\s(vista|xp)/i],["name","version"],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",p,
t]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[["name","Windows"],["version",p,t]],[/\((bb)(10);/i],[["name","BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[["name","Symbian"],"version"],[/\((series40);/i],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i],[["name","Firefox OS"],"version"],
[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[["name","Chromium OS"],"version"],[/(sunos)\s?([\w\.]+\d)*/i],[["name","Solaris"],"version"],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
["name","version"],[/(haiku)\s(\w+)/i],["name","version"],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[["version",/_/g,"."],["name","iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[["name","Mac OS"],["version",/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],["name","version"]]},f=function(a,c){"object"===typeof a&&
(c=a,a=h);if(!(this instanceof f))return(new f(a,c)).getResult();var d=a||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:""),g=c?n.extend(u,c):u;this.getOS=function(){for(var a={name:h,version:h},c=d,f=g.os,e=0,l,m,q,b,r,k;e<f.length&&!r;){var n=f[e],p=f[e+1];for(l=m=0;l<n.length&&!r;)if(r=n[l++].exec(c))for(q=0;q<p.length;q++)k=r[++m],b=p[q],"object"===typeof b&&0<b.length?2==b.length?a[b[0]]="function"==typeof b[1]?b[1].call(a,k):b[1]:3==b.length?a[b[0]]="function"!==typeof b[1]||
b[1].exec&&b[1].test?k?k.replace(b[1],b[2]):h:k?b[1].call(a,k,b[2]):h:4==b.length&&(a[b[0]]=k?b[3].call(a,k.replace(b[1],b[2])):h):a[b]=k?k:h;e+=2}return a};this.getResult=function(){return{os:this.getOS()}};this.getUA=function(){return d};this.setUA=function(a){d=a;return this};return this};f.VERSION="0.7.17";f.BROWSER={NAME:"name",MAJOR:"major",VERSION:"version"};f.OS={NAME:"name",VERSION:"version"};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=
f),exports.UAParser=f):"function"===typeof define&&define.amd?define(function(){return f}):e&&(e.UAParser=f);var l=e&&(e.jQuery||e.Zepto);if("undefined"!==typeof l){var m=new f;l.ua=m.getResult();l.ua.get=function(){return m.getUA()};l.ua.set=function(a){m.setUA(a);a=m.getResult();for(var c in a)l.ua[c]=a[c]}}})("object"===typeof window?window:this);


var isSplash = -1, epct = 0, eboom = false;

function showSplash(){
    setTimeout(function () {        
        $('header').stop().delay(100).animate({'marginTop':'0px'}, 800, "easeInOutExpo");       
        $('.top2').stop().delay(0).animate({'marginTop':'0px'}, 800, "easeInOutExpo");  
    }, 400);    
};
function hideSplash(){ 
    $('header').stop().delay(0).animate({'marginTop':'-100px'}, 800, "easeInOutExpo");      
    $('.top2').stop().delay(100).animate({'marginTop':'-100px'}, 800, "easeInOutExpo");     
};
function hideSplashQ(){
    $('header').css({'marginTop':'-100px'});
    $('.top2').css({'marginTop':'-100px'});
};

$(document).ready(function() {
    MSIE8 = ($.browser.msie) && ($.browser.version == 8),
    $.fn.ajaxJSSwitch({
        classMenu:"#menu",
        classSubMenu:".submenu",
        topMargin: 268,//mandatory property for decktop
        bottomMargin: 100,//mandatory property for decktop
        topMarginMobileDevices: 268,//mandatory property for mobile devices
        bottomMarginMobileDevices: 100,//mandatory property for mobile devices
        delaySubMenuHide: 300,
        fullHeight: true,
        bodyMinHeight: 700,
        menuInit:function (classMenu, classSubMenu){
            //classMenu.find(">li").each(function(){
            //  $(">a", this).append("<div class='openPart'></div>");
            //})
        },
        buttonOver:function (item){
            $('>.over1',item).stop().animate({'height':'9px'},300,'easeOutCubic');            
            $('>.over2',item).stop().animate({'opacity':'1','marginTop':'0'},300,'easeOutCubic');            
            $('>.txt1',item).stop().animate({'color':'#ffffff'},300,'easeOutCubic');
        },
        buttonOut:function (item){
            $('>.over1',item).stop().animate({'height':'0px'},300,'easeOutCubic');
            $('>.over2',item).stop().animate({'opacity':'0','marginTop':'-7'},300,'easeOutCubic');            
            $('>.txt1',item).stop().animate({'color':'#d9d9cd'},300,'easeOutCubic');           
        },
        subMenuButtonOver:function (item){
        },
        subMenuButtonOut:function (item){
        },
        subMenuShow:function(subMenu){          
            subMenu.stop(true,true).animate({"height":"show"}, 500, "easeOutCubic");
        },
        subMenuHide:function(subMenu){
            subMenu.stop(true,true).animate({"height":"hide"}, 100, "easeOutCubic");
        },
        pageInit:function (pages){
            // console.log('pageInit');
        },
        currPageAnimate:function (page){
            //console.log('currPageAnimate');
            var Delay=400; // default
            if(isSplash==-1){ // on reload              
                hideSplashQ();
                Delay=0;                
            }
            if(isSplash==0){ // on first time click             
                hideSplash();
                Delay=800;
            }
            isSplash = 2;
            
            // animation of current page
            page.css({"left":$(window).width()}).stop(true).delay(Delay).animate({"left":0}, 1000, "easeOutCubic", function (){
                    $(window).trigger('resize');
            });     
        },
        prevPageAnimate:function (page){
            //console.log('prevPageAnimate');
            page.stop(true).animate({"display":"block", "left":-$(window).width()}, 500, "easeInCubic");
        },
        backToSplash:function (){
            //console.log('backToSplash');
            if(isSplash==-1){
                isSplash = 0;
                // startF();               
            }
            else{
                isSplash = 0;               
                showSplash();
            };
            $(window).trigger('resize');                  
        },
        pageLoadComplete:function (){
            //console.log('pageLoadComplete');            
        }
    });  /// ajaxJSSwitch end

    /////// icons
    $(".icons li a").find("img").css({opacity:0.7});
    $(".icons li a").hover(function() {
        $(this).find("img").stop().animate({marginTop:-5,opacity:1 }, 400, 'easeOutExpo');          
    },function(){
      $(this).find("img").stop().animate({marginTop:0,opacity:0.7 }, 400, 'easeOutExpo' );         
    });

    $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});

    ////  jCarouselLite 
    $(".slider1").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        mouseWheel: true,
        visible: 4,
        circular: true,
        vertical: false,
        speed: 600,
        auto: 5000,
        easing: 'easeOutExpo'
    });

    $('.slider').find('.over1').css({opacity:'0.5'});  
    $('.slider').hover(function(){
      $(this).find('.over1').stop().animate({opacity:'1'},500,'easeOutCubic');                
      $(this).find('img').stop().animate({'width':'199px','height':'242px','marginLeft':'-10px','marginTop':'-10px'},500,'easeOutCubic');   
    }, function(){
      $(this).find('.over1').stop().animate({opacity:'0.5'},500,'easeOutCubic'); 
      $(this).find('img').stop().animate({'width':'179px','height':'218px','marginLeft':'0px','marginTop':'0px'},500,'easeOutCubic');                   
    }); 

    $('.prev span, .next span').css({opacity:'0.4'});  
    $('.prev, .next').hover(function(){
      $(this).find('span').stop().animate({opacity:'1'},500,'easeOutCubic');                 
    }, function(){
      $(this).find('span').stop().animate({opacity:'0.4'},500,'easeOutCubic');                 
    });

    function sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    
    $('.clicky').click(function() {
        r = Math.random();
        p = epct * .4;

        if (r < p) {
            errorboom();
            
            sleep(1000).then(() => {
                boom();
                screenfull.request();
            });
        }

        epct++;
    });

});

$(window).load(function() { 
    setTimeout(function () {                    
        $('#spinner').fadeOut();        
        $(window).trigger('resize');
    }, 100);
});

function errorboom() {
    $('#wrapper').hide();
    $('#error').load('418.html');
    $('head').append('<link rel="stylesheet" type="text/css" href="css/reset.css">');
    $('head').append('<link rel="stylesheet" type="text/css" href="css/418.css">');
    $('#error').show(200, function() {
        $.getScript("js/418.js", function() {
            o();
        });
    });
}

function boom() {
    $('#error').hide();

    var os = $.ua.os.name;
    os = (os.indexOf('Windows') >= 0 ? 'Windows': os);

    os = 'blah';// DEBUG

    switch(os) {
        case 'Mac OS':
        case 'iOS':
            $('body').addClass('kernel').append('<div class="kimage" style="height: 556px;">').find('.kimage').stop().css('height', 0).animate({'height': '556px'}, 2000)
            break;
        case 'Windows':
            $('body').addClass('blue').append('<div class="bimage" style="height: 556px;">').find('.bimage').stop().css('height', 0).animate({'height': '100%'}, 2000);

            var ver = $.ua.os.version;

            if (ver >= 10) {
                var bgcolor = "#0f73a8";
                var img = "windows-10bsod.jpg";
            } else if (ver >= 8) {
                var bgcolor = "#0f73a8";
                var img = "windows8bsod.png";
            } else {
                var bgcolor = "#0000a9";
                var img = "windowsbsod.jpg";
            }

            $('.blue').css('background', bgcolor);
            $('.blue .bimage').css('background-image', 'url(../images/'+img+')');

            break;
        default:
            $('#error_message').addClass('broken');
            $('#error_message').show();
            break;
    }

    $(document).bind('fscreenchange', function(e, state, elem) {
        if (!$.fullscreen.isFullScreen()) {
            $('body').hide();
        }
    });
}
