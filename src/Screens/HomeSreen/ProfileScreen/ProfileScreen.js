import React from 'react';
import {Text, View} from "react-native";
import ProfileScreenStyles from "./ProfileScreenStyles";

function ProfileScreen(props) {
    return (
        <View style={ProfileScreenStyles.container}>
            <Text>
                Profile Screen
            </Text>
        </View>
    );
}

export default ProfileScreen;
