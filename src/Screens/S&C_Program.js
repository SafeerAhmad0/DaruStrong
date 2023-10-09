import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { RoundedCheckbox } from 'react-native-rounded-checkbox';
import IconsOne from '../CustomeComponents/Icons/IconsOne.js';
import { scale } from 'react-native-size-matters';
import x from '../LinkingFiles/S&CprogramData.js';
import { useWindowDimensions } from 'react-native';
import NormalButton from '../CustomeComponents/Buttons/NormalButton.js';

const SC_Program = () => {
  const { width, height } = useWindowDimensions();
  const [selectedItems, setSelectedItems] = useState([]);

  const changeCheckBox = (index) => {
    const updatedSelection = [...selectedItems]
    updatedSelection[index] = !updatedSelection[index]
    setSelectedItems(updatedSelection)
    
  };
  return (
    <>
      <>
        <ScrollView style={{
          maxHeight : 900
        }}>
          <View>
            {x.map((user, index) => (
              <View key={user.id}>

                <Image
                  source={user.image}
                  style={{
                    left: scale(8),
                    height: scale(127),
                    width: width - scale(16),
                    top: 10,
                    borderRadius: 10,
                    
                  }}
                />
                <View style={{height : 10}}></View>
                <View
                  style={{
                    position: 'absolute',
                    left: width - scale(60),
                    top: scale(25),
                    height: height - scale(100)
                  }}
                >
                  <RoundedCheckbox
                    text={<IconsOne name="checkmark-outline" iconSize={30} iconColor="white" />}
                    isChecked={selectedItems[index] === true}
                    checkedColor={'#F79300'}
                    uncheckedColor={'rgba(0, 0, 0, 0.40)'}
                    onPress={() => changeCheckBox(index)}
                  />
                </View>

                <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'center'

                  }}>
                  <Text style={{
                    color: 'white',
                    top: scale(110),
                    fontSize: 14,
                    fontWeight: '700',
                    lineHeight: 16.09,
                  }}>{user.Caption}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </>
      <>
        <NormalButton
          buttonName="Add Workout to my Calendar"
          fontSize={30}
          width={343}
          backgroundColor="#F79300"
          height={45}
          forTexttextAlign="center"
          alignSelf="center"
          borderRadius={5}
          bottom={30}
          forTextAlignContent="center"
          forTextAlignSelf="center"
          forTextAlignItem="center"
          forTextTop={12}
          forTextcolor="white"
          forTextfontWeight="700"
        />
      </>
    </>
  );
};

export default SC_Program;
