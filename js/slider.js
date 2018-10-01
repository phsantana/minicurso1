window.onload = slider;

var img = ["thatsAllFolks.jpg","acme-wallpaper1.jpg","acme-wallpaper2.jpg"];
var path = "assets/img/";

function slider(){	
	[].forEach.call(document.querySelectorAll("input[type='radio']"), (slide,index) =>{

		slide.addEventListener("click",function(){
			if(slide.checked){
				document.querySelector(".bg-tunes").style.backgroundImage = "url('"+path+img[index]+"')";
			}
		});
	});
}