import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image, ImageComponent } from 'react-native';



const App = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)


  const test = () => {

    if (number > 0 && number < 10) {

      let luckyNum = number * 7
      let res = 0
      while (luckyNum > 0) {
        res = res + luckyNum % 10
        luckyNum /= 10
      }
      Alert.alert('Hello ' + name + ' your lucky number is: ' + Math.trunc(res))
    } else {

      let luckyNum = number * 1
      let res = 0
      while (luckyNum > 0) {
        res = res + luckyNum % 10
        luckyNum /= 10
      }
      Alert.alert('Hello ' + name + ' your lucky number is: ' + Math.trunc(res))
    }
  }

  return (
    <View style={styles.Container}>

      <Text style={styles.Text}> Lucky Number! </Text>


      <Image
        source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.rocketseat.com.br%2Fcontent%2Fimages%2F2019%2F03%2FReact-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png&f=1&nofb=1" }}
        style={{ width: 200, height: 200 }}
      />

      <TextInput
        style={styles.InputText}
        placeholder='Name:'
        maxLength={12}
        onChangeText={name => setName(name)}
      >
      </TextInput>

      <TextInput
        style={styles.InputText}
        placeholder='Age:'
        keyboardType='numeric'
        maxLength={2}
        onChangeText={number => setNumber(parseInt(number))}
      >
      </TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={(test)}
      >
        <Text style={styles.InputText}>Go ahead!</Text>

      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: '#FFFBFF',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: 2,
    paddingBottom: 50,
    color: '#495159',
  },
  InputText: {
    fontSize: 25,
    fontWeight: '500',
    letterSpacing: 2,
    padding: 15,
  },
  button: {
    backgroundColor: '#78CAD2',
    padding: 5,
    borderRadius: 10,
  },
})

export default App;