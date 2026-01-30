import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <main className='appMain'>
        <div className='fokep'>
          <h3>Kiskutyák</h3>
          <div className='kiemeltkepdiv'>
            <img src="public/kepek/fokep.jpg" alt="" />
          </div>
        </div>
        <div className='galeria'>
          <div className='kiskep'><img src="public/kepek/elso.jpg" alt="" /></div>
          <div className='kiskep'><img src="public/kepek/masodik.jpg" alt="" /></div>
          <div className='kiskep'><img src="public/kepek/harmadik.jpg" alt="" /></div>
          <div className='kiskep'><img src="public/kepek/negyedik.jpg" alt="" /></div>
          <div className='kiskep'><img src="public/kepek/otodik.jpg" alt="" /></div>
        </div>
      </main>
      <footer>
        <p>NadVik</p>
      </footer>
    </div>
  );
}

export default App;
