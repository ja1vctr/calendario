import { useEffect, useState } from 'react'
import moment from 'moment'

export default function Mes({ month, year }: { month: string; year: number }) {
  const [value, setValue] = useState(
    moment().locale('pt').month(month).year(year)
  )
  const [calendario, setCalendario] = useState([])

  useEffect(() => {
    const startDay = value.clone().startOf('month').startOf('week')
    const endDay = value.clone().endOf('month').endOf('week')
  }, [value])

  return (
    <div>
      <p>{month}</p>
    </div>
  )
}
