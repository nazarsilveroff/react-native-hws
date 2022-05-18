import React from 'react';

import {Text, View} from "react-native";
import PostsScreenStyles from "./PostsScreenStyles";


function PostsScreen(props) {
    return (
        <View style={PostsScreenStyles.container}>
            <Text>
                Posts Screen
            </Text>
        </View>
    );
}

export default PostsScreen;
