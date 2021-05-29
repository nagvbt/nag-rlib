import React from 'react'

import { ExampleComponent1, ExampleComponent2, Button } from 'nag-rlib'
import 'nag-rlib/dist/index.cjs.css';

const App = () => {
  return (
    <div>
      <ExampleComponent1 text='Create React Library Example 😄' />
      <ExampleComponent2 text='Text From example' />
      {/* <Button>{'Hello'}</Button> */}
    </div>
  )
}

export default App
