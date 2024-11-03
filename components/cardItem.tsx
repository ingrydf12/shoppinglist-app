import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface CardItemProps {
    itemText: string;
    onDelete: () => void;
    onCheck: () => void;
    completed: boolean;
}

const CardItem: React.FC<CardItemProps> = ({ itemText, onDelete, onCheck, completed }) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.infoCard} onPress={onCheck}>
                <MaterialIcons 
                    name={completed ? "check-box" : "check-box-outline-blank"} 
                    size={24} 
                    color="black" 
                />
                <Text style={[styles.textItem, completed && styles.completedText]}>
                    {itemText}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons
                    name="delete"
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 40,
        backgroundColor: "#fafafa",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    infoCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    textItem: {
        color: "#161616",
        fontSize: 15,
        fontWeight: "semibold",
    },
    completedText: {
        textDecorationLine: "line-through",
        color: "#9CA3AF",
    },
});

export default CardItem;