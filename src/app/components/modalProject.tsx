import { useState } from "react"

interface modalProjectI{
  isOpen: boolean
}   

export default function modalProject({isOpen }: modalProjectI) {
  return (
    <div>
      {isOpen && (
      <div>Modal</div>
    
    )
      }
    </div>
  )
}
