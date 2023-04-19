import {
  Box,
  Button,
  Container,
  Flex,
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
import { InfoIcon } from '@chakra-ui/icons';
// Here we have used react-icons package for the icons
import { BiCheck } from 'react-icons/bi';
import { BsArrowUpRight, BsFillCloudCheckFill, BsHeart, BsHeartFill } from 'react-icons/bs';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FaCheckCircle, FaServer } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { useState } from 'react';

import Sidebar from '@/common/components/sidebar/components/Sidebar';

const VideoContent = () => {
  const [liked, setLiked] = useState(false);
  return (
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
          <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
            <Stack direction="row" alignItems="center">
              <Text fontWeight="semibold">敬请期待</Text>
              <InfoIcon boxSize={'16px'} color={'blue.500'} />
            </Stack>

            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
              <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'xl'}>
                图片视频正在接入中
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }}>
                {/* <Button colorScheme="green">点这里加速开发</Button> */}
                <Flex
                  p={4}
                  alignItems="center"
                  justifyContent={'space-between'}
                  roundedBottom={'sm'}
                  borderLeft={'1px'}
                  cursor="pointer"
                  onClick={() => setLiked(!liked)}
                >
                  {liked ? (
                    <BsHeartFill fill="red" fontSize={'24px'} />
                  ) : (
                    <BsHeart fontSize={'24px'} />
                  )}
                  点这里加速开发
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Grid>
    </Container>
  );
};

export default VideoContent;
