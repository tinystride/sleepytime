/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Spacewalk',
    description: 'Peaceful tones, stardust and quiet',
  },
  {
    id: '2',
    title: 'A Day in the Big City',
    description: 'City traffic, voices and tones',
  },
]

class SoundListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

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

class Sleepytime extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          MOCK_DATA.map((item) => {
            return (
              <View key={item.id}>
                <SoundListItem
                  description={item.description}
                  title={item.title}
                />
              </View>
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F3F3F3',
    padding: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
  },
});

AppRegistry.registerComponent('Sleepytime', () => Sleepytime);
