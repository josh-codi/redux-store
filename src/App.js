import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{height: '50px'}}/>
      <Routes>
        <Route path='/' exact element={<ProductListing />} />
        <Route path='/product/:productId' exact element={<ProductDetail />} />
        
        <Route path='*' element={<div style={{
          width: '100%', height: '100vh',
          display: 'flex', justifyContent: 'center',
          alignItems: 'center', flexDirection: 'column'
        }}>
          <h1>404 Not Found !</h1>
          <Link to={'/'}>
            <button style={{
              padding: '0.7rem', 
              borderRadius: '7px', 
              background:'transparent', 
              border: '2px solid black'}}>
                Go Home
            </button>
          </Link>
        </div>} />
      </Routes>
    </div>
  );
}

export default App;
