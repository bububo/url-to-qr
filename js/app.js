(function() {
	
	let string;
	let inputEl = document.querySelector('input');
	let canvasEl = document.querySelector('#qr');
	let qr = new QRious({
			element: canvasEl,
			size: 210
		});
	
	if (chrome.tabs) {
		chrome.tabs.getSelected(null, function(tab) {
			string = tab.url;
			//alert(string);
			inputEl.value = string;
			qr.value = string;
			inputEl.focus();
			inputEl.select();
		});
	}
	
	
})();