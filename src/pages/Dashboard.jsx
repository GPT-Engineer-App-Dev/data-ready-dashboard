import { Box, Flex, Text, VStack, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon, FaHome, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
          Dashboard
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
          <Text fontSize="2xl" mb={4}>Welcome to the Dashboard</Text>
          <Text>This is the main content area where data will be displayed.</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;