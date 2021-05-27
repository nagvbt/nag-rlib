import React from 'react'

import { ExampleComponent1, ExampleComponent2 } from 'nag-rlib'
import 'nag-rlib/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent1 text='Create React Library Example 😄' />
      <ExampleComponent2 text='Text From example' />
    </div>
  )
}

export default App
