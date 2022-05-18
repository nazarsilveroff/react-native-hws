import React, {useState} from 'react';
import {TouchableOpacity, View, Button, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import PostsScreen from "./PostsScreen/PostsScreen";

import {MaterialIcons, AntDesign, Feather, Octicons} from '@expo/vector-icons';

const HomeStack = createBottomTabNavigator();

export const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#BDBDBD',
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 17,
        alignContent: "center",
    },
    headerRightIcon: {
        color: '#BDBDBD',
        marginRight: 18,
    },
    headerLeftIcon: {
        color: '#BDBDBD',
        marginLeft: 18,
    },
    tabBar: {
        borderTopWidth: 1,
        borderColor: '#BDBDBD',
        height: 80
    },
    bottomIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 40,
        borderRadius: 20,
    }
});

function HomeNavigation() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator
            >
                <HomeStack.Screen
                    options={{
                        title: 'Публикации',
                        headerStyle: styles.header,
                        headerTitleStyle: styles.headerTitle,
                        headerTitleAlign: 'center',
                        headerRight: (() => (
                            <MaterialIcons style={styles.headerRightIcon} name="logout" size={24}/>)),
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,
                        tabBarIcon: ({focused}) => (
                            <View
                                style={{
                                    ...styles.bottomIconContainer,
                                    backgroundColor: focused ? '#FF6C00' : 'transparent'
                                }}
                            >
                                <MaterialIcons name="grid-view" size={24} color={focused ? '#FFFFFF' : '#212121'}/>
                            </View>
                        ),
                    }}
                    name="posts"
                    component={PostsScreen}
                />
                <HomeStack.Screen
                    options={({navigation: {goBack}}) => ({
                        title: 'Создть публикацию',
                        headerStyle: styles.header,
                        headerTitleStyle: styles.headerTitle,
                        headerTitleAlign: 'center',
                        headerLeft: (() => (
                            <Octicons style={styles.headerLeftIcon} name="arrow-left" size={24}
                                      onPress={() => goBack()}/>)),
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,
                        tabBarIcon: ({focused}) => (
                            <View
                                style={{
                                    ...styles.bottomIconContainer,
                                    backgroundColor: focused ? '#FF6C00' : 'transparent'
                                }}
                            >
                                <AntDesign name="plus" size={24} color={focused ? '#FFFFFF' : '#212121'}/>
                            </View>
                        ),
                    })}
                    name="createPosts"
                    component={CreatePostsScreen}
                />
                <HomeStack.Screen
                    options={{
                        title: 'Имя пользователя',
                        headerStyle: styles.header,
                        headerTitleStyle: styles.headerTitle,
                        headerTitleAlign: 'center',
                        headerRight: (() => (
                            <MaterialIcons style={styles.headerRightIcon} name="logout" size={24}/>)),
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,
                        tabBarIcon: ({focused}) => (
                            <View
                                style={{
                                    ...styles.bottomIconContainer,
                                    backgroundColor: focused ? '#FF6C00' : 'transparent'
                                }}
                            >
                                <Feather name="user" size={24} color={focused ? '#FFFFFF' : '#212121'}/>
                            </View>
                        ),
                    }}
                    name="profile"
                    component={ProfileScreen}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}

export default HomeNavigation;
