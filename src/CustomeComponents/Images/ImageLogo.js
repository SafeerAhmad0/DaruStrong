import { Image, ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';


const ImageLogo = (props) => {
    const { width, height } = useWindowDimensions();
    return (
        <Image
            source={props.source}
            style={{
                right: props.right,
                borderRadius: props.borderRadius,
                flex: props.flex,
                height: props.height,
                width: props.width,
                top: props.top,
                resizeMode: props.resizeMode,
                tintColor : 'white',
                left : props.left,
                bottom : props.bottom,
            }}

        />
    )
}

export default ImageLogo