
import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Header from '../components/Header';
import Stories from '../components/Stories';
import Post from '../components/Post';
import BottomTabBar from '../components/BottomTabBar';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      {/* FIXED HEADER */}
      <Header />

      {/* SCROLLABLE FEED */}
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      >

        <Stories />

        <Post />

      </ScrollView>

      {/* FIXED BOTTOM NAVIGATION */}
      <BottomTabBar />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#090c10',
  },

  scroll: {
    flex: 1,
  },

});
