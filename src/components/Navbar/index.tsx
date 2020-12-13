import React, { useState } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import * as Styled from './styles'

export interface Props {
  options: string[]
  selectionColor: string
  style?: StyleProp<ViewStyle>

  onChange(tabIndex: number): void
}

const Navbar: React.FC<Props> = ({ options, selectionColor, style, onChange }) => {
  const [selectedID, setSelectedID] = useState(0)

  return (
    <Styled.Container style={style}>
      {options.map((option, key) => (
        <Styled.Button
          key={key}
          onPress={() => {
            if (key !== selectedID) {
              setSelectedID(key)
              onChange(key)
            }
          }}
        >
          <Styled.ButtonText
            selected={key === selectedID}
          >
            {option}
          </Styled.ButtonText>
          <Styled.Border
            selected={key === selectedID}
            selectionColor={selectionColor}
          />
        </Styled.Button>
      ))}
    </Styled.Container>
  )
}

export default Navbar
