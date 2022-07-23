import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/navbar'
import Registry from './components/userRegistry'
function App() {
  return (
    <div className="App">
      <header>
      <NavigationBar/>
      </header>
      <body>
      <Registry/>
      </body>
    </div>
  );
}

export default App;
