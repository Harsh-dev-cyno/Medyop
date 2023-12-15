import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Topbar from '../../components/Topbar'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import MenuBar from '../../components/MenuBar';
import { ScrollView } from 'react-native';
import ReminderDropdown from '../../components/ReminderDropdown';
import color from '../../constant/color';
import ImageSlider from '../../components/ImageSlider';
import { Ionicons, AntDesign, FontAwesome,Entypo ,MaterialIcons} from "@expo/vector-icons";
import { Image } from 'react-native';
import SelectDropdown from "react-native-select-dropdown";
import { Pressable } from 'react-native';

const MedicineHomeScreen = () => {
    const navigation = useNavigation();
    const data = ['Active','Suspended']
    const [status1, setStatus1] = useState('Set Status');
    const [status2, setStatus2] = useState('Set Status');

    const DropDown = ({status,setStatus}) => {
        return (
          <SelectDropdown
            data={data}
            buttonStyle={{
              backgroundColor:color.colors.white,
              width:100,
            }}
            buttonTextStyle={{
                fontSize:12
            }}
           rowTextStyle={{
            fontSize:12
           }}
            defaultButtonText={<AntDesign
              name="downsquare"
              size={30}
              color={color.colors.secondaryGreen}/>}
            onSelect={(selectedItem, index) => {
                setStatus(selectedItem);
              console.log(status);
            }}
          />
        );
      };

    const  RunningMedications=[
        {   id:1,
            image :require('../../constant/assets/icons/medicine.png'),
            name:'Cythro-250',
            doses:'3 Times',
            tablates:'30 tab',
            days :'10 days',
            time :['08.30Am','01.30Pm','08.30 Pm'],
            status: status1,
            setStatus: setStatus1,

        },
        {   id:2,
            image :require('../../constant/assets/icons/medicine.png'),
            name:'Sugar-150',
            doses:'4 Times',
            tablates:'10 tab',
            days :'5 days',
            time :['11.30Am','2.30Pm','9.30 Pm'],
            status: status2,
            setStatus: setStatus2,
        },

    ] 

    const Doses = [
        {   id:1,
            image :require('../../constant/assets/icons/medicine.png'),
            name:'Your Next Doses',
            details :'Cypen-D @ 4.30 Pm,  Omip-D @4.30 Pm',
            icon : <Entypo name="arrow-bold-right" size={30} color={color.colors.secondaryGreen} />

        },
        {
            id:2,
            image :require('../../constant/assets/icons/lab.png'),
            name:'Your Pervious Doses',
            details :'Cypen-D @ 9.30 Am,  Omip-D @9.30 Am',
            icon : <Entypo name="arrow-bold-left" size={30} color={color.colors.secondaryGreen} />
        }
    ]
  return (
    <SafeAreaView style={styles.mainContainer}>
        <ScrollView>

        {/* topbar */}
        <View style={styles.topBarConatiner}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={{flex:1}}>
        <Topbar title={'Never miss a medication again !'}/>
        </TouchableOpacity>
        </View>

        {/* menubar */}
        <MenuBar/>

        {/* reminder */}
        <ReminderDropdown title={'Medicine & Pill Reminder'}/>
        {/* slider */}
        <ImageSlider/>

        {/* add medicine */}
        <View style={{shadowColor:color.colors.black,elevation:5}}>
        <TouchableOpacity style={styles.addMedicineCover} onPress={()=>navigation.navigate("AddMedicine")}>
            <View style={{flex:1,alignItems:'center'}}>
                <Text style={styles.addMedicinetext}>Add All medications </Text>
            </View>

            <View>
            <FontAwesome
              name="plus-square"
              size={30}
              color={color.colors.iconColor}
            />
            </View>
        </TouchableOpacity>
        </View>

        {/* next doses and pervious dosoes */}
        {
          Doses.map((item,index)=>(
            <TouchableOpacity key={index} style={styles.medicineDosesCover}>
                    <Image source={item.image} style={styles.MedicineDosesimage} />
          
                    <View style={styles.MedicineDosescontentCover}>
                      <Text style={styles.MedicineDosestitle}>{item.name}</Text>
                      <Text style={styles.MedicineDosesdesc}>{item.details}</Text>
                    </View>
                    <View>
                    {item.icon}
                    </View>
                  </TouchableOpacity>

          ))
        }
        {/*  All Your Running medications */}
        <View>
        <View style={styles.RunningMedicationsMain}>
        <TouchableOpacity style={styles.addMedicineCover}>
            <View style={{flex:1,alignItems:'center'}}>
                <Text style={styles.addMedicinetext}> All Your Running medications </Text>
            </View>
        </TouchableOpacity>
        </View>

        {
        RunningMedications.map((item,index)=>(
          <View key={index} style={{marginVertical:5}}>
                    <TouchableOpacity style={styles.RunningMedicationsCover}>
                    <Image source={item.image} style={styles.MedicineDosesimage} />
          
                    <View style={styles.MedicineDosescontentCover}>
                      <Text style={styles.MedicineDosestitle}>{item.name} - {item.doses}</Text>
                      <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                      <Text>{item.days}</Text>
                      <Text>{item.tablates}</Text>
                      </View>
                      <View style={{flexDirection:'row',gap:10}}>
                      {
                        item.time.map((time,id)=>(
                            <Text key={id}>{time}</Text>    
                        ))
                      }
                      </View>

                    </View>
                    <TouchableOpacity>
                    <MaterialIcons name="settings-applications" size={30} color={color.colors.secondaryGreen} />
                    </TouchableOpacity>
                  </TouchableOpacity>

                  <Pressable style={styles.RunningMedicationsBottomCover}>
                    <View><Text style={styles.RunningMedicationsBottomText}>Status</Text></View>
                    <View style={styles.RunningMedicationsBottomTextCover}><Text style={{fontWeight:'bold',fontSize:15}}>{item.status}</Text></View>
                    <View><DropDown status={item.status} setStatus={item.setStatus}/></View>

                  </Pressable>
                  </View>

        ))
        }
            </View>

        </ScrollView>
    </SafeAreaView>
    
  )
}

