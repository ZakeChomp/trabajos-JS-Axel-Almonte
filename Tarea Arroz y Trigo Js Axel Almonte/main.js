function calculate(){   
    var wheat = parseFloat(document.getElementById("whe").value);
    var day = document.getElementById("day").value;
    var resultRice = document.getElementById("ric");
    var dia = "(No ingresado)"
    var rice = 0

    if (isNaN(wheat)){
      alert("Escriba la cantidad de trigo por favor");
    }

    switch (day) {
        case "def":
            alert("Elija un día por favor");
            break;
        case "mon":
          rice = wheat*3;
          var dia = "lunes"
          break;
        case "tue":
          rice = wheat/2;
          var dia = "martes"
          break;
        case "wen":
          rice = wheat/4;
          var dia = "miércoles";
          break;
        case "thu":
          rice = wheat/3;
          var dia = "jueves";
          break;
        case "fri":
          rice = wheat*5;
          var dia = "viernes";
          break;
        case "sat":
          rice = (wheat*3)*7;
          var dia = "sábado";
          break;
        case "sun":
          rice = ((wheat*3) * 7)*0.9;
          var dia = "domingo";
          break;
      }
      resultRice.innerHTML = `Su ingreso de arroz en el día ${dia} es de ${rice} libras`
}


