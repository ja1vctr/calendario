import { useState } from 'react'
import moment from 'moment'

export default function Mes({ month, year }: { month: string; year: number }) {
  const [value, setValue] = useState(
    moment().locale('pt').month(month).year(year)
  )

  return (
    <div>
      <p>{month}</p>
    </div>
  )
}
