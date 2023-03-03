import Select from 'react-select'
import './App.css'


function App() {

  const Loterias = [
    {id: 1, label:'xy'},
    {id: 2, label:'yz'},
    {id: 3, label:'zx'},
    {id: 4, label:'ab'},
  ]

  const handleOnChange = (selectedOption) => {
    console.log("handleChange", selectedOption)
  }
  return(
    <>
     <h1>Loterias</h1>
     <Select options={Loterias} onChange={handleOnChange}/>

     <input
                type="number"
                placeholder='Numero'/>

     <input
                type="number"
                placeholder='Precio'/>

    <button>Add</button>
    <button>Print</button>
    </>
   
  )
}

export default App
