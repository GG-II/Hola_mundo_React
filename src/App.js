import logo from './logo.svg';
import miImagen from './images/hola.png';
import './App.css';

function App() {
  return (
    <div className="App">
		<h1 style={{ color: 'blue', fontSize: '4rem' }}>¡Hola Mundo en React!</h1>
		
		<img src={miImagen} alt="Descripción de la imagen" className="mi-imagen" />
	</div>

  );
}

export default App;
