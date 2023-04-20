/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/rules-of-hooks */
import { SVGProps } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { NextPage } from 'next';
import { FcAbout, FcAssistant, FcCollaboration, FcDonate, FcManager } from 'react-icons/fc';

import xiaohongshuImage from '@/public/img/xiaohongshu.png';
import Sidebar from '@/common/components/sidebar/components/Sidebar';
import { useLoggedIn } from '@/common/hooks/auth';

interface IFeature {
  heading: string;
  content: string;
  icon: JSX.Element & SVGProps<SVGElement>;
}

const features: IFeature[] = [
  {
    heading: '小紅書',
    content: 'Choose from Stripe, Paddle, Braintree, or PayPal to launch your product quickly.',
    icon: (
      <Image
        src={xiaohongshuImage}
        // layout="raw"
        width={60}
        height={60}
        // className="h-full w-full object-cover object-center"
        placeholder="blur"
        alt={''}
      />
    ),
  },
  {
    heading: '抖音',
    content: 'Webhooks are wired up to automatically email customers PDF receipts and invoices.',
    icon: (
      <svg
        height="60"
        viewBox="-58.35000000000002 -186.70564362582354 2548.289756960746 2538.849821747569"
        width="60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#25f4ee">
          <path d="M779.38 890.55v-88.12a650.81 650.81 0 0 0-92.45-7.94c-299.8-.64-565.22 193.64-655.25 479.6S47.92 1871.34 294 2042.56a684.7 684.7 0 0 1 485.36-1152z" />
          <path d="M796 1888.72c167.62-.23 305.4-132.28 312.74-299.74V94.62h273A512.17 512.17 0 0 1 1373.8 0h-373.41v1492.92c-6.21 168.31-144.32 301.63-312.74 301.9a317.76 317.76 0 0 1-144.45-36.11A313.48 313.48 0 0 0 796 1888.72zM1891.66 601.64v-83.06a509.85 509.85 0 0 1-282.4-85.22 517.79 517.79 0 0 0 282.4 168.28z" />
        </g>
        <path
          d="M1609.26 433.36a514.19 514.19 0 0 1-127.84-339.47h-99.68a517.16 517.16 0 0 0 227.52 339.47zM686.93 1167.9a313.46 313.46 0 0 0-144.46 590.81A312.75 312.75 0 0 1 796 1262.51a329.69 329.69 0 0 1 92.44 14.49V897.05a654.77 654.77 0 0 0-92.44-7.22h-16.62v288.9a321.13 321.13 0 0 0-92.45-10.83z"
          fill="#fe2c55"
        />
        <path
          d="M1891.66 601.64v288.91a886.23 886.23 0 0 1-517.86-168.29v759.1c-.8 378.78-308.09 685.43-686.87 685.43A679.65 679.65 0 0 1 294 2042.56 685.43 685.43 0 0 0 1481.42 1576V819.05A887.71 887.71 0 0 0 2000 985.17v-372a529.59 529.59 0 0 1-108.34-11.53z"
          fill="#fe2c55"
        />
        <path d="M1373.8 1481.36v-759.1a886.11 886.11 0 0 0 518.58 166.12v-288.9a517.87 517.87 0 0 1-283.12-166.12 517.16 517.16 0 0 1-227.52-339.47h-273V1589a313.46 313.46 0 0 1-567 171.17 313.46 313.46 0 0 1 144.46-590.83 321.35 321.35 0 0 1 92.45 14.45V894.88A684.71 684.71 0 0 0 293.29 2050.5a679.65 679.65 0 0 0 393.64 116.29c378.78 0 686.07-306.65 686.87-685.43z" />
      </svg>
    ),
  },
  {
    heading: '快手',
    content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    icon: (
      <svg
        version="1.1"
        id="图层_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 194.12 199.493"
        enableBackground="new 0 0 194.12 199.493"
        xmlSpace="preserve"
      >
        <g>
          <defs>
            <rect id="SVGID_1_" width="194.12" height="199.493" />
          </defs>
          <clipPath id="SVGID_2_">
            <use xlinkHref="#SVGID_1_" overflow="visible" />
          </clipPath>
          <path
            clipPath="url(#SVGID_2_)"
            fill="#FF8000"
            d="M37.747,0h118.626c20.816,0,37.747,17.4,37.747,38.787v121.919
		c0,21.388-16.934,38.787-37.747,38.787H37.747C16.93,199.486,0,182.087,0,160.699V38.787C0,17.399,16.934,0,37.747,0"
          />
          <path
            clipPath="url(#SVGID_2_)"
            fill="#FFFFFF"
            d="M76.551,22.297c5.5-0.6,11.099,0.3,16.199,2.4c6.601,2.7,12.301,7.6,16.2,13.6
		c2.7,4.1,4.602,8.6,5.7,13.3l0.1,0.1c3.9-5.4,9.7-9.4,16.2-10.701c6.602-1.299,13.401,0.101,18.901,4
		c6,4.201,10.099,10.801,11.5,18c1.398,6.901,0.599,14.301-2.701,20.5c-0.799,1.401-1.599,2.701-2.599,3.901
		c-4.401,5.4-11,8.7-17.802,9.8c-2.1,0.299-4.3,0.4-6.5,0.6c-17.1,1.199-34.3,2.4-51.399,3.4c-7.3,0.1-14.5-2.201-20.401-6.5
		c-2.8-2.1-5.399-4.5-7.5-7.3c-6.7-8.401-9.7-19.6-8.599-30.3c1-10.101,5.799-19.9,13.5-26.5
		C62.65,25.996,69.45,22.996,76.551,22.297 M85.051,40.597c-4.7,0.399-9,3-11.901,6.7c-3,3.8-4.7,8.3-5.099,13.1
		c-0.5,6.2,1.099,12.7,5.199,17.4c2.2,2.6,5.2,4.5,8.601,5.4c3.299,0.799,6.799,0.5,9.899-0.9c5.2-2.301,9.101-7.1,11-12.5
		c2.302-6.301,1.802-13.301-1.198-19.301c-1.602-3.199-4.102-5.899-7.201-7.699C91.551,41.097,88.351,40.297,85.051,40.597
		 M139.352,54.197c-2.901,0.299-5.602,1.9-7.5,4.1c-4.5,5.199-5.201,13.3-1.602,19.199c1.5,2.5,3.9,4.5,6.7,5.301
		c2.602,0.8,5.602,0.3,7.901-1.1c2.799-1.6,4.799-4.201,6-7.1c1.5-3.7,1.599-7.7,0.398-11.5c-0.898-3.101-2.898-5.7-5.5-7.5
		C143.75,54.496,141.551,53.897,139.352,54.197 M127.25,103.597c3.623-0.399,7.278-0.399,10.9,0l12.901,1.399
		c2.099,0.301,4.198,1.401,5.198,3.301c0.802,1.4,1,3.101,0.9,4.8v5.101c0,0.7-0.7,1.299-1.4,1.399l-27.3,5.301
		c-1.8,0.399-3.3,1.699-3.899,3.5c-0.601,1.5-0.699,3.199-0.601,4.899v13.8c0,1.399,0.401,2.899,1.5,3.899
		c1.2,1,2.901,1.101,4.3,0.801l8.9-1.899c0.701-0.101,1.5-0.7,1.5-1.5v-3.801c0-0.399-0.299-0.899-0.7-0.699l-7.8,1.8
		c-0.7,0.2-1.5-0.3-1.6-1.101v-11.601c0-0.899,0.699-1.699,1.6-1.899c8.3-1.601,16.6-3.3,24.9-4.899
		c0.399-0.101,0.699,0.399,0.699,0.799v22.201c0,1.5,0.102,3-0.398,4.399c-0.701,2.399-2.602,4.2-4.801,5.301
		c-1.601,0.899-3.5,1.099-5.199,1.599l-8.102,1.901l-22.898,5.3c-2.201,0.5-4.3,1.1-6.5,1.299c-2.102,0.201-4.201,0.201-6.201-0.199
		c-2.099-0.399-4-1.399-6-2.1c-1.7-0.701-3.4-1.4-5.099-2c1.3-1.9,2.699-3.701,4-5.5c1.699-2.3,3.399-4.701,5.099-7
		c0.8-1.201,1-2.701,1-4.201v-10.199c0-1.399-0.4-2.801-1.2-4c-0.7-1.1-1.7-2.1-2.599-3l-2.701-2.7
		c-4.799-4.899-9.5-9.899-14.299-14.8c0.299-1,0.7-1.899,1.299-2.801c1.1-1.599,2.8-2.599,4.701-2.899L127.25,103.597z"
          />
          <path
            clipPath="url(#SVGID_2_)"
            fill="#FFFFFF"
            d="M35.851,111.098c1.8-1.401,4.2-1.7,6.399-1.5c3.801,0.3,7.5,0.898,11.2,1.5
		c4.8,0.8,9.5,1.8,14.3,2.8c2.301,0.5,4.801,1,6.801,2.299c1.699,1,2.899,2.5,4.3,3.8l10.7,10.901c1.8,1.9,3.699,3.7,5.5,5.599
		c0.899,0.901,1.399,2.102,1.399,3.401v7.7c0,1-0.399,2-1.099,2.8l-6.3,8.4l-12.5,16.6c-1.2,1.4-2.801,2.4-4.7,2.7
		c-3,0.599-5.901-0.102-8.8-0.8c-8-2-15.801-4.602-23.301-7.9c-2.5-1.201-4.599-3.1-6.099-5.5c-1-1.701-1.701-3.5-1.8-5.5
		c-0.401-4.201-0.7-8.5-0.8-12.8c-0.2-7.269-0.101-14.541,0.3-21.8c0.099-1.802,0.2-3.602,0.5-5.4
		C32.351,115.696,33.551,112.798,35.851,111.098 M43.051,121.798c-1.101,0.3-1.601,1.5-1.801,2.6c-0.399,4-0.599,7.9-0.599,11.9
		c-0.1,5.806,0.1,11.613,0.599,17.398c0,1.3,0.5,2.5,1.2,3.602c0.701,0.898,1.601,1.5,2.601,1.898c4.8,2.3,9.899,3.602,15.1,4.701
		c1.799,0.4,3.599,0.7,5.5,0.799c1,0.102,2-0.299,2.599-1.099c0.7-1,0.7-2.401,0.801-3.602c0.6-8.599,0.8-17.198,0.199-25.698
		c-0.099-1.602-0.199-3.302-0.5-4.9c-0.399-1.701-1.599-3-3.199-3.6c-2.9-1-5.801-1.802-8.801-2.4c-4.399-1-8.899-1.701-13.5-1.8
		L43.051,121.798z"
          />
        </g>
      </svg>
    ),
  },
];

