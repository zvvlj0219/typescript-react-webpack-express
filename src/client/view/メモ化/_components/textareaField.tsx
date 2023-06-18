import React, { memo } from "react"

const Textarea = memo(({
    onChange 
}:{ 
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void 
}) => {
    console.log('Textareaが再レンダリングされました')

    return (
        <div>
            <textarea onChange={onChange}></textarea>
        </div>
    )
})

export default Textarea
