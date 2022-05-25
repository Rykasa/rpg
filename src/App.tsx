import { useEffect, useState } from 'react'
import * as C from './App.styles'
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'

export function App(){
  const char = useCharacter()
  
  useEffect(() =>{
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  const handleKeyDown = (e: KeyboardEvent)=>{
    switch(e.code){
      case 'KeyD':
      case 'ArrowRight':
        char.moveToRight()
      break;
      case 'KeyA':
      case 'ArrowLeft':
        char.moveToLeft()
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveToUp()
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveToDown()
      break;
    }
  }

  return(
    <C.Container>
      <C.Map>
        <Character 
          x={char.x}
          y={char.y}
          side={char.side}
        />
      </C.Map>
    </C.Container>
  )
}