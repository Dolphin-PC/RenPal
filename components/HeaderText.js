import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// colors
import * as colors from '../assets/colors'

const HeaderText = (props) => {
    return (
        <Text style={styles.header}>{props.text}</Text>
    )
}

export default HeaderText

const styles = StyleSheet.create({
    header:{
        color:colors.signature_Blue,
        fontSize:30
      }
})
