function preload(){

}

function setup(){
        
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

my_pose = ml5.poseNet(video,idk);

my_pose.on('pose', got_Poses);
    
}

function draw(){
    image(video,0,0,300,300);
}

function take_snapshot(){
    save("rickroll.png");
}

function idk(){
console.log("deez nuts has been playing video games and watching tiktok for 3hours straight , his eyes poped out of his face");

}


function got_Poses(results){

 if(results.length > 0 ){

    console.log("Nose - X - "+ results[0].pose.nose.x);

    console.log("Nose - Y - "+ results[0].pose.nose.y);  
 } 
}