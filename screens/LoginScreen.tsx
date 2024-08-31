import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationType'; // Assuming you have this

// Define the props for the LoginScreen
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/app_logo.png')} style={styles.logoImage} resizeMode="contain" />
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#aaa" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#aaa" value={username} onChangeText={setUsername} />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#aaa" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry={true} value={password} onChangeText={setPassword} />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Register Here</Text>
      </TouchableOpacity>
      <Text style={styles.credText}>@2024 Kazervant Technologies. All Rights Reserved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3498db' },
  logoImage: { width: 250, height: 150, marginBottom: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', width: '80%', height: 50, backgroundColor: 'white', borderRadius: 25, paddingHorizontal: 20, fontSize: 16, marginBottom: 20 },
  icon: { marginRight: 10 },
  input: { flex: 1 },
  loginButton: { width: '40%', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginTop: 20, borderWidth: 2, borderColor: 'white', backgroundColor: 'transparent' },
  loginButtonText: { color: 'white', fontSize: 18 },
  registerText: { color: 'white', marginTop: 20, fontSize: 16 },
  credText: { color: 'white', marginTop: 40, fontSize: 12, textAlign: 'center', position: 'absolute', bottom: 30 },
});

export default LoginScreen;