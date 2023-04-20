/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, ButtonProps, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type LinkButtonProps = {
  children: ReactNode;
};

const LinkButton = ({ children, ...buttonProps }: LinkButtonProps & ButtonProps) => (
  <Button
    _hover={{ color: '#323ebe', bg: '#e2e4e6' }}
    bg="transparent"
    width="14rem"
    padding="8px"
    fontWeight="normal"
    justifyContent="flex-start"
    {...buttonProps}
  >
    {children}
  </Button>
);

const Links = () => {
  const router = useRouter();
  const activePath = router.asPath.slice(1);
  return (
    <Box as="nav">
      <LinkButton isActive={activePath === 'chat'} onClick={() => router.push('/chat')}>
        <Image src="/img/sidebar/home.svg" mr="3" />
        智能对话
      </LinkButton>
      <LinkButton isActive={activePath === 'features'} onClick={() => router.push('/features')}>
        <Image src="/img/sidebar/reading.svg" mr="3" />
        场景制作
      </LinkButton>
      <LinkButton isActive={activePath === 'video'} onClick={() => router.push('/video')}>
        <Image src="/img/sidebar/listing.svg" mr="3" />
        图片视频
      </LinkButton>
      <LinkButton isActive={activePath === 'pricing'} onClick={() => router.push('/pricing')}>
        <Image src="/img/sidebar/podcast.svg" mr="3" />
        更多工具
      </LinkButton>
      <LinkButton isActive={activePath === 'history'} onClick={() => router.push('/history')}>
        <Image src="/img/sidebar/video.svg" mr="3" />
        历史记录
      </LinkButton>
      <LinkButton isActive={activePath === 'my'} onClick={() => router.push('/my')}>
        <Image src="/img/sidebar/tag.svg" mr="3" />
        关于&amp;个人中心
      </LinkButton>
    </Box>
  );
};

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
