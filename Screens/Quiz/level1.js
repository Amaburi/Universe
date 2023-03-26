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

import Responsive from '../../Helper/Responsive';

import Bg from '../../assets/space.jpg';
export default function Level1({navigation}) {
    const [data, setQuestions] = useState([]);
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const getQuiz = async () => {
        const url = 'http://192.168.100.103:5000/api/quizzes?levelId=1';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.data);
        setOptions(generateOptionsAndShuffle(data.data));
    }
    useEffect(() => {
        getQuiz()
    }, []);


  const handleNext=()=>{
    setQues(ques+1)
  }
  const handleBack=()=>{
    setQues(ques-1)
  }
  const generateOptionsAndShuffle = (_question) => {
    const options = [_question.a, _question.b, _question.c, _question.d];
    const correctIndex = ['a', 'b', 'c', 'd'].indexOf(_question.key);
    options.push(correctIndex);
    shuffleArray(options);
    return options;
  };
  
  
  const shuffleArray=(array)=>{
    for(let i = array.length -1; i>0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  const handleSelectedOption = (selectedOption) => {
    if (selectedOption === currentQuestion.key) {
      console.log("Correct answer!");
      // handle correct answer logic here
    } else {
      console.log("Wrong answer!");
      // handle wrong answer logic here
    }
  }



  const quizsc = () => {
    navigation.navigate('Quizindex');
  };
  const currentQuestion = data[ques];

  return(
    
      <View style={styles.container}>
        <Image style={styles.styleBackground} source={Bg}></Image>
        {currentQuestion && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}> Q.{decodeURIComponent(currentQuestion.quiz)}</Text>
            </View>

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

            <View style={styles.bottom}>
              {ques!==0 &&<TouchableOpacity style={styles.button} onPress={handleBack}>
                <Text style={styles.buttonTxt}>BACK</Text>
              </TouchableOpacity>}  
              {ques==0 &&<TouchableOpacity style={styles.button} onPress={quizsc}>
                <Text style={styles.buttonTxt}>HOME</Text>
              </TouchableOpacity>}
              {ques!==data.length - 1 && <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonTxt}>NEXT</Text>
              </TouchableOpacity>} 

              {ques===data.length - 1 && <TouchableOpacity style={styles.button} onPress={()=>null}>
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
  }
});
