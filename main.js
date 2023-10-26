//https://teachablemachine.withgoogle.com/models/dLU-MBVCw/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:95
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

 function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="capturerd_image" src="'+data_uri+'" >';
    })
    
 }
 console.log("ml5.version",ml5.version)

classs=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/F4XJJZCH2/model.json",modelload);
function modelload (){
    console.log("this model is loaded jahangir")
}

function check (){
    img=document.getElementById("capturerd_image");
    classs.classify(img, gotresult);
}

function gotresult (error, results){
if (error) {
console.error(error)
}else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results [0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

}
}