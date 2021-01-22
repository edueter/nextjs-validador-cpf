const { chakra, Box, Text, Flex } = require("@chakra-ui/react")
const { default: Link } = require("next/link")

const Footer = () => {
  const CustomLink = ({ children, href }) => {
    return (
      <Link href={href} passHref>
        <chakra.a
          cursor="pointer"
          textDecoration="underline"
          transition="color .2s ease-in-out"
          _hover={{
            color: 'teal.500'
          }}
          mx=".1275rem"
        >
          {children}
        </chakra.a>
      </Link>
    )
  }
  return (
    <Box as="footer" bgColor="gray.50" w="100%" py={12} mt="auto">
      <Flex flexDir="column" alignContent="center" flexWrap="wrap">
        <Text display="flex" textAlign="center">Feito com
            <CustomLink href="https://nextjs.org">
            Next.JS
            </CustomLink>
            +
            <CustomLink href="https://chakra-ui.com/">
            Chakra-UI
            </CustomLink>
            e hospedado na
            <Link href="http://vercel.com" passHref>
            <Box as="img"
              cursor="pointer"
              src="/vercel.svg" alt="vercel"
              h={3}
              mt={2}
              ml={1}
            />
          </Link>.
          </Text>
          <Text textAlign="center">
            Inspirado <CustomLink href="https://www.devmedia.com.br/validar-cpf-com-javascript/23916">
              neste tutorial
            </CustomLink> do <CustomLink href="https://devmedia.com.br">
              devmedia.com.br
            </CustomLink>.
          </Text>
      </Flex>
    </Box>
  )
}

export default Footer