import { useContext, createContext, useState, useEffect,useReducer, useMemo, useCallback, Children } from "react"

type State = {
    count: number
}

const CountContext = createContext({} as {
    state: State,
    increment: () => void,
    decrement: () => void
})

const useCounter = (initialState?: State) => {
    const [state, setState] = useState<State>(
        initialState
        ? initialState 
        : { count: 0}
    )

    const increment = () => {
        if (!state) return
        setState({
            count: state.count + 1
        })
    }

    const decrement = () => {
        if (!state) return
        setState({
            count: state.count - 1
        })    
    }

    return {
        state,
        increment,
        decrement
    } as const
}

const AnotherHooks = () => {
    const { state, increment, decrement } = useCounter({ count: 3 })

    return (
        <>
            <p>ここから孫コンポーネント</p>
            <p>{state.count}</p>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
            <hr />
            <CountArea_1 state={state} />
            <hr />
            <CountArea_2 state={state} />
            <p>ここまで</p>
        </>
    )
}

const CountArea_1 = ({state}: {state: State}) => {
    return (
        <div>
            <p>count area 1</p>
            <p>{state.count}</p>
        </div>
    )
}
const CountArea_2 = ({state}: {state: State}) => {
    return (
        <div>
            <p>count area 2</p>
            <p>{state.count}</p>
        </div>
    )
}

const AppContextProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const { state, increment, decrement } = useCounter()

    const value = useMemo(
        () => ({
            state,
            increment,
            decrement
        }),
        [state]
    )

    return (
        <CountContext.Provider value={value}>
            { children }
        </CountContext.Provider>
    )
}

const Hooks = () => {
    //以下 使用不可
    const context = useCounter()
    const { increment, decrement } = context

    return (
        <div>
            <p>この親コンポーネントからは参照できない</p>
            <p>Provider以下の別のコンポーネントからのみ参照可能</p>
            <button onClick={() => increment()}>
                親からプラス1
            </button>
            <button onClick={() => decrement()}>
                親からマイナス
            </button>
            <AppContextProvider >
                <AnotherHooks />
            </AppContextProvider>
        </div>
    )
} 

export default Hooks
