import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Animated , {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function App() {
  const headerCardHeight = useSharedValue(0);
  const listItemX = useSharedValue(-Dimensions.get('window').width - 40);

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: headerCardHeight.value,
    };
  });

  const listItemStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: listItemX.value}],
    };
  });

  useEffect(() => {
    headerCardHeight.value = withTiming(350, {duration: 1500});
    listItemX.value = withTiming(0, {duration: 1500});
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, headerStyle]} />

      <View style={styles.overlayContainer}>
        <View style={styles.headerRow}>
          <Image
            source={require('../assets/image/menu-bar.png')}
            style={styles.menuIcon}
          />

          <Text style={styles.headerTitle}>Demo App</Text>

          <Image
            source={require('../assets/image/boy.png')}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.greetingText}>Good Morning Monil</Text>
        <Text style={styles.activityText}>Here Is Your Activity</Text>

        <FlatList
          data={[1, 1, 1, 1, 1]}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <Animated.View style={[styles.listItem, listItemStyle]}>
              <View style={styles.listItemRow}>
                <Image
                  source={require('../assets/image/treadmill.png')}
                  style={styles.treadmillIcon}
                />
                <Text style={styles.timeText}>1 hour ago</Text>
              </View>

              <Text style={styles.descriptionText}>lorem picsum lorem</Text>
            </Animated.View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 350,
    backgroundColor: '#614bf3',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  overlayContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerRow: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    tintColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  greetingText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
    marginTop: 50,
  },
  activityText: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    marginTop: 10,
  },
  listItem: {
    width: Dimensions.get('window').width - 40,
    height: 100,
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  listItemRow: {
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  treadmillIcon: {
    width: 24,
    height: 24,
  },
  timeText: {
    color: '#9e9e9e',
  },
  descriptionText: {
    color: '#9e9e9e',
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
});



