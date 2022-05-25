import * as C from './styles'
import { CharacterSides } from '../../types/CharacterSides'


type CharacterProps = {
  x: number;
  y: number;
  side: CharacterSides;
}

export function Character({ x, y, side }: CharacterProps){
  const size = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  }

  return(
    <C.Container
      size={size}
      x={x * size}
      y={y * size}
      sidePos={sides[side] ?? 0}
    />
  )
}