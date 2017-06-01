//Primero tiene que estar el slider
//Despues las fotos que se pasan en el slider
// - Las fotos se toman de un archivo .json como link
// - Hay que asegurarce de no repetir las imagenes

//Clase slider

function Slider(delay){

	var self = this;
	
	this.delay = delay;
	this.index = 0;
	this.img = [];

	this.addImg = function(img){
		this.img.push(img);
	}

	this.on = function(){
		if(this.img.lenght != 0){
			setInterval(
				self.next("img");
			);
		}
	}

	this.next = function(){
		$(".slider").prepend("<div class='img img_1'></div>");
		$(".img_1").addClass("img_2");
	}
}


function next(){

/*	var imgs = $(".img");
	console.log(imgs);
	for(i in imgs){
		var classList = imgs[i].attr('class').split(/\s+/);
		console.log(classList);

//		if(imgs[i].){

//		}
	}*/

}

