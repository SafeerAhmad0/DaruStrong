import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ButtonWithMaterialIcon from '../Buttons/ButtonWithMaterialIcon';
import { scale } from 'react-native-size-matters';
import { useWindowDimensions } from 'react-native';

const CustomTabBar = () => {
    const { width, height } = useWindowDimensions();
    const [iconColors, setIconColors] = useState({
        home: 'white',
        workouts: 'white',
        skills: 'white',
        exercises: 'white',
        messages: 'white',
        activity: 'white',
    });

    const handleIconPress = (buttonName, newColor) => {
        const updatedColors = {
            home: 'white',
            workouts: 'white',
            skills: 'white',
            exercises: 'white',
            messages: 'white',
            activity: 'white',
            [buttonName.toLowerCase()]: newColor,
        };
        setIconColors(updatedColors);
    };

    return (
        <View style={{
            backgroundColor: '#0B0B0D',
            height: 66,
        }}>
            <ButtonWithMaterialIcon
                width={30}
                iconName="home"
                forTextLeft={scale(18)}
                forTextColor={iconColors.home}
                forTextTop={40}
                forTextFontSize={8}
                forTextWidth={30}
                forTextBottom ={100}
                iconSize={20}
                buttonName="Home"
                styleLeft={18}
                styleBottom={-4}
                iconColor={iconColors.home}
                styleWidth={19}
                onPress={() => handleIconPress('Home', '#F79300')}
            />

            <ButtonWithMaterialIcon
                width={3}
                forTextTop = {10}
                forTextWidth={34}
                iconName="weight-lifter"
                iconSize={20}
                buttonName="Workouts"
                forTextLeft={72}
                forTextColor={iconColors.workouts}
                forTextFontSize={8}
                forTextBottom={5}
                styleLeft={80}
                styleBottom={50}
                iconColor={iconColors.workouts}
                styleWidth={21}
                styleTop = {-27}
                onPress={() => handleIconPress('Workouts', '#F79300')}
            />

            <ButtonWithMaterialIcon
                width={70}
                iconName="hand-pointing-up"
                iconSize={25}
                buttonName="Skills"
                forTextLeft={139}
                forTextTop = {-22}
                forTextColor={iconColors.skills}
                forTextFontSize={8}
                forTextBottom={49}
                styleLeft={138}
                iconColor={iconColors.skills}
                styleWidth={30}
                styleTop = {-64}
                onPress={() => handleIconPress('Skills', '#F79300')}
            />

            <ButtonWithMaterialIcon
                width={70}
                iconName="lightning-bolt"
                iconSize={25}
                buttonName="Exercises"
                forTextLeft={194}
                forTextTop ={-59}
                forTextColor={iconColors.exercises}
                forTextFontSize={8}
                forTextBottom={103}
                styleLeft={199}
                styleBottom={153}
                iconColor={iconColors.exercises}
                styleWidth={30}
                styleTop = {-101}
                onPress={() => handleIconPress('Exercises', '#F79300')}
            />

            <ButtonWithMaterialIcon
                width={70}
                iconName="message-processing-outline"
                iconSize={20}
                buttonName="Messages"
                forTextTop ={-95}
                forTextLeft={255}
                forTextColor={iconColors.messages}
                forTextFontSize={8}
                forTextBottom={155}
                styleLeft={264}
                styleBottom={205}
                iconColor={iconColors.messages}
                styleWidth={35}
                styleTop = {-135}
                onPress={() => handleIconPress('Messages', '#F79300')}
            />

            <ButtonWithMaterialIcon
                width={70}
                iconName="signal-cellular-outline"
                iconSize={20}
                forTextTop ={-127}
                buttonName="Activity"
                forTextLeft={319}
                forTextColor={iconColors.activity}
                forTextFontSize={8}
                forTextBottom={208}
                styleLeft={320}
                styleBottom={258}
                iconColor={iconColors.activity}
                styleWidth={35}
                styleTop = {-168}

                onPress={() => handleIconPress('Activity', '#F79300')}
            />
        </View>
    );
};
export default CustomTabBar;
