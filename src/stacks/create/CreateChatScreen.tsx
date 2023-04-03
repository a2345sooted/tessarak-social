import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';

const CreateChatScreen = () => {
    const {colors} = useContext(AppContext);

    return (
        <View
            style={{backgroundColor: colors.bg1, flex: 1, justifyContent: 'center'}}>
            <Text
                variant="headlineSmall"
                style={{fontWeight: 'bold', color: colors.text, paddingHorizontal: 30}}>
                Create Chat Tools
            </Text>
        </View>
    );
};

export default CreateChatScreen;
