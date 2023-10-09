// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// // import CalendarStrip from 'react-native-calendar-strip';
// // import x from '../LinkingFiles/MyCalenderData';
// // import { scale } from 'react-native-size-matters';
// // import { useWindowDimensions } from 'react-native';
// // import y from '../LinkingFiles/MyCalenderData2';
// // import ImageOne from '../CustomeComponents/Images/ImageOne';
// // import { images } from '../Assets/Images';
// // import { create } from 'react-test-renderer';
// // const MyCalendar = () => {
// //   const { width, height } = useWindowDimensions();
// //   console.log("width", width)
// //   console.log("height", height)

// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const datesBlacklistFunc = date => {
// //     return date.isoWeekday() === 6; // disable Saturdays
// //   }
// //   // console.log(x)

// //   return (
// //     <>
// //       <>
// //         <View style={styles.container}>
// //           <CalendarStrip
// //             daySelectionAnimation={{
// //               type: '',
// //               color: 'red',
// //               fontSize: 24,
// //               highlightColor: 'red',
// //               dateNumberStyle: {
// //                 color: 'white'
// //               }
// //             }}
// //             calendarHeaderContainerStyle
// //             style={{ position: 'absolute', height: 100, paddingBottom: 30, width: 355, backgroundColor: 'white', borderRadius: 10 }}
// //             calendarColor={'white'}
// //             calendarHeaderStyle={{ height: 100 }}
// //             dateNumberStyle={{ paddingEnd: 20, width: 38, top: 2, position: 'absolute', fontSize: 24, backgroundColor: 'rgba(26, 24, 24, 0.10)', borderRadius: 10 }}
// //             dateNameStyle={{ color: 'white', left: 18, bottom: 20 }}
// //             iconContainer={{ flex: 0.001, }}
// //             showMonth={false}
// //             scrollable={true}
// //             iconLeft={null}
// //             iconRight={null}
// //             onDateSelected={(date) => {
// //               setSelectedDate(date);
// //             }}
// //           />
// //         </View>
// //       </>
// //       <>
// //         <ScrollView>
// //           <Text
// //             style={{
// //               width: 169,
// //               left: width - (344),
// //               fontSize: 18,
// //               color: 'white',
// //               fontWeight: '700',
// //               top: 4
// //             }}>
// //             Chest & Shoulders</Text>
// //           <Text

// //             style={{
// //               left: width - (91),
// //               fontSize: 10,
// //               color: 'white',
// //               bottom: 15
// //             }}

// //           >9 total exercises</Text>
// //           <View
// //             style={{
// //               borderBottomWidth: 1,
// //               width: (328),
// //               left: width - (344),
// //               borderBottomColor: 'black',
// //               borderColor: '#4F4F4F'
// //             }} >
// //           </View>
// //           <Text
// //             style={{
// //               width: 169,
// //               left: width - (344),
// //               fontSize: 14,
// //               lineHeight: 16.87,
// //               color: 'white',
// //               fontWeight: '400',
// //               top: 10
// //             }}>
// //             Superset</Text>
// //           <Text
// //             style={{
// //               left: width - (114),
// //               fontSize: 10,
// //               color: 'white',
// //               bottom: 7
// //             }}

// //           >4 rounds | 2 exercises</Text>
// //           {x.map((user, index) => (
// //             <View key={user.id}>
// //               <ImageOne
// //                 source={user.image}
               
// //                   flex= {1}
// //                   left= {344}
// //                   height= {65}
// //                   width= {65}
// //                   top= {20}
// //                   borderRadius= {5}
// //                   resizeMode= "contain"
               
