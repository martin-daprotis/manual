import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ImageOptions from './ImageOptions'
import ResultPage from './ResultPage'
import {Container,Question,Opt,OptionContainer,Wrapper} from "./styles"
import ReactCSSTransitionGroup from 'react-transition-group'

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
  const [questions, setQuestions] = useState(quiz.questions);
  const [answer,serAnswer] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setQuestions(quiz.questions);
  }, []);
 
  const handleClick = (value) => {
    if(step!==0){
      serAnswer(oldAnswer => oldAnswer || value);
    }
    setStep(oldStep => oldStep+1)
  }


  console.log(questions.length,step+1)

  return (
      <Wrapper>
      <Container>
          {
            questions.length >= step+1 && questions.map((q,i) => {
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
              }
              else{
                return null;
              }
            })
          }
      </Container>
       {
        questions.length === step ?
        <ResultPage answer = {answer}/>
        :
        null
      }
      </Wrapper>
  );
};


export default Quiz;