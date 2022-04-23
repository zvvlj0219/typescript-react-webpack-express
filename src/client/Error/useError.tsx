import { useContext } from 'react'
import { AxiosError } from 'axios'
import ErrorContext from './ErrorContext'

type Message = {
  message: string
}

const useError = () => {
  const context = useContext(ErrorContext)
  const { setContextError } = context

  if (context === undefined) {
    throw new Error(`useError must be used within a ErrorProvider`)
  }

  const customErrorThrow = (error: unknown): Message => {
    const axiosError = error as AxiosError<Message>

    if (axiosError.response && axiosError.response.status === 400) {
      const { data } = axiosError.response

      return {
        message: data.message
      }
    }

    if (error instanceof Error) {
      setContextError(error.message, error)

      // error log
      console.log(error.name)
      console.log(error.message)

      return {
        message: `${error.name}_${error.message}`
      }
    }

    return {
      message: 'inValid error'
    }
  }

  return {
    context,
    customErrorThrow
  }
}

export default useError
