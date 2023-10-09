import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const CustomTopTabs = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name
                const isFocused = state.index === index
                const marginLeft = index === 0 ? 16 : 0;
                const marginRight = index === state.routes.length - 1 ? 16 : 0;

                return (
                    <TouchableOpacity
                        key={index}
                        style={[styles.tabItem, isFocused ? styles.tabItemFocused : {},
                            { marginLeft, marginRight },]}
                        onPress={() => {
                            navigation.navigate(route.name);
                        }}
                    >
                        <Text style={isFocused ? styles.tabTextFocused : styles.tabText}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#333333',
    },
    tabItem: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
    },
    tabItemFocused: {
        borderBottomWidth: 2,
        borderBottomColor: '#F79300',
        backgroundColor: 'rgba(247, 147, 0, 0.10)',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,

    },
    tabText: {
        color: 'white',
    },
    tabTextFocused: {
        color: '#F79300',
    },
});


export default CustomTopTabs