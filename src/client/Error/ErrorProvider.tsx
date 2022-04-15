import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import ErrorContext from './ErrorContext'

const ErrorProvider: React.FC = ({ children}) => {
  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const setContextError = (
    ErrorMessage: string,
    Error?: Error
  ) => {
    setErrorMessage(ErrorMessage)
    setError(Error)
    setHasError(true)
  }

  const setCotextErrorDone = () => {
    setErrorMessage(null)
    setError(null)
    setHasError(false)
  }

  const errorValue = useMemo(
    () => ({
      hasError,
      errorMessage,
      error,
      setContextError,
      setCotextErrorDone
    }),
    [hasError, errorMessage, error]
  )

  return (
    <ErrorContext.Provider value={errorValue}>
      { children }
    </ErrorContext.Provider>
  )
}

ErrorProvider.defaultProps = {
  children: {}
}

ErrorProvider.propTypes = {
  children: PropTypes.node
}

export default ErrorProvider
