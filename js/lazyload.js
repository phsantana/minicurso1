window.onload = () => {
	showOnScroll();
	lazyload();
	bgLazyLoad();
}
window.onscroll = () => {
	showOnScroll();
	lazyload();
	bgLazyLoad();
}


function lazyload(){

	[].forEach.call(document.querySelectorAll("img[data-src]"), img => {
		if((img.getBoundingClientRect().top <= window.innerHeight - img.offsetHeight)){
			img.setAttribute("src",img.getAttribute("data-src"));

			img.onload = () => {
				img.removeAttribute("data-src");
				
				if(!img.classList.contains("slide-right"))
					img.style.animation = "unblur .8s ease-out";
				else
					img.style.animation = "fadeInLeft .5s ease-out";

				img.parentNode.removeChild(img.nextElementSibling);
			}
		}
	});
}

function bgLazyLoad(){

	[].forEach.call(document.querySelectorAll("div[data-src]"), div => {
		if((div.getBoundingClientRect().top <= window.innerHeight - 0.1*div.offsetHeight)){

			var bgImage = new Image();

			bgImage.setAttribute("src",div.getAttribute("data-src"));

			bgImage.onload = () => {
				div.removeAttribute("data-src");
				div.style.backgroundImage = "url('"+bgImage.src+"')";
				div.style.opacity = "1";
				div.style.animation = "fadeIn .5s ease-out";;
				// div.parentNode.removeChild(div.nextElementSibling);
			}
		}
	});
}