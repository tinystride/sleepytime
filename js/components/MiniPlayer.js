// @flow

import React, { Component, PropTypes } from 'react';
import {
  NativeModules,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import COLORS from '../constants/colors';

const audio = NativeModules.RNAudioPlayerURL;

export default class MiniPlayer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    isPlaying: false,
  }

  componentDidMount() {
    this.initAudio();
    this.play();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url === this.props.url) { return; }
    this.initAudio();
  }

  initAudio() {
    const {url} = this.props;
    audio.initWithURL(url);
  }

  play() {
    this.setState({isPlaying: true});
    audio.play();
  }

  pause() {
    this.setState({isPlaying: false});
    audio.pause();
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
