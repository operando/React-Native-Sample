import React, {Component} from 'react';
import { Actions} from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Container, Header, Title, Body, Content, ListItem} from 'native-base';

class Setting extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>{this.props.title}</Title>
                    </Body>
                </Header>
                <Content style={{padding:16}}>
                    <ListItem onPress={Actions.Scene1}>
                        <Text>Scene1</Text>
                    </ListItem>
                    <ListItem onPress={Actions.Scene2}>
                        <Text>Scene2</Text>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

module.exports = Setting;