import React, { useState } from 'react'
import { Container, Button, Label, Background } from './styles'
import pokeball from '../../assets/images/pokeball-3-bg.png'

interface Props {
  options: string[]
  onSelect(index: number): void
}

const Navbar: React.FC<Props> = ({ options, onSelect }) => {
  const [selectedID, setSelectedID] = useState(0)

  const handleSelection = (index: number) => {
    setSelectedID(index)
    onSelect(index)
  }

  return (
    <Container>
      {options.map((option, id) => (
        <Button
          key={id}
          onPress={() => handleSelection(id)}
        >
          <Label
            selected={id === selectedID}
          >
            {option}
          </Label>
          {(id === selectedID) && <Background source={pokeball} />}
        </Button>
      ))}
    </Container>
  )
}

export default Navbar
