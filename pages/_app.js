import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html': {
        fontSize: '16px',
      },
    },
  }
})

function MyApp({ Component, pageProps }) {
  return ( 
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp
