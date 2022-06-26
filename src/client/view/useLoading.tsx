import {
    useContext,
    createContext,
    useState,
    useEffect,
    useReducer,
    useMemo,
    useCallback,
    Children
} from 'react'
import '../scss/loading.scss'


type State = {
    loading: boolean
}

const ActionType = {
    LOAD_START: 'LOAD_START',
    LOAD_FINISH: 'LOAD_FINISH',
} as const

type Action = {
    type: typeof ActionType[keyof typeof ActionType]
    payload: boolean
}

const loadingReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.LOAD_START:
            return {
                loading: true
            }
            break

        case ActionType.LOAD_FINISH:
            return {
                loading: false
            }
            break

        default:
            return state
    }
}

const initialState = (): State => {
    return {
        loading: false
    }
}

const LoadingContext = createContext(
    {} as {
        state: State
        startLoad: () => void
        finishLoad: () => void
    }
)

export const useLoading = () => {
    return useContext(LoadingContext)
}

const LoadingContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(loadingReducer, initialState())

    const startLoad = () => {
        dispatch({
            type: ActionType.LOAD_START,
            payload: true
        })
    }

    const finishLoad = () => {
        dispatch({
            type: ActionType.LOAD_FINISH,
            payload: false
        })
    }

    const value = useMemo(
        () => ({
            state,
            startLoad,
            finishLoad
        }),
        [state, startLoad, finishLoad]
    )

    return (
        <LoadingContext.Provider value={value}>
            { children }
        </LoadingContext.Provider>
    )
}

const LoadingIcon = ({ loading }: State) => {
    return (
        <div id='modal'>
            <div
                id='mask'
                style={
                    loading ? {
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        zIndex: 1
                    } : {
                        display: 'none'
                    }
                }
            >
                <div
                    id='iconWrapper'
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        margin: 'auto',
                        backgroundColor: 'white',
                        zIndex:2,
                        width: '130px',
                        height: '130px',
                        border: '2px solid skyblue',
                        borderRadius: '5%'
                    }}
                >
                    {/* icon core*/}
                    <div className="spinner-box">
                        <div>...loading</div>
                        <div className="circle-border">
                            <div className="circle-core" />
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SampleComponent = () => {
    const { state, startLoad, finishLoad } = useLoading()

    const sampleApi = () => {
        startLoad()
        // api 

        setTimeout(() => {
            finishLoad()
        }, 2000)
    }

    return (
        <div>
            <h2>this is useLoading</h2>
            <h2>クリックして、2秒後に処理を終えます</h2>
            <h3>{`loading state => ${state.loading}`}</h3>
            <button
                onClick={() => sampleApi()}
            >
                サンプル処理スタート
            </button>
            <LoadingIcon loading={state.loading} />
        </div>
    )
}

export const Load = () => {
    return (
        <div>
            <LoadingContextProvider>
                <SampleComponent />
            </LoadingContextProvider>
        </div>
    )
}
