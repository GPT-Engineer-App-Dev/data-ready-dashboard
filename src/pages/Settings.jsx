import { Box, Flex, Text, VStack, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon, FaHome, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex height="100vh" flexDirection="column">
      {/* Navigation Bar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1.5rem"
        bg="teal.500"
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold">
          Settings
        </Text>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </Flex>

      <Flex flex="1">
        {/* Sidebar */}
        <Box
          as="aside"
          width="250px"
          bg="gray.800"
          color="white"
          padding="1rem"
          display="flex"
          flexDirection="column"
        >
          <VStack spacing={4} align="start">
            <Link to="/">
              <HStack>
                <FaHome />
                <Text>Home</Text>
              </HStack>
            </Link>
            <Link to="/dashboard">
              <HStack>
                <FaChartBar />
                <Text>Dashboard</Text>
              </HStack>
            </Link>
            <Link to="/settings">
              <HStack>
                <FaCog />
                <Text>Settings</Text>
              </HStack>
            </Link>
          </VStack>
        </Box>

        {/* Main Content Area */}
        <Box as="main" flex="1" padding="1.5rem" bg={colorMode === "light" ? "gray.100" : "gray.700"}>
          <Text fontSize="2xl" mb={4}>Settings Page</Text>
          <Text>This is the settings page where user preferences can be adjusted.</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Settings;