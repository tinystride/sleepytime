// @flow

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class SoundListItem extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  handleOnPress = () => {
    this.props.onPress(this.props.id);
  }

  render() {
    const { description, title } = this.props;

    return (
      <TouchableHighlight onPress={this.handleOnPress}>
        <View>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
  },
});
