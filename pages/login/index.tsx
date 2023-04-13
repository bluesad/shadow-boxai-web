import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useState } from 'react';

import OtpLoginForm from '@/fragments/login/OtpLoginForm';
import PasswordLoginForm from '@/fragments/login/PasswordLoginForm';

export default function Login() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box display="flex" flexFlow="row nowrap" alignItems="stretch" height="100%">
      <Box flex="auto">Banner</Box>
      <Box width="35%" minWidth="80" padding="12">
        <Tabs variant="enclosed" index={tabIndex} onChange={setTabIndex} isFitted isLazy>
          <TabList>
            <Tab>密码登录</Tab>
            <Tab>短信登录 / 注册</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PasswordLoginForm />
              <Button
                variant="link"
                colorScheme="brand"
                display="block"
                width="100%"
                mt="4"
                onClick={() => setTabIndex(1)}
              >
                注册账号
              </Button>
            </TabPanel>
            <TabPanel>
              <OtpLoginForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
