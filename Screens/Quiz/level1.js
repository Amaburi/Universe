import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';
import WrongScreen from '../../components/rectangle/wrong';
import Responsive from '../../Helper/Responsive';

import Bg from '../../assets/space.jpg';
export default function Level1({navigation}) {
    const [data, setQuestions] = useState([]);
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score,setScore] = useState(0);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);

    const getQuiz = async () => {
      const levelId = 1; // Change this to the desired levelId
      const url = `http://192.168.194.19:5000/api/quizzes?levelId=${levelId}`;
      const res = await fetch(url);
      const data = await res.json();
      const filteredData = data.data.filter(item => item.levelId === levelId);
      setQuestions(filteredData);
      setOptions(generateOptionsAndShuffle(filteredData));
    };

    useEffect(() => {
        getQuiz()
    }, []);


  const handleNext=()=>{
    setQues(ques+1)
  }
  const handleBack=()=>{
    setQues(ques-1)
  }
  
  const handleSelectedOption = (selectedOption) => {
    if (selectedOption === currentQuestion.key) {
      setScore(score + 10);
      setIsAnswerCorrect(true);

    } else {
      setIsAnswerCorrect(false);
    }
    if (ques !== 9) {
      setQues(ques + 1);
    }
  }
  
  
  



  const quizsc = () => {
    navigation.navigate('Quizindex');
  };
  const lvl1sc = () => {
    navigation.navigate('lvl1');
  };
  const result = () => {
    navigation.navigate('Result',{
      score: score
    });
  };

  const currentQuestion = data[ques];

  return(
    
      <View style={styles.container}>
        <Image style={styles.styleBackground} source={Bg}></Image>
        {currentQuestion && (
          <View style={styles.parent}>
            <View style={[styles.top, !isAnswerCorrect && styles.hidden]}>
              <Text style={styles.question}>Q.{decodeURIComponent(currentQuestion.quiz)}</Text>
            </View>

            {isAnswerCorrect ? (
              <View style={styles.options}>
                <TouchableOpacity style={styles.optionBtn} onPress={() => handleSelectedOption('a')}>
                  <Text style={styles.optionTxt}>{currentQuestion.a}</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.optionBtn} onPress={() => handleSelectedOption('b')}>
                  <Text style={styles.optionTxt}>{currentQuestion.b}</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.optionBtn} onPress={() => handleSelectedOption('c')}>
                  <Text style={styles.optionTxt}>{currentQuestion.c}</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.optionBtn} onPress={() => handleSelectedOption('d')}>
                  <Text style={styles.optionTxt}>{currentQuestion.d}</Text>
                </TouchableOpacity> 
              </View>
            ): (
              <WrongScreen title="Ready to Restart?" onPress={quizsc}/>
            )}
            

            <View style={styles.bottom}>
              {ques!==0 && isAnswerCorrect &&<TouchableOpacity style={styles.button} onPress={handleBack}>
                <Text style={styles.buttonTxt}>BACK</Text>
              </TouchableOpacity>}  
              {ques==0 && isAnswerCorrect &&<TouchableOpacity style={styles.button} onPress={quizsc}>
                <Text style={styles.buttonTxt}>HOME</Text>
              </TouchableOpacity>}
              {ques!==data.length - 1 && isAnswerCorrect &&<TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonTxt}>NEXT</Text>
              </TouchableOpacity>} 

              {ques===data.length - 1 && isAnswerCorrect &&<TouchableOpacity style={styles.button} onPress={result}>
                <Text style={styles.buttonTxt}>SHOW RESULTS</Text>
              </TouchableOpacity>} 

            </View>
          </View>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  styleBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: null,
    width: 430,
  },
  kk:{
    fontSize:50
  },
  root: {
    flex: 1,
  },
  styleBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: null,
    width: 430,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal:20,
    height: '100%'
  },
  top:{
    marginVertical: 16
  },
  options:{
    marginVertical: 16,
    flex: 1
  },
  bottom:{
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button:{
    backgroundColor: '#DFDFDF',
    padding: 16,
    paddingHorizontal:16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30
  },
  buttonTxt:{
    fontSize: 18,
    fontWeight: '600',
    color: 'black'
  },
  question:{
    fontSize: 28,
    color: 'white'
  },
  optionTxt:{
    fontSize: 18,
    fontWeight: '500'
  },
  optionBtn:{
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    borderRadius: 12
  },
  parent:{
    height: '100%'
  },
  hidden: {
    display: 'none',
  },
});
