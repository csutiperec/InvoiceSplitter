import React from 'react'
import { View } from 'react-native'
import Button from './Button'

const Invoice = () => {
    return (
        <View>
            <View>
                {/*List of Invoice Items*/}
            </View>
            <View>
                <Button text='Add Item'/>
            </View>
            <View>
                <Button text='Calculate'/>
            </View>
        </View>
    )
}

export default Invoice
