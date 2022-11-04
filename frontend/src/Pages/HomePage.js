import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"; //Imports from chakra-ui.com
import { React, useEffect } from "react";
// import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom"; // In react-router-dom v6 useHistory() is replaced by useNavigate(). So do not use import { Link, useHistory } from "react-router-dom";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats"); // Here it was:    if (user) navigate.push("/chats"); for React Router v6, changed to current view
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex" // display
        justifyContent="center"
        p={3} // padding
        bg="white" // background color
        w="100%" // width
        m="40px 0 15px 0" // margin
        borderRadius="lg"
        borderWidth="1px"
      > {/* This BOX contain the upper part of the SignIn/Up box */}
        <Text fontSize="4xl" fontFamily="Work sans" fontWeight="semibold" textAlign="center" >
          SignIn/Up in Real Messaging App Like Whatsapp
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px"> {/* This BOX contain the LOWER part of the SignIn/Up box */}
        <Tabs isFitted variant="soft-rounded"> {/* This TAB contain the TWO TABS & their children for SignIn/Up */}
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Login /></TabPanel>
            <TabPanel><Signup /></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
