import { useState } from 'react'
import Axios from "axios"

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState("");
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return(
    <div className="App">
      <input placeholder="Ex...Virakvuth" onChange={(e) => setName(e.target.value)}/>
      <button onClick={fetchData}>Predict the Age</button>

      <h1>Predict Age: {predictedAge?.age} </h1>
      <h1> Name: {predictedAge?.name}</h1>
      <h1> Count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App
