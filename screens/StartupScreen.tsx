import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the type for the navigation prop
type StartupScreenProps = {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
};

const StartupScreen: React.FC<StartupScreenProps> = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the Login screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/kzvnt_tech_800x800.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  logo: {
    width: '100%', // Adjust the width and height as needed
    height: '100%',
    resizeMode: 'contain',
  },
  subText: {
    width: 150, // Adjust the width and height as needed
    height: 50,
    marginTop: 10,
    resizeMode: 'contain',
  },
});

export default StartupScreen;