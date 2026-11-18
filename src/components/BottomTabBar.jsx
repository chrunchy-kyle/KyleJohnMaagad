
import React from 'react';

import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function BottomTabBar() {
  return (
    <View style={styles.container}>

      <View style={styles.activeTab}>
        <Ionicons
          name="home"
          size={32}
          color="#fff"
        />
      </View>

      <MaterialCommunityIcons
        name="play-box-outline"
        size={35}
        color="#fff"
      />

      <Ionicons
        name="paper-plane-outline"
        size={34}
        color="#fff"
      />

      <Ionicons
        name="search-outline"
        size={35}
        color="#fff"
      />

      <Image
        source={require('../asset/my-avatar.jpg')}
        style={styles.avatar}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#090c10',
  },

  activeTab: {
    width: 62,
    height: 52,
    borderRadius: 30,
    backgroundColor: '#242830',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
});
