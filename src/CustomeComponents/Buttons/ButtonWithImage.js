import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import ImageLogo from '../Images/ImageLogo'

const ButtonWithImage = (props) => {
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
                    color: props.forTextcolor,
                    fontWeight: props.forTextfontWeight,
                    fontSize: props.forTextFontSize,
                    left : props.forTextLeft,
                    top : props.forTextTop,
                    width : props.forTextWidth,
                    bottom : props.forTextBottom

                }}>{props.buttonName}</Text>

                <ImageLogo
                    source={props.imageSource}
                    flex= {props.imageFlex}
                    left={props.imageLeft}
                    height={props.imageHeight}
                    width={props.imageWidth}
                    top={props.imageTop}
                    borderRadius={props.imageBorderRadius}
                    resizeMode={props.imageResizeMode}
                    bottom = {props.imageBottom}
                />
            </TouchableOpacity>
        </View>
    )
}
export default ButtonWithImage