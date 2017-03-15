import sp from 'react-native-default-preference';

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Container, Header, Title, Body, Content, Button} from 'native-base';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: "0"};
        sp.get("counter")
            .then((v) => {
                if (v === null) {
                    return Promise.resolve("0");
                } else {
                    return Promise.resolve(v);
                }
            })
            .then((counter) => this.setState({counter}));
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
                        onPress={()=>
                        sp.get("counter")
                        .then((v) => {
                            if (v === null) {
                                sp.set("counter","0")
                                    .then(()=> sp.get("counter").then((counter) => this.setState({counter})));
                            } else {
                                sp.set("counter",(++v).toString())
                                    .then(()=> sp.get("counter").then((counter) => this.setState({counter})));
                            }
                        })} info><Text style={{color : '#ffffff'}}>Increment</Text></Button>
                    <Text style={{fontSize : 150}}>{this.state.counter}</Text>
                </Content>
            </Container>
        )
    }
}

module.exports = Counter;
