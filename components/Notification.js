import React, {Component} from 'react';

import {
    Text,
} from 'react-native';

import {Container, Header, Title, Body, Content, Button} from 'native-base';

let PushNotification = require('react-native-push-notification');

class Notification extends Component {

    _notification() {
        PushNotification.localNotification({
            id: '0',
            ticker: "My Notification Ticker", // (optional)
            autoCancel: true,
            largeIcon: "ic_launcher",
            // bigText: "My big text that will be shown when notification is expanded",
            subText: "This is a subText",
            color: "red",
            vibrate: false,

            title: "Notification Title",
            message: "Notification Message",
            playSound: false,
        });
    }

    render() {

        return (
            <Container>
                <Header>
                    <Body>
                    <Title>{this.props.title}</Title>
                    </Body>
                </Header>
                <Content style={{padding:16}}>
                    <Button onPress={this._notification} info>
                        <Text style={{color:"#ffffff"}}>Notification</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

module.exports = Notification;