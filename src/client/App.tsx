import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import HelloWorld from './view/HelloWorld'
import Hooks from './view/Hooks'

const App: React.VFC = () => (
    <div>
      <HelloWorld />
      <hr />
      <Hooks />
    </div>
  )

export default App
