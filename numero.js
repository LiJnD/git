const actividad = Number(prompt("Escoja unas de las actvidades del 1 al 15"));

switch (actividad) {
    case 1:
        let autos = prompt("Ingrese la cantida de autos");
        alert("Guardado");
        let amarillo = 0;
        let rosa = 0;
        let roja = 0;
        let verde = 0;
        let azul = 0;
        let contador1 = 1;
        function calculo1() {
            while (autos > "0") {
                const placas = prompt("Ingrese el ultimo digito de la placa. #" + contador1);
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
                    alert("¡Ingrese un dijito correcto!");
                    autos++;
                }
                contador1++;
                autos--;
            }
        }
        calculo1();
        alert("La cantidad de autos amarillos son: " + amarillo + ".");
        alert("La cantidad de autos rosas son: " + rosa + ".");
        alert("La cantidad de autos rojos son: " + roja + ".");
        alert("La cantidad de autos verdes son: " + verde + ".");
        alert("La cantidad de autos azules son: " + azul + ".");
        break;
    case 2:
        const seleccion = prompt("Escoga un animal entre estos tres: \n1-Elefantes \n2-Jirafas \n3-chimpancés");
        alert("¡Guardado!");
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
                alert('¡Ingrese uno de los tres animales, por favor!');
            }

            for (contador2 = 1; contador2 <= total; contador2++) {
                edad = prompt("Ingrese la edad #" + contador2);
                if (edad >= 0 && edad <= 1) {
                    categoria_1++;
                } else if (edad < 3) {
                    categoria_2++;
                } else {
                    categoria_3++;
                }
            }
        } else {
            alert("¡Porfavor ingrese, del 1 al 3!");
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
        alert("¡Guardado!");

        function calculo3() {
            while (contador3 <= trabajadores) {
                horas = prompt("Ingrese el numero de horas trabajadas del trabajador #" + contador3);
                if (horas <= 40) {
                    salario = horas * 20;
                } else {
                    horas_extras = horas - 40;
                    salario = 40 * 20 + (horas_extras * 25);
                }
                alert("El salario del trabajador " + contador3 + " es $" + salario + ".");
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
        alert("¡Guardado!");

        function calculo4() {
            while (contador4 <= cantidadAlumno) {
                sexo = prompt("Ingrese el sexo #" + contador4 + "\n1-Hombre \n2-Mujer");
                edad4 = Number(prompt("Ingrese la edad #" + contador4));
                if (sexo == 1 || sexo == "Hombre" || sexo == "hombre") {
                    edadHombres += edad4;
                    numeroHombres++;
                    promedioHombres = edadHombres / numeroHombres;
                } else if (sexo == 2 || sexo == "Mujer" || sexo == "mujer") {
                    edadMujeres += edad4;
                    numeroMujeres++;
                    promedioMujeres = edadMujeres / numeroMujeres;
                } else {
                    alert("¡Ingrese uno de los dos sexo!");
                }
                contador4++;
            }
            alert("El promedio del grupo de alumnos es: " + (edadMujeres + edadHombres) / cantidadAlumno + " años.");
            alert("El promedio del grupo de hombres es: " + promedioHombres + " años.");
            alert("El promedio del grupo de mujeres es: " + promedioMujeres + " años.");
        }
        calculo4();
        break;
    case 5:
        let total5 = prompt("Ingrese el total de numeros a calcular");
        let contador5 = 1;
        let numeroMenor = 0;
        let numero;
        alert("¡Guardado!");

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
            alert("El numero menor es: " + numeroMenor + ".");
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
            for (contador6 = 1; contador6 <= 5; contador6++) {
                pesoAnteriro = Number(prompt("Ingrese su peso anterior persona #" + contador6));
                suma = 0;
                for (contador62 = 1; contador62 <= 10; contador62++) {
                    peso = Number(prompt("Ingresa el peso #" + contador62));
                    suma += peso;
                }
                if ((suma / 10) == pesoAnteriro) {
                    alert("La persona " + contador6 + " se mantiene en el peso.");
                } else if ((suma / 10) > pesoAnteriro) {
                    alert("La persona " + contador6 + " subio de peso.");
                } else {
                    alert("La persona " + contador6 + " bajo de peso.");

                }
            }
        }
        calculo6();
        break;
    case 7:
        let cantidad;
        let total7 = 0;
        let precio;
        let respuesta7;
        let contador7 = 1;

        function calculo7() {
            do {
                cantidad = Number(prompt("Ingrese la cantidad de productos"));
                precio = Number(prompt("Ingrese el precio de los productos #" + contador7));
                total7 += (cantidad * precio);
                contador7++;
                respuesta7 = confirm("¿Quiere agregar otro producto?");
            } while (respuesta7 == true);
            alert("El total que debera pagar por la compra es de: $" + total7);
        }
        calculo7();
        break;
    case 8:
        let edad8;
        let respuesta8;
        let precio8;
        let descuento;
        let categoria1 = 0;
        let categoria2 = 0;
        let categoria3 = 0;
        let categoria4 = 0;
        let categoria5 = 0;
        let total8 = 0;
        function calculo8() {
            precio8 = Number(prompt("Ingrese el precio del boleto"));
            alert("¡Guardado!");

            do {
                edad8 = Number(prompt("Ingrese la edad"));
                if (edad8 < 5) {
                    alert("¡No se permite niños menores de 5 años!");
                } else if (edad8 <= 14) {
                    descuento = precio8 * .35;
                    categoria1 += descuento;
                } else if (edad8 <= 19) {
                    descuento = precio8 * .25;
                    categoria2 += descuento;
                } else if (edad8 <= 45) {
                    descuento = precio8 * .10;
                    categoria3 += descuento;
                } else if (edad8 <= 65) {
                    descuento = precio8 * .25;
                    categoria4 += descuento;
                } else {
                    descuento = precio8 * .35;
                    categoria5 += descuento;
                }
                alert("Descuento aplicado es: $" + descuento);
                total8 += descuento;
                respuesta8 = confirm("¿Desea continuar?");
            } while (respuesta8 == true);
            alert("El descuento total en la categoria 1 es: $" + categoria1);
            alert("El descuento total en la categoria 2 es: $" + categoria2);
            alert("El descuento total en la categoria 3 es: $" + categoria3);
            alert("El descuento total en la categoria 4 es: $" + categoria4);
            alert("El descuento total en la categoria 5 es: $" + categoria5);
            alert("El total que deja de percibir es: $" + total8);
        }
        calculo8();
        break;
    case 9:
        let ventasArray = [];
        let comisionesArray = [];
        //calculo
        for (let contador9 = 1; contador9 <= 10; contador9++) {
            function getRandom10(max) {
                return Math.floor(Math.random() * max);
            }
            ventasArray.push(Number(getRandom10(300) + 1));

            if (Number(ventasArray[contador9]) < 20) {
                comisionesArray[contador9] = "10%";
                console.log("entro");
            } else if (Number(ventasArray[contador9]) >= 20 && Number(ventasArray[contador9]) < 40) {
                comisionesArray[contador9] = "15%";
                console.log("entro");
            } else if (Number(ventasArray[contador9]) >= 40 && ventasArray[contador9] < 80) {
                comisionesArray[contador9] = "20%";
                console.log("entro");
            } else if (Number(ventasArray[contador9]) >= 80 && Number(ventasArray[contador9]) < 160) {
                comisionesArray[contador9] = "25%";
                console.log("entro");
            } else {
                comisionesArray[contador9] = "30%";
            }
        }
        //muestreo
        for (let contador9 = 1; contador9 < 10; contador9++) {
            alert("El #" + contador9 + " vendedor vendio $" + ventasArray[contador9] + " millones \n su comision es de: $" + comisionesArray[contador9]);
        }
        break;
    default:
        alert('¡Ingrese el numero en letras!');
}