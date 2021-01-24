import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html': {
        fontSize: '16px',
      },
      'a': {
        cursor: 'pointer',
        textDecoration: 'underline',
        fontWeight: '500',
        transition: 'color .2s ease-in-out',
        _hover: {
          color: 'teal.500',
        }
      }
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
