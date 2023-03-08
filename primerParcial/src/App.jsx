import Select from 'react-select'
import './App.css'
import { useState } from 'react'


function App() {
  
  const [lista, setLista] = useState([]);

  const [nombreC, setNombreC] = useState('');
  const [numero, setNumero] = useState('');
  const [precio, setPrecio] = useState('');
  const [mostrarLista, setMostrarLista] = useState(false);

  const Loterias = [
    {id: 1, label:'xy'},
    {id: 2, label:'yz'},
    {id: 3, label:'zx'},
    {id: 4, label:'ab'},
  ]

  const handleAddClick = () => {
    const nuevoItem = {
      nombreC: nombreC,
      numero: numero,
      precio: precio,
    };
    setLista([...lista, nuevoItem]);
    setNombreC('');
    setNumero('');
    setPrecio('');
  }

  const handlePrint = () => {
    setMostrarLista(true);
  }

  const handleOnChange = (selectedOption) => {

    setNombreC(selectedOption.label)
    console.log("Valor seleccionado: ", nombreC)

  }

  return(
    <>
     <h1>Loterias</h1>
     <Select options={Loterias} onChange={handleOnChange} />

     <input
                type="number"
                placeholder='Numero'
                value={numero}
                onChange={(event) => setNumero(event.target.value)}/>

     <input
                type="number"
                placeholder='Precio'
                value={precio}
                onChange={(event) => setPrecio(event.target.value)}
                />

    <button onClick={handleAddClick}>Add</button>
    <button onClick={handlePrint}>Print</button>

    <span>{nombreC}</span>

    {mostrarLista && (
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item.nombreC} : {item.numero} : {item.precio}
          </li>
        ))}
      </ul>
    )}
    
    </>
   
  )
}

export default App
