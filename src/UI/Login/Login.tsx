import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [UserID, setUserID] = useState('');
  const [Pass, setPass] = useState('');

  const navigation = useNavigation();

  const handelSubmit = () => {
    const Data = {
      username: UserID,
      password: Pass,
    };

    axios
      .post('https://fakestoreapi.com/auth/login', Data)
      .then(res => {
        console.log(res?.data, '...ress');
        navigation.navigate('DetailPage', res?.data);
      })
      .catch(err => {
        console.log(err, '....errr');
      });
  };
  return (
    <View>
      <Text>UserName</Text>
      <TextInput
        placeholder="userName"
        onChangeText={setUserID}
        value={UserID}
      />
      <Text>Password</Text>
      <TextInput placeholder="password" onChangeText={setPass} value={Pass} />
      <Button title="submit" onPress={handelSubmit} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
