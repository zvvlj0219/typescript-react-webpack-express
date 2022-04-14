import React, { ErrorInfo, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(error: Error) {
    console.log('getDerivedStateFromError', error)
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('componentDidCatch', error, errorInfo)
    return { hasError: true }
  }

  public render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError && process.env.NODE_ENV === 'production') {
      window.location.reload()
    } 
    if (hasError && process.env.NODE_ENV === 'development') {
      return  <h1>エラーが発生しました</h1>
    }
    return children
  }
}

export default ErrorBoundary
