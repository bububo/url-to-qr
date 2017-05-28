(function() {
	
	let inputEl = document.querySelector('input');
	let canvasEl = document.querySelector('#qr');
	let timer = null;
	let qr = new QRious({
			element: canvasEl,
			size: 210
		});
		
	inputEl.addEventListener('input', onOnput);	
	
	if (chrome.tabs) {
		//generate qr code from tab url
		chrome.tabs.getSelected(null, function(tab) {
			let url = tab.url;
			inputEl.value = url;
			generateQr(url);
			inputEl.focus();
			inputEl.select();
		});
	}
	
	function generateQr(string) {
		let finalString = (string) ? string : 'Please enter a string'; 
		qr.value = finalString;
	}
	
	function onOnput() {
		if (timer) {
			clearTimeout(timer);
		}  
		timer = setTimeout(()=> {
			generateQr(inputEl.value)
			 
		},300);
	}
	
})();