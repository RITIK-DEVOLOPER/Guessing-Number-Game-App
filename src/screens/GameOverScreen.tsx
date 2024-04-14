import {
  Dimensions,
  Image,
  ImageComponent,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native';
import React from 'react';
import Title from '../ui/Title';
import PrimaryButton from '../ui/PrimaryButton';

const GameOverScreen = ({roundNumber, userNumber, onStartNewGame}: any) => {

  const {width,height} = useWindowDimensions();
  let Imagesize = 300;
  if(width >400)
    {
      Imagesize = 200;
    }
    if(height > 400)
      {
        Imagesize = 100;
      }
const imageStyle ={
  width:Imagesize,
  height:Imagesize,
  borderRadius:Imagesize/2
}
  return (
    <ScrollView style={styles.screen}>
  <View style={styles.rootcontainer}>
      <Title>Game Over</Title>
      <View style={[styles.ImageContainer,imageStyle]}>
        <Image
          style={styles.Image}
          source={require('../assets/Images/Mario.jpg')}></Image>
      </View>
      <View>
        <Text style={styles.summaryText}>
          {' '}
          Your phone needed{' '}
          <Text style={styles.highLightText}>{roundNumber}</Text> rounds to
          guess.. the number{' '}
          <Text style={styles.highLightText}>{userNumber}</Text>{' '}
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  
  );
};

export default GameOverScreen;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen:
  {
    flex:1
  },
  rootcontainer: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
    padding: 24,
  },
  highLightText: {
    color: 'skyblue',
    fontSize: 30,
  },
  summaryText: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 24,
  },
  ImageContainer: {
    // width: deviceWidth > 450 ? 600 : 300,
    // height: deviceWidth > 450 ? 600 : 300,
    // borderRadius: deviceWidth > 450 ? 300 : 150,

    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 36,
  },
  Image: {
    width: '100%',
    height: '100%',
  },
});