// //               />
// //               <Text></Text>
// //               <View
// //                 style={{
// //                   position: 'absolute',
// //                 }}>
// //                 <Text style={{
// //                   color: 'white',
// //                   top: 33,
// //                   fontSize: 14,
// //                   fontWeight: '700',
// //                   lineHeight: 16.09,
// //                   fontFamily: 'Russo One',
// //                   left: width - (269)
// //                 }}>{user.Caption}</Text>
// //                 <View>
// //                   <Text style={{
// //                     left: width - (269),
// //                     top: (36),
// //                     fontSize: (10),
// //                     color: 'white'
// //                   }}>{user.todo}</Text>
// //                 </View>
// //               </View>
// //             </View>
// //           ))}
// //           <View
// //             style={{
// //               top: 10,
// //               borderBottomWidth: 1,
// //               width: (328),
// //               left: width - (344),
// //               borderBottomColor: 'black',
// //               borderColor: '#4F4F4F'
// //             }} >
// //           </View>
// //           <Text
// //             style={{
// //               width: 169,
// //               left: width - (344),
// //               fontSize: 14,
// //               lineHeight: 16.87,
// //               color: 'white',
// //               fontWeight: '400',
// //               top: 18
// //             }}>
// //             Superset</Text>
// //           <Text
// //             style={{
// //               left: width - (114),
// //               fontSize: 10,
// //               color: 'white',
// //               top: 4
// //             }}

// //           >4 rounds | 2 exercises</Text>
// //           {y.map((user, index) => (
// //             <View key={user.id}>
// //               <ImageOne
// //                 source={user.image}
// //                 flex={1}
// //                 left={344}
// //                 height={65}
// //                 width={65}
// //                 top={20}
// //                 borderRadius={5}
// //                 resizeMode="contain"
// //               />
// //               <Text></Text>
// //               <View
// //                 style={{
// //                   position: 'absolute',
// //                 }}>
// //                 <Text style={{
// //                   color: 'white',
// //                   top: 33,
// //                   fontSize: 14,
// //                   fontWeight: '700',
// //                   lineHeight: 16.09,
// //                   fontFamily: 'Russo One',
// //                   left: width - (269)
// //                 }}>{user.Caption}</Text>
// //                 <View>
// //                   <Text style={{
// //                     left: width - (269),
// //                     top: (36),
// //                     fontSize: (10),
// //                     color: 'white'
// //                   }}>{user.todo}</Text>
// //                 </View>
// //               </View>
// //             </View>
// //           ))}
// //         </ScrollView>
// //       </>
// //     </>

// //   );
// // };

// // const styles = StyleSheet.create({
  
// // })


// // export default MyCalendar;




// // // // import React, { useState, useEffect } from 'react';
// // // // import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// // // // import CalendarStrip from 'react-native-calendar-strip';
// // // // import x from '../LinkingFiles/MyCalenderData';
// // // // import { useWindowDimensions } from 'react-native';
// // // // import y from '../LinkingFiles/MyCalenderData2';
// // // // import ImageOne from '../CustomeComponents/Images/ImageOne';
// // // // import moment from 'moment';

// // // // const MyCalendar = () => {
// // // //   const { width, height } = useWindowDimensions();

// // // //   const [selectedDate, setSelectedDate] = useState(moment());

// // // //   const handleDateSelected = (date) => {
// // // //     setSelectedDate(date);
// // // //   };

// // // //   const [col, setcol] = useState('white');

// // // //   useEffect(() => {
// // // //     const dayOfWeek = selectedDate.isoWeekday();
// // // //     if (dayOfWeek === 7) {
// // // //       setcol('#EA4237');
// // // //     } else if (dayOfWeek === 6) {
// // // //       setcol('#F79300');
// // // //     } else if (dayOfWeek === 5) {
// // // //       setcol('#16CC66');
// // // //     }
// // // //     else {
// // // //       setcol('#FFFFFF')
// // // //     }
// // // //   }, [selectedDate]);


// // // //   return (
// // // //     <>
// // // //       <>
// // // //         <View style={styles.container}>
// // // //           <CalendarStrip
// // // //             style={{ height: 100, width: 360, paddingTop: 30 }}
// // // //             calendarColor={'#333333'}
// // // //             scrollable={true}
// // // //             rightSelector={[]}
// // // //             leftSelector={[]}
// // // //             highlightDateNameStyle={{
// // // //               color: col,

