interface MarksToGradesProps{
    marks:number;
}

const MarksToGrades = ({marks}:MarksToGradesProps) => {
    function marksToGrades(a:number):string{
        if (a >= 50 && a > 75) {
            return"Satisfactory"
        }if (a > 75) {
            return "Good"
            
        } else {
            return "fail"
            
        }

    }
  return (
    <div>
      <h1>Result:{marksToGrades(marks)} </h1>
    </div>
  )
}

export default MarksToGrades
