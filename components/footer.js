const { chakra, Box, Text, Center } = require("@chakra-ui/react")
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
          mx={1}
          _last={{
            mr: 0
          }}
        >
          {children}
        </chakra.a>
      </Link>
    )
  }
  return (
    <Box as="footer" bgColor="gray.50" w="100%" py={12} mt="auto">
      <Center>
        <Text as="span">Feito com
          <CustomLink href="https://nextjs.org">
            Next.JS
          </CustomLink>
        e
          <CustomLink href="https://chakra-ui.com/">
            Chakra-UI
          </CustomLink>
        .
      </Text>
      </Center>
    </Box>
  )
}

export default Footer