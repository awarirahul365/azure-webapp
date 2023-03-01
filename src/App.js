import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchTable from './components/filterTable';

function App() {
  return (
    <div 
    className="App" style={{margin:20 }}>
      <div className='Header'>
        <h1>CUSTOMER DIRECTORY</h1>
      </div>
      <div className='fxc-infoBox-text'>
        <div className='top-container'>
          <span>Note:</span>
        </div>
        <div className='bottom-container'>
          <span>In case, while opening the workbook, you get an error "This item could not be restored. Could not find Workbook with id...", please check the customer ID's corresponding tenant, and switch to that tenant in your browser. This will automatically take you to the right workbook page!</span>
        </div>
      </div>
      <div style={{margin:20}}>
        <SearchTable/>
      </div>
      
    </div>
  );
}

export default App;
