import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import IconsOne from '../Icons/IconsOne'

const ButtonOne = (props) => {
    return (
        <View>
            <TouchableOpacity
                style=
                {{
                    fontSize: props.fontSize,
                    padding: props.padding,
                    fontFamily: props.fontFamily,
                    width: props.width                                          ,
                    top: props.top,
                    left: props.left,
                    right: props.right,
                    borderRadius: props.borderRadius,
                    backgroundColor: props.backgroundColor,
                }}
                onPress={props.onPress}
            >
                <Text style={{
                    textAlign: props.forTexttextAlign,
                    color: props.forTextcolor,
                    fontWeight: props.forTextfontWeight,
                    fontSize: props.forTextfontSize,

                }}>{props.buttonName}</Text>

                <IconsOne 
                    name={props.iconName}
                    iconSize={props.iconSize}
                    iconColor={props.iconColor}
                    styleLeft={props.styleLeft}
                    styleBottom={props.styleBottom}
                    stylePosition={props.stylePosition}
                    styleWidth = {props.styleWidth}
                />
            </TouchableOpacity>
        </View>
    )
}
export default ButtonOne