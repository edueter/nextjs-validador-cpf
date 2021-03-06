import { useState } from 'react';
import {
  AspectRatio,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Tooltip
} from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import Footer from '../components/footer'

export default function Home() {
  const [valido, setValido] = useState();
  const [focus, setFocus] = useState('')
  const [inputs, setInputs] = useState({
    cpf: '',
  });

  const handleChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  const handleCheck = () => setValido(validaCPF(inputs.cpf))
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { 
      handleCheck()
    }
  }
  const handleFocus = () => {
    setFocus(true);
  }
  
  const styles = {
    cartao: {
      header: {
        common: {
          fontSize: ['xs', 'sm'],
          fontWeight: '600',
          letterSpacing: 'wider',
        },
        letteringCPF: {
          lineHeight: '1em',
          ml: 24,
          fontSize: ['5xl','6xl'],
          fontWeight: '700',
          letterSpacing: 'tight',
        }
      },
      body: {
        common: {
          color: 'blue.900',
          fontWeight: '500',
        },
        heading: {
          fontSize: 'md',
          letterSpacing: 'tight',
        },
        label: {
          fontSize: ['xs','sm'],
          letterSpacing: 'tight',
        },
        input: {
          color: 'white',
          fontSize: ['xl','3xl'],
          fontWeight: '600',
          letterSpacing: 'wide',
        }
      },
    }
  }

  const { body, header } = styles.cartao
  const validado = valido !== undefined

  return (
    <>
      <Head>
        <title>Validador de CPF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="wrapper" flexDir="column" flex="1" minH="100vh" bgColor="white" bgImage="url('/sprinkles.png')">
        <Grid placeItems="center" as="main" alignItems="center" minH="80vh">
          <Stack
            as="container"
            w="fit-content"
            alignItems="center"
            spacing={8}>
            <Heading
              w="fit-content"
            >Validador de CPF</Heading>
            <Stack
              pos="relative"
              className="cartao--cpf"
              transition="all .2s ease-in-out"
              transform={focus && 'translate3d(3px, 3px, 0)'}
              bgColor={validado && (valido === false ? 'red.700' : 'green.600') || "blue.600"}
              color="white"
              w={['100%', 96]}
              maxW={[80, 'auto']}
              h={[56,64]}
              py={5}
              px={6}
              spacing={0}
              borderRadius="xl"
              boxShadow={focus === true ? "dark-lg" : "2xl"}
            >
              <AspectRatio
                className="background"
                zIndex="base"
                ratio={279 / 300}
                w="40%"
                pos="absolute"
                top="0"
                right="5%"
                bottom="0"
                style={{ mixBlendMode: "multiply", opacity: '.4' }}>
                <Image src="/bkg.png" alt="República Federativa do Brasil" layout="fill" objectFit="contain" />
              </AspectRatio>
              <Flex
                flexWrap="wrap"
                zIndex="docked"
                mb={2}
                className="header">
                <HStack spacing={4}>
                  <AspectRatio ratio={810 / 541} w={16} mt={[2, 0]} className="logo--receita">
                    <Image src="/receita-federal-logo.png" alt="Receita Federal" layout="fill" objectFit="contain" />
                  </AspectRatio>
                  <Stack
                    spacing={0}
                    direction="column"
                    fontWeight={header.common.fontWeight}
                    fontSize={header.common.fontSize}
                    letterSpacing={header.common.letterSpacing}
                  >
                    <Text
                      as="span"
                      textTransform="uppercase"
                    >Ministério da Fazenda</Text>
                    <Text
                      as="span"
                    >Secretaria da Receita Federal</Text>
                  </Stack>
                </HStack>
                <Text
                  lineHeight={header.letteringCPF.lineHeight}
                  ml={header.letteringCPF.ml}
                  fontSize={header.letteringCPF.fontSize}
                  fontWeight={header.letteringCPF.fontWeight}
                  letterSpacing={header.letteringCPF.letterSpacing}
                  as="span">CPF</Text>
              </Flex>
              <Heading
                fontSize={body.heading.fontSize}
                fontWeight={body.common.fontWeight}
                letterSpacing={body.heading.letterSpacing}
                color={validado && (valido === false ? 'black' : 'green.900') || body.common.color}
                as="h2">
                Cadastro de Pessoas Físicas
            </Heading>
              <FormControl
                isInvalid={validado && valido === false}
                isRequired
              >
                <FormLabel
                  mt={0}
                  fontSize={body.label.fontSize}
                  fontWeight={body.common.fontWeight}
                  letterSpacing={body.label.letterSpacing}
                  color={validado && (valido === false ? 'black' : 'green.900') || body.common.color}
                  as="span">Número de Inscrição</FormLabel>
                <Stack
                  spacing={0}
                  zIndex="docked"
                  id="cpf"
                  maxW={['auto', , 72]}>
                  <Tooltip
                    label="Insira aqui o CPF a ser validado."
                    openDelay={500}
                    placement="bottom"
                    defaultIsOpen
                    hasArrow
                    arrowPadding={2}>
                    <Input
                      id="cpf"
                      w="11.65rem"
                      variant="flushed"
                      type="number"
                      color={body.input.color}
                      _focus={{
                        borderColor: validado && (valido === false ? 'red.900' : 'green.700')
                      }}
                      fontSize={body.input.fontSize}
                      fontWeight={body.input.fontWeight}
                      letterSpacing={body.input.letterSpacing}
                      value={inputs.cpf}
                      onKeyUp={handleKeyDown}
                      onChange={handleChange}
                      onFocus={handleFocus} />
                  </Tooltip>
                  <FormErrorMessage>
                    <Text color="white" as="span" fontStyle="italic" fontSize="xs">
                      {!valido && "Este não é um CPF válido. Tente novamente"}
                    </Text>
                  </FormErrorMessage>
                </Stack>
              </FormControl>
            </Stack>
            <Button
              w="fit-content"
              px={4}
              alignSelf="center"
              colorScheme={
                (validado && (
                  valido === true
                    ? 'green'
                    : 'red'
                )) || "blue"
              } onClick={handleCheck}>{validado && (valido === false ? "CPF Inválido" : "CPF Válido") || "Validar"}</Button>
          </Stack>
        </Grid>
        <Footer />
      </Flex>
    </>
  )
}

export function validaCPF(strCPF) {
  var Soma;
  var Resto;
  var i;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}
