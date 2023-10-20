import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    return () => {
      fetch("https://vuelos-backend.onrender.com/vuelos")
        .then((response) => response.json())
        .then((resp) => {
          setData(resp);
        });
    };
  }, []);
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };


  const r = data.filter(temp => temp.destino === filter)

  console.log("vuelos disponibles",r);


  return (
    <div className="App">
      <label htmlFor="filter">Filter: </label>
      <select name="filter" value={filter} onChange={handleChangeFilter}>
        <option value="">Selecciona un destino</option>
        <option value="Medellín">Medellín</option>
        <option value="Cartagena">Cartagena</option>
        <option value="Cúcuta">Cúcuta</option>
        <option value="Pereira">Pereira</option>
        <option value="Villavicencio">Villavicencio</option>
        <option value="Barranquilla">Barranquilla</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Cali">Cali</option>
        <option value="Manizales">Manizales</option>
        <option value="Santa Marta">Santa Marta</option>
      </select>
      
      <div>
       <table>
       <tr>
            <th>Origen</th>
            <th>Destino</th>
        </tr>
        {
          r.map((result) =>(
            <tr key={result.id}>
              <th>{result.origen}</th>
              <th>{result.destino}</th>
            </tr>
          ))
        }
       </table>
      </div>



    </div>
  );
}

export default App;
