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
    case 10:
        let candidato1 = 0;
        let candidato2 = 0;
        let candidato3 = 0;
        let voto;
        let contador10;

        for (contador10 = 1; contador10 <= 50000; contador10++) {
            function getRandom10(max) {
                return Math.floor(Math.random() * max);
            }
            voto = Number(getRandom10(3) + 1);
            if (voto == 1) {
                candidato1++;
            } else if (voto == 2) {
                candidato2++;
            } else {
                candidato3++;

            }
        }
        alert("Candidato 1 :" + candidato1 + " Votos.");
        alert("Candidato 2 :" + candidato2 + " Votos.");
        alert("Candidato 3 :" + candidato3 + " Votos.");
        //Zona de empate
        if (candidato1 == candidato2 && candidato1 == candidato3 && candidato2 == candidato3) {
            alert("¡Los tres candidatos tuvieron un empate!")
        } else if (candidato1 == candidato2 && candidato1 > candidato3) {
            alert("¡Los candidatos 1 y 2 quedaron empatados!");
        } else if (candidato1 == candidato3 && candidato1 > candidato3) {
            alert("¡Los candidatos 1 y 3 quedaron empatados!");
        } else if (candidato2 == candidato3 && candidato2 > candidato1) {
            alert("¡Los candidatos 2 y 3 quedaron empatados!");
        } else if (candidato1 > candidato2) {
            if (candidato1 > candidato3) {
                alert("¡El candidato 1 es el ganador!");
            } else {
                alert("¡El candidato 3 es el ganador!");
            }
        } else if (candidato2 > candidato3) {
            alert("¡El candidato 2 es el ganador!");
        } else {
            alert("¡El candidato 3 es el ganador!");
        }
        break;
    case 11:
        function exercise() {
            let numeros11 = parseInt(prompt("Ingrese un número"));
            let primosArray = [2];
            let primos = true;
            let primosAdd = 0;
            let suma = 0;
            let promedio = 0;
            let productoria = 0;

            for (let i = 1, y = 3; (primosArray.length) < numeros11; i++, y = y + 2) {
                primos = true;
                let limit = Math.floor(Math.sqrt(y));

                for (let x = 2; x <= limit; x++) {
                    if (y % x == 0) {
                        primos = false;

                        break;
                    }
                }

                primosAdd = y;

                if (primos) {
                    primosArray.push(primosAdd);
                }

            }

            suma = primosArray.reduce((a, b) => a + b, 0);
            productoria = (primosArray.reduce((a, b) => a * b, 1)).toFixed(4);
            promedio = suma / numeros11;

            alert("Numeros primos : " + primosArray + ".");
            alert("La suma de todos los numeros primos son: " + suma);
            alert("El promedio de los numeros primos es: " + promedio);
            alert("La productoria de los numeros primos es: " + productoria);
        }

        exercise();
        break;
        case 12:
            let numeros12 = prompt("Ingrese un número");
            let contador12 = parseInt(numeros12.length);
            let separador = [];
            alert("¡Guardado!");
            function calculo12() {
                let suma12 = 0;
                let promedio12 = 0;
                let productoria12 = 0;
    
                numeros12.split('').forEach(numeros12 => suma12 += parseInt(numeros12));
                promedio12 = suma12 / contador12;
                productoria12 = numeros12.toString().split('').reduce(function (a, b) { return a * parseInt(b) }, 1);
                separador.push(numeros12.toString().split('').reduce);
                console.log(separador);
    
                alert("El numero tiene: " + contador12 + " digitos.");
                alert("La suma de todos los digitos es: " + suma12);
                alert("El promedio de todos los digitos es: " + promedio12);
                alert("La productoria de todos los digitos es: " + productoria12);
            }
            function impares12() {
                let numArray12 = [];
                numArray12.push(contador12);
                console.log(numArray12);
                const contadorImpar12 = numArray12.filter(x12 => (x12 % 2) != 0).length;
                const contadorpar12 = numArray12.filter(x12 => x12 % 2 == 0).length;
    
                alert("Hay " + contadorImpar12 + " numero impares.");
                alert("Hay " + contadorpar12 + " numero pares.");
            }
    
    
            calculo12();
            impares12();
            break;
            case 13:
                let numeros13 = parseInt(prompt("Ingrese el numero limitante para la serie Fibonacci"));
                alert("¡Guardado!");
                let numArray = [0];
        
                function calculo13() {
                    let contador13 = 1;
                    let anterior13 = 0;
                    let temp;
                    while (true) {
                        numArray.push(contador13);
                        temp = contador13;
                        contador13 += anterior13;
                        anterior13 = temp;
        
                        if (contador13 >= numeros13) {
                            break;
                        }
                    }
                    alert("La serie de Fibonacci es: (" + numArray + ").");
                }
        
                function impares13() {
                    let contadorImpar13 = 0;
                    let contadorpar13 = 0;
                    let contadorCero13 = 0;
                    contadorImpar13 = numArray.filter(x13 => (x13 % 2) != 0).length;
                    contadorpar13 = numArray.filter(x13 => x13 % 2 == 0).length;
                    contadorCero13 = numArray.filter(x13 => x13 == 0).length;
        
                    alert("Hay " + contadorImpar13 + " numero impares.");
                    alert("Hay " + contadorpar13 + " numero pares.");
                    alert("Hay " + contadorCero13 + " ceros.");
                }
        
                calculo13();
                impares13();
                break;
                 
    case 14:
        let valor1 = Number(prompt("Ingrese el valor #1"));
        let valor2 = Number(prompt("Ingrese el valor #2"));
        let contador14;
        let max;
        if (valor1 > 0 && valor2 > 0) {
            max = 1;
            contador14 = 1;
            while (contador14 <= valor1) {
                if (valor1 % contador14 == 0 && valor2 % contador14 == 0) {
                    if (contador14 > max) {
                        max = contador14;
                    }
                }
                contador14++;
            }
            alert("El maximo comun divisor es: " + max);
        } else {
            alert("¡Debes ingresar un valor mayor a cero!");
        }

        break;
    default:
        alert('¡Ingrese el numero en letras!');
}