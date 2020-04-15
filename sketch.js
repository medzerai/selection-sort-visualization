var nb;
var t = [];
var i;
var j;
var val;
var min;
var aux;
var ik;
var fin;




function setup() {
	createCanvas(1360 , 600);
	nb = Math.floor(width / 15);
	console.log(nb);
	for (i = 0 ;i < nb ;i++){
		t[i]=Math.floor(Math.random() * (height - 2)) + 1;
	}

    frameRate(7);
	i=0;
	fin=0;
	//setInterval(hello , 5000);
	//setTimeout(hello , 2000 , 60);
}

function draw() {

 	background(100);
  	stroke(255);
  	translate(11 ,height);
  
  		if(i < nb-1){
  			//setTimeout(mini(i) ,1000)
  			min = mini(i);
  			for (j = 0 ; j< nb ;j++){
  				if(min == j){
					stroke('rgb(100%,0%,10%)');
				}else{
					if(j <= i){
						stroke('rgb(0,255,0)');
					}else{
						stroke(255);
					}	
					
				}
				strokeWeight(15);
				dope(t[j]);
				translate(15 ,0);
 	 		}
  		    translate(11 ,height);
  			console.log(min);
  			aux = t[i];
  			t[i] = t[min];
  			t[min] = aux;
  			i++;
   		}else{
  	 		//i=0;
  	 		fin++;
  	 		noLoop();
  	 		alert("heyyyyyyyyy");
  		}

  		//affiche();
  	 	for (j = 0 ; j< nb ;j++){

  			bar(t[j],i-1,fin);
 		 }
 	}
  



function bar(val,ik,fin){
	if((j <= ik)||(fin > 0)){
		stroke('rgb(0,255,0)');
	}else{ 
		stroke(255);
	}
	strokeWeight(15);
	dope(val);
	translate(15 ,0);
}

function mini(ind){
	min = ind;
	for ( j = ind ; j < nb ; j++){
		if (t[min] > t[j]){
			min = j;
		}
	}
	return(min);

}
function hello(val){
	createP('hellooooooooooooo '+val);
}
function dope(val){
	line(0 ,0 , 0 ,-val);
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}