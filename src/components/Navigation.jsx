import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>MyApp</Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/theme-settings" px={2}>
            Theme Settings
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navigation;
