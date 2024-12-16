import { useState } from "react"
import { DateTimeComponent } from "./components/DateTimeComponent"
import { _formatDate, _formatDate_DDMMYY, getPrimerActaulDiaDelMes } from "./utils/DateTimeHelper"

interface ISelectDate { inicio: string, fin: string }

function App() {

  const { actual, inicio } = getPrimerActaulDiaDelMes();

  const [fecha, setFecha] = useState<ISelectDate>({ inicio, fin: actual });

  const onChangeDate = (date: Date | null | undefined, nombre: string) => {
    if (!date) {
      return
    }

    if (date) {
      setFecha({ ...fecha, [nombre]: _formatDate(date, "/") })
    }
  }

  const handleDate = () => {
    console.log(fecha)
  }

  return (
    <div>
      <h1>Hola loco mundo</h1>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', gap: '10px' }}>
        <DateTimeComponent
          onSelectDate={(data) => onChangeDate(data, 'inicio')}
          text={"Inicio"}
          value={fecha.inicio}
        />
        <DateTimeComponent
          onSelectDate={(data) => onChangeDate(data, 'fin')}
          text={"Fin"}
          value={fecha.fin}
        />
        <div>
          <button onClick={() => handleDate()}>Registrar</button>
        </div>
      </div>
    </div>
  )
}

export default App
