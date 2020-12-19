// import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import {Container} from '@material-ui/core'
import Footer from './components/Footer'
import Header from './components/Header'
import SimpleComp from './components/SimpleComp'
import Quiz from './components/Quiz'


const dataHair={
  number:'01',
  images:['./media/hair/hair-photo-1-2-x.png','./media/hair/hair-photo-1-2-x@2x.png','./media/hair/hair-photo-1-2-x@3x.png'],
  title:'HAIR LOSS',
  subtitle:'Hair loss needn’t be irreversible.| We can help!',
  detail:'Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours.'
}

const dataSex = {
  number:'02',
  images:['./media/sex/sex-photo-1-2-x.png','./media/sex/sex-photo-1-2-x@2x.png','./media/sex/sex-photo-1-2-x@3x.png'],
  title:'ERECTILE DYSFUNCTION',
  subtitle:'Erections can be a tricky thing.| But no need to feel down!',
  detail:'There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed.'
}

function App() {
  const [takeQuiz, setTakeQuiz] = useState(false);
  
  const handleTakeQuiz = () => {
    setTakeQuiz(!takeQuiz)
  }

  return (
      <div className="App">
        <Container  maxWidth="lg">
          <div style={{display:`${takeQuiz ? 'none':'block' }`}}>
            <Header takeQuiz={handleTakeQuiz}/>
            <SimpleComp data={dataHair} side='left'/>
            <SimpleComp data={dataSex} side='right'/>
            <Footer/>
          </div>
          <div style={{display:`${takeQuiz ? 'block' : 'none'}`}}>
            <Quiz />
          </div>
        </Container>
      </div>
  )
}

export default App;
