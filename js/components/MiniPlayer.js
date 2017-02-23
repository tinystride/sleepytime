// @flow

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Sound from 'react-native-sound';

import COLORS from '../constants/colors';

export default class MiniPlayer extends Component {
  static propTypes = {
    sound: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  state = {
    isPlaying: false,
  }

  componentDidMount() {
    this.setup();
    this.play();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sound === this.props.sound) { return; }
    this.reset();
    this.setup();
  }

  setup() {
    const {sound} = this.props;

    // TODO: return a promise. on init, await promise before play()
    this.sound = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        // error
      } else {
        // success
      }
    });
    this.sound.setNumberOfLoops(-1); // loop sound until .stop() is called
  }

  reset() {
    this.sound.stop(); // do we really need this?
    this.sound.release();
  }

  play() {
    this.setState({isPlaying: true});
    this.sound.play();
  }

  pause() {
    this.setState({isPlaying: false});
    this.sound.pause();
  }

  handleTogglePlayPress = () => {
    this.state.isPlaying ? this.pause : this.play;
  }

  render() {
    const {title} = this.props;
    const {isPlaying} = this.state;

    return (
      <View style={styles.player}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          onPress={this.handleTogglePlayPress}
          style={styles.button}
          >
          <Text>{ isPlaying ? 'Pause' : 'Play' }</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.lightestGray,
    padding: 5,
  },
  player: {
    alignItems: 'center',
    backgroundColor: COLORS.darkBlue,
    flexDirection: 'row',
    padding: 10,
    height: 80,
  },
  title: {
    color: COLORS.lightestGray,
    fontSize: 20,
    flex: 1,
  }
});
