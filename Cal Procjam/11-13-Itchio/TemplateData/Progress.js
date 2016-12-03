function UnityProgress (dom) {
	this.progress = 0.0;
	this.message = "";
	this.dom = dom;
	
	var parent = dom.parentNode;
	
	this.box = document.getElementById("progressBox");
	this.background = document.getElementById("progressBackground");
	this.logoImage = document.getElementById("progressLogo");
	this.messageArea = document.getElementById("progressMessage");
	
	this.SetProgress = function (progress) {
		this.box.style.display = "inline";
		this.Update();
	}
	this.SetMessage = function (message) {
		if(message == "Downloading (0.0/1)") message = "Downloading";
		this.message = message;
		this.Update();
	}
	this.Clear = function() {
		this.box.style.display = "none";
	}
	this.Update = function() {
		
		this.box.style.top = this.dom.offsetTop + 'px';
		this.box.style.left = this.dom.offsetLeft + 'px';
		this.box.style.width = this.dom.offsetWidth + 'px';
		this.box.style.height = this.dom.offsetHeight + 'px';
		
		this.background.style.top = this.dom.offsetTop + 'px';
		this.background.style.left = this.dom.offsetLeft + 'px';
		this.background.style.width = this.dom.offsetWidth + 'px';
		this.background.style.height = this.dom.offsetHeight + 'px';
		
		var logoImg = new Image();
		logoImg.src = this.logoImage.src;
		
		this.logoImage.style.top = this.dom.offsetTop + (this.dom.offsetHeight * 0.5 - logoImg.height * 0.5) + 'px';
		this.logoImage.style.left = this.dom.offsetLeft + (this.dom.offsetWidth * 0.5 - logoImg.width * 0.5) + 'px';
		this.logoImage.style.width = logoImg.width+'px';
		this.logoImage.style.height = logoImg.height+'px';
		
		this.messageArea.style.top = this.dom.offsetTop + (this.dom.offsetHeight * 0.5 + logoImg.height * 0.5 + 10) + 'px';
		this.messageArea.style.left = 0;
		this.messageArea.style.width = '100%';
		this.messageArea.style.textAlign = 'center';
		this.messageArea.innerHTML = this.message;
	}
	this.Update();
}