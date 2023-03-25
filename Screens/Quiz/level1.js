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
export default function Level1() {
  const [data, setQuestions] = useState([]);
    const [ques, setQues] = useState(0);
    const getQuiz = async () => {
        const url = 'http://192.168.100.103:5000/api/quizzes?levelId=1';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.data);
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
  const currentQuestion = data[ques];

  return(
    
      <View style={styles.container}>
        {currentQuestion && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}> Q.{decodeURIComponent(currentQuestion.quiz)}</Text>
            </View>

            <View style={styles.options}>
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.optionTxt}>{currentQuestion.a}</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.optionTxt}>{currentQuestion.b}</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.optionTxt}>{currentQuestion.c}</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.optionTxt}>{currentQuestion.d}</Text>
              </TouchableOpacity> 
            </View>

            <View style={styles.bottom}>
              <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Text style={styles.buttonTxt}>BACK</Text>
              </TouchableOpacity>  

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
