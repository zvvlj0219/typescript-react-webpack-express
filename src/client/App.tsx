import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import HelloWorld from './view/HelloWorld'
import youtube from './assets/youtube.png'

const App: React.VFC = () => {
  const [username, setUsername] = useState<string>('')

  console.log('react app')
  const url: string = youtube
  console.log(`${url.slice(0, 30)}...`)

  const fetchUsername = useCallback(async () => {
    const { data }  = await axios.get('/api')
    setUsername(data.result)
  }, [])

  useEffect(() => {
    fetchUsername()
  }, [])

  return (
    <div>
      <HelloWorld />
      <img src={url} alt="" />
      <h2>
        {
          username ?
          `username is ${username}`
          : 'no exist user'
        }
      </h2>
    </div>
  )
}

export default App
