function UnityProgress (dom) {
	this.progress = 0.0;
	this.message = "";
	this.dom = dom;
	
	var parent = dom.parentNode;
	
	this.box = document.getElementById("progressBox");
	this.messageArea = document.getElementById("progressMessage");
	
	this.SetProgress = function (progress) {
		this.Update();
	}
	this.SetMessage = function (message) {
		if(message == "Downloading (0.0/1)") message = "Downloading...??";
		this.message = message;
		this.Update();
	}
	this.Clear = function() {
		this.box.style.display = "none";
	}
	this.Update = function() {
		this.messageArea.innerHTML = this.message;
	}
	this.Update();
}
