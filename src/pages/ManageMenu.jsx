import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, HStack, Text } from "@chakra-ui/react";

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState("");

  const addMenuItem = () => {
    setMenuItems([...menuItems, { id: menuItems.length + 1, name: newMenuItem }]);
    setNewMenuItem("");
  };

  const removeMenuItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Add New Menu Item</FormLabel>
          <HStack>
            <Input value={newMenuItem} onChange={(e) => setNewMenuItem(e.target.value)} placeholder="Menu Item Name" />
            <Button onClick={addMenuItem}>Add</Button>
          </HStack>
        </FormControl>
        <Box>
          {menuItems.map((item) => (
            <HStack key={item.id} justify="space-between">
              <Text>{item.name}</Text>
              <Button onClick={() => removeMenuItem(item.id)}>Remove</Button>
            </HStack>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default ManageMenu;
