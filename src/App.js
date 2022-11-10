import React from "react";

import { Header } from "./componentes/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import 'boxicons';
import { DataProvider } from "./contex/Dataprovider";
function App() {
  return (
    <DataProvider>
    <div className="App">
      
      <Router>
        <Header />
        <Paginas/>

      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
