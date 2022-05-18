import React from 'react';
import {Text, View} from "react-native";
import CommentsScreenStyles from "./CommentsScreenStyles";

function CommentsScreen(props) {
    return (
        <View style={CommentsScreenStyles.container}>
            <Text>
                Comments Screen
            </Text>
        </View>
    );
}

export default CommentsScreen;
