var slides = document.getElementById("slider").children
var ms_to_s = 1000

// Reads in variables from CSS, so that slideshow can be edited directly from
// CSS file and not JS
var htmlStyles = window.getComputedStyle(document.querySelector("html"))
var delay  = parseInt(htmlStyles.getPropertyValue('--delay')) * ms_to_s
var duration  = parseInt(htmlStyles.getPropertyValue('--duration')) * ms_to_s

function setup(slides){
	for(let i = 0; i < slides.length; i++){
		slides[i].style.zIndex = slides.length - i
	}
}

function make_ring(start, end){
	/* Returns a generator that functions as a ring buffer with range [start, end] */
	return function* ring(){
		var index = start
		while(true){
			if(index > end){
				index = start
			}
			yield index++
		}
	}
}

function test_circular(){
	var ring_one_ten = make_ring(1,10)
	var gen = ring_one_ten()
	for(let i=0; i<35; i++){
		console.log(gen.next())
	}
}

//test_circular()
setup(slides)
var ring_slide = make_ring(0,slides.length-1)
var gen = ring_slide()

function slide_up(){
	/* Shifts all slides up to make room for bringing the top card to the bottom */
	for(let i = 0; i < slides.length; i++){
		slides[i].style.zIndex = parseInt(slides[i].style.zIndex) + 1
	}
}

function move_right(){
	slide_up()
	index = gen.next().value
	slide = slides[index]
	slide.classList.add('animated')
	setTimeout(move_down, delay + duration)
}

function move_down(){
	slide.style.zIndex = 1	//move down
	slide.classList.remove('animated')
	move_right()
}

move_right()
