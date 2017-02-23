// @flow

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import find from 'lodash/find';

import SoundListItem from './SoundListItem';
import MiniPlayer from './MiniPlayer';

import COLORS from '../constants/colors';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Spacewalk',
    description: 'Peaceful tones, stardust and quiet',
    sound: 'star-gazing.mp3',
  },
  {
    id: '2',
    title: 'A Day in the Big City',
    description: 'City traffic, voices and tones',
    sound: 'city-lights.mp3',
  },
  {
    id: '3',
    title: 'Seaside Harbor Town',
    description: 'Rolling waves, distant seagulls',
    sound: 'sounds-of-kauai.mp3',
  },
];

export default class App extends Component {
  state = {
    activeId: '',
    anyHasPlayed: false,
  }

  handleItemPress = (id) => {
    this.setState({
      activeId: id,
      anyHasPlayed: true,
    });
  }

  render() {
    const {activeId, anyHasPlayed} = this.state;
    const activeItem = find(MOCK_DATA, (o) => { return o.id === activeId; });

    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          {
            MOCK_DATA.map((item) => {
              return (
                <View key={item.id}>
                  <SoundListItem
                    description={item.description}
                    id={item.id}
                    onPress={this.handleItemPress}
                    title={item.title}
                  />
                </View>
              );
            })
          }
        </ScrollView>
        {anyHasPlayed &&
          <MiniPlayer
            title={activeItem.title}
            sound={activeItem.sound}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: COLORS.lightestGray,
  },
  list: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
});