// // // //             }}
// // // //             highlightDateNumberStyle={{
// // // //               color: col,
// // // //               fontSize: 30,
// // // //               backgroundColor: 'red',
// // // //               padding: 10
// // // //             }}
// // // //             onDateSelected={handleDateSelected}
// // // //           />
// // // //         </View>
// // // //       </>
// // // //       <>
// // // //         <ScrollView>
// // // //           <Text
// // // //             style={{
// // // //               width: 169,
// // // //               left: width - (344),
// // // //               fontSize: 18,
// // // //               color: 'white',
// // // //               fontWeight: '700',
// // // //               top: 4
// // // //             }}>
// // // //             Chest & Shoulders</Text>
// // // //           <Text

// // // //             style={{
// // // //               left: width - (91),
// // // //               fontSize: 10,
// // // //               color: 'white',
// // // //               bottom: 15
// // // //             }}

// // // //           >9 total exercises</Text>
// // // //           <View
// // // //             style={{
// // // //               borderBottomWidth: 1,
// // // //               width: (328),
// // // //               left: width - (344),
// // // //               borderBottomColor: 'black',
// // // //               borderColor: '#4F4F4F'
// // // //             }} >
// // // //           </View>
// // // //           <Text
// // // //             style={{
// // // //               width: 169,
// // // //               left: width - (344),
// // // //               fontSize: 14,
// // // //               lineHeight: 16.87,
// // // //               color: 'white',
// // // //               fontWeight: '400',
// // // //               top: 10
// // // //             }}>
// // // //             Superset</Text>
// // // //           <Text
// // // //             style={{
// // // //               left: width - (114),
// // // //               fontSize: 10,
// // // //               color: 'white',
// // // //               bottom: 7
// // // //             }}

// // // //           >4 rounds | 2 exercises</Text>
// // // //           {x.map((user, index) => (
// // // //             <View key={user.id}>
// // // //               <ImageOne
// // // //                 source={user.image}

// // // //                 flex={1}
// // // //                 left={344}
// // // //                 height={65}
// // // //                 width={65}
// // // //                 top={20}
// // // //                 borderRadius={5}
// // // //                 resizeMode="contain"

// // // //               />
// // // //               <Text></Text>
// // // //               <View
// // // //                 style={{
// // // //                   position: 'absolute',
// // // //                 }}>
// // // //                 <Text style={{
// // // //                   color: 'white',
// // // //                   top: 33,
// // // //                   fontSize: 14,
// // // //                   fontWeight: '700',
// // // //                   lineHeight: 16.09,
// // // //                   fontFamily: 'Russo One',
// // // //                   left: width - (269)
// // // //                 }}>{user.Caption}</Text>
// // // //                 <View>
// // // //                   <Text style={{
// // // //                     left: width - (269),
// // // //                     top: (36),
// // // //                     fontSize: (10),
// // // //                     color: 'white'
// // // //                   }}>{user.todo}</Text>
// // // //                 </View>
// // // //               </View>
// // // //             </View>
// // // //           ))}
// // // //           <View
// // // //             style={{
// // // //               top: 10,
// // // //               borderBottomWidth: 1,
// // // //               width: (328),
// // // //               left: width - (344),
// // // //               borderBottomColor: 'black',
// // // //               borderColor: '#4F4F4F'
// // // //             }} >
// // // //           </View>
// // // //           <Text
// // // //             style={{
// // // //               width: 169,
// // // //               left: width - (344),
// // // //               fontSize: 14,
// // // //               lineHeight: 16.87,
// // // //               color: 'white',
// // // //               fontWeight: '400',
// // // //               top: 18
// // // //             }}>
// // // //             Superset</Text>
// // // //           <Text
// // // //             style={{
// // // //               left: width - (114),
// // // //               fontSize: 10,
// // // //               color: 'white',
// // // //               top: 4
// // // //             }}

