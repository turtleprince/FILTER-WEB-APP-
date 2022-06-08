var nose_x = 0;
var nose_y = 0;


function preload(){

clown_nose = loadImage("https://i.postimg.cc/CKN2kT1k/nose-clipart-png-clipground-2.png");

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
    fill("red");
    stroke("red");

    image(clown_nose,nose_x,nose_y,30,30);
    
}

function take_snapshot(){
    save("rickroll.png");
}

function idk(){
console.log("idk has been playing video games and watching tiktok for 3hours straight , his eyes poped out of his face");

}


function got_Poses(results){

 if(results.length > 0 ){

    nose_x = results[0].pose.nose.x - 15;
    nose_y = results[0].pose.nose.y - 10;

   console.log(results);
   console.log(nose_y);
   console.log(nose_x);
 } 
}