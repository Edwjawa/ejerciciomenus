// obtener fecha, año y mes actuales
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const TagDias = document.querySelector(".dias"),
    fechaActual = document.querySelector(".fecha-actual"),
    prevNextIcon = document.querySelectorAll(".iconos span");

// almacenamos los meses en la matriz
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];


const renderCalendar = () => {
    let primerDiaMes = new Date(currYear, currMonth, 0).getDay(), // obtenemos el primer día del mes. El 0 hace que el primer día de la semana sea lunes
        ultimaFechaMes = new Date(currYear, currMonth + 1, 0).getDate(), // obtenemos la última fecha del mes
        ultimoDiaMes = new Date(currYear, currMonth, ultimaFechaMes).getDay(), // obtenemos el último día del mes
        ultimaFechaMesPasado = new Date(currYear, currMonth, 0).getDate(); // obtenemos la última fecha del mes anterior
    let liTag = "";

    for (let i = primerDiaMes; i > 0; i--) {
        // creamos los li del mes anterior. Para mostrar los últimos días
        liTag += `<li class="inactive">${ultimaFechaMesPasado - i + 1}</li>`;
    }

    for (let i = 1; i <= ultimaFechaMes; i++) {   

        // creamos el li de todos los días del mes actual
        // añadimos la clase como activa al li si el día, mes y año actuales coinciden. Se incluye en el día actual 
        let esHoy =
            i === date.getDate() &&
                currMonth === new Date().getMonth() &&
                currYear === new Date().getFullYear()
                ? "active"
                : "";

        liTag += `<li class="${esHoy}"><a href="javascript:popUp('ventana.html')">${i}</a></li>`;
         
    }

    for (let i = ultimoDiaMes; i < 7; i++) {
        // creamos el li del próximo mes. Se muestran los primeros días del mes
        liTag += `<li class="inactive">${i - ultimoDiaMes + 1}</li>`;
    }
    fechaActual.innerText = `${meses[currMonth]} ${currYear}`; // pasando el mes y el año actuales como texto de fecha actual. Se muestra en la parte superior del calendario
    TagDias.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
    // iconos anterior y siguiente
    icon.addEventListener("click", () => {
        // añadimos evento de clic en ambos íconos
        // si el icono en el que se hizo clic es el icono anterior, disminuimos el mes actual en 1; de lo contrario, se incrementa en 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            // si el mes actual es menor que 0 o mayor que 11
            // creamos una nueva fecha del año y mes actual, para pasarla como valor de fecha
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // actualizamos el año actual con nueva fecha año
            currMonth = date.getMonth(); // actualizamos el mes actual con el nuevo mes de fecha
        } else {
            date = new Date(); // pasar la fecha actual como valor de fecha
        }
        renderCalendar(); // llamamos a la función renderCalendar
    });
});

// función para abrir el popup al hacer clic sobre un día
function popUp(URL) {
    window.open(URL, 'Día', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=300,left=390,top=50');
}