export default MedicineHomeScreen

const styles = StyleSheet.create({
    mainContainer :{
        backgroundColor:color.colors.white,

    },
    topBarConatiner : {
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
    },
    addMedicineCover : {
        backgroundColor:color.colors.white,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        padding:5,
        marginVertical:5,
        shadowColor: color.colors.black,
        elevation: 5,
    },
    addMedicinetext:{
        fontSize:16,
        fontWeight:'bold',
        color:color.colors.secondaryGreen
    },
    medicineDosesCover : {
        backgroundColor: color.colors.white,
        flexDirection: "row",
        shadowColor: color.colors.black,
        elevation: 5,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 6,
    },
    MedicineDosesimage: {
        width: 50,
        height: 50,
      },
      MedicineDosescontentCover: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      },
      MedicineDosestitle: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
      },
      MedicineDosesdesc: {
        fontSize: 12,
        textAlign: "center",
        color: color.colors.secondaryGreen,
      },
      RunningMedicationsMain :{
        shadowColor:color.colors.black,elevation:5
      },
      RunningMedicationsCover :{
        backgroundColor: color.colors.white,
        flexDirection: "row",
        shadowColor: color.colors.black,
        elevation: 5,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        marginHorizontal: 20,
        marginVertical: 2,
        padding: 6,

      },
      RunningMedicationsBottomCover :{
        padding:5,backgroundColor:color.colors.white,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:20,shadowColor:color.colors.black,elevation:5,marginVertical:2,borderBottomStartRadius:10,borderBottomEndRadius:10

      },
      RunningMedicationsBottomText :{
        color:color.colors.secondaryGreen,fontSize:16,fontWeight:'bold',
        paddingHorizontal:'8%'
      },
      RunningMedicationsBottomTextCover : {
        backgroundColor:color.colors.gray,borderTopRightRadius:10,borderBottomRightRadius:10,
        width:'30%',
        alignItems:'center',padding:5
      }
})