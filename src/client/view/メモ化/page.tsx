import React, { useCallback, useEffect, useState, memo, useMemo } from "react"
import InputField from "./_components/inputField"
import Textarea from "./_components/textareaField"

const FormPage = () => {
    console.log('FormPageが再レンダリングされました')

    const [value1, setValue1] = useState<string>("初期値1")
    const [value2, setValue2] = useState<string>("初期値2")

    const inputOnChangeHandler = useCallback((
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValue1(e.target.value)
    },[value1])

    const textareaOnChangeHandler = useCallback((
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setValue2(e.target.value)
    },[value2])

    const heavyComputeFun = (arg1:string, arg2: string) => {
        let i = 0;
        while(i < 10000) i++;

        return arg1 + arg2
    }

    const taggedValue = useMemo(() => {
        console.log('タグvalue1が再計算されました')

        const result = heavyComputeFun(value1, "#tag")

        return result
    }, [value1])

    useEffect(() => {
        console.log(value1)
    }, [value1])

    useEffect(() => {
        console.log(value2)
    }, [value2])

    return (
        <div>
            <form>
                <div>
                    <hr />
                    <p>inputフィールド</p>
                    <InputField onChange={inputOnChangeHandler} />
                </div>

                <div>
                    <hr />
                    <p>textareaフィールド</p>
                    <Textarea onChange={textareaOnChangeHandler} />
                </div>

                <div>
                    <p>タグvalue1</p>
                    <p>value1が更新されたら、以下も更新される</p>
                    <p>{taggedValue}</p>
                </div>

                <ShowText />

            </form>
        </div>
    )
}

const ShowText = memo(({
    value
}: { 
    value?: string 
}) => {
    console.log('ShowTextが再レンダリングされました')

    return (
        <div>
            <hr />
            <p>親コンポーネントから渡されたテキストを表示するだけ</p>
            <div>{ value }</div>
        </div>
    )
})

export default FormPage
