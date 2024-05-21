import React, { useState } from "react";
import { Box, Container, VStack, HStack, Text, Link, IconButton, SimpleGrid, useTheme } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaPlus } from "react-icons/fa";

const menuItems = [
  {
    id: 1,
    name: "Home",
    icon: FaHome,
    links: [
      { id: 1, name: "Dashboard", path: "/dashboard" },
      { id: 2, name: "Reports", path: "/reports" },
      { id: 3, name: "Analytics", path: "/analytics" },
    ],
  },
  {
    id: 2,
    name: "Profile",
    icon: FaUser,
    links: [
      { id: 1, name: "Profile Overview", path: "/profile-overview" },
      { id: 2, name: "Account Settings", path: "/account-settings" },
    ],
  },
  {
    id: 3,
    name: "Settings",
    icon: FaCog,
    links: [
      { id: 1, name: "Security", path: "/security" },
      { id: 2, name: "Edit Menu", path: "/edit-menu" },
      { id: 3, name: "Edit Theme", path: "/edit-theme" },
    ],
  },
];

const SideMenu = ({ onSelect }) => {
  const theme = useTheme();
  return (
    <VStack spacing={4} align="stretch" p={4} bg={theme.colors.gray[100]} height="100vh">
      {menuItems.map((item) => (
        <HStack key={item.id} spacing={4} onClick={() => onSelect(item.name)} cursor="pointer" _hover={{ bg: theme.colors.gray[200] }}>
          <IconButton aria-label={item.name} icon={<item.icon />} size="lg" />
          <Text>{item.name}</Text>
        </HStack>
      ))}
    </VStack>
  );
};

const CentralPage = ({ links }) => {
  const theme = useTheme();
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} p={4}>
      {links.map((link) => (
        <Box key={link.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" _hover={{ bg: theme.colors.gray[50] }}>
          <Link href={link.path}>
            <Text fontSize="xl">{link.name}</Text>
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  );
};

const Index = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);

  const handleMenuSelect = (menuName) => {
    const selected = menuItems.find((item) => item.name === menuName);
    setSelectedMenu(selected);
  };

  return (
    <Container maxW="container.xl" display="flex" p={0}>
      <SideMenu onSelect={handleMenuSelect} />
      <Box flex="1" p={4}>
        <Text fontSize="2xl" mb={4}>
          {selectedMenu.name}
        </Text>
        <CentralPage links={selectedMenu.links} />
      </Box>
    </Container>
  );
};

export default Index;
