import style from './calendario.module.scss'
import moment, { months } from 'moment'
import { useState } from 'react'
import CardMes from './CardMes'

export default function Calendario() {
  const [currentYear, setYear] = useState(2024)

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  moment.updateLocale('pt', {
    months: [
      'janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
  })
  return (
    <div id="calendar-page">
      <div className="content"></div>
      {month.map((value) => (
        <CardMes key={value} month={value} year={currentYear} />
      ))}
    </div>
  )
}
