'use strict';

var app = angular.module('app',['ngAnimate']);

app.service('imgs',function(){

	this.imgs = ["https://scontent-eze1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18879754_812408745579770_6876435914424320_n.jpg",
	"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c4.0.856.856/18722248_1359631807483938_6814160808482701312_n.jpg",
	"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/e35/c0.62.500.500/18878855_224163598099680_417857320983199744_n.jpg",
	"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18889058_134366300448622_7252638946058829824_n.jpg",
	"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18723703_440844186276358_3174111063742349312_n.jpg",
	"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.16.720.720/18888876_256416958169173_7654141619989381120_n.jpg",
	"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18812248_1906788752870746_787217627901591552_n.jpg",
	"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/e35/c83.0.607.607/18812057_300777297039991_2072917638442385408_n.jpg"
	];
	this.getImgs = function(){
		return this.imgs
	}
	this.setImgs = function(imgs){
		this.imgs = imgs;
	}
	this.addImgs = function(img){
		this.imgs.push(img);
	}
});

app.controller('slider',['imgs','$interval','$scope',function(imgs,$interval,$scope){
	self = this;

	this.now = 0;
	this.id = 0;
	this.nowImg = [
	//"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/18812178_431082083923025_1557254935647617024_n.jpg",
	//"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/s640x640/e15/18723633_233159870518143_4623404192449429504_n.jpg",
	//"https://scontent-eze1-1.cdninstagram.com/t51.2885-15/e15/18811951_1949318891967700_6991760343282221056_n.jpg"
	];
	
	this.next = function(){
		
		self.nowImg.shift();

		while(self.nowImg.length<3){
			self.nowImg.push(self.getNextImg());
		}	}

	this.getNextImg = function(){
		var imgsNow = imgs.getImgs();

		//Tomo el id de imagen que corresponde
		if(imgsNow.lenght-2==self.now){
			//Now es anteultimo

			var idImg = 0;
		}else{

			var idImg = self.now+1;
		}

		//Actualizo el id actual

		if(imgsNow.length-1 == self.now){
			self.now = 0;
		}else{
			self.now++;
		}
		self.id++;
		var devuelvo = {id:self.id,img:imgsNow[idImg]};
		console.log(devuelvo);
		return devuelvo
	}
	
	this.on = function(){
		self.next();
		$interval(self.next,5000);
	}
	this.on();
}]);