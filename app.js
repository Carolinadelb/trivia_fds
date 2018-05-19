//Nombre en HTML + Bienvenida 
function myFunction (){
var user = document.getElementById("name").value;
var p = document.getElementById("welcomeMsje");
p.innerHTML = "Bienvenida " + user;
}

// Primera pregunta (Alternativa: SI)
document.getElementById("priS").addEventListener("click", myFunction);
 function myFunction2(){
     document.getElementById("priS").innerHTML = "Correcto";
      }
//Primera pregunta (Alternativa: NO)
document.getElementById("priN").addEventListener("click", myFunction);
 function myFunction3(){
     document.getElementById("priS").innerHTML = "Incorrecto";
      }

// Segunda pregunta (Alternativa: SI)
document.getElementById("segS").addEventListener("click", myFunction);
 function myFunction4(){
     document.getElementById("segS").innerHTML = "Incorrecto";
      }
//Segunda pregunta (Alternativa: NO)
document.getElementById("segN").addEventListener("click", myFunction);
 function myFunction5(){
     document.getElementById("segS").innerHTML = "Correcto";
      }
// Tercera pregunta (Alternativa: SI)
document.getElementById("terS").addEventListener("click", myFunction);
 function myFunction6(){
     document.getElementById("terS").innerHTML = "Correcto";
      }
// Tercera pregunta (Alternativa: NO)
document.getElementById("terN").addEventListener("click", myFunction);
 function myFunction7(){
     document.getElementById("terS").innerHTML = "Incorrecto";
      }
/*
window.onload = function() {
    var name = prompt("¿cuál es tu nombre?");
    document.getElementById("name").innerText = name;

    var wantToPlay = prompt("¿quieres jugar? s/n");
    if (wantToPlay.toLowerCase() == "s") {
        var answer1 = prompt("¿han egresado hombres en Laboratoria? s/n");
        if (answer1.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        }

        var answer2 = prompt("¿hay laboratoria en concepción? s/n");
        if (answer2.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        }
    } else {
        document.getElementById("warningMessage").innerText = "Bueno Chao";
    }
}
*/