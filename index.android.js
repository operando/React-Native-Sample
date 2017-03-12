/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    ListView,
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

export default class AwesomeProject extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Image source={pic} style={{width: 193, height: 110}}/>
            </View>
        );
    }
}


class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
            </View>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {shoeText: true};

        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let d = this.state.showText ? this.props.text : '';
        return (
            <Text style={styles.bigBlue}>{d}</Text>
        );
    }
}

class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>
                <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>
                <View style={{
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>

            </View>
        );
    }
}

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    render() {
        return (
            <View style={{padding:10}}>
                <TextInput
                    style={{height:100}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <ScrollView>
                    <Text style={{padding:10,fontSize:100}}>
                        {this.state.text.split(" ").map((word) => word && '🍕').join(' ')}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

class ListViewBasics extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
            ])
        };
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowDate) => <Text style={{fontSize:60}}>{rowDate}</Text>}
                />
            </View>
        );
    }
}

class TouchesSample extends Component {
    render() {
        return (
            <View >
                <MyButton />
                <MyButton2 />
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                       style={{width: 400, height: 400}}/>

            </View>
        );
    }
}

class MyButton extends Component {
    _onPressButton() {
        console.log("tap");
    }

    _onLongPress() {
        console.log("_onLongPress");
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPress}>
                <Text>Button</Text>
            </TouchableHighlight>
        );
    }
}

class MyButton2 extends Component {
    _onPressButton() {
        console.log("tap");
    }

    _onLongPress() {
        console.log("_onLongPress");
    }

    render() {
        return (
            <TouchableNativeFeedback onPress={this._onPressButton} onLongPress={this._onLongPress}>
                <Text>Button</Text>
            </TouchableNativeFeedback>
        );
    }
}

function getMoviesFromApiAsync() {
    return fetch("https://facebook.github.io/react-native/movies.json")
        .then((r) => r.json())
        .then((r) => {
            return r.movies;
        })
        .catch((e) => {
            console.error(e);
        });
}

async function getMoviesFromApi() {
    try {
        let response = await fetch('https://facebook.github.io/react-native/movies.json');
        let responseJson = await response.json();
        return responseJson.movies;
    } catch (error) {
        console.error(error);
    }
}

class PlatformSample extends Component {
    render() {
        if (Platform.Version > 21) {
            return (
                <Text>Over 21</Text>
            );
        } else {
            return (
                <Text>Under 21</Text>
            );
        }
    }
}


//  Since it accepts any value, you can also use it to return platform specific component, like below:
// const Component = Platform.select({
//     ios: () => require('ComponentIOS'),
//     android: () => require('ComponentAndroid'),
// })();
//
// <Component />;


const styles = StyleSheet.create({
    bigBlue: {
        ...Platform.select({
            ios: {
                color: "blue",
            },
            android: {
                color: "red",
            }
        }),
        fontWeight: "bold",
        fontSize: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


//AppRegistry.registerComponent('ListViewBasics', () => TouchesSample);
AppRegistry.registerComponent('ListViewBasics', () => PlatformSample);
AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator);
AppRegistry.registerComponent('BlinkApp', () => BlinkApp);
// AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);
// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
