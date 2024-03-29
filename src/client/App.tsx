import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HelloWorld from './view/HelloWorld'
import Hooks from './view/Hooks'
import NoPropsDrilling from './view/NoPropsDrilling'
import ErrorHandle from './view/ErrorHandle'
import Weapon from './view/Weapon'
import { Load } from './view/useLoading'
import FormPage from './view/メモ化/page'
import MuiSystem from './view/mui-system/page'

const App: React.VFC = () => (
    <div>
        <HelloWorld />
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            <Link to="/hooks" style={{ padding: '20px' }}>
                hooks
            </Link>
            <Link to="/nopropsdrilling" style={{ padding: '20px' }}>
                no props
            </Link>
            <Link to="/eh" style={{ padding: '20px' }}>
                error handle
            </Link>
            <Link to="/useContext_customHook" style={{ padding: '20px' }}>
                gunsmith
            </Link>
            <Link to="/useLoading" style={{ padding: '20px' }}>
                useLoading
            </Link>
            <Link to="/memo" style={{ padding: '20px' }}>
                メモ化
            </Link>
            <Link to="/mui-system" style={{ padding: '20px' }}>
                material-ui
            </Link>
            <Link to="/" style={{ padding: '20px' }}>
                home
            </Link>
        </div>
        <hr />
        <Routes>
            <Route path="/" element={<h2>select component</h2>} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/nopropsdrilling" element={<NoPropsDrilling />} />
            <Route path="/eh" element={<ErrorHandle />} />
            <Route path="/useContext_customHook" element={<Weapon />} />
            <Route path="/useLoading" element={<Load />} />
            <Route path="/memo" element={<FormPage />} />
            <Route path="/mui-system" element={<MuiSystem />} />
        </Routes>
    </div>
)

export default App
