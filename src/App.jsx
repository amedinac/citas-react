import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className="mx-auto container mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form 
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes 
          pacientes={pacientes}
        />
      </div>
    </div>
  )
}

export default App