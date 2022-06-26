import { useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import useError from '../Error/useError'

// baseURL
const API = axios.create({
    baseURL:
        process.env.NODE_ENV === 'production'
            ? 'https://ts-react-heroku.herokuapp.com/api'
            : 'http://localhost:5000/api'
})

type Message = {
    message: string
}

const ErrorHandle = () => {
    const [text, setText] = useState<string>('')
    const [validError, setValidError] = useState<boolean>(false)
    const [serverError, setServerError] = useState<Message>(null)
    const { customErrorThrow } = useError()

    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setText(val)
        textValidation(val)
    }

    // console.log(a)

    const textValidation = (str: string) => {
        if (!str) {
            setValidError(false)
            return
        }
        const ratz = /[a-z]/
        const rAtZ = /[A-Z]/
        const r0t9 = /[0-9]/
        if (ratz.test(str) && !rAtZ.test(str) && !r0t9.test(str)) {
            setValidError(false)
        } else {
            setValidError(true)
        }
    }

    const onClick = async () => {
        const options: AxiosRequestConfig = {
            url: '/eh',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: {
                text
            }
        }

        try {
            await API(options)
            setText('')
            setServerError(null)
        } catch (error: unknown) {
            const res = customErrorThrow(error)
            setServerError(res)
        }
    }

    return (
        <div>
            <div>
                <h3>error handle</h3>
                <p>
                    ＊小文字のアルファベット以外を入れるとフロント側でバリエーションエラーをスローする
                </p>
                <p>
                    ＊許可された文字が少なくとも１つ含まれていないとサーバーにリクエストしてもエラーを返す
                </p>
                <p>@許可するアルファベットは、r,e,a,c,t の５つ</p>
            </div>
            <form>
                <input
                    type="text"
                    style={{
                        padding: '3px 0'
                    }}
                    value={text}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleText(event)
                    }
                />
                <button type="button" onClick={onClick}>
                    リクエスト
                </button>
            </form>
            <div
                style={
                    validError
                        ? {
                              background: 'red'
                          }
                        : {
                              background: 'none'
                          }
                }
            >
                {validError
                    ? '**ERROR** 小文字のアルファベット以外が入力されました'
                    : ''}
            </div>
            <div>
                {serverError && (
                    <h2 style={{ color: 'red' }}>{serverError.message}</h2>
                )}
            </div>
        </div>
    )
}

export default ErrorHandle
