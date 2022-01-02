window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		document.getElementById("navbar").style.padding = "5px 10px";
		document.getElementById("navbar").style.background = "#000000";
		document.getElementById("logo").style.width = "50px";
		document.getElementById("logo").style.height = "50px";
	} else {
		document.getElementById("navbar").style.padding = "10px 10px";
		document.getElementById("navbar").style.background = "transparent";
		document.getElementById("logo").style.width = "120px";
		document.getElementById("logo").style.height = "120px";
	}
};



$(function () {
	$("#learnButton").on("click", function () {
        $("#learnModal").modal("show");
    });
});