// // // //           >4 rounds | 2 exercises</Text>
// // // //           {y.map((user, index) => (
// // // //             <View key={user.id}>
// // // //               <ImageOne
// // // //                 source={user.image}
// // // //                 flex={1}
// // // //                 left={344}
// // // //                 height={65}
// // // //                 width={65}
// // // //                 top={20}
// // // //                 borderRadius={5}
// // // //                 resizeMode="contain"
// // // //               />
// // // //               <Text></Text>
// // // //               <View
// // // //                 style={{
// // // //                   position: 'absolute',
// // // //                 }}>
// // // //                 <Text style={{
// // // //                   color: 'white',
// // // //                   top: 33,
// // // //                   fontSize: 14,
// // // //                   fontWeight: '700',
// // // //                   lineHeight: 16.09,
// // // //                   fontFamily: 'Russo One',
// // // //                   left: width - (269)
// // // //                 }}>{user.Caption}</Text>
// // // //                 <View>
// // // //                   <Text style={{
// // // //                     left: width - (269),
// // // //                     top: (36),
// // // //                     fontSize: (10),
// // // //                     color: 'white'
// // // //                   }}>{user.todo}</Text>
// // // //                 </View>
// // // //               </View>
// // // //             </View>
// // // //           ))}
// // // //         </ScrollView>
// // // //       </>
// // // //     </>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 10,
// // // //     height: 100,
// // // //   },
// // // //   dateInfo: {
// // // //     alignItems: 'center',
// // // //     marginTop: 20,
// // // //     height: 100,
// // // //   },
// // // //   dayText: {
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //     color: 'black',
// // // //     height: 100
// // // //   },
// // // //   dateText: {
// // // //     fontSize: 18,
// // // //     color: 'gray',
// // // //   },
// // // // });

// // // // export default MyCalendar;
// // // // import React from 'react';
// // // // import { View, Text, StyleSheet, FlatList } from 'react-native';
// // // // import { TouchableOpacity } from 'react-native-gesture-handler';

// // // // const CalendarStrip = () => {
// // // //   // Dummy data for days and dates
// // // //   const data = [
// // // //     { day: 'Sun', date: '01' },
// // // //     { day: 'Mon', date: '02' },
// // // //     { day: 'Tue', date: '03' },
// // // //     { day: 'Wed', date: '04' },
// // // //     { day: 'Thu', date: '05' },
// // // //     { day: 'Fri', date: '06' },
// // // //     { day: 'Sat', date: '07' },
// // // //     { day: 'Sun', date: '08' },
// // // //     { day: 'Mon', date: '09' },
// // // //     { day: 'Tue', date: '10' },
// // // //     { day: 'Wed', date: '11' },
// // // //     { day: 'Thu', date: '12' },
// // // //     { day: 'Fri', date: '13' },
// // // //     { day: 'Sat', date: '14' },
// // // //     { day: 'Sun', date: '15' },
// // // //     { day: 'Mon', date: '16' },
// // // //     { day: 'Tue', date: '17' },
// // // //     { day: 'Wed', date: '18' },
// // // //     { day: 'Thu', date: '19' },
// // // //     { day: 'Fri', date: '20' },
// // // //     { day: 'Sat', date: '21' },
// // // //     { day: 'Mon', date: '22' },
// // // //     { day: 'Tue', date: '23' },
// // // //     { day: 'Wed', date: '24' },
// // // //     { day: 'Thu', date: '25' },
// // // //     { day: 'Fri', date: '26' },
// // // //     { day: 'Sat', date: '27' },
// // // //     { day: 'Mon', date: '28' },
// // // //     { day: 'Tue', date: '29' },
// // // //     { day: 'Wed', date: '30' },
// // // //     { day: 'Thu', date: '31' },
// // // //   ];

// // // //   const renderItem = ({ item }) => (
// // // //     <TouchableOpacity style={styles.item}>
// // // //       <Text style={styles.day}>{item.day}</Text>
// // // //       <Text style={styles.date}>{item.date}</Text>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <FlatList
// // // //         horizontal
// // // //         data={data}
// // // //         renderItem={renderItem}
// // // //         keyExtractor={(item) => item.date}
// // // //         showsHorizontalScrollIndicator={false}
// // // //       />
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     height: 100,
// // // //   },
// // // //   item: {
// // // //     flex: 1,
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     margin: 5,
// // // //     padding: 10,
// // // //     backgroundColor: '#E5E5E5', 
// // // //     borderRadius: 10,
// // // //   },
// // // //   day: {
// // // //     fontWeight: 'bold',
// // // //     fontSize: 18,
// // // //   },
// // // //   date: {
// // // //     fontSize: 16,
// // // //   },
// // // // });

