import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

const MaterialIcons = (props) => {
    return (
        <MaterialCommunityIcons
            name={props.iconName}
            size={props.iconSize}
            color={props.iconColor}
            style={{
                left: props.styleLeft,
                bottom: props.styleBottom,
                position: props.stylePosition,
                width: props.styleWidth,
                top : props.styleTop
            }}

        />
    )
}

export default MaterialIcons