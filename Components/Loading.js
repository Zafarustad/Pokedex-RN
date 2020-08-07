import React, {Component} from 'react';
import {Animated, Image, Easing, StyleSheet, View} from 'react-native';

class Loading extends Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.spin();
  }
  spin = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      useNativeDriver: true,
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
    }).start(() => this.spin());
  };
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 0.5],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 30,
            height: 30,
            transform: [{rotate: spin}],
          }}
          source={require('../assests/pokeball.png')}
        />
      </View>
    );
  }
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
