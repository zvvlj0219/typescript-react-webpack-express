import { createContext } from 'react'

type Context = {
    hasError: boolean
    errorMessage: string | null
    error: Error | null
    setContextError: (errorMessage: string, error?: Error) => void
    setCotextErrorDone: () => void
}

const ErrorContext = createContext<Context>({
    hasError: false,
    errorMessage: null,
    error: null,
    setContextError: () => ({}),
    setCotextErrorDone: () => ({})
})

export default ErrorContext
