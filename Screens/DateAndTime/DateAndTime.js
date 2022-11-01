import { Text, View, Modal, TouchableOpacity ,Platform, Button} from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import styles from "./styles";
import { DateTimePicker}from "@react-native-community/datetimepicker";
import { db } from '../../firebaseConfig';
import { ref, update } from "firebase/database";

const DateAndTime = () => {

  const updateDate =() =>{
  update(ref(db,'users/'),{
    pickupDate:startDate,
    dropDate: endDate
  })
  .then(() => console.log('Data updated.'));

  // set(ref(db, 'users/' + name), 
  }

  const [startDate, setStartDate] = useState("Select Date");
  const [endDate, setEndDate] = useState("Select Date");
  const [modal, showModal]= useState(false);

  const [date,setDate]= useState(new Date());
  const [mode,setMode]= useState('date');
  const [show,setShow]= useState(false);
  const [text,setText]= useState('Empty');

  const showMode = (currentMode)=>{
    setShow(true);
    setMode(currentMode)
  }
  const onChange = (event, selectedDate) =>{
    const currentDate= selectedDate || date;
    setShow(Platform.OS==='android');
    setDate(currentDate);

    let tempDate= new Date(currentDate);
    let fDate = tempDate.getDate()+'/'+(tempDate.getMonth()+1) +'/'+tempDate.getFullYear();
    let fTime = tempDate.getHours()+'|Minutes:'+tempDate.getMinutes();

    setText(fDate +'/n'+fTime);
    console.log(fDate+'('+fTime+')');
  }
  
  return (
    <View>
      <Text style={styles.text}>Enter Pickup Date</Text>
      <Text style={styles.text}>{startDate}</Text>
      <TouchableOpacity style={styles.button} onPress={()=>showModal(true)}>
        <Text style={styles.buttonText}> Select Date</Text>
      </TouchableOpacity >
      <Modal visible={modal} animationType="fade">
        <Calendar
          style={styles.calender}
          onDayPress={(date) => {
            setStartDate(date.dateString);
            showModal(false)
          }}
        />
      </Modal>

      <Text style={styles.text}>Enter Drop Date</Text>
      <Text style={styles.text}>{endDate}</Text>
      <TouchableOpacity style={styles.button} onPress={()=>showModal(true)}>
        <Text style={styles.buttonText}> Select Date</Text>
      </TouchableOpacity >
      <Modal visible={modal} animationType="fade">
        <Calendar
          style={styles.calender}
          onDayPress={(date) => {
            setEndDate(date.dateString);
            showModal(false)
          }}
        />
      </Modal>

      <TouchableOpacity style={styles.button} onPress={updateDate}>
         <Text style={styles.buttonText}>Explore Packages</Text>
        </TouchableOpacity>







      <Text>{text}</Text>
      <View style={{margin:20}}><Button title="DatePicker" onPress={()=>{showMode('date')}}/></View>
      <View style={{margin:20}}><Button title="timePicker" onPress={()=>{showMode('time')}}/></View>

      {show && (
        <DateTimePicker
        testID='dateTimePicker'
        value={date}
        mode={mode}
        is24Hours={true}
        display='default'
        onChange={onChange} />
      )}

    </View>
  );
};

export default DateAndTime;
