import React, {memo} from "react"

const InputField = memo(({
    onChange 
}:{ 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void 
}) => {
    console.log('InputFieldが再レンダリングされました')

    return (
        <div>
            <input type="text" onChange={onChange}  />
        </div>
    )
})

export default InputField
