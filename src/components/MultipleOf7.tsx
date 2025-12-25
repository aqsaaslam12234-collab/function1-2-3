interface MultipleOf7Props {
  num1: number;
}

const MultipleOf7 = ({ num1 }: MultipleOf7Props) => {
  function isMultipleOf7(a: number): string {
    if (a % 7 === 0) {
      return `${a} is multiple of seven`;
    } else {
      return `${a} is not multiple of seven`;
    }
  }
  return (
    <div>
      <h1 className="font-bold text-1xl">Solution 2</h1>
      Result: {isMultipleOf7(num1)}
    </div>
  );
};

export default MultipleOf7;
