
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>

      <Ionicons
        name="add"
        size={38}
        color="#fff"
      />

      <View style={styles.logoContainer}>

        <Text style={styles.logo}>
          Instagram
        </Text>

        <Ionicons
          name="chevron-down"
          size={18}
          color="#fff"
        />

      </View>

      <Ionicons
        name="heart-outline"
        size={35}
        color="#fff"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  logo: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
    letterSpacing: -1.5,
  },
});
