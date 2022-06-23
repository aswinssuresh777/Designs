import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import mick from '..//Asserts/Images/mick.png';
import avatar from '..//Asserts/Images/avatar.png';
const DATA = [
  {
    id: 0,
    title: 'A',
    color: '#FF53DC',
    color0: '#FF53DC1f',
  },
  {
    id: 1,
    title: 'B',
    color: '#50C1F9',
    color0: '#50C1F91f',
  },
  {
    id: 2,
    title: 'C',
    color: '#E62626',
    color0: '#E626261f',
  },
  {
    id: 3,
    title: 'D',
    color: '#ff6804',
    color0: '#ff68041f',
  },
  {
    title: 'E',
    color: '#02C028',
    color0: '#02c0281f',
  },
  {
    id: 4,
    title: 'F',
    color: '#6900F2',
    color0: '#6900f21f',
  },
  {
    id: 5,
    title: 'U',
    color: '#9f9f9f',
    color0: '#9f9f9f47',
  },
];

const Item = ({item, onPress, backgroundColor, textColor, borderColor}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, backgroundColor, borderColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
const Student = () => {
  const [sum, setSum] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? item.color : item.color0;

    const color = item.id === selectedId ? 'white' : item.color;

    const borderColor = item.id === selectedId ? item.color0 : item.color;

    return (
      <Item
        item={item}
        backgroundColor={{backgroundColor}}
        borderColor={{borderColor}}
        textColor={{color}}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Image
                resizeMode="cover"
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  marginLeft: 10,
                }}
                source={avatar}
              />
      </View>
      <View>
        <Text style={styles.Assign}>Assign Grade</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          numColumns={7}
        />
      </View>
      <View>
        <Text style={styles.Assign}>Comment</Text>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={{
              flex: 0.9,
              height: 150,
              padding: 10,
              textAlignVertical: 'top',
              borderWidth: 2,
              borderColor: 'lightgrey',
              margin: 40,
              fontSize: 25,
            }}
          />
         
            <Image
              source={mick}
              style={{
                height: 70,
                width: 70,
               
                
                // marginTop:75
              }}
            />
         
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight || 0,
  },
  Assign: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  item: {
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    borderWidth: 1,
  },
  title: {
    fontSize: 32,
  },
});
export default Student;
