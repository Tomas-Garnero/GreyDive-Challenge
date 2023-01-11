import { Route, Routes } from "react-router-dom";
import './App.css';
import GetForm from "./components/GetForm/GetForm";

import ViewForm from "./components/ViewForm/ViewForm";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ViewForm />}/>
        <Route path="/form" element={<GetForm />}/>
        <Route path="*" element={
          <main>
            <p>No se encontro la ruta buscada</p>
          </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
