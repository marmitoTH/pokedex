import React from 'react'
import { Bar } from './styles'

export interface Props {
  fillAmount?: number
  barColor?: string
  backgroundColor?: string
}

const GaugeBar: React.FC<Props> = ({
  fillAmount = .5,
  barColor = '#000',
  backgroundColor = '#efefef'
}) => (
  <Bar
    style={{
      backgroundColor
    }}
  >
    <Bar
      style={{
        width: `${fillAmount * 100}%`,
        backgroundColor: barColor
      }}
    />
  </Bar>
)

export default GaugeBar
