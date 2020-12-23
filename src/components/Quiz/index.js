import React,{useRef,useEffect,useState} from 'react'
import axios from 'axios'
import ImageOptions from './ImageOptions'
import ResultPage from './ResultPage'
import {Container,Question,Opt,OptionContainer,Wrapper} from "./styles"
import { gsap } from 'gsap';

let quiz = {
  "questions": [
    {
      "question": "Which image best matches your hair loss?",
      "type": "ChoiceType",
      "options": [
        {"<img alt='Temples' src ='https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png'  srcset ='https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png   2x' />": "Temples"},
        {"<img alt='Temples & Crown' src ='https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png' srcset ='https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402x.png 2x'/>": "Temples & Crown" },
        {"<img alt='Patchy' src ='https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png' srcset ='https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png2x\"/>":"Patchy"},
        {"<img alt='Moderate' src ='https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png' srcset ='https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.png 2x' />": "Moderate" },
        {"<img alt='Extensive' src ='https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png' srcset ='https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.png 2x'/>": "Extensive" },
        {"<img alt='Complete' src ='https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png' srcset ='https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.png 2x' />": "Complete" }
      ]
    },
    {
      "question": "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/ Prostate monitoring ? ",
      "type": "ChoiceType",
        "options": [
          {"Yes": true},
          {"No": false}
        ]
  },
  {
    "question": "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
    "type": "ChoiceType",
    "options": [
      {"Yes": true},
      {"No": false}
    ]
  }
  ]
}

const BooleanOptions = ({options,handleClick}) => {
  return  <OptionContainer>
            {options.map(o =>  {
                const option =Object.entries(o)[0];
                return <Opt  onClick={() => handleClick(option[1])}> {option[0]}</Opt>
              }
            )}
          </OptionContainer>
}
  

const Quiz = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState(quiz);
  const [answer,serAnswer] = useState(false);
  const [step, setStep] = useState(0);
  const wrapperRef=useRef();
  const resultRef=useRef();

  useEffect(() => {
    gsap.from(wrapperRef.current,{
      duration:1,
      x: '100%',
      ease:'power4'
    });
    gsap.from(resultRef.current,{
      duration:1,
      opacity: 0
    });
  }, [step]);
 
  const handleClick = (value) => {
    if(step!==0){
      serAnswer(oldAnswer => oldAnswer || value);
    }
    setStep(oldStep => oldStep+1)
  }

  useEffect(() => {
    setLoading(true);
    const getQuiz = async () => {
      try{
        const res = await axios.get('http://localhost:4000/get_quiz');
        if(res.status===200 && res.data){
          setQuestions(res.data);
        }
        setLoading(false);
      }
      catch(err){
        console.log(err);
        setLoading(false);
      }
    }
    getQuiz();
  }, []);


  if(loading)
    return <h3>Loading...</h3>

  return (
      <Wrapper>
        <Container ref={wrapperRef}>
            {
              questions.questions.length >= step+1 && questions.questions.map((q,i) => {
                if(q.options.length) { 
                  const firstOpt = Object.keys(q.options[0])[0];
                  if(i===step)
                    return <>
                      <Question>{q.question}</Question>
                      { q.options.length && firstOpt.includes('<img') ?
                          <ImageOptions options = {q.options} handleClick = {handleClick}/>
                        :
                          <BooleanOptions options = {q.options} handleClick = {handleClick}/>
                      }
                      </>
                  return null
                }
                else{
                  return null;
                }
              })
            }
        </Container>
        <div ref = {resultRef}>
          {
            questions.questions.length === step ?
            <ResultPage  answer = {answer}/>
            :
            null
          }
        </div>
      </Wrapper>
  );
};


export default Quiz;