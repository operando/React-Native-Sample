/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
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
    Platform,
    TouchableOpacity,
    ViewPagerAndroid,
    DrawerLayoutAndroid
    // Switch,
    // ListItem,
    // List
} from 'react-native';

import {
    MKButton,
    MKTextField,
    MKColor,
    Textfield
} from 'react-native-material-kit';

import {List, ListItem, Switch} from 'native-base';

import ToastAndroid from './ToastAndroid';

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

class ClearText extends Component {
    constructor(props) {
        super(props);
        this.clearText = this.clearText.bind(this);
    }

    clearText() {
        ToastAndroid.show('Awesome', ToastAndroid.SHORT);
        this._textInput.setNativeProps({text: ''});
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput ref={component => this._textInput = component}
                           style={styles.textInput}/>
                <TouchableOpacity onPress={this.clearText}>
                    <Text>Clear text</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


//  Since it accepts any value, you can also use it to return platform specific component, like below:
// const Component = Platform.select({
//     ios: () => require('ComponentIOS'),
//     android: () => require('ComponentAndroid'),
// })();
//
// <Component />;


class ViewPagerSample extends Component {

    render() {
        return (
            <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
                <View style={styles.pageStyle}>
                    <Text>First page</Text>
                </View>
                <View style={styles.pageStyle}>
                    <Text>Second page</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

class SwitchSample extends Component {
    state = {
        trueSwitchIsOn: true,
        falseSwitchIsOn: false,
    };

    render() {
        const ListItemWithSwitch = props =>
            <ListItem>
                <Text style={{ alignSelf: 'center' }}>{props.text}</Text>
                <Text note/>
                <Switch
                    style={{ alignSelf: 'center' }}
                    onValueChange={props.onValueChange}
                    value={props.value}
                />
            </ListItem>;

        ListItemWithSwitch.propTypes = {
            text: PropTypes.string,
            onValueChange: PropTypes.func,
            value: PropTypes.boolean,
        };

        return (
            <View>
                <List>
                    <ListItemWithSwitch
                        text={'test'}
                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                        value={this.state.falseSwitchIsOn}/>
                    <ListItemWithSwitch
                        text={'test'}
                        onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                        value={this.state.trueSwitchIsOn}/>
                </List>
            </View>
        )
    }
}

class SwitchSample2 extends Component {
    state = {
        trueSwitchIsOn: true,
        falseSwitchIsOn: false,
    };

    render() {
        return (
            <View>
                <Switch
                    onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                    style={{marginBottom: 10}}
                    value={this.state.falseSwitchIsOn}/>
                <Switch
                    onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                    value={this.state.trueSwitchIsOn}/>
            </View>
        )
    }
}

class DrawerLayoutAndroidSample extends Component {

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Item1</Text>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Item2</Text>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}


const ColoredRaisedButton = MKButton.coloredButton()
    .withText('test')
    .withOnPress(() => {
        console.log("Hi, it's a colored button!");
    })
    .build();

// const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
//     .withPlaceholder('Number...')
//     .withStyle(styles.textfieldWithLabel)
//     .withTextInputStyle({flex: 1})
//     .withFloatingLabelFont({
//         fontSize: 10,
//         fontStyle: 'italic',
//         fontWeight: '200',
//     })
//     .withKeyboardType('numeric')
//     .build();

class MaterialSample extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <ColoredRaisedButton />
                <MKTextField
                    tintColor={MKColor.Lime}
                    textInputStyle={{color: MKColor.Orange}}
                    placeholder="Text…"
                    style={styles.textfield}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    },
    textfield: {
        height: 28,
        marginTop: 32,
    },
    textfieldWithLabel: {
        height: 48,
        marginTop: 10,
    },
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

import {Router, Scene} from 'react-native-router-flux';

import Scene1 from './components/Scene1'
import Scene2 from './components/Scene2'

class Route extends React.Component {
    render () {
        return(
            <Router>
                <Scene key="root">
                    <Scene key="Scene1" initial={true} component={Scene1} title="Scene1" hideNavBar={true}/>
                    <Scene key="Scene2" component={Scene2} title="Scene2" hideNavBar={true}/>
                </Scene>
            </Router>
        )
    }
}

//AppRegistry.registerComponent('ListViewBasics', () => TouchesSample);
AppRegistry.registerComponent('ListViewBasics', () => Route);
AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator);
AppRegistry.registerComponent('BlinkApp', () => BlinkApp);
// AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);
// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
