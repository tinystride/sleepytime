// @flow

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SoundListItem extends Component {
  static propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { description, title } = this.props;

    return (
      <View>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
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
