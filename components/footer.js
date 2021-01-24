const { chakra, Box, Text, Flex, Icon } = require("@chakra-ui/react")
const { default: Link } = require("next/link")
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
  const Paragraph = ({children}) => {
    return (
      <Text 
        textAlign={["center", ,"center"]} 
        w="fit-content" 
        mx={[4, , "auto"]} 
        wordBreak="break-word">
        {children}
      </Text>
    )
  }
  return (
    <Box as="footer" bgColor="gray.50" w="100%" py={12} mt="auto">
      <Flex flexDir="column" alignContent="center" flexWrap="wrap">
        <Paragraph>
          Feito com <a href="https://nextjs.org" target="_blank">Next.JS</a> + <a href="https://chakra-ui.com/" target="_blank">Chakra-UI</a> e hospedado na <Link href="http://vercel.com" target="_blank">Vercel</Link>.
        </Paragraph>
        <Paragraph>
          Inspirado <a href="https://www.devmedia.com.br/validar-cpf-com-javascript/23916" target="_blank">neste tutorial</a> do <a href="https://devmedia.com.br" target="_blank" >devmedia.com.br</a>. Encontre este projeto no <a href="https://github.com/edueter/nextjs-validador-cpf" target="_blank">GitHub<Icon ml={1} as={FaGithub} /></a>.
        </Paragraph>
      </Flex>
    </Box>
  )
}

export default Footer