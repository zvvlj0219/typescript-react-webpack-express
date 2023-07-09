import { styled, createTheme, ThemeProvider } from '@mui/system';
import React ,{ ReactNode, useState } from 'react';

/**
 * Popsをスタイリングしたコンポーネントに渡す方法
 * 
 * styled('タグ')<porpsの型>( porps => ({ スタイル }))
 * styled('タグ')<porpsの型>(({ props1, porps2, ...props}) => ({ スタイル }))
 * 
 */


type CountProps = {
    count: number
}

const StyledComponent = styled('div')<CountProps>(({ count }) => ({
    backgroundColor: `rgba(${(255 - count * 10)}, ${(255 - count)}, ${(255 - count * 10)})`
}))

const PropsUsage = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <StyledComponent count={count}>
            <p>{count}</p>
            <p onClick={() => setCount(count + 1)}>クリックすると色が濃くなる</p>
            <p onClick={() => setCount(0)}>リセット</p>
        </StyledComponent>
    )
}

export default PropsUsage
