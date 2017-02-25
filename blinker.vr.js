import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true, col: 'blue'};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);

    setInterval(() => {
      this.setState({ col: 'green' });
    }, 500);

    setInterval(() => {
      this.setState({ col: 'red' });
    }, 300);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={{color: this.state.col}}>{display}</Text>
    );
  }
}

class Blinker extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View style={{transform: [{translate: [0, 0, -3]}]}}>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Blinker', () => Blinker)

