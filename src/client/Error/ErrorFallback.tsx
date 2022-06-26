import React, { useEffect } from 'react'
import { FallbackProps } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'
import useError from './useError'

const ErrorFallback: React.FC<FallbackProps> = ({
    error,
    resetErrorBoundary
}) => {
    const { context } = useError()

    const { hasError, setContextError, setCotextErrorDone } = context

    const navigate = useNavigate()

    const terminateError = () => {
        resetErrorBoundary()
        setCotextErrorDone()
        navigate('/')
    }

    useEffect(() => {
        setContextError(error.message, error)
    }, [setContextError, error])

    if (hasError && process.env.NODE_ENV === 'production') {
        window.location.reload()
    }

    return (
        <div>
            <h2>Error Message</h2>
            <h2>{error.name}</h2>
            <h2>{error.message}</h2>
            <button onClick={terminateError} type="button">
                Try again
            </button>
        </div>
    )
}

export default ErrorFallback
