import { useState } from "react";
import SelectNumbers from "./components/SelectNumbers";
import Chart from "./components/Chart";

function App() {
  const [arrayToSort, setArrayToSort] = useState([])
  const [arrayCreated, setArrayCreated] = useState(false)
  const [arraySorted, setArraySorted] = useState(false)

  var arr = []
  var steps = []
  var intervalId

  const createNewArray = (amount) => {
    setArraySorted(false);

    var temp = amount;
    while (temp--) {
      var randomNumber = Math.ceil(Math.random() * amount);
      arr.push(randomNumber);
    }
    
    setArrayCreated(true);
    setArrayToSort([...arr]);

    // console.log(arrayToSort);
  }

  const bubbleSort = () => {
    if(arraySorted) return
    let ar = arrayToSort;
    let i, j;

    for (i = 0; i < ar.length-1; i++) {
      for (j = 0; j < ar.length-i-1; j++) {
            if(ar[j] > ar[j+1]) {
              var temp = ar[j];
              ar[j] = ar[j+1];
              ar[j+1] = temp;
            }
            steps.push([...ar])
        }
    }

    let count = 0;
    intervalId = setInterval(() => {
        count++
        if (count < steps.length) {
          setArrayToSort(steps[count])
        }
        if (count >= steps.length) {
          setArraySorted(true);
          clearInterval(intervalId);
        }
    }, 200);

  }

  const selectionSort = () => {
    if(arraySorted) return

    steps = []
    let ar = arrayToSort;
    let i, j, min_idx;

    for( i = 0; i < ar.length-1; i++) {
      min_idx = i;
      for (j = i+1; j < ar.length; j++) {
        if (ar[j] < ar[min_idx]) {
          min_idx = j;
        }
      }
      var temp = ar[min_idx];
      ar[min_idx] = ar[i];
      ar[i] = temp;

      steps.push([...ar]);
    }


    let count = 0;
    intervalId = setInterval(() => {
        count++
        if (count < steps.length) {
          setArrayToSort(steps[count])
        }
        if (count >= steps.length) {
          setArraySorted(true);
          clearInterval(intervalId);
        }
    }, 200);

  }

  const resetArray = () => {
    setArrayToSort([]);
    setArrayCreated(false);
    setArraySorted(false)
    clearInterval(intervalId);
  }

  return (
    <>
      <h1>Sorting Algorithm Visualizer</h1>
      <SelectNumbers onSetAmount={createNewArray} />
      {arrayCreated && (
        <>
          <div className="array-container">
            <h2>Your array : {arrayToSort.map(element => {
            return (
                <span className="array-to-sort">{element}</span>
                )
              })}</h2>
          </div>
          <h1>{arraySorted && "Array Sorted!!!"}</h1>
          <Chart arrayToSort={arrayToSort} />
          <button onClick={bubbleSort}>Bubble Sort</button>
          <button onClick={selectionSort}>Selection Sort</button>
          <button onClick={bubbleSort}>Insertion Sort</button>
          <button onClick={bubbleSort}>Merge Sort</button>
        </>
      )}
      {arraySorted && (
          <button onClick={resetArray}>Reset</button>
      )}
    </>
  );
}

export default App;
