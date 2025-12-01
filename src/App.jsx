import React from 'react'
import Section1 from './componet/Section1'
import Overlay from './componet/Overlay'

const users =[
  {
    image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    btn:"Satisfied"

  },
  {
    image:"https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    btn:"Unsatisfied"

  },
  {
    image:"https://images.unsplash.com/photo-1602796390662-2cbb0042cae8?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    btn:"Underbanked"

  },
  {
    image:"https://images.unsplash.com/photo-1667857481534-22fc15c160cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    btn:"satisfied"

  }
]
const App = () => {
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App