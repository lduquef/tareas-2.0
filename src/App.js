
import './App.css';
import logo from './imagenes/freecodecamp-logo.png'
import './styles-sheets/Tarea.css'
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className= 'aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={logo} 
          className='freecodecamp-logo'
          alt=""/>
      </div>
      <div className='tareas-lista-principal'>
        <h1> Mis Tareas</h1>
        <ListaDeTareas> </ListaDeTareas>
      </div>
    </div>
  );
}

export default App ;
