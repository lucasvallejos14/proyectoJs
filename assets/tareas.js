const formulario = document.getElementById("tareas")

formulario.addEventListener ("submit", enviar)


const liTareas = []

function enviar ( evento){
    evento.preventDefault();

    const irA = document.getElementById ("irA").value
    
    const llevar = document.getElementById("llevar").value

    const comoIr = document.getElementById("comoIr").value
    
    const importanteQue = document.getElementById ("importanteQue").value
    
    const tarea = {
        ir : irA,

        llevar: llevar,

        comoir: comoIr,

        importante: importanteQue
    }

    liTareas.push(tarea)

    console.log(liTarea)

    form.reset()

    agregarTarea(tarea)

}

const listaDeTareas= document.getElementById("listaDeTareas")

const agregarTarea = (tarea) =>{

    const li = document.createElement('li')
    
    li.innerHTML = `Ir a ${tarea.ir}, tenes que llevar ${tarea.llevar}, vas a ir en ${tarea.comoir} y es importante que ${tarea.importante}`



    listaDeTareas.append(li) 
    
}
