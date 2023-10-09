import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { format, addDays, startOfMonth, endOfMonth, isSameMonth } from 'date-fns';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import x from '../LinkingFiles/MyCalenderData';
import y from '../LinkingFiles/MyCalenderData2';
import ImageOne from '../CustomeComponents/Images/ImageOne';
import EvilIcons from '../CustomeComponents/Icons/EvilIcons';

const CalendarStrip = () => {
  const { width, height } = useWindowDimensions();
  const [data, setData] = useState([]);

  useEffect(() => {
    generateCalendarData();
  }, []);

  const generateCalendarData = () => {
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);

    const calendarData = [];
    let currentDatePointer = firstDayOfMonth;
    console.log("0", firstDayOfMonth)
    console.log("1", currentDatePointer)
    while (isSameMonth(currentDatePointer, firstDayOfMonth)) {
      calendarData.push({
        day: format(currentDatePointer, 'EEE'),
        date: format(currentDatePointer, 'd'),
      });
      currentDatePointer = addDays(currentDatePointer, 1);
    }
    setData(calendarData);

  };
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <>
      <>
        <View style={[styles.container,{left: width - 355}]
        }>
          <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.item,
                  {
                    backgroundColor:
                    item.day === 'Mon' ? "rgba(0, 1, 1, 0.5);" : "rgba(26, 24, 24, 0.1)"

                  }
                ]}
                onPress={handlePress}
              >
                <Text style={[styles.day,
                {
                  color: isPressed
                    ? item.day === 'Fri'
                      ? '#16CC66'
                      : item.day === 'Sat'
                        ? '#F79300'
                        : item.day === 'Sun'
                          ? '#EA4237'
                          : 'white'
                    : item.day === 'Fri'
                      ? '#16CC66'
                      : item.day === 'Sat'
                        ? '#F79300'
                        : item.day === 'Sun'
                          ? '#EA4237'
                          : 'white'
                }
                  ,]}>{item.day}</Text>
                <Text style={[styles.date,
                {
                  color: isPressed
                    ? item.day === 'Fri'
                      ? '#16CC66' || 'white'
                      : item.day === 'Sat'
                        ? '#F79300' || 'white'
                        : item.day === 'Sun'
                          ? '#EA4237' || 'white'

                          : 'white'
                    : item.day === 'Fri'
                      ? '#16CC66'
                      : item.day === 'Sat'
                        ? '#F79300'
                        : item.day === 'Sun'
                          ? '#EA4237'
                          : 'white'
                }
                  ,]}>
                  {item.date}</Text>
                {
                  item.day === 'Sat'
                    ? (<EvilIcons name='minus' iconSize={20} iconColor="#F79300" styleTop={4} />)
                    : item.day === 'Fri'
                      ? (<EvilIcons name='check' iconSize={20} iconColor="#16CC66" styleTop={4} />)
                      : item.day === 'Sun'
                        ? (<EvilIcons name='close-o' iconSize={20} iconColor="#EA4237" styleTop={4} />)
                        : item.day === 'Mon'
                          ? (<EvilIcons name='arrow-down' iconSize={20} iconColor="#FFFFFF" styleTop={4} />)
                          : (<EvilIcons name={null} iconSize={13} iconColor="#16CC66" styleTop={4} />)
                }
              </TouchableOpacity>
            )
            }
          />
        </View >
      </>
      <>
        <ScrollView>
          <Text
            style={{
              width: 169,
              left: width - (344),
              fontSize: 18,
              color: 'white',
              fontWeight: '700',
              top: 4
            }}>
            Chest & Shoulders</Text>
          <Text

            style={{
              left: width - (91),
              fontSize: 10,
              color: 'white',
              bottom: 15
            }}

          >9 total exercises</Text>
          <View
            style={{
              borderBottomWidth: 1,
              width: (328),
              left: width - (344),
              borderBottomColor: 'black',
              borderColor: '#4F4F4F'
            }} >
          </View>
          <Text
            style={{
              width: 169,
              left: width - (344),
              fontSize: 14,
              lineHeight: 16.87,
              color: 'white',
              fontWeight: '400',
              top: 10
            }}>
            Superset</Text>
          <Text
            style={{
              left: width - (114),
              fontSize: 10,
              color: 'white',
              bottom: 7
            }}

          >4 rounds | 2 exercises</Text>
          {x.map((user, index) => (
            <View key={user.id}>
              <ImageOne
                source={user.image}

                flex={1}
                left={344}
                height={65}
                width={65}
                top={20}
                borderRadius={5}
                resizeMode="contain"

              />
              <Text></Text>
              <View
                style={{
                  position: 'absolute',
                }}>
                <Text style={{
                  color: 'white',
                  top: 33,
                  fontSize: 14,
                  fontWeight: '700',
                  lineHeight: 16.09,
                  fontFamily: 'Russo One',
                  left: width - (269)
                }}>{user.Caption}</Text>
                <View>
                  <Text style={{
                    left: width - (269),
                    top: (36),
                    fontSize: (10),
                    color: 'white'
                  }}>{user.todo}</Text>
                </View>
              </View>
            </View>
          ))}
          <View
            style={{
              top: 10,
              borderBottomWidth: 1,
              width: (328),
              left: width - (344),
              borderBottomColor: 'black',
              borderColor: '#4F4F4F'
            }} >
          </View>
          <Text
            style={{
              width: 169,
              left: width - (344),
              fontSize: 14,
              lineHeight: 16.87,
              color: 'white',
              fontWeight: '400',
              top: 18
            }}>
            Superset</Text>
          <Text
            style={{
              left: width - (114),
              fontSize: 10,
              color: 'white',
              top: 4
            }}

          >4 rounds | 2 exercises</Text>
          {y.map((user, index) => (
            <View key={user.id}>
              <ImageOne
                source={user.image}
                flex={1}
                left={344}
                height={65}
                width={65}
                top={20}
                borderRadius={5}
                resizeMode="contain"
              />
              <Text></Text>
              <View
                style={{
                  position: 'absolute',
                }}>
                <Text style={{
                  color: 'white',
                  top: 33,
                  fontSize: 14,
                  fontWeight: '700',
                  lineHeight: 16.09,
                  fontFamily: 'Russo One',
                  left: width - (269)
                }}>{user.Caption}</Text>
                <View>
                  <Text style={{
                    left: width - (269),
                    top: (36),
                    fontSize: (10),
                    color: 'white'
                  }}>{user.todo}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(26, 24, 24, 0.1)'
  },
  day: {
    color: 'white',
    fontWeight: '400',
    fontSize: 13,
  },
  date: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500'
  },
});

export default CalendarStrip;

