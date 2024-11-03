import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image 
                source={require('../assets/images/logoNekolist.png')}
                style={styles.logo} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        padding: 5,
        backgroundColor: "#f2f2f2",
    },
    logo: {
        resizeMode: 'contain',
        width: "100%",
        justifyContent: "center",
    },
});

export default Header;
