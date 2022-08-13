import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = (e) => {
    setLinea1(e.target.value);
  };
  const onChangeLinea2 = (e) => {
    setLinea2(e.target.value);
  };
  const onChangeImagen = (e) => {
    setImagen(e.target.value);
  };
  const onClickExportar = (e) => {
    alert("Exportar");
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };
  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" />
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" />
      <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"../build/img/" + imagen + ".jpg"} />
      </div>
    </div>
  );
}

export default App;
