import { useContext, useState } from 'react'
import { AxiosError,AxiosResponse } from 'axios'
import ErrorContext from './ErrorContext'

type Message = {
  message: string
}

const useError = () => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const context = useContext(ErrorContext)
  const { setContextError } = context

  if (context === undefined) {
    throw new Error(`useError must be used within a ErrorProvider`)
  }

  const customErrorThrow = (error: unknown): Message => {
    if (
      (error as AxiosError<Message>).response &&
      (error as AxiosError<Message>).response.status === 400 
    ) {
      const { data } = (error as AxiosError<Message>).response as AxiosResponse<Message>
      setErrorMessage(data.message)
    } else if (error instanceof Error) {
      setContextError(error.message, error)
      setErrorMessage(error.message)
    }

    return {
      message: errorMessage
    }
  }

  return {
    context,
    customErrorThrow
  }
}

export default useError
