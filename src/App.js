import './App.css';
import Kiskep from './galeria_komponensek/Kiskep';
import { adatLista } from './adatok.js';

function App() {

  function szuloMetodus(index){
    console.log("Erre az elemre kattintottam", index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <main className='appMain'>
        <div className='fokep'>
          <h3>Kiskutyák</h3>
          <Kiskep adat = {{src:"/kepek/elso.jpg", alt: "gizsgugya egy"}} key={0}/>
          <p>leiras</p>
        </div>
        <div className='galeria'>
          {adatLista.map((elem, index) => {
            return (<Kiskep adat={elem} key={index} szuloMetodus={szuloMetodus}/>);
          })}
        </div>
      </main>
      <footer>
        <p>NadVik</p>
      </footer>
    </div>
  );
}

export default App;
