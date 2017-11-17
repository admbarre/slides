var slides = document.getElementById("slider").children
var delay = 5000 //10k ms = 10s, how long to show the slide
var duration = 2000 //2k ms = 10s, how long the transition takes

function setup(slides){
	console.log("Setting up slides...")
	for(let i = 0; i < slides.length; i++){
		slides[i].style.zIndex = 0
	}
}

function shuffle(slides){
	console.log("Shuffling...")
	for(let i = 0; i < slides.length; i++){
		setTimeout(toBottom, i * delay, slides[i])
	}
}

function toBottom(slide){
	console.log("Executing..." + slide)
	slide.style.zIndex = 1
	//Xform right
	slide.style.zIndex = -1
	//Xform '
}

//Main
setup(slides)
shuffle(slides)
