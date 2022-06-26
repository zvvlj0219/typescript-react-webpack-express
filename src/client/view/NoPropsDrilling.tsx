import {
    useContext,
    createContext,
    useState,
    useEffect,
    useReducer,
    useMemo,
    useCallback,
} from 'react'

const ASD_1 = () => {
    const { id } = useIDContext()
    return (
        <div>
            <p>ASD 1</p>
            <p>{id}</p>
        </div>
    )
}

const ASD_2 = () => {
    const { id } = useIDContext()
    return (
        <div>
            <p>ASD 2</p>
            <p>{id}</p>
        </div>
    )
}

const useIDContext = () => {
    return useContext(IDContext)
}

const Jadge = () => {
    const { id, updateId } = useIDContext()

    return (
        <div>
            <p>Jadge</p>
            <p>{`current id is ${id}`}</p>
            <button onClick={() => updateId('assumedFriend')}>
                assumedFriend
            </button>
            <button onClick={() => updateId('special')}>special</button>
            <button onClick={() => updateId('unknown')}>unknown</button>
            <hr />
            <ASD_1 />
            <hr />
            <ASD_2 />
        </div>
    )
}

const IDContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [id, setId] = useState<ID>('pendding')

    const updateId = (newID: ID) => {
        setId(newID)
    }

    const value = useMemo(
        () => ({
            id,
            updateId
        }),
        [id, updateId]
    )

    return <IDContext.Provider value={value}>{children}</IDContext.Provider>
}

type ID = 'pendding' | 'unknown' | 'assumedFriend' | 'special'

const IDContext = createContext(
    {} as {
        id: ID
        updateId: (newId: ID) => void
    }
)

const NoPropsDrilling = () => {
    return (
        <div>
            <h1>no props driling</h1>
            <IDContextProvider>
                <Jadge />
            </IDContextProvider>
        </div>
    )
}

export default NoPropsDrilling
