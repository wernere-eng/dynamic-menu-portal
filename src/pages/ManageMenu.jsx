import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, HStack, Text, IconButton } from "@chakra-ui/react";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [editingName, setEditingName] = useState("");

  const addMenuItem = () => {
    setMenuItems([...menuItems, { id: menuItems.length + 1, name: newMenuItem }]);
    setNewMenuItem("");
  };

  const removeMenuItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  const startEditing = (item) => {
    setEditingItem(item);
    setEditingName(item.name);
  };

  const cancelEditing = () => {
    setEditingItem(null);
    setEditingName("");
  };

  const saveEditing = () => {
    setMenuItems(menuItems.map((item) => (item.id === editingItem.id ? { ...item, name: editingName } : item)));
    setEditingItem(null);
    setEditingName("");
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
              {editingItem && editingItem.id === item.id ? (
                <>
                  <Input value={editingName} onChange={(e) => setEditingName(e.target.value)} />
                  <IconButton icon={<FaCheck />} onClick={saveEditing} />
                  <IconButton icon={<FaTimes />} onClick={cancelEditing} />
                </>
              ) : (
                <>
                  <Text>{item.name}</Text>
                  <IconButton icon={<FaEdit />} onClick={() => startEditing(item)} />
                  <Button onClick={() => removeMenuItem(item.id)}>Remove</Button>
                </>
              )}
            </HStack>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default ManageMenu;
