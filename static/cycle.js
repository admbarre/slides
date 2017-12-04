var slides = document.getElementById("slider").children
var delay = 5000 //10k ms = 10s, how long to show the slide
var duration = 2000 //2k ms = 10s, how long the transition takes

var slider_width = 640

function setup(slides){
	console.log("Setting up slides...")
	num = slides.length
	for(let i = 0; i < num; i++){
		console.log('Z: ' + (num - i))
		slides[i].style.zIndex = num - i
		slides[i].classList.remove('animated')
	}
}

function shuffle(slides){
	console.log("Shuffling...")
	for(let i = 0; i < slides.length; i++){
		setTimeout(cycle, (i * (delay + duration)), slides[i])
	}
}

function cycle(slide){
	slide.classList.add('animated')
}

setup(slides)
shuffle(slides)
