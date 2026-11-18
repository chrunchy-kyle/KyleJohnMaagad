
import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function PostHeader({ username, avatar }) {
  return (
    <View style={styles.container}>

      {/* PROFILE PICTURE */}
      <Image
        source={avatar}
        style={styles.avatar}
      />

      {/* USERNAME */}
      <View style={styles.nameContainer}>

        <Text style={styles.username}>
          {username}
        </Text>

        <Ionicons
          name="checkmark-circle"
          size={17}
          color="#2697f5"
        />

      </View>

      {/* MENU */}
      <View style={styles.menu}>
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    height: 72,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    gap: 5,
  },

  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  menu: {
    marginLeft: 'auto',
    gap: 6,
    padding: 5,
  },

  menuLine: {
    width: 30,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#fff',
  },

});
