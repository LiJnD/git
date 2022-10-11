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
        function calculo1() {
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
        calculo1();
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
    case 3:
        let trabajadores = prompt("Ingrese la cantidad de trabajadores");
        let contador3 = 1;
        let horas;
        let horas_extras;
        let salario;

        function calculo3() {
            while (contador3 <= trabajadores) {
                horas = prompt("ingrese el numero de horas trabajadas del trabajador #" + contador3);
                if (horas <= 40) {
                    salario = horas * 20;
                } else {
                    horas_extras = horas - 40;
                    salario = 40 * 20 + (horas_extras * 25);
                }
                alert("El salario del trabajador " + contador3 + " es $" + salario);
                contador3++;
            }
        }
        calculo3();
        break;
    case 4:
        let cantidadAlumno = prompt("Ingrese la cantidad de alumnos");
        let edad4;
        let edadHombres = 0;
        let edadMujeres = 0;
        let sexo;
        let contador4 = 1;
        let numeroHombres = 0;
        let numeroMujeres = 0;
        let promedioHombres = 0;
        let promedioMujeres = 0;
        function calculo4() {
            while (contador4 <= cantidadAlumno) {
                sexo = prompt("Ingrese el sexo #" + contador4 + "\n1-Hombre \n2-Mujer");
                edad4 = Number(prompt("Ingrese la edad #" + contador4));
                if (sexo == 1 || sexo == "Hombre" || sexo == "hombre") {
                    edadHombres = edadHombres + edad4;
                    numeroHombres++;
                    promedioHombres = edadHombres / numeroHombres;
                } else if (sexo == 2 || sexo == "Mujer" || sexo == "mujer") {
                    edadMujeres = edadMujeres + edad4;
                    numeroMujeres++;
                    promedioMujeres = edadMujeres / numeroMujeres;
                } else {
                    alert("Ingrese uno de los dos sexo");
                }
                contador4++;
            }
            alert("El promedio del grupo de alumnos es: " + (edadMujeres + edadHombres) / cantidadAlumno + " años");
            alert("El promedio del grupo de hombres es: " + promedioHombres + " años");
            alert("El promedio del grupo de mujeres es: " + promedioMujeres + " años");
        }
        calculo4();
        break;
    case 5:
        let total5 = prompt("Ingrese el total de numeros a calcular");
        let contador5 = 1;
        let numeroMenor = 0;
        let numero;
        function calculo5() {
            while (contador5 <= total5) {
                numero = prompt("Ingrese un numero #" + contador5);
                if (contador5 == 1) {
                    numeroMenor = numero;
                } else if (numero < numeroMenor) {
                    numeroMenor = numero;
                }
                contador5++;
            }
            alert("El numero menor es: " + numeroMenor);
        }
        calculo5();
        break;
    case 6:
        let contador62 = 1;
        let contador6 = 1;
        let peso;
        let pesoAnteriro;
        let suma;

        function calculo6() {
            for(contador6 = 1; contador6 <= 5 ; contador6++){
                pesoAnteriro = Number(prompt("Ingresa tu peso anterior persona #"+contador6));
                suma = 0;
                for (contador62 = 1; contador62 <= 10; contador62++) {
                   peso = Number(prompt("Ingresa el peso #"+contador62));
                    suma = suma + peso;
                }
                if((suma / 10) == pesoAnteriro){
                    alert("La persona "+contador6+" se mantiene en el peso.");
                }else if((suma / 10) > pesoAnteriro){
                    alert("La persona "+contador6+" subio de peso.");
                }else{
                    alert("La persona "+contador6+" bajo de peso.");
                    
                }  
            }
        }
        calculo6();
        break;
        case 7:

        break;
    default:

        alert('Ingrese el numero en letras');
}