import { useState } from "react";
import { CharacterSides } from "../types/CharacterSides";

export function useCharacter(){
  const [pos, setPos] = useState({ x: 3, y: 5 })
  const [side, setSide] = useState<CharacterSides>('down')

  const moveToRight = ()=>{
    setPos(pos => ({
      x: pos.x + 1,
      y: pos.y
    }))
    setSide('right')
  }

  const moveToLeft = () =>{
    setPos(pos => ({
      x: pos.x -1,
      y: pos.y
    }))
    setSide('left')
  }

  const moveToUp = () =>{
    setPos(pos =>({
      x: pos.x,
      y: pos.y - 1
    }))
    setSide('up')
  }

  const moveToDown = () =>{
    setPos(pos =>({
      x: pos.x,
      y: pos.y + 1
    }))
    setSide('down')
  }

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveToRight,
    moveToLeft,
    moveToUp,
    moveToDown
  }
}