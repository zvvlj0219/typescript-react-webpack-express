import React, { Component, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(): State {
    this.setState({ hasError: true })
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError && process.env.NODE_ENV === 'production') {
      window.location.reload()
    }

    if (hasError && process.env.NODE_ENV === ('development' || undefined)) {
      return <h1>!!Error!! Something went wrong. This is fallback UI</h1>
    }

    return children
  }
}

export default ErrorBoundary
