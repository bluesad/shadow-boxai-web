/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
// import { InfoIcon } from '@chakra-ui/icons';
// Here we have used react-icons package for the icons
import { BiCheck } from 'react-icons/bi';
import { BsArrowUpRight, BsFillCloudCheckFill, BsHeart, BsHeartFill } from 'react-icons/bs';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FaCheckCircle, FaServer } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { useState } from 'react';

import Sidebar from '@/common/components/sidebar/components/Sidebar';

const tabData = [
  {
    label: '歷史對話',
    content: 'Perhaps the greatest dish ever invented.',
  },
  {
    label: '關鍵詞提示',
    content: 'Perhaps the surest dish ever invented but fills the stomach more than rice.',
  },
];

function DataTabs({ data }: { data: typeof tabData }) {
  return (
    <Tabs>
      <TabList>
        {data.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((tab, index) => (
          <TabPanel p={4} key={index}>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

function SplitScreen() {
  const colors = useColorModeValue(
    ['red.50', 'blue.50', 'teal.50'],
    ['red.900', 'blue.900', 'teal.900'],
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={0} flex={1} align={'flex-start'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          {/* <Heading fontSize={'2xl'}>Sign in to your account</Heading> */}
          {/* <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl> */}
          <FormControl id="message">
            <FormLabel>關鍵詞</FormLabel>
            <Input type="password" placeholder="輸入您的關鍵字詞" rounded="md" />
            {/* <Textarea size="lg" /> */}
          </FormControl>
          <Stack spacing={6}>
            {/* <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack> */}
            {/* <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
              }
            /> */}
            <Button colorScheme={'twitter'} variant={'solid'}>
              自動生成
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        {/* <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
          <TabList>
            <Tab>歷史對話</Tab>
            <Tab>關鍵詞提示</Tab>
          </TabList>
          <TabPanels p="2rem">
            <TabPanel>The Primary Colors</TabPanel>
            <TabPanel>Are 1, 2, 3</TabPanel>
            <TabPanel>Red, yellow and blue.</TabPanel>
          </TabPanels>
        </Tabs> */}
        <DataTabs data={tabData} />
      </Flex>
    </Stack>
  );
}

const Chat = () => (
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
      <Container maxW="6xl" px="0">
        <SplitScreen />
      </Container>
    </Grid>
  </Container>
);

export default Chat;
