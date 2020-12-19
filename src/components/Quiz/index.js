import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Container,Question,Opt,ImageContainer,OptionContainer,ImgOptionContainer} from "./styles";

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


const Quiz = () => {
  const [questions, setQuestions] = useState(quiz.questions);
  const [answers,serAnswers] = useState({});
  const [step, setStep] = useState(0);

  useEffect(() => {
    setQuestions(quiz.questions);
  }, []);
 
  const handleClick = (value) => {
    const newAnswer= {step,value};
    serAnswers({newAnswer,...answers});
    setStep(oldStep => oldStep+1)
  }

  
  const extractFromImg = (str,prop) => {
    switch (prop) {
      case 'alt':{
        var altRegExp = /<img[^>]+alt='([^'>]+)'/g;
        let res= altRegExp.exec(str);
        return res ? res[1]:'';
      }
      case 'src':{
        var srcRegExp = /<img[^>]+src ='(https:\/\/[^'>]+)'/g;
        let res= srcRegExp.exec(str);
        return res ? res[1]:'';
      }
      case 'srcset':{
        var srcsetRegExp = /<img[^>]+srcset ='(https:\/\/[^'>]+)'/g;
        let res= srcsetRegExp.exec(str);
        return res ? res[1]:'';
      }
      default:
        return str;
    }
  }

  console.log(questions.length,step+1)

  return (
      <Container>
          {
            questions.length >= step+1 && questions.map((q,i) => {
              const firstOpt = Object.keys(q.options[0])[0];
              if(i===step)
                return <>
                  <Question>{q.question}</Question>
                  { q.options.length && firstOpt.includes('<img') ?
                      <ImgOptionContainer>
                        {q.options.map(o => {
                            const option =Object.entries(o)[0];
                            const alt =extractFromImg(option[0],'alt')
                            const src =extractFromImg(option[0],'src')
                            const srcset =extractFromImg(option[0],'srcset')
                            return <ImageContainer  onClick={() => handleClick(option[1])}>
                                    <img style={{width:'10em',height:'10em'}} alt={`${alt}`} src={`${src}`} srcset={`${srcset}`}/>
                                </ImageContainer>
                          })}
                      </ImgOptionContainer>
                    :
                    <OptionContainer>
                      {q.options.map(o =>  {
                          const option =Object.entries(o)[0];
                          return <Opt  onClick={() => handleClick(option[1])}> {option[0]}</Opt>
                        }
                      )}
                    </OptionContainer>
                  }
                  </>
            })
          }
          {
            questions.length === step ?
            <div>GREAT!!</div>
            :
            null
          }
      </Container>
  );
};


export default Quiz;