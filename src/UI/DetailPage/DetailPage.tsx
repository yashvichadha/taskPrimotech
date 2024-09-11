import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DetailPage = ({route}: any) => {
  const token = route?.params?.token ? route?.params?.token : '';
  console.log(token, 'Token');

  const [Data, setData] = useState('');
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('https://fakestoreapi.com/users')
      .then(res => {
        console.log(res, '.....res');
        setData(res?.data);
      })
      .catch(err => {
        console.log(err, '.......');
      });
  };

  const renderItem = ({item, index}: any) => {
    console.log(item, '............');
    return (
      <View style={{marginBottom: 10}}>
        <Text>{'First name: ' + item?.name?.firstname}</Text>
        <Text>{'Last name: ' + item?.name?.lastname}</Text>
        <Text>{'Email: ' + item?.email}</Text>
        <Text>{'Phone: ' + item?.phone}</Text>
        <Text>{'user name: ' + item?.username}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList data={Data} renderItem={renderItem} />
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({});
