import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container color={"#a1a1aa"} maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"#3f3f46"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        borderColor={"#3f3f46"}
      >
        <Text fontSize="4xl" fontFamily="Work sans" fontWeight={"extrabold"}>
          Chat App
        </Text>
      </Box>
      <Box
        bg={"#3f3f46"}
        color={"#a1a1aa"}
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={"#3f3f46"}
      >
        <Tabs isFitted variant="enclosed" width={"100%"}>
          <TabList mb="1em" width={"100%"}>
            <Tab
              fontWeight={"bold"}
              width="50%"
              _focus={{ borderBottomColor: "#3f3f46" }}
            >
              Log in
            </Tab>
            <Tab
              fontWeight={"bold"}
              width="50%"
              _focus={{ borderBottomColor: "#3f3f46" }}
            >
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
