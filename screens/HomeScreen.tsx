import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the types for the navigation stack
type RootStackParamList = {
  StartupScreen: undefined;
  Home: undefined;
  Register: undefined;
  Login: undefined;
};

// Define the props for the HomeScreen component
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handleLogout = () => {
    setModalVisible(false); // Close the modal before logging out
    // Implement your logout functionality here
    Alert.alert('Logout', 'You have been logged out.', [
      { text: 'OK', onPress: () => navigation.replace('StartupScreen') },
    ]);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Modal acting as a drawer */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.modalCloseButton}>
            <Ionicons name="close-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.modalMenuItem}>
            <Ionicons name="log-out-outline" size={24} color="black" />
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleModal}>
            <Ionicons name="menu-outline" size={24} color="white" />
          </TouchableOpacity>
          <Image source={require('../assets/app_logo.png')} style={styles.logo} />
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.welcome}>Welcome to our app, Lorem!</Text>

        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>Promotional Advertisement</Text>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Ionicons name="build-outline" size={50} color="black" />
            <Text>Repair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Ionicons name="clipboard-outline" size={50} color="black" />
            <Text>Check-Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Ionicons name="brush-outline" size={50} color="black" />
            <Text>Cleaning</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Available Personnels</Text>
        <View style={styles.personnelsContainer}>
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity key={item} style={styles.personnelItem}>
              <Ionicons name="person-circle-outline" size={40} color="gray" />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.personnelsContainer}>
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity key={item} style={styles.personnelItem}>
              <Ionicons name="person-circle-outline" size={40} color="gray" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom navigation bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="black" />
          <Text>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={24} color="black" />
          <Text>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db', // Clean blue background
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  welcome: {
    fontStyle: 'italic',
    fontSize: 22,
    color: 'white',
    marginTop: 20,
    marginBottom: 25,
  },
  promoContainer: {
    backgroundColor: 'white',
    padding: 70,
    borderRadius: 20,
    marginBottom: 20,
  },
  promoText: {
    textAlign: 'center',
    color: 'gray',
  },
  sectionTitle: {
    fontStyle: 'normal',
    fontSize: 22,
    color: 'white',
    marginTop: 20,
    marginBottom: 25,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 20,
    alignItems: 'center',
  },
  personnelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  personnelItem: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 50,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    marginTop: 60, // Adjust as needed to position below the status bar
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalCloseButton: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  modalMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
});

export default HomeScreen;