import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

const IconsOne = (props) => {
    return (
        <Ionicons
            name={props.name}
            color={props.iconColor}
            size={props.iconSize}
            style={{
                left: props.styleLeft,
                bottom: props.styleBottom,
                position: props.stylePosition,
                width: props.styleWidth,
            }}
        />
    )
}

export default IconsOne