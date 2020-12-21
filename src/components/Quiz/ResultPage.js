
import {Result,Logo} from "./styles";

const ResultPage = ({answer}) => {

  return (
      <Result>
        <Logo images={['./media/logo/manual-symblol.png','./media/logo/manual-symblol@2x.png','./media/logo/manual-symblol@3x.png']}/>
        <div>
          {answer ? 
            <span>Unfortunately, we are unable to prescribe this medication for you.
                This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. 
                You should discuss this further with your GP or specialist if you would still like this medication.</span>
          :
          <>
            <span>Great news! We have the perfect treatment for your hair loss. Proceed to </span>
            <a href="https://www.manual.co">www.manual.co</a>
            ​<span>, and prepare to say hello to your new hair!</span>
          </>
          }
        </div>
        
      </Result> 
  )
}

export default ResultPage;