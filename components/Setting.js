import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {
    Text,
    BackAndroid,
    Alert
} from 'react-native';
import {Container, Header, Title, Body, Content, ListItem} from 'native-base';

class Setting extends Component {

    render() {
        BackAndroid.addEventListener('hardwareBackPress', function () {
            console.log("back");
            Alert.alert(
                'アプリを終了しますか？',
                'アプリを終了しますか？',
                [
                    {
                        text: 'Cancel', onPress: () => {
                    }, style: 'cancel'
                    },
                    {text: 'OK', onPress: () => BackAndroid.exitApp()},
                ],
                {cancelable: true}
            );
            return true;
        });

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
                    <ListItem onPress={Actions.Counter}>
                        <Text>Counter</Text>
                    </ListItem>
                    <ListItem onPress={Actions.Sushi}>
                        <Text>Sushi</Text>
                    </ListItem>
                    <ListItem onPress={Actions.Notification}>
                        <Text>Notification</Text>
                    </ListItem>
                    <ListItem onPress={Actions.OpenUrl}>
                        <Text>OpenUrl</Text>
                    </ListItem>
                    <ListItem onPress={Actions.SnackbarSample}>
                        <Text>SnackbarSample</Text>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

module.exports = Setting;