import './App.css';
import Kiskep from './galeria_komponensek/Kiskep';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <main className='appMain'>
        <div className='fokep'>
          <h3>Kiskutyák</h3>
          <Kiskep></Kiskep>
          <p>leiras</p>
        </div>
        <div className='galeria'>
          <Kiskep></Kiskep>
          <Kiskep></Kiskep>
          <Kiskep></Kiskep>
          <Kiskep></Kiskep>
          <Kiskep></Kiskep>
        </div>
      </main>
      <footer>
        <p>NadVik</p>
      </footer>
    </div>
  );
}

export default App;
