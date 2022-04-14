import { Routes, Route, Link } from 'react-router-dom'
import HelloWorld from './view/HelloWorld'
import Hooks from './view/Hooks'
import ErrorHandle from './view/ErrorHandle'

const App: React.VFC = () => (
  <div>
    <HelloWorld />
    <Link to="/hooks" style={{ padding: '20px' }}>
      hooks
    </Link>
    <Link to="/eh" style={{ padding: '20px' }}>
      error handle
    </Link>
    <Link to="/" style={{ padding: '20px' }}>
      home
    </Link>
    <hr />
    <Routes>
      <Route path="/" element={<h2>select component</h2>} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/eh" element={<ErrorHandle />} />
    </Routes>
  </div>
)

export default App
