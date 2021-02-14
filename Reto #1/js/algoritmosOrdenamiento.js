/* LLENA LOS ARRAYS CON NUMEROS ALEATORIOS*/ 
	let arrayFamilia = new Array();
	let arrayProfesiones = new Array();
	let arrayDeportes = new Array();

	let ini=0;
	arrayFamilia[ini]=Math.floor((Math.random()*6)+1);
	arrayProfesiones[ini]=Math.floor((Math.random()*6)+1);
	arrayDeportes[ini]=Math.floor((Math.random()*6)+1);

	for (var i = 1; i < 6; i++) {
		arrayFamilia[i] = Math.floor((Math.random()*6)+1);
		for (var j = 0; j < i; j++) {
			if (arrayFamilia[i]==arrayFamilia[j]) {
				i--;
			}
		}
	}

	for (var i = 1; i < 6; i++) {
		arrayProfesiones[i] = Math.floor((Math.random()*6)+1);
		for (var j = 0; j < i; j++) {
			if (arrayProfesiones[i]==arrayProfesiones[j]) {
				i--;
			}
		}
	}

	for (var i = 1; i < 6; i++) {
		arrayDeportes[i] = Math.floor((Math.random()*6)+1);
		for (var j = 0; j < i; j++) {
			if (arrayDeportes[i]==arrayDeportes[j]) {
				i--;
			}
		}
	}

//-------------------------------------------------------------------


function algortimoBurbujaDsc(array) {
	let aux;
	for (let i=1; i<array.length; i++) {
		for (let j = 0; j<(array.length - i); j++) {
			   	if (array[j] < array[j + 1]) {
			            aux = array[j];
			            array[j] = array[j + 1];
			            array[j + 1] = aux;
			        }
		    }
	}
}

function algortimoBurbujaAsc(array) {
	let aux;
	for (let i=1; i<array.length; i++) {
		  	for (let j = 0; j<(array.length - i); j++) {
			      	if (array[j] > array[j + 1]) {
			          	aux = array[j];
			          	array[j] = array[j + 1];
			          	array[j + 1] = aux;
			      	}
		  	}
	}
}

function algortimoSeleccionDsc(array) {
	for(let i = 0; i < array.length -1 ; i++) {
        for(let j = i+1; j < array.length; j++){
            if(array[j] > array[i]) {
               let temp = array[i];
	           array[i] = array[j];
	           array[j] = temp;
            }
         }
     }
}

function algortimoSeleccionAsc(array) {
	for(let i = 0; i < array.length -1 ; i++) {
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[i]) {
               let temp = array[i];
	           array[i] = array[j];
	           array[j] = temp;
            }
         }
     }
}

function algoritmoInserccionDsc(array) {
    let posicionActual;
    for(let i=1;i<array.length;i++){
        posicionActual=array[i];
        let j=0;
        for( j=i-1;j >=0 && array[j]<posicionActual;j--){
            array[j+1]=array[j];
        }
       array[j+1] =posicionActual;
    }
}

function algoritmoInserccionAsc(array) {
    let posicionActual;
    for(let i=1;i<array.length;i++){
        posicionActual=array[i];
        let j=0;
        for( j=i-1;j >=0 && array[j]>posicionActual;j--){
            array[j+1]=array[j];
        }
       array[j+1] =posicionActual;
    }
}

function putImg() {
	let seleccionGrupoImg = document.getElementById('imgSelect').value;

	if (seleccionGrupoImg === "1") {
		for (var i = 0; i < arrayFamilia.length; i++) {
			let imgRute1 = `img/familia/${arrayFamilia[i]}.png`;
			document.getElementById(`img${i}`).src = imgRute1;
		}
	}else if (seleccionGrupoImg === "2") {
		for (var i = 0; i < arrayProfesiones.length; i++) {
			let imgRute2 = `img/profesiones/${arrayProfesiones[i]}.png`;
			document.getElementById(`img${i}`).src = imgRute2;
		}
	}else if (seleccionGrupoImg === "3") {
		for (var i = 0; i < arrayDeportes.length; i++) {
			let imgRute3 = `img/deportes/${arrayDeportes[i]}.png`;
			document.getElementById(`img${i}`).src = imgRute3;
		}
	}
}


