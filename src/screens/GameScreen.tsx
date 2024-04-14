import React, {useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Title from '../ui/Title';
import NumberContainer from '../game/NumberContainer';
import PrimaryButton from '../ui/PrimaryButton';
import InstructionText from '../../InstructionText';
import Card from '../ui/Card';
import GuessLogItem from '../game/GuessLogItem';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({
  userNumber,
  onGameOver,
}: {
  userNumber: any;
  onGameOver: (numberofRounds: number) => void;
}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);

  const {width, height} = useWindowDimensions();
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction: 'lower' | 'greater') {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRound(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }
  const guestRoundsListLength = guessRound.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={InstructionText}>
          Higher or Lower
        </InstructionText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > 500) {
    content = 
      <>
       
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              -
            </PrimaryButton>
          </View>

          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </>
    
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.ListContainer}>
        {/* {guessRound.map(guessRound=><Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRound}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guestRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item: any) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerWide:
  {
    flexDirection:'row',
    alignItems:'center'

  },
  ListContainer: {
    flex: 1,
    padding: 16,
  },
});

