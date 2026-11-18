
import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import PostHeader from './PostHeader';

export default function Post() {

  const posts = [
    {
      id: 1,
      username: 'Baesuzy',
      avatar: require('../asset/post-avatar.jpg'),
      image: require('../asset/post-photo.jpg'),
      likes: '12,500 likes',
      caption: 'Enjoying the little moments in life. ✨',
      comments: 'View all 245 comments',
      time: '2 HOURS AGO',
    },

    {
      id: 2,
      username: 'Joy Pam-ot',
      avatar: require('../asset/story-aim.jpg'),
      image: require('../asset/joypic1.webp'),
      likes: '8,320 likes',
      caption: 'Beautiful memories worth keeping. ❤️',
      comments: 'View all 120 comments',
      time: '5 HOURS AGO',
    },
  ];

  return (
    <View style={styles.container}>

      {posts.map((post) => (

        <View key={post.id} style={styles.post}>

          {/* POST HEADER */}
          <PostHeader
            username={post.username}
            avatar={post.avatar}
          />

          {/* POST IMAGE */}
          <Image
            source={post.image}
            style={styles.postImage}
            resizeMode="cover"
          />

          {/* POST ACTIONS */}
          <View style={styles.actions}>

            <View style={styles.leftActions}>

              <Ionicons
                name="heart-outline"
                size={28}
                color="#fff"
              />

              <Ionicons
                name="chatbubble-outline"
                size={26}
                color="#fff"
              />

              <Ionicons
                name="paper-plane-outline"
                size={26}
                color="#fff"
              />

            </View>

            <Ionicons
              name="bookmark-outline"
              size={27}
              color="#fff"
            />

          </View>

          {/* POST DETAILS */}
          <View style={styles.details}>

            <Text style={styles.likes}>
              {post.likes}
            </Text>

            <Text style={styles.caption}>
              <Text style={styles.bold}>
                {post.username}
              </Text>
              {' '}{post.caption}
            </Text>

            <Text style={styles.comments}>
              {post.comments}
            </Text>

            <Text style={styles.time}>
              {post.time}
            </Text>

          </View>

        </View>

      ))}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#090c10',
  },

  post: {
    marginBottom: 15,
  },

  postImage: {
    width: '100%',
    height: 400,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
  },

  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },

  details: {
    paddingHorizontal: 18,
    paddingBottom: 18,
  },

  likes: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  caption: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },

  bold: {
    fontWeight: 'bold',
  },

  comments: {
    color: '#8e949e',
    fontSize: 14,
    marginBottom: 8,
  },

  time: {
    color: '#777',
    fontSize: 10,
  },

});
