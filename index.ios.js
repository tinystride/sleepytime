/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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

class Sleepytime extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          MOCK_DATA.map((item) => {
            return (
              <View key={item.id}>
                <Text style={styles.title}>
                 {item.title}
                </Text>
                <Text style={styles.description}>
                 {item.description}
                </Text>
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
