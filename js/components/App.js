// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SoundListItem from './SoundListItem';

import COLORS from '../constants/colors';

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
];

export default class App extends Component {
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
    backgroundColor: COLORS.lightestGray,
    padding: 10,
    paddingTop: 20,
  },
});
