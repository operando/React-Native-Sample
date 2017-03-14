import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Container, Content, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Scene2 extends Component {

    render() {
        return (
            <View >
                <Text>Scene 2</Text>
                <Button onPress={()=> {Actions.pop();return true;}}><Text>Back</Text></Button>
            </View>
        )
    }
}


module.exports = Scene2;