import { Routes, Route, Link } from 'react-router-dom'
import HelloWorld from './view/HelloWorld'
import Hooks from './view/Hooks'
import ErrorHandle from './view/ErrorHandle'
import Weapon from './view/Weapon'

const App: React.VFC = () => (
  <div>
    <HelloWorld />
    <Link to="/hooks" style={{ padding: '20px' }}>
      hooks
    </Link>
    <Link to="/eh" style={{ padding: '20px' }}>
      error handle
    </Link>
    <Link to="/useContext_customHook" style={{ padding: '20px' }}>
      gunsmith
    </Link>
    <Link to="/" style={{ padding: '20px' }}>
      home
    </Link>
    <hr />
    <Routes>
      <Route path="/" element={<h2>select component</h2>} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/eh" element={<ErrorHandle />} />
      <Route path="/useContext_customHook" element={<Weapon />} />
    </Routes>
  </div>
)

export default App
