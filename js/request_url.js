if (location.protocol != "file:") {
    var siteHref = document.location.href, sitePath = location.pathname.slice(0, location.pathname.lastIndexOf("/") + 1), IE='\v'=='v', hashString = (window.navigator.userAgent.indexOf('MSIE')!= -1)?"/#/":"?";

// console.log(siteHref);
// console.log(sitePath);
// console.log(hashString);

// console.log(".html " +(siteHref.lastIndexOf(".html") != -1));
// console.log(".htm "+(siteHref.lastIndexOf(".htm") != -1));

// console.log("/? "+(siteHref.lastIndexOf("/?") == -1));
// console.log("/# "+(siteHref.lastIndexOf("/#") == -1));
// console.log("index. "+(siteHref.lastIndexOf("index.") == -1));

    if (siteHref.lastIndexOf(".html") != -1 && siteHref.lastIndexOf("/?") == -1 && siteHref.lastIndexOf("/#") == -1 && siteHref.lastIndexOf("index.") == -1 || siteHref.lastIndexOf(".htm") != -1 && siteHref.lastIndexOf("/?") == -1 && siteHref.lastIndexOf("/#") == -1 && siteHref.lastIndexOf("index.") == -1 && siteHref.lastIndexOf("/?") == -1 && siteHref.lastIndexOf("/#") == -1 && siteHref.lastIndexOf("index.") == -1) {
		// document.location.href = siteHref.slice(0, siteHref.lastIndexOf("/"))+'/'+hashString+siteHref.slice(siteHref.lastIndexOf("/") + 1, siteHref.length);

		// console.log('href: '+siteHref.slice(0, siteHref.lastIndexOf("/"))+'/'+hashString+siteHref.slice(siteHref.lastIndexOf("/") + 1, siteHref.length));
		
		// console.log('slice 0: '+siteHref.slice(0, siteHref.lastIndexOf("/")));
		// console.log('hash: '+hashString);
		// console.log('slice: '+siteHref.slice(siteHref.lastIndexOf("/")+1));
    }else{
 	 	  document.write('<script type="text/javascript" src="js/history.min.js?type=/&redirect=true&basepath=' + sitePath + '"></script>');
 	 	  // console.log('history: '+sitePath);
	}
}
