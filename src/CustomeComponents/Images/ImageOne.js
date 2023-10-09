import { Image, ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';


const ImageOne = (props) => {
    const { width, height } = useWindowDimensions();
    return (
        <Image
            source={props.source}
            style={{
                right: props.right,
                borderRadius: props.borderRadius,
                flex: props.flex,
                left: width - (props.left),
                height: props.height,
                width: props.width,
                top: props.top,
                resizeMode: props.resizeMode,
            }}

        />
    )
}

export default ImageOne