import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SpinWheel from './src/components/wheel'
import Wheel from './src/components/wheel'
import Scratch from './src/components/scratch'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Text>App</Text>
      {/* <Wheel/> */}
      <Scratch/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})