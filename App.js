

import { Button,AppRegistry, ActivityIndicator ,Platform} from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'

import { name as appName } from './app.json';
import {
   TuyaActivatorApi,
   TuyaCoreApi,
   TuyaDeviceApi,
   TuyaHomeApi,
   TuyaHomeManagerApi,
   TuyaRoomApi,
   TuyaUserApi,
} from './sdk'
export default    App=()=>{
const [loading,setloading]=React.useState(false);
const [datas,setData]=React.useState(false);

useEffect(() => {
       if (Platform.OS !== 'web') {
           SplashScreen.hide();
       }

   });

const data= () =>{
   setloading(true);

     TuyaCoreApi.initWithOptions({
       appKey: 'sjr3df7agrrxjfxgtngh',
       appSecret:'wuds48auyycyjm9fhj5mavfhjwyv57e8',
   })
   
   TuyaUserApi.loginWithUid({
       countryCode:'92',
       password:'34a503ccbbae87dc291f2f5c3a5ad105',
       uid:'5d26d8f3183ce02fe4f1b465',
   }).then((response)=>{

       console.log('initActivatorresponse',response);
   }).catch((error)=>{
       console.log('initActivatorerror',error);
   })

     TuyaActivatorApi.initActivator({
       homeId: '10372895',
       password:'Orient@Ogc',
       ssid: 'BlueEast',
       time: 50,
       type: 'TY_EZ', // "TY_AP"
   }).then((response)=>{

       console.log('initActivatorresponse',response);
   }).catch((error)=>{
       console.log('initActivatorerror',error);
   })


    TuyaHomeApi.getHomeDetail({
       homeId: '10372895',
   }).then((response)=>{

       setData(data);
       console.log('getHomeDetail',response);
   }).catch((error)=>{
       console.log('getHomeDetailerror',error);
   })


}

   return(
       <>

     { loading===true? <ActivityIndicator/>:<Button title='press me' onPress={data}/>}
{data ?JSON.stringify(data):null}
       
</>        
       );
}
