import React, {Component} from 'react';
import {Router, Scene, Modal, Actions} from 'react-native-router-flux';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';

import {Container, Header, Title, Body, Content, Button} from 'native-base';

import ToastAndroid from '../ToastAndroid';

class Scene1 extends Component {

    render() {
        ToastAndroid.show(this.props.title, ToastAndroid.SHORT);

        return (
            <Container>
                <Header>
                    <Body>
                    <Title>{this.props.title}</Title>
                    </Body>
                </Header>
                <Content style={{padding:16}}>
                    <Text>Scene 1</Text>
                    <Button onPress={Actions.Scene2}><Text>Go to Scene2</Text></Button>
                </Content>
            </Container>
        )
    }
}

module.exports = Scene1;