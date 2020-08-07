import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ProgressBarAndroid,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Profile = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'lightgreen'}}>
      {/* <TouchableOpacity
        style={styles.close}
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../assests/close.jpg')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity> */}
      <View style={styles.wrapper}>
        {/* <Image
          source={require('../assests/pokemon-go.png')}
          style={{
            width: 100,
            height: 60,
            position: 'absolute',
            left: 20,
            top: 50,
          }}
        /> */}
        <Image
          source={require('../assests/character.png')}
          style={styles.characterImg}
        />
        {/* <View style={styles.team}>
          <Image
            source={require('../assests/valor2.png')}
            style={{width: 50, height: 50}}
          />
          <Text>Valor</Text>
        </View> */}
        <Text
          style={{
            color: 'darkgreen',
            fontWeight: 'bold',
            fontSize: 25,
            marginBottom: 13,
          }}>
          Level 12
        </Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          style={{width: '60%'}}
          indeterminate={false}
          color="#63CB6C"
          animating={true}
          progress={0.6}
        />
        <Text
          style={{
            color: 'darkgreen',
            fontWeight: 'bold',
            fontSize: 25,
            marginTop: 13,
          }}>
          625,5 / 10,000 XP
        </Text>
        <View
          style={{
            borderTopWidth: 0.5,
            borderTopColor: 'grey',
            width: width * 0.85,
            marginTop: 40,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            bottom: 225,
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            color: 'grey',
            fontWeight: 'bold',
          }}>
          Activity
        </Text>
        <View style={styles.infoCont}>
          <View style={styles.info}>
            <Text style={styles.textLeft}>Distance Walked</Text>
            <Text style={styles.textRight}>18.7 km</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textLeft}>Pokemons Caught</Text>
            <Text style={styles.textRight}>150</Text>
          </View>
          <View style={styles.info}>
            <Text style={[styles.textLeft, {marginRight: 40}]}>Total XP</Text>
            <Text style={[styles.textRight]}>71,255</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  characterImg: {
    width: 150,
    height: 350,
    marginLeft: 20,
  },
  team: {
    position: 'absolute',
    right: 20,
    top: 50,
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    height: height,
    backgroundColor: '#fff',
    marginHorizontal: 7,
    display: 'flex',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    right: '45%',
    bottom: 50,
    zIndex: 1,
  },
  infoCont: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 25,
  },
  info: {
    width: width * 0.8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  textLeft: {
    color: 'darkgreen',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textRight: {
    color: '#63CB6C',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
