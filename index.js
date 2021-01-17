var slideIndex = 2;

showSlides(slideIndex);

function showSlides(index){
	var slides = document.querySelectorAll('.slide'),
		dots = document.querySelectorAll('.dot-navigation');
		
		if (index >= slides.length) slideIndex = 0;
		if (index <0) slideIndex = slides.length - 1;
		
		for (var i =0; i < slides.length; i++){
			slides[i].style.display = "none";
			dots[i].classList.remove("active-dot");
		}
	
		slides[slideIndex].style.display = "block";
		dots[slideIndex].classList.add("active-dot");
}

document.querySelector("#arrow-prev").addEventListener
("click", function(){
	showSlides(--slideIndex);
})

document.querySelector("#arrow-next").addEventListener
("click", function(){
	showSlides(++slideIndex);
})

document.querySelectorAll(".dot-navigation").forEach(function(element){
	element.addEventListener("click", function(){
		var dots = Array.prototype.slice.call(this.parentElement.children),
			dotIndex = dots.indexOf(element);
			
			showSlides(slideIndex = dotIndex);
	})
});

setInterval(function(){
	showSlides(++slideIndex)
}, 10000)