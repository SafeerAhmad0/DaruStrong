import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const NormalButton = (props) => {
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
                    height : props.height,
                    alignItems : props.alignItems,
                    alignSelf : props.alignSelf,
                    alignContent : props.alignContent,
                    bottom : props.bottom
                }}
                onPress={props.onPress}
            >
                <Text style={{
                    textAlign: props.forTexttextAlign,
                    color: props.forTextcolor,
                    fontWeight: props.forTextfontWeight,
                    fontSize: props.forTextfontSize,
                    alignContent : props.forTextAlignContent,
                    alignSelf : props.forTextAlignSelf,
                    alignItems : props.forTextAlignItem,
                    top : props.forTextTop

                }}>{props.buttonName}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default NormalButton