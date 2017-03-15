import React, {Component} from 'react';

import {
    Text,
    Linking
} from 'react-native';

import {Container, Header, Title, Body, Content, Button} from 'native-base';

class OpenURLButton extends React.Component {
    static propTypes = {
        url: React.PropTypes.string,
    };

    handleClick = () => {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (supported) {
                Linking.openURL(this.props.url);
            } else {
                console.log('Don\'t know how to open URI: ' + this.props.url);
            }
        });
    };

    render() {
        return (
            <Button
                onPress={this.handleClick} info>
                <Text style={{color:"#ffffff"}}>Open {this.props.url}</Text>
            </Button>
        );
    }
}

class OpenUrl extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>{this.props.title}</Title>
                    </Body>
                </Header>
                <Content style={{padding:16}}>
                    <OpenURLButton url={'https://www.facebook.com'}/>
                </Content>
            </Container>
        )
    }
}

module.exports = OpenUrl;