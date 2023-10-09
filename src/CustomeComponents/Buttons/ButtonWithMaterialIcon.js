import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from '../Icons/MaterialIcons'

const ButtonWithMaterialIcon = (props) => {
    return (
        <View>
            <TouchableOpacity
                style=
                {{
                    fontSize: props.fontSize,
                    padding: props.padding,
                    fontFamily: props.fontFamily,
                    width: props.width,
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
                    color: props.forTextColor,
                    fontWeight: props.forTextfontWeight,
                    fontSize: props.forTextFontSize,
                    top: props.forTextTop,
                    left: props.forTextLeft,
                    right: props.forTextRight,
                    width : props.forTextWidth,
                    bottom : props.forTextBottom

                }}>{props.buttonName}</Text>

                <MaterialIcons
                    iconName={props.iconName}
                    iconSize={props.iconSize}
                    iconColor={props.iconColor}
                    styleLeft={props.styleLeft}
                    styleBottom={props.styleBottom}
                    stylePosition={props.stylePosition}
                    styleWidth={props.styleWidth}
                    transformRotateY= {props.transformRotateY}
                    styleTop = {props.styleTop}
                />
            </TouchableOpacity>
        </View>
    )
}
export default ButtonWithMaterialIcon