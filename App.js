import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';

export default function App() {
  return (
  <View>
    <View style={styles.detail1}>
       <Image style={styles.back} source={require("./icon2/back.png")}/>
       <Text style={styles.w1}>mayu.0w0</Text>
       <Image style={styles.down} source={require("./icon2/down.png")}/>
       <Image style={styles.video} source={require("./icon2/video.png")}/>
       <Image style={styles.pen} source={require("./icon2/pen.png")}/>
    </View>
    <View style={styles.detail2}>
      <View style={styles.frame}>
      <Image style={styles.gsearch} source={require("./icon2/gsearch.png")}/>
      <Text style={styles.w2}>搜尋</Text>
      </View>
      <Text style={styles.w3}>訊息</Text>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={require("./icon2/2.png")}/>
      <Text style={styles.w4}>penguinnn0314</Text>
      <Text style={styles.w5}>5則訊息．3小時前</Text>
      <Image style={styles.camera} source={require("./icon2/camera.png")}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={require("./icon2/3.png")}/>
      <Text style={styles.w4}>cute_seallll520</Text>
      <Text style={styles.w5}> 2則訊息．5小時前</Text>
      <Image style={styles.camera} source={require("./icon2/camera.png")}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={require("./icon2/5.png")}/>
      <Text style={styles.w4}>kanahei_animal</Text>
      <Text style={styles.w5}>1則訊息．2天前    </Text>
      <Image style={styles.camera} source={require("./icon2/camera.png")}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={require("./icon2/6.png")}/>
      <Text style={styles.w4}>raccoon1117</Text>
      <Text style={styles.w5}>    已回復你的限時動態</Text>
      <Image style={styles.camera2} source={require("./icon2/camera.png")}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={require("./icon2/4.png")}/>
      <Text style={styles.w4}>kapibara_deitsuki</Text>
      <Text style={styles.w6}>昨天上線             </Text>
      <Image style={styles.camera} source={require("./icon2/camera.png")}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={require("./icon2/7.png")}/>
      <Text style={styles.w4}>tanukiandfox09</Text>
      <Text style={styles.w6}>   傳送了一張貼圖  </Text>
      <Image style={styles.camera} source={require("./icon2/camera.png")}/>
    </View>
    <View style={styles.detail4}>
    <Image style={styles.bcamera} source={require("./icon2/bcamera.png")}/>
      <Text style={styles.w7}>相機</Text>

    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  detail1: {
    flexDirection:'row',
    borderBottomColor:'#EEEEEE',
    borderBottomWidth:1.5,
    justifyContent: 'flex-start',
    backgroundColor:'#FAFAFA',
    width:500,
    height:100,
  },
  back: {
    width:30,
    height:50,
    top:50,
    left:20
  },
  w1: {
    fontSize:18,
    fontFamily:'sans-serif-medium',
    top:59,
    left:45
  },
  down: {
    width:20,
    height:20,
    top:64,
    left:48
  },
  video: {
    width:30,
    height:30,
    top:58,
    left:180
  },
  pen: {
    width:25,
    height:25,
    top:58,
    left:195
  },
  frame: {
    width:370,
    height:40,
    top:15,
    left:20,
    borderTopWidth:0.7,
    borderLeftWidth:0.7,
    borderRightWidth:0.7,
    borderBottomWidth:0.7,
    borderRadius:10,
    borderColor:'#CCCCCC',
  },
  gsearch: {
    width:30,
    height:30,
    top:5,
    left:5,
  },
  w2: {
    fontSize:16,
    fontFamily:'sans-serif',
    color:'#A9A9A9',
    top:-23,
    left:43,
  },
  w3: {
    fontSize:16,
    top:35,
    left:23,
  },
  detail3: {
    flexDirection:'row',
    top:45,
    left:23,
    marginTop:15
  },
  p1: {
    width:60,
    height:60,
  },
  
  w4: {
    top:5,
    left:15
  },
  w5: {
    top:30,
    left:-95
  },
  camera: {
    width:27,
    height:27,
    left:48,
    top:15
  },
  camera2: {
    width:27,
    height:27,
    left:50,
    top:15
  },
  
  p2: {
    width:85,
    height:85,
    left:-10,
    top:-10
  },
  w6: {
    top:30,
    left:-105,
    color:'#B2B2B2',
  },
  camera2: {
    width:27,
    height:27,
    left:40,
    top:10

  },
   detail4: {
        flexDirection:'row',
        borderTopColor:'#EEEEEE',
        borderTopWidth:1.5,
        justifyContent: 'center',
        backgroundColor:'#FAFAFA',
        width:500,
        height:100,
        top:175
  },
   bcamera: {
    width:35,
    height:35,
    top:6,
    left:-60
   },
  w7: {
    color:"#0494FC",
    top:15,
    left:-50


  }

});
