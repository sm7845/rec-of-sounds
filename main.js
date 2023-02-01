function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HVmAWN4sd/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);

}
function gotResults(error, results) {
    if (error) { console.error(error); } else {
        console.log(results);

        //asigna un color aleatorio para colocar las etiquetas más vistozas 
        //principio r g b 
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        //concatenación de elementos de texto comillas sencillas
        //índice CERO [0] mayor nivel de confianza 
        document.getElementById("result_label").innerHTML = 'Escucho - ' + results[0].label;
        //dar formato al nivel de precisión con 2 decimales y con % 
        document.getElementById("result_confidence").innerHTML = 'Precisión - ' + (results[0].confidence * 100).toFixed(2) + " %";
        //coloca el color del texto de la etiqueta con estilo obtenido función
        //rgb() = result_label
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        //coloca el color del texto de la etiqueta con estilo obtenido función
        //rgb() = result_confidence
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        //inicializar variables de tipo imagen = img para cada alienigena
        img = document.getElementById('aliens-01')
        img1 = document.getElementById('aliens-02')
        img2 = document.getElementById('aliens-03')
        img3 = document.getElementById('aliens-04')
        //se le asigna el archivo .gif que es el animado cuando coincida con lo que se le pide 
        if (results[0].label == "aplausos") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if (results[0].label == "campana") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        else if (results[0].label == "chasquid0s") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        }
        else if (results[0].label == "santiago") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }
    }
}