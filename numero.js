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
                const placas = prompt("Ingresa el ultimo digito de la placa. #" + contador1);
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
        alert("La cantidad de autos rosas son: " + rosa);
        alert("La cantidad de autos rojos son: " + roja);
        alert("La cantidad de autos verdes son: " + verde);
        alert("La cantidad de autos azules son: " + azul);
        break;
    case 2:
        const seleccion = prompt("Que animal escogera entre estos tres \n1-Elefantes \n2-Jirafas \n3-chimpancés");
        let total = 0;
        let edad;
        let categoria_1 = 0;
        let categoria_2 = 0;
        let categoria_3 = 0;
        let animal;
        let contador2 = 1;

        if (seleccion >= 1 && seleccion <= 3) {
            if (seleccion == 1) {
                animal = "Elefantes";
                total = 20;
            } else if (seleccion == 2) {
                animal = "Jirafas";
                total = 15;
            } else if (seleccion == 3) {
                animal = "Chimpaces";
                total = 40;
            } else {
                alert('Ingrese uno de los tres animales, por favor');
            }
            
            for (contador2 = 1; contador2 <= total; contador2++) {
                edad = prompt("ingresa la edad #" + contador2);
                if (edad >= 0 && edad <= 1) {
                    categoria_1++;
                } else if (edad < 3) {
                    categoria_2++;
                } else {
                    categoria_3++;
                }
            }
        } else {
            alert("porfavor ingrese del 1 al 3.");
        }

        let resultCategoria1 = ((categoria_1 / total) * 100).toFixed(2);
        let resultCategoria2 = ((categoria_2 / total) * 100).toFixed(2);
        let resultCategoria3 = ((categoria_3 / total) * 100).toFixed(2);

        alert("Porcentaje de edades de " + animal + " " + resultCategoria1 + "% de 0 a 1 año.");
        alert("Porcentaje de edades de " + animal + "\n" + resultCategoria2 + "% de mas de un 1 año y de menos de 3 años.");
        alert("Porcentaje de edades de " + animal + "\n" + resultCategoria3 + "% de 3 años en adelante.");

        break;
    default:

        alert('Ingrese el numero en letras');
}