// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    id: '1',
    title: 'First News',
    detail: 'First News Detail',
    cover: require("./assets/n1.jpg")
  },
  {
    id: '2',
    title: 'Second News',
    detail: 'Second News Detail',
    cover: require("./assets/n2.jpg")
  },
  {
    id: '3',
    title: 'Third News',
    detail: 'Third News Detail',
    cover: require("./assets/n3.jpg")
  },
];
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {
              navigation.navigate('NewsDetails', item)
            }} style={{
              backgroundColor: '#FFF',
              padding: 5,
              marginVertical: 8,
              marginHorizontal: 16,
              flexDirection: 'row',

              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image source={item.cover} resizeMode="contain" style={{
                width: 150,
                height: 150,
                marginRight: 10,
              }}></Image>
              <View>
                <Text style={{
                  fontSize: 16,
                  marginBottom: 15
                }}>{item.title}</Text>
                <Text style={{
                  fontSize: 12,
                  color: '#888'
                }}>{item.detail}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

function DetailScreen({ route, navigation }) {
  const { title, detail, cover } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 50,
        paddingBottom: 20
      }}>{title}</Text>

      <Image source={cover} resizeMode="contain" style={{
        width: 300,
        height: 200,
        marginBottom: 30
      }}></Image>

      <Text style={{
        color: '#888',
        marginBottom: 50
      }}>{detail}</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack('Details')}
      />

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NewsList" component={HomeScreen} />
        <Stack.Screen name="NewsDetails" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;