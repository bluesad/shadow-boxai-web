import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiCheck } from 'react-icons/bi';
import { BsFillCloudCheckFill } from 'react-icons/bs';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FaCheckCircle, FaServer } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import Sidebar from '@/common/components/sidebar/components/Sidebar';

const plansList = [
  {
    title: '套餐1',
    price: 49,
    icon: BsFillCloudCheckFill,
    features: ['Deploy 5 apps', '2 Servers', 'Push to deploy', 'Collaborate with your team'],
  },
  {
    title: '套餐2',
    price: 79,
    icon: AiOutlineCloudServer,
    features: [
      'Deploy 10 apps',
      '4 Servers',
      'Push to deploy',
      'Collaborate with your team',
      'Setup load balanced clusters',
    ],
  },
  {
    title: '套餐3',
    price: 99,
    icon: FaServer,
    features: [
      'Deploy unlimited apps',
      'unlimited Servers',
      'Push to deploy',
      'Collaborate with your team',
      'Setup load balanced clusters',
    ],
  },
];

const PricingCard = ({ title, price, icon, features }: PricingCardProps) => (
  <Box
    // minW={{ base: 'xs', sm: 'xs', lg: 'sm' }}
    rounded="md"
    border="1px solid"
    borderColor={useColorModeValue('gray.400', 'gray.600')}
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow="md"
    marginInline="auto"
    my={3}
    p={6}
    _hover={{
      boxShadow: useColorModeValue(
        '0 4px 16px rgba(160, 174, 192, 0.6)',
        '0 4px 16px rgba(9, 17, 28, 0.4)',
      ),
    }}
  >
    <Box textAlign="center">
      <Icon as={icon} h={10} w={10} color="gray.500" />
      <chakra.h2 fontSize="2xl" fontWeight="bold">
        {title}
      </chakra.h2>
      <Text fontSize="7xl" fontWeight="bold" mt={6}>
        <Text as="sup" fontSize="3xl" fontWeight="normal">
          ￥
        </Text>
        {price}
      </Text>
      <Text fontSize="md" color="gray.500">
        /月
      </Text>
    </Box>
    <VStack spacing={2} alignItems="flex-start" my={6}>
      {features.map((feature, index) => (
        <HStack key={index} spacing={3}>
          <Icon as={BiCheck} h={4} w={4} color="green.500" />
          <Text fontSize="sm" color="gray.500">
            {feature}
          </Text>
        </HStack>
      ))}
    </VStack>
    <Button
      colorScheme="gray"
      variant="solid"
      size="md"
      w="100%"
      _hover={{
        bg: 'black',
        color: 'white',
      }}
    >
      确认选择
    </Button>
  </Box>
);

const ThreeTiersPricing = () => (
  <Container maxW="9xl" p={{ base: 5, md: 10 }} mx="auto">
    <Grid
      templateColumns={{
        base: '1fr',
        md: '1fr 3fr',
        lg: '1fr 4.5fr',
      }}
      gap={4}
      pt="4"
      m={[0, -10]}
    >
      <Sidebar d={{ base: 'none', md: 'block' }} />
      <Container maxW="7xl" px="0">
        <Box>
          <VStack spacing={2} textAlign="center">
            <chakra.h2 fontSize="5xl" fontWeight="bold" textAlign="center" mb={5}>
              轻松充值
            </chakra.h2>
            <Text fontSize="lg" color={'gray.500'}>
              14天免费体验，无需充值. 充值后任意时间取消.
            </Text>
          </VStack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            textAlign="center"
            justify="center"
            spacing={{ base: 4, lg: 10 }}
            py={10}
          >
            <PriceWrapper>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  套餐一
                </Text>
                <HStack justifyContent="center" mt={10}>
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    79
                  </Text>
                  <Text fontSize="xl" color="gray.500">
                    /月
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    unlimited build minutes
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Lorem, ipsum dolor.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    5TB Lorem, ipsum dolor.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="red" variant="outline">
                    立刻体验
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>

            <PriceWrapper>
              <Box position="relative">
                <Box
                  position="absolute"
                  top="-16px"
                  left="50%"
                  style={{ transform: 'translate(-50%)' }}
                >
                  <Text
                    textTransform="uppercase"
                    bg={useColorModeValue('red.300', 'red.700')}
                    px={3}
                    py={1}
                    color={useColorModeValue('gray.900', 'gray.300')}
                    fontSize="sm"
                    fontWeight="600"
                    rounded="xl"
                  >
                    Hot
                  </Text>
                </Box>
                <Box py={4} px={12}>
                  <Text fontWeight="500" fontSize="2xl">
                    套餐二
                  </Text>
                  <HStack justifyContent="center" mt={10}>
                    <Text fontSize="3xl" fontWeight="600">
                      ￥
                    </Text>
                    <Text fontSize="5xl" fontWeight="900">
                      149
                    </Text>
                    <Text fontSize="xl" color="gray.500">
                      /月
                    </Text>
                  </HStack>
                </Box>
                <VStack
                  bg={useColorModeValue('gray.50', 'gray.700')}
                  py={4}
                  borderBottomRadius={'xl'}
                >
                  <List spacing={3} textAlign="start" px={12}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      unlimited build minutes
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Lorem, ipsum dolor.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      5TB Lorem, ipsum dolor.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      5TB Lorem, ipsum dolor.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      5TB Lorem, ipsum dolor.
                    </ListItem>
                  </List>
                  <Box w="80%" pt={7}>
                    <Button w="full" colorScheme="red">
                      立刻体验
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </PriceWrapper>
            <PriceWrapper>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  套餐三
                </Text>
                <HStack justifyContent="center" mt={10}>
                  <Text fontSize="3xl" fontWeight="600">
                    ￥
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    349
                  </Text>
                  <Text fontSize="xl" color="gray.500">
                    /月
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    unlimited build minutes
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Lorem, ipsum dolor.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    5TB Lorem, ipsum dolor.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="red" variant="outline">
                    立刻体验
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
          </Stack>
        </Box>
      </Container>
    </Grid>
  </Container>
);

function PriceWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  icon: IconType;
}

export default ThreeTiersPricing;
