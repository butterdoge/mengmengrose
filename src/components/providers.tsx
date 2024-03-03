'use client'
import 'animate.css';
import { Provider } from 'react-redux';
import { ChakraProvider,extendTheme,withDefaultColorScheme } from '@chakra-ui/react'
// 默认主题变成黄色
const theme =extendTheme(
  withDefaultColorScheme({ colorScheme: 'amber' })
)
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}