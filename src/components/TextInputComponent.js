import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";

const TextInputComponent = ({paramPlaceholder='', paramOnChange=null, paramValue=null}) => {
    return (
        <View style={styles.TextInputView}>
            <TextInput style={styles.TextInputStyle}
                placeholder={paramPlaceholder}
                value={paramValue}
                onChange={paramOnChange}
                placeholderTextColor='#999999'
            />
        </View>
    );
}

export default TextInputComponent;

const styles = StyleSheet.create({
    TextInputView: {
        // backgroundColor: 'blue',
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        width: '100%',//345
        height: 52,
        marginTop: 3,
        marginBottom: 3,
        justifyContent: 'center',
        },
    TextInputStyle: {
        fontSize: 17,
    },  
})