const actividad = Number(prompt("Escoja unas de las actvidades del 1 al 15"));

switch (actividad) {
    case 1:
        let autos = prompt("ingrese la cantida de autos");
        alert("Guardado");
        let amarillo = 0;
        let rosa = 0;
        let roja = 0;
        let verde = 0;
        let azul = 0;
        let contador1 = 1;
        function calcula1() {
            while (autos > "0") {
                const placas = prompt("Ingresa el ultimo digito de la placa. #"+contador1);
                alert("siguiente")
                if (placas == 1 || placas == 2) {
                    amarillo++;
                } else if (placas == 3 || placas == 4) {
                    rosa++;

                } else if (placas == 5 || placas == 6) {
                    roja++;

                } else if (placas == 7 || placas == 8) {
                    verde++;

                } else if (placas == 9 || placas == 0) {
                    azul++;

                } else {
                    alert("Ingrese un dijito correcto")
                    autos++;
                }
                contador1++;
                autos--;
            }
        }
        calcula1();
        alert("La cantidad de autos amarillos son: " + amarillo);
        alert("La cantidad de autos rosas son: " + roja);
        alert("La cantidad de autos rojos son: " + roja);
        alert("La cantidad de autos verdes son: " + verde);
        alert("La cantidad de autos azules son: " + azul);
        break;
    default:

        alert('Ingrese el numero en letras');
}