import React, { useState } from "react";
import { Box, Container, VStack, HStack, Text, Input, Button, IconButton } from "@chakra-ui/react";
import { FaSave, FaTrash, FaHome, FaUser, FaCog } from "react-icons/fa";

const EditMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Home", icon: FaHome },
    { id: 2, name: "Profile", icon: FaUser },
    { id: 3, name: "Settings", icon: FaCog },
  ]);

  const handleNameChange = (id, newName) => {
    setMenuItems(menuItems.map((item) => (item.id === id ? { ...item, name: newName } : item)));
  };

  const handleSave = () => {};

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4}>
        {menuItems.map((item) => (
          <HStack key={item.id} spacing={4} width="100%">
            <Input value={item.name} onChange={(e) => handleNameChange(item.id, e.target.value)} />
            <IconButton aria-label="Delete" icon={<FaTrash />} onClick={() => handleDelete(item.id)} />
          </HStack>
        ))}
        <Button leftIcon={<FaSave />} onClick={handleSave}>
          Save Changes
        </Button>
      </VStack>
    </Container>
  );
};

export default EditMenu;
