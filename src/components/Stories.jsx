
import React from 'react';

import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import StoryItem from './StoryItem';

export default function Stories() {

  const stories = [
    {
      label: 'Your story',
      image: require('../asset/story-you.jpg'),
      own: true,
    },
    {
      label: '_geeloy',
      image: require('../asset/story-marlon.jpg'),
    },
    {
      label: 'Joy Pam-ot',
      image: require('../asset/story-aim.jpg'),
    },
    {
      label: 'Shell Jon',
      image: require('../asset/story-meg.jpg'),
    },
  ];

  return (
    <View style={styles.container}>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {stories.map((story, index) => (
          <StoryItem
            key={index}
            image={story.image}
            label={story.label}
            own={story.own}
          />
        ))}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 125,
    justifyContent: 'center',
  },

  content: {
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 5,
  },
});