// // // // export default CalendarStrip;

// // import React, { useState } from 'react';
// // import { TouchableOpacity, Text } from 'react-native';
// // import EvilIcons from '../CustomeComponents/Icons/EvilIcons';
// // import { format } from 'date-fns';

// // const MyComponent = () => {
// //   const [isPressed, setIsPressed] = useState(false);

// //   const handlePress = () => {
// //     setIsPressed(!isPressed);
// //   };

// //   const item = {
// //     date: new Date(),
// //     day: 'Sun', // Replace with your actual item properties
// //   };

// //   return (
// //     <TouchableOpacity
// //       style={[
// //         // Add your styles here
// //       ]}
// //       onPress={handlePress}
// //     >
// //       <Text
// //         style={[
// //           // Add your styles here
// //           {
// //             color:
// //               isPressed
// //                 ? '#16CC66'
// //                 : format(new Date(item.date), 'EEE') === 'Mon'
// //                 ? '#F79300'
// //                 : format(new Date(item.date), 'EEE') === 'Tue'
// //                 ? '#EA4237'
// //                 : 'white',
// //           },
// //         ]}
// //       >
// //         {item.day}
// //       </Text>

// //       <Text
// //         style={[
// //           // Add your styles here
// //           {
// //             color:
// //               isPressed
// //                 ? '#16CC66'
// //                 : format(new Date(item.date), 'EEE') === 'Mon'
// //                 ? '#F79300'
// //                 : format(new Date(item.date), 'EEE') === 'Tue'
// //                 ? '#EA4237'
// //                 : 'white',
// //           },
// //         ]}
// //       >
// //         {item.date}
// //       </Text>
// //       <EvilIcons
// //         name={isPressed ? 'minus' : 'check'}
// //         size={20}
// //         color={isPressed ? '#16CC66' : '#F79300'}
// //         style={{ top: 4 }}
// //       />
// //     </TouchableOpacity>
// //   );
// // };

// // export default MyComponent;



// const BottomTab = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarHideOnKeyboard: true,
//                 tabBarStyle: {
//                     backgroundColor: 'black'
//                 },
//                 tabBarIcon: ({ focused, size, color }) => {
//                     let iconName;
//                     size = 15

//                     if (route.name == 'Home') {
//                         iconName = 'home-sharp'
//                     } else if (route.name == 'Workouts') {
//                         iconName = 'weight-lifter'
//                     } else if (route.name == 'Skills') {
//                         iconName = 'hand-pointing-up'
//                     } else if (route.name == 'Exercises') {
//                         iconName = 'lightning-bolt'
//                     } else if (route.name == 'Messages') {
//                         iconName = 'message-processing-outline'
//                     } else if (route.name == 'Activity') {
//                         iconName = 'signal-cellular-outline'
//                     }
//                     return <MaterialIcons iconName={iconName} iconSize={size} iconColor={color} />;
//                 },
//             })}
//             tabBarOptions={{
//                 activeTintColor: '#F79300',
//                 inactiveTintColor: 'white',
//             }}
//         >
//             <Tab.Screen name='Home' component={MyCalender} options={{
//                 headerShown: false,
//             }} />
//             <Tab.Screen name='Workouts' component={MyCalender} options={{
//                 headerShown: false,
//             }} />
//             <Tab.Screen name='Skills' component={MyCalender} options={{
//                 headerShown: false,
//             }} />
//             <Tab.Screen name='Exercises' component={MyCalender} options={{
//                 headerShown: false,
//             }} />
//             <Tab.Screen name='Messages' component={MyCalender} options={{
//                 headerShown: false,
//             }} />
//             <Tab.Screen name='Activity' component={MyCalender} options={{
//                 headerShown: false,
//             }} />
//         </Tab.Navigator>
//     );
// }
