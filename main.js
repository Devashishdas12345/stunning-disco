var camera = document.getElementById("camera");
Webcam.attach(camera);

Webcam.set({
    width: 350,
    height: 250,
    image_format: "png",
    png_quality: 1000000
});

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id= "captured_image" src= "' + data_uri + '">';
    });
}

classifier = ml5.imageClassifier('MobileNet' , modelLoaded);

function modelLoaded() {
    console.log("Model loaded!!!");
}

function check() {
    var img = document.getElementById("captured_image");
    classifier.classify(img , gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.error("Error🚷🚷🚷");
        console.log("Error🚷🚷🚷");
        window.alert("Error🚷🚷🚷")
    }
    
    else {
        console.log(results);
        var a = results[0].label;
        var b = results[1].label;
        var c = results[2].label;

        var x = a + " , " + b 

        document.getElementById("Display").innerHTML = x;
    }
}