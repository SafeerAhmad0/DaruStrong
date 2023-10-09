import Icon from 'react-native-vector-icons/EvilIcons';
import React from 'react'

const EvilIcons = (props) => {
    return (
        <Icon
            name={props.name}
            color={props.iconColor}
            size={props.iconSize}
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

export default EvilIcons