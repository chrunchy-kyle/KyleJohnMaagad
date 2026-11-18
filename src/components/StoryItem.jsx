
import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function StoryItem({
  image,
  label,
  own = false,
}) {
  return (
    <View style={styles.container}>

      <View
        style={[
          styles.storyBorder,
          own && styles.ownBorder,
        ]}
      >

        <Image
          source={image}
          style={styles.image}
        />

      </View>

      {own && (
        <View style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </View>
      )}

      <Text
        numberOfLines={1}
        style={[
          styles.label,
          own && styles.ownLabel,
        ]}
      >
        {label}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 105,
    alignItems: 'center',
    position: 'relative',
  },

  storyBorder: {
    width: 92,
    height: 92,
    borderRadius: 46,
    padding: 4,
    borderWidth: 3,
    borderColor: '#e1306c',
    backgroundColor: '#171a20',
  },

  ownBorder: {
    borderColor: '#343941',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },

  plusButton: {
    position: 'absolute',
    right: 2,
    bottom: 31,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#090c10',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusText: {
    color: '#111',
    fontSize: 23,
    lineHeight: 26,
  },

  label: {
    color: '#fff',
    fontSize: 13,
    marginTop: 7,
    maxWidth: 102,
  },

  ownLabel: {
    color: '#aeb2ba',
  },
});
