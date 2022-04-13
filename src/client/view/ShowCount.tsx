import { useContext } from 'react'
import { CountContext } from './Hooks'

const ShowCount = () => {
  const { state, dispatch } = useContext(CountContext)

  return (
    <div>
      <h2>{`current count is ${state.count}`}</h2>
    </div>
  )
}

export default ShowCount
