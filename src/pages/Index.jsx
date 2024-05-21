import React, { useState } from "react";
import { Box, Container, VStack, HStack, Text, Link, IconButton, SimpleGrid } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaPlus } from "react-icons/fa";

const menuItems = [
  { id: 1, name: "Home", icon: FaHome },
  { id: 2, name: "Profile", icon: FaUser },
  { id: 3, name: "Settings", icon: FaCog },
];

const centralPageLinks = [
  { id: 1, name: "Dashboard", path: "/dashboard" },
  { id: 2, name: "Reports", path: "/reports" },
  { id: 3, name: "Analytics", path: "/analytics" },
];

const SideMenu = ({ onSelect }) => {
  return (
    <VStack spacing={4} align="stretch" p={4} bg="gray.100" height="100vh">
      {menuItems.map((item) => (
        <HStack key={item.id} spacing={4} onClick={() => onSelect(item.name)} cursor="pointer">
          <IconButton aria-label={item.name} icon={<item.icon />} size="lg" />
          <Text>{item.name}</Text>
        </HStack>
      ))}
    </VStack>
  );
};

const CentralPage = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} p={4}>
      {centralPageLinks.map((link) => (
        <Box key={link.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Link href={link.path}>
            <Text fontSize="xl">{link.name}</Text>
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  );
};

const Index = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  return (
    <Container maxW="container.xl" display="flex" p={0}>
      <SideMenu onSelect={setSelectedMenu} />
      <Box flex="1" p={4}>
        <Text fontSize="2xl" mb={4}>
          {selectedMenu}
        </Text>
        <CentralPage />
      </Box>
    </Container>
  );
};

export default Index;