function showSelected() {
	/* Captura Valor de la lista despegable de los algoritmos */
	let seleccion = document.getElementById('algortimoSeleccionado').value;
	/* Validar seleccion de la lista desplegable y el radiobutton*/
	if ((seleccion === "1") && (document.getElementById("tipoOrdAlg1").checked)) {
		//Capturamos el valor de la lista desplegable en donde se selecciona el grupo de imagenes
		let imgGroup = document.getElementById('imgSelect').value;
		//Sabiendo que algoritmo ha seleccionado el usuario, ahora ordenamos cada array
		switch(imgGroup){
			case "1":
				algortimoBurbujaDsc(arrayFamilia);

				for (var i = 0; i < arrayFamilia.length; i++) {
					let imgRute1 = `img/familia/${arrayFamilia[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute1;
				}
			break;

			case "2":
				algortimoBurbujaDsc(arrayProfesiones);

				for (var i = 0; i < arrayProfesiones.length; i++) {
					let imgRute2 = `img/profesiones/${arrayProfesiones[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute2;
				}
			break;

			case "3":
				algortimoBurbujaDsc(arrayDeportes);

				for (var i = 0; i < arrayDeportes.length; i++) {
					let imgRute3 = `img/deportes/${arrayDeportes[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute3;
				}
			break;

		}
		
	}else if ((seleccion === "1") && (document.getElementById("tipoOrdAlg2").checked)) {
		//Capturamos el valor de la lista desplegable en donde se selecciona el grupo de imagenes
		let imgGroup = document.getElementById('imgSelect').value;
		//Sabiendo que algoritmo ha seleccionado el usuario, ahora ordenamos cada array
		switch(imgGroup){
			case "1":
				algortimoBurbujaAsc(arrayFamilia);

				for (var i = 0; i < arrayFamilia.length; i++) {
					let imgRute1 = `img/familia/${arrayFamilia[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute1;
				}
			break;

			case "2":
				algortimoBurbujaAsc(arrayProfesiones);

				for (var i = 0; i < arrayProfesiones.length; i++) {
					let imgRute2 = `img/profesiones/${arrayProfesiones[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute2;
				}
			break;

			case "3":
				algortimoBurbujaAsc(arrayDeportes);

				for (var i = 0; i < arrayDeportes.length; i++) {
					let imgRute3 = `img/deportes/${arrayDeportes[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute3;
				}
			break;

		}
	}else if ((seleccion === "2") && (document.getElementById("tipoOrdAlg1").checked)) {
		let imgGroup = document.getElementById('imgSelect').value;
		//Sabiendo que algoritmo ha seleccionado el usuario, ahora ordenamos cada array
		switch(imgGroup){
			case "1":
				algortimoSeleccionDsc(arrayFamilia);

				for (var i = 0; i < arrayFamilia.length; i++) {
					let imgRute1 = `img/familia/${arrayFamilia[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute1;
				}
			break;

			case "2":
				algortimoSeleccionDsc(arrayProfesiones);

				for (var i = 0; i < arrayProfesiones.length; i++) {
					let imgRute2 = `img/profesiones/${arrayProfesiones[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute2;
				}
			break;

			case "3":
				algortimoSeleccionDsc(arrayDeportes);

				for (var i = 0; i < arrayDeportes.length; i++) {
					let imgRute3 = `img/deportes/${arrayDeportes[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute3;
				}
			break;

		}
	}else if ((seleccion === "2") && (document.getElementById("tipoOrdAlg2").checked)) {
		let imgGroup = document.getElementById('imgSelect').value;
		//Sabiendo que algoritmo ha seleccionado el usuario, ahora ordenamos cada array
		switch(imgGroup){
			case "1":
				algortimoSeleccionAsc(arrayFamilia);

				for (var i = 0; i < arrayFamilia.length; i++) {
					let imgRute1 = `img/familia/${arrayFamilia[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute1;
				}
			break;

			case "2":
				algortimoSeleccionAsc(arrayProfesiones);

				for (var i = 0; i < arrayProfesiones.length; i++) {
					let imgRute2 = `img/profesiones/${arrayProfesiones[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute2;
				}
			break;

			case "3":
				algortimoSeleccionAsc(arrayDeportes);

				for (var i = 0; i < arrayDeportes.length; i++) {
					let imgRute3 = `img/deportes/${arrayDeportes[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute3;
				}
			break;

		}
	}else if ((seleccion === "3") && (document.getElementById("tipoOrdAlg1").checked)) {
		let imgGroup = document.getElementById('imgSelect').value;
		//Sabiendo que algoritmo ha seleccionado el usuario, ahora ordenamos cada array
		switch(imgGroup){
			case "1":
				algoritmoInserccionDsc(arrayFamilia);

				for (var i = 0; i < arrayFamilia.length; i++) {
					let imgRute1 = `img/familia/${arrayFamilia[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute1;
				}
			break;

			case "2":
				algoritmoInserccionDsc(arrayProfesiones);

				for (var i = 0; i < arrayProfesiones.length; i++) {
					let imgRute2 = `img/profesiones/${arrayProfesiones[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute2;
				}
			break;

			case "3":
				algoritmoInserccionDsc(arrayDeportes);

				for (var i = 0; i < arrayDeportes.length; i++) {
					let imgRute3 = `img/deportes/${arrayDeportes[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute3;
				}
			break;

		}
	}else if ((seleccion === "3") && (document.getElementById("tipoOrdAlg2").checked)) {
		let imgGroup = document.getElementById('imgSelect').value;
		//Sabiendo que algoritmo ha seleccionado el usuario, ahora ordenamos cada array
		switch(imgGroup){
			case "1":
				algoritmoInserccionAsc(arrayFamilia);

				for (var i = 0; i < arrayFamilia.length; i++) {
					let imgRute1 = `img/familia/${arrayFamilia[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute1;
				}
			break;

			case "2":
				algoritmoInserccionAsc(arrayProfesiones);

				for (var i = 0; i < arrayProfesiones.length; i++) {
					let imgRute2 = `img/profesiones/${arrayProfesiones[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute2;
				}
			break;

			case "3":
				algoritmoInserccionAsc(arrayDeportes);

				for (var i = 0; i < arrayDeportes.length; i++) {
					let imgRute3 = `img/deportes/${arrayDeportes[i]}.png`;
					document.getElementById(`img${i}`).src = imgRute3;
				}
			break;
		}
	}
}