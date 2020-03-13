




import { Button, ActivityIndicator ,Platform} from 'react-native';
 import React, { useEffect } from 'react';
 import SplashScreen from 'react-native-splash-screen'

import {
	TuyaActivatorApi,
	TuyaCoreApi,
	TuyaHomeApi,
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

 const data= async () =>{
    setloading(true);

    try{
    await  TuyaCoreApi.initWithOptions({
        appKey: 'sjr3df7agrrxjfxgtngh',
        appSecret:'wuds48auyycyjm9fhj5mavfhjwyv57e8',
    })
    console.log('initWithOptions passed');

    TuyaUserApi.loginWithUid({
        countryCode:'92',
        password:'34a503ccbbae87dc291f2f5c3a5ad105',
        uid:'5d26d8f3183ce02fe4f1b465',
    });
    console.log('login passed');

    await  TuyaActivatorApi.initActivator({
        homeId: '10372895',
        password:'Orient@Ogc',
        ssid: 'BlueEast',
        time: 50,
        type: 'TY_EZ', // "TY_AP"
    })

    console.log('initActivator passwed');

  const data= await   TuyaHomeApi.getHomeDetail({
        homeId: '10372895',
    })
    setData(data);
    console.log('daaatat',data);
}
catch(error){
    setloading(false);

console.log('error',error);
}

}

    return(
        <>

      { loading===true? <ActivityIndicator/>:<Button title='press me' onPress={data}/>}
{data ?JSON.stringify(data):null}
        
</>        
        );
}
