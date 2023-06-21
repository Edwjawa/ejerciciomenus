

/* 
Este método utiliza el elemento rescatado desde el Dom (elem) y
el nombre de la clase (className) como parámetros para 'cambiar'
el nombre de clase asignado al elemento. Cuando el elemento no tenga
un nombre de clase asignado, por medio del método .replace() y los 
operadores de busqueda global (/\s+\/g) se le asignará uno y en caso
contrario se le borrar. Dicho remplazo esta regulado por un parámetro
de control (if) basado en el indice (.indexOf) que adquiere dicho
nombre de clase (className) en la lista de nombre de clases que se
asignó en el HTML (v.g. class="menu pointerCursor hide"); si el 
indice es -1 (la clase especificada no existe), se ejecutará
el else dandole el nombre de clase especificado como parámetro
en la funcion en caso contrario el nombre de clase especificado
se remplazara por espacios (''). Por ultimo el elemento será retornado
para poder ser llamado y ejecutado como parametros de la siguiente
funsión.  

*/ 
function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

// function toggleClass1(elem,className){
// 	if (elem.className.indexOf(className) !== -1){
// 		elem.className = elem.className.replace(className,'');
// 	}
// 	else{
// 		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
// 	}
	
// 	return elem;
// }

/* 
En esta función se recoge como parámetro la variable elem
(elemento rescatado del DOM con el que previamente se había
trabajado para cambiar el nombre de clase) para reasignar la propiedad
display con el cuál es mostrado el elemento. El valor block muestra el
elemento como un bloque que genera quiebre de linea antes y despues del
elemento. Para lograrlo guarda el valor del estilo en una canstante e
implementa un parametro de control que reescribe el valor del display
del elemento

*/

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}

// function toggleDisplay1(elem){
// 	const curDisplayStyle = elem.style.display;			
				
// 	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
// 		elem.style.display = 'block';
// 	}
// 	else{
// 		elem.style.display = 'none';
// 	}
// }

/* 

En esta se llama la función creada toggleClass(elem, className)
y se le asignan los parametros de menu e icono obtenidos por el
método queryselector() aplicado sobre la constante el dropdown.
La constante dropdown guarda las respectivas etiquetas del DOM
donde se identifica el destino del evento y sus descendiantes
(.currentTarget)  y de también los nodos padres (.parent.Node)
del parámetro e

*/

function toggleMenuDisplay1(e){
	
	// con el 1
	const dropdown1 = e.currentTarget.parentNode;	
	const menu1 = dropdown1.querySelector('.menu1');
	const icon1 = dropdown1.querySelector('.fa-angle-right1');
	toggleClass(menu1,'hide');
	toggleClass(icon1,'rotate-90');
}

function toggleMenuDisplay(e){
	// sin el 1
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');
	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');
}


/* 
En esta funcion se pasa como parametros para la ejecucion del
toggleClass el nodo padre (.parentNode) desde el cual se envía
el evento (.target), es decir, se identifica el menu que contiene
las opciones, y la clase hide del parametros e.

Se guardan en distintas constantes los elementos obtenidos de las
opciones (id), del texto contenido en la opción (newValue),
del title (titleElem) y el icono (icon).

Luego, el texto contenido (textContent) en el title (titleElem)
es cambiando por texto guardado en la constante newValue. y en el
nodo del titleElem se agrega un nodo hijo (.appendChild()) con el icono.
Con el méetodo .querySelector se obtienen los valores del dropdown
y con el .dispatchevent() se dispara el evento al asignale un
evento nuevo llamado change.
El método .setTimeout() ejecutara la función toggleClass con los
parametros icno y rotate-90 en un tiempo de cero segundos. 

  

*/

function handleOptionSelected1(e){
	toggleClass(e.target.parentNode, 'hide');			
	
	const id = e.target.id;
	
	
	
	
	// con el 1
	// se comentan como prueba, recordar ejecutar sin comentar
	// toggleClass(e.target.parentNode, 'hide');			
	// const id = e.target.id;
	const newValue1 = e.target.textContent + ' ';
	const titleElem1 = document.querySelector('.dropdown1 .title1');
	const icon1 = document.querySelector('.dropdown1 .title1 .fa1');
	titleElem1.textContent = newValue1;
	titleElem1.appendChild(icon1);
	//Activa evento personalizado
	document.querySelector('.dropdown1 .title1').dispatchEvent(new Event('change'));
	//setTimeout se usa para que la transición se muestre correctamente
	// setTimeout(() => toggleClass(icon1,'rotate-90',0));
	setTimeout(() => toggleClass1(icon1,'rotate-90'),0);
}

function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hide');			
	
	// sin el 1
	const id = e.target.id;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown .title');
	
	const icon = document.querySelector('.dropdown .title .fa');
	
	
	titleElem.textContent = newValue;
	
	titleElem.appendChild(icon);
	
	//Activa evento personalizado
	document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
	//setTimeout se usa para que la transición se muestre correctamente
	// setTimeout(() => toggleClass(icon,'rotate-90',0));
	setTimeout(() => toggleClass(icon,'rotate-90'),0);
	
}

/* 

En esta función se rescatará (.getElementById()) y
reescribirá (.innerHTML) el elemento del DOM con el id
result por el texto (.textContent) que se asigó en el nodo
origen del evento (.target)

*/

function handleTitleChange1(e){
	// con el 1
	const result1 = document.getElementById('result1');
	result1.innerHTML = 'The result is: ' + e.target.textContent;
}

function handleTitleChange(e){

	// sin el 1
	const result = document.getElementById('result');
	result.innerHTML = 'The result is: ' + e.target.textContent;
	
}


/* 

En este apartado se obtinen los elementos del DOM que son necesarios
para ejecutar los métodos (.querySelector() y .querySelectorAll()) y se
guardan en constantes dropdownTitle y dropdownOptions.

Luego, la constante dropdownTitle es usada para agregar un evento 
(.addEventListener()) que se ejecuta al hacer click y ejecuta el método
toggleMenuDisplay.

La constante dropdownOptions se usa para agregarle a cada opción
(.forEach) un evento (.addEventListener) que al hacer click ejecutará
la función handleOptionSelected.

Por último, al title rescatado por .querySelector(), se le agregará un
evento de cambio que ejecutará el función handlTitleChange


*/

// sin el 1
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');
//vincula listeners a estos elementos
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);

// con el 1
const dropdownTitle1 = document.querySelector('.dropdown1 .title1');
const dropdownOptions1 = document.querySelectorAll('.dropdown1 .option1');
//vincula listeners a estos elementos
dropdownTitle1.addEventListener('click', toggleMenuDisplay1);
dropdownOptions1.forEach(option1 => option1.addEventListener('click',handleOptionSelected1));
document.querySelector('.dropdown1 .title1').addEventListener('change',handleTitleChange1);
	