import React, { useState } from "react";
import { Box, Container, VStack, HStack, Text, Link, IconButton, SimpleGrid, useTheme } from "@chakra-ui/react";

import menuData from "../data/menuItems.json";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const menuItems = menuData.menuItems.map(item => ({
  ...item,
  icon: { FaHome, FaUser, FaCog }[item.icon]
}));

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
