
export const BasicFunctions = () => {
  const addNumbers = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Functions</h3>
      <span>Addition result: {addNumbers(2, 8)}</span>
    </>
  )
}
