const { chakra, Box, Text, Flex, Icon } = require("@chakra-ui/react")
const { default: Link } = require("next/link")
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
  const CustomLink = ({ children, href, passHref }) => {
    return (
      <Link href={href} passHref={passHref}>
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
        <Text display="flex" textAlign="center" w="fit-content" mx="auto">Feito com
            <CustomLink href="https://nextjs.org" passHref>
            Next.JS
            </CustomLink>
            +
            <CustomLink href="https://chakra-ui.com/" passHref>
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
          <Text textAlign="center" w="fit-content" mx="auto">
            Inspirado <CustomLink href="https://www.devmedia.com.br/validar-cpf-com-javascript/23916" passHref>
              neste tutorial
            </CustomLink> do <CustomLink href="https://devmedia.com.br" passHref>
              devmedia.com.br
            </CustomLink>. Encontre este projeto no <CustomLink href="https://github.com/edueter/nextjs-validador-cpf" passHref>GitHub<Icon ml={1} as={FaGithub} /></CustomLink>.
          </Text>
      </Flex>
    </Box>
  )
}

export default Footer