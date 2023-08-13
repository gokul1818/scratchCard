import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScratchCard from 'react-native-scratch-card';

const Scratch = () => {
    return (
        <View>
            <ScratchCard
                source={{ uri: 'https://example.com/your-image.png' }}
                onFinish={() => {
                    console.log('Scratch card completed!');
                }}
            />
        </View>
    )
}

export default Scratch

const styles = StyleSheet.create({})