import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/navbar'
//import Registry from './components/userRegistry'
//import Login from './components/userlogin';
import Product from './components/productsList';

function App() {
  return (
    <div className="App">
      <header>
      <NavigationBar/>
      </header>
      <div>
      <Product/>
      </div>
    </div>
  );
}
//render(<Product/>);
export default App;
