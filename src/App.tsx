
import './App.css'
import MarksToGrades from './components/MarksToGrades'
import MaxOfThreeNumber from './components/MaxOfThreeNumber'
import MultipleOf7 from './components/MultipleOf7'

function App() {
 

  return (
    <>
    
     <MaxOfThreeNumber num1={23} num2={56} num3={80}/>
     <MultipleOf7 num1={4}/>
     <MarksToGrades marks={94}/>
    </>
  )
}

export default App