interface CardProps {
  heading: string;
  description: string;
  icon: React.ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'gray.600'} size={'sm'}>
          Learn more →
        </Button>
        {/* <Link href="pricing" mt={4} fontSize="sm" color="gray.600">
          Learn more →
        </Link> */}
      </Stack>
    </Box>
  );
};

export function GridListWith() {
  return (
    <>
      {/* <Box p={4}> */}
      {/* <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Short heading
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack> */}

      <Container maxW={'9xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'微博'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'公衆號'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'大衆點評'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'什麽值得買'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'今日頭條'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
        </Flex>
      </Container>
      {/* </Box> */}
    </>
  );
}

export const Features = () => (
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
      <div>
        <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
          各种介绍性内容
        </chakra.h3>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
          {features.map((feature, index) => (
            <Box
              key={index}
              bg={useColorModeValue('gray.100', 'gray.700')}
              p={6}
              rounded="lg"
              textAlign="center"
              pos="relative"
            >
              <Flex
                p={2}
                w="max-content"
                color="white"
                // bgGradient="linear(to-br, #228be6, #15aabf)"
                rounded="md"
                marginInline="auto"
                pos="absolute"
                left={0}
                right={0}
                top="-1.5rem"
                boxShadow="lg"
              >
                {feature.icon}
              </Flex>
              <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={10}>
                {feature.heading}
              </chakra.h3>
              <Text fontSize="md" mt={4}>
                {feature.content}
              </Text>
              <Link href="pricing" mt={4} fontSize="sm" color="gray.600">
                Learn more →
              </Link>
            </Box>
          ))}
        </SimpleGrid>
        <GridListWith />
      </div>
    </Grid>
  </Container>
);

const FeaturesPage: NextPage = () => {
  // useLoggedIn();

  return <Features />;
};

export default FeaturesPage;
