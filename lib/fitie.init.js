this.fitie.init = function () {
	if (document.body) {
		var all = document.querySelectorAll('img,video');
		var index = -1;

		while (all[++index]) fitie(all[index]);
	} else {
		setTimeout(fitie.init);
	}
};

if (/MSIE|Trident/.test(navigator.userAgent)) this.fitie.init();
