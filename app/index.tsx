import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CardItem from '../components/cardItem';

export default function Index() {
  const [items, setItems] = useState<{ text: string; completed: boolean }[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { text: newItem, completed: false }]);
      setNewItem('');
    }
  };

  const handleDelete = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleCheck = (index: number) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <header></header>

      <Text style={styles.title}>Compras da semana</Text>

      <TextInput
        placeholder="Adicione um novo item"
        placeholderTextColor={"#9CA3AF"}
        style={styles.input}
        value={newItem}
        onChangeText={setNewItem}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddItem}>
        <Text style={styles.textButton}>Adicionar item</Text>
      </TouchableOpacity>

      <View>
        {items.map((item, index) => (
          <CardItem
            key={index}
            itemText={item.text}
            completed={item.completed}
            onCheck={() => handleCheck(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </View>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    backgroundColor: "#F4F5FB",
  },
  title: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left"
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
  },
  button: {
    width: "100%",
    backgroundColor: "#BA2B57",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fafafa",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
  },
});
