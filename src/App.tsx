import React, {useEffect, useLayoutEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
 

 
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StartGameScreeen from './screens/StartGameScreeen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

import {useFonts} from 'expo-font';
import { StatusBar } from 'expo-status-bar';

function App(): React.JSX.Element {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber: any) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberofRounds: any) {
    setGameIsOver(true);
    setGuessRounds(numberofRounds);
  }
  function StartNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreeen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={guessRounds}
        onStartNewGame={StartNewGameHandler}
      />
    );
  }

  return (
    <>
    
    <StatusBar  style='dark'/>
    <LinearGradient
      colors={[Colors.primary500, Colors.primary600]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/Images/dice.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    opacity: 0.3,
  },
  rootScreen: {
    flex: 1,
  },
});

export default App;
