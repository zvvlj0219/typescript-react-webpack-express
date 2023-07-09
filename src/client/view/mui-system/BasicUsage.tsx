// use client

import { styled, createTheme, ThemeProvider } from '@mui/system';
import React ,{ ReactNode } from 'react';

/**
 * material uiのtheme providerの使い方
 * 
 * 最低限必要なもの
 * - カスタムテーマ
 * - theme providerでラップするか、ラップ用のコンポーネント
 * - providerのstateを受け取るコンポーネント（ここではComponentContainer）
 * 
 */

type Props = {
    children: ReactNode
}

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            contrastText: 'white',
        }
    },
});

const ComponentContainer = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
}));

const ThemeProviderWrapepr: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={customTheme}>
            <ComponentContainer>
                {children}
            </ComponentContainer>
        </ThemeProvider>
    )
}

const BasicUsage = () => {
    return (
        <ThemeProviderWrapepr>
            Basic Usage
        </ThemeProviderWrapepr>
    )
}

export default BasicUsage
