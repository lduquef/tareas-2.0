import React , {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../styles-sheets/ListaDeTareas.css';
function ListaDeTareas() {

	const [tareas,setTareas] = useState([]);
	const agregarTarea = tarea => {
		// tarea es un objeto , por ende se puede acceder al atributo texto
		// trim() permite eliminar los espacios al inicio y al final del texto
		if (tarea.texto.trim()) {
			tarea.texto=tarea.texto.trim();
			const tareasActualizadas = [tarea,...tareas];
			setTareas(tareasActualizadas)
		}
	}
	const eliminarTarea = id => {
		const tareasActualizadas = tareas.filter(tarea=>tarea.id !== id );
		setTareas(tareasActualizadas);
	}

	const completarTarea = id => {
		const tareasActualizadas= tareas.map(tarea =>{
			if (tarea.id === id) {
				tarea.completada = !tarea.completada
			} 
			return (tarea);
			});
			setTareas(tareasActualizadas)
		};
	return(
		<>
			<TareaFormulario onSubmit = {agregarTarea}/>
			<div className='tareas-lista-contenedor'>
				{
					//  se recorre todos los elementos tarea  y se definen las 
					// propiedas o props  del componente  que será dibujado
					tareas.map( (tarea) => 
					<Tarea
						key={tarea.id}
						id={tarea.id}
						texto={tarea.texto}
						completada={tarea.completada}
						eliminarTarea = {eliminarTarea}
						completarTarea = {completarTarea}
						// eliminarTarea que se define con una función que modifica el usestate
						// mediante setTarea pasa al hilo de ejecución del use...
					/>
					)
				}
			</div>
		</>
		)
}
export default ListaDeTareas