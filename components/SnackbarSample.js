import React, {Component} from 'react';

import {
    Text,
    ToastAndroid
} from 'react-native';

import Snackbar from 'react-native-snackbar';

import {Container, Header, Title, Body, Content, Button} from 'native-base';

class SnackbarSample extends Component {

    _showSnackbarSample() {
        Snackbar.show({
            title: '🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣',
            duration: Snackbar.LENGTH_SHORT,
        });
    }

    _show() {
        Snackbar.show({
            title: 'React Native Meetup Meetup Meetup Meetup Meetup Meetup Meetup',
            duration: Snackbar.LENGTH_LONG,
            action: {
                title: 'UNDO',
                color: 'green',
                onPress: () => {
                    ToastAndroid.show('ファーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー', ToastAndroid.SHORT);
                },
            },
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
                    <Button
                        onPress={ this._showSnackbarSample }
                        info><Text style={{color:"#fff"}}>Show SnackbarSample</Text></Button>
                    <Button
                        style={{marginTop:16}}
                        onPress={ this._show }
                        info><Text style={{color:"#fff"}}>Show SnackbarSample</Text></Button>
                </Content>
            </Container>
        )
    }
}

module.exports = SnackbarSample;