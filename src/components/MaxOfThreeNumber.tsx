interface MaxOfThreeNumberProps {
  num1: number;
  num2: number;
  num3: number;
}
const MaxOfThreeNumber = ({ num1, num2, num3 }: MaxOfThreeNumberProps) => {
  function heigestNumber(a: number, b: number, c: number): string {
    if (a > b && a > c) {
      return `${a} is the gratest Number`;
    } else if (b > a && b > c) {
      return `${b} is the gratest number`;
    } else {
      return `${c} is the gratest number`;
    }
  }

  return (
    <div>
      <h1 className="font-bold text-1xl"> Solution 1</h1>
      Result: {heigestNumber(num1, num2, num3)}
    </div>
  );
};

export default MaxOfThreeNumber;
