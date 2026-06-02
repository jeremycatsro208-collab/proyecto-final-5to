let estudiante = null;

const formulario =
document.getElementById("studentForm");

formulario.addEventListener("submit", registrarEstudiante);

function registrarEstudiante(e){

    e.preventDefault();

    const nombre =
    document.getElementById("nombre").value;

    const edad =
    Number(document.getElementById("edad").value);

    const grado =
    document.getElementById("grado").value;

    const curso =
    document.getElementById("curso").value;

    const notasTexto =
    document.getElementById("notas").value;

    const notas =
    notasTexto.split(",").map(Number);

    estudiante = {
        nombre,
        edad,
        grado,
        curso,
        notas
    };

    mostrarInformacion();
}

function calcularPromedio(arregloNotas){

    const suma =
    arregloNotas.reduce(
        (total, nota) => total + nota,
        0
    );

    return suma / arregloNotas.length;
}

function verificarAprobacion(promedio){

    return promedio >= 61;
}

function agregarNota(){

    if(!estudiante){
        alert("Primero registre un estudiante.");
        return;
    }

    const nuevaNota =
    Number(prompt("Ingrese la nueva nota"));

    if(isNaN(nuevaNota)){
        return;
    }

    estudiante.notas.push(nuevaNota);

    mostrarInformacion();
}

function eliminarNota(){

    if(!estudiante){
        alert("Primero registre un estudiante.");
        return;
    }

    estudiante.notas.pop();

    mostrarInformacion();
}

function mostrarInformacion(){

    const promedio =
    calcularPromedio(estudiante.notas);

    const aprobado =
    verificarAprobacion(promedio);

    const fecha =
    new Date();

    const fechaActual =
    `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;

    const notasOrdenadas =
    [...estudiante.notas]
    .sort((a,b)=>a-b);

    // Requerimientos del PDF (no se muestran)
    const cursoMayusculas =
    estudiante.curso.toUpperCase();

    const ejemploSubstring =
    "Programacion".substring(0,6);

    const ejemploIndex =
    "Programacion".indexOf("gra");

    const ejemploJoin =
    estudiante.notas.join("-");

    const ejemploSplit =
    "80,90,100".split(",");

    const notaMaxima =
    Math.max(...estudiante.notas);

    const notaMinima =
    Math.min(...estudiante.notas);

    document.getElementById("resultado").innerHTML =

    `
    <h2>📋 Información del Estudiante</h2>

    <div class="info">
        <strong>Nombre:</strong>
        ${estudiante.nombre}
    </div>

    <div class="info">
        <strong>Edad:</strong>
        ${estudiante.edad}
    </div>

    <div class="info">
        <strong>Grado:</strong>
        ${estudiante.grado}
    </div>

    <div class="info">
        <strong>Curso:</strong>
        ${cursoMayusculas}
    </div>

    <div class="info">
        <strong>Notas:</strong>
        ${estudiante.notas}
    </div>

    <div class="info">
        <strong>Notas Ordenadas:</strong>
        ${notasOrdenadas}
    </div>

    <div class="info">
        <strong>Promedio:</strong>
        ${promedio.toFixed(2)}
    </div>

    <div class="info">
        <strong>Estado:</strong>

        <span class="${
            aprobado
            ? "aprobado"
            : "reprobado"
        }">

        ${
            aprobado
            ? "Aprobado"
            : "Reprobado"
        }

        (${aprobado})

        </span>

    </div>

    <div class="info">
        <strong>Fecha Actual:</strong>
        ${fechaActual}
    </div>
    `;
}
