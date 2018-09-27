
function showOnScroll(){	
	[].forEach.call(document.querySelectorAll(".profile-container"), pc => {
		if(pc.getBoundingClientRect().top <= window.innerHeight - pc.offsetHeight){
			pc.style.animation = "fadeInUp .4s ease-out";
			pc.style.opacity = '1';
		}
	});

	[].forEach.call(document.querySelectorAll("h1,h2,h3,h4,h5,h6,p"), h => {
		if(h.getBoundingClientRect().top <= window.innerHeight - h.offsetHeight){
			h.style.animation = "fadeInUp .5s ease-out";
			h.style.opacity = '1';
		}
	});
}