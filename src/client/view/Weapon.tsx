import React, {
    useContext,
    createContext,
    useState,
    useEffect,
    useReducer,
    useMemo,
    useCallback,
    Children
} from 'react'

// iamge
import sword from '../assets/Diamond_Sword.png'
import axe from '../assets/turuhashi.png'
import arrow from '../assets/yumi.jpg'

type State = {
    src: string | null
}

const ActionType = {
    UPDATE_EQUIPMENT: 'UPDATE_EQUIPMENT',
    REMOVE_WEAPON: 'REMOVE_WEAPON'
} as const

type Action = {
    type: typeof ActionType[keyof typeof ActionType]
    payload: string | null
}

const weaponReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.UPDATE_EQUIPMENT:
            return {
                src: action.payload
            }
            break

        case ActionType.REMOVE_WEAPON:
            return {
                src: null
            }
            break

        default:
            return state
    }
}

const initialStateFactory = (initialState?: State): State => {
    return {
        src: null,
        ...initialState
    }
}

const WeaponContext = createContext(
    {} as {
        state: State
        updateWeapon: (src: string) => void
        removeWeapon: () => void
    }
)

const useWeapon = () => {
    return useContext(WeaponContext)
}

const WeaponList = () => {
    const { updateWeapon } = useWeapon()
    return (
        <ul style={{ display: 'flex' }}>
            <li
                className="weapon"
                style={{ width: '200px', margin: '30px' }}
                onClick={() => updateWeapon(sword)}
            >
                <h3>ケン</h3>
                <img src={sword} alt="" />
            </li>
            <li
                className="weapon"
                style={{ width: '200px', margin: '30px' }}
                onClick={() => updateWeapon(arrow)}
            >
                <h3>弓</h3>
                <img src={arrow} alt="" />
            </li>
            <li
                className="weapon"
                style={{ width: '200px', margin: '30px' }}
                onClick={() => updateWeapon(axe)}
            >
                <h3>つるはし</h3>
                <img src={axe} alt="" />
            </li>
        </ul>
    )
}

const EquippedWeapon = () => {
    const { state, removeWeapon } = useWeapon()
    return (
        <div>
            <p>装備中の武器</p>
            {state.src ? (
                <>
                    <img
                        src={state.src}
                        alt=""
                        style={{ width: '250px', height: '250px' }}
                    />
                    <button onClick={() => removeWeapon()}>武器を外す</button>
                </>
            ) : (
                <div
                    style={{
                        width: '250px',
                        height: '250px',
                        border: '1px solid black'
                    }}
                >
                    今は何も装備していません
                </div>
            )}
        </div>
    )
}

const EditWeapon = () => {
    return (
        <div>
            <h1>ガンスミス</h1>
            <h2>武器を選んでください</h2>
            <hr />
            <EquippedWeapon />
            <h2>武器リスト</h2>
            <WeaponList />
        </div>
    )
}

const WeaponContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(weaponReducer, initialStateFactory())

    const updateWeapon = (src: string) => {
        dispatch({
            type: ActionType.UPDATE_EQUIPMENT,
            payload: src
        })
    }

    const removeWeapon = () => {
        dispatch({
            type: ActionType.REMOVE_WEAPON,
            payload: null
        })
    }

    const value = useMemo(
        () => ({
            state,
            updateWeapon,
            removeWeapon
        }),
        [state, updateWeapon, removeWeapon]
    )

    return (
        <WeaponContext.Provider value={value}>
            {children}
        </WeaponContext.Provider>
    )
}

const Weapon = () => {
    return (
        <div>
            <WeaponContextProvider>
                <EditWeapon />
            </WeaponContextProvider>
        </div>
    )
}

export default Weapon
