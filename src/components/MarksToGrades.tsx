interface MarksToGradesProps {
  marks: number;
}

const MarksToGrades = ({ marks }: MarksToGradesProps) => {
  function marksToGrades(a: number): string {
    if (a >= 50 && a > 75) {
      return "Satisfactory";
    } else if (a > 75) {
      return "Good";
    } else {
      return "fail";
    }
  }
  return (
    <div>
      <h1 className="font-bold text-1xl">Solution 3 </h1>
      Result:{marksToGrades(marks)}
    </div>
  );
};

export default MarksToGrades;
