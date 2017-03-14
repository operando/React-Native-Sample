import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Container, Header, Title, Body, Content, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Scene2 extends Component {

    render() {
        return (
        <Container>
            <Header>
                <Body>
                <Title>{this.props.title}</Title>
                </Body>
            </Header>
            <Content style={{padding:16}}>
                <Text>Scene 2</Text>
                <Button onPress={()=> {Actions.pop();return true;}}><Text>Back</Text></Button>
            </Content>
        </Container>
        )
    }
}


module.exports = Scene2;