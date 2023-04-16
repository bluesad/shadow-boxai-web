/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type LinkButtonProps = {
  children: ReactNode;
};

const LinkButton = ({ children }: LinkButtonProps) => (
  <Button
    _hover={{ color: '#323ebe', bg: '#e2e4e6' }}
    bg="transparent"
    width="14rem"
    padding="8px"
    fontWeight="normal"
    justifyContent="flex-start"
  >
    {children}
  </Button>
);

const Links = () => (
  <Box as="nav">
    <LinkButton>
      <Image src="/img/sidebar/home.svg" mr="3" />
      智能对话
    </LinkButton>
    <LinkButton>
      <Image src="/img/sidebar/reading.svg" mr="3" />
      场景制作
    </LinkButton>
    <LinkButton>
      <Image src="/img/sidebar/listing.svg" mr="3" />
      图片视频
    </LinkButton>
    <LinkButton>
      <Image src="/img/sidebar/podcast.svg" mr="3" />
      更多工具
    </LinkButton>
    <LinkButton>
      <Image src="/img/sidebar/video.svg" mr="3" />
      历史记录
    </LinkButton>
    <LinkButton>
      <Image src="/img/sidebar/tag.svg" mr="3" />
      关于&amp;个人中心
    </LinkButton>
  </Box>
);

const Sidebar = (props: {
  d: {
    base: string;
    md: string;
  };
}) => (
  <Box as="aside" {...props}>
    <Links />
  </Box>
);

export default Sidebar;
