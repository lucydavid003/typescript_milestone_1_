//sum of positives//
function sumOfPositives(arr: number[]): number {
  let sum: number = 0;

  for (const num of arr) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumOfPositives([1, -3, 5, -2, 9, -8])): 
console.log(sumOfPositives([-3, -6, 7, -8])); 

//find maximum number//
function findMax(arr2: number[]): number {
  let max: number = arr2[0];

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > max) {
      max = arr2[i];
    }
  }

  return max;
}


console.log(findMax([3, 7, 2, 9, 5]));  

//find winner//
type Candidate = {
  name: string;
  votes: number;
};

function findWinner(candidates: Candidate[]): Candidate {
  if (candidates.length === 0) {
    throw new Error("empty list.");
  }

  let winner: Candidate = candidates[0];

  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }

  return winner;
}

const candidates: Candidate[] = [
  { name: "Alice", votes: 80 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 25 },
];

console.log(findWinner(candidates));

//find longestword//

function findLongestWords(arrOfString: string[]): string {
  let longestWord: string = "";
  let len: number = 0;

  for (let i = 0; i < arrOfString.length; i++) {
    if (len < arrOfString[i].length) {
      len = arrOfString[i].length;
      longestWord = arrOfString[i];
    }
  }

  return longestWord;
}

console.log(
  findLongestWords(["apple", "banana", "pear", "grapefruit", "mylovelyorandes"]));

 

// Filter by Length//

function filterByLength(arr: string[], minLength: number): string[] {
  const filtered = arr.filter((item) => item.length >= minLength);
  console.log(filtered);
  return filtered;
}

filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5);

//sumof evennumbers//
function sumOfEvenNumbers(array: number[]): number {
  const filteredEvenNumbers = array.filter((item) => item % 2 === 0);

  let sum = 0;
  for (const num of filteredEvenNumbers) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}


console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));

//difference of odd and even numbers//
function differenceEvenOdd(arr3: number[]): number {
  const filteredEven = arr3.filter((item) => item % 2 === 0);
  const filteredOdd = arr3.filter((item) => item % 2 === 1);

  let sumEven = 0;
  let sumOdd = 0;

  for (const num of filteredEven) {
    if (num > 0) {
      sumEven += num;
    }
  }

  for (const num of filteredOdd) {
    if (num > 0) {
      sumOdd += num;
    }
  }

  return sumEven - sumOdd;
}

console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));

//countoccurences//
function countOccurences(arr8: string[]):{[key:string]:number}{
const counts: {[ key: string]:number}={};
for (let string of arr8){

}

return counts;
}

//county truthy//

//average number//
function average(arr7: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr7.length; i++) {
    sum += arr7[i];  //
  }
  let average = sum / arr7.length;
  return average;
}

console.log(average([2, 4, 6, 8]));

//linear search//
function linearSearch(arr4: number[], value: number): number {
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([5, 3, 7, 1, 4], 9));

//reverse linear search//
function reverseLinearSearch(arr5: number[], value: number): number {
  const index: number[] = [];
  for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] === value) {
      index.push(i);
    }
  }
  return index.pop() ?? -1;
}

console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)); 

//linear search all//

function linearSearchAll(arr6: number[], value: number): number[] {
  let index: number[] = [];
  for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] === value) {
      index.push(i);
    }
  }
  return index;
}

console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));

 "banana", "apple", "orange", "banana", "apple"]));
//   //remove duplicates//
function  removeDuplicates(arr:number[]): number[] {
  const uniqueSet : Set<number> =new Set(arr);
  return Array. from(uniqueSet);

}
console.log(removeDuplicates([1,2,3,4,2,5]));

//most frequent//
function mostFrequent(arr10: string[]): string {
  let maximumCount = 0;
  let mostFrequent: string = "";

  for (let i = 0; i < arr10.length; i++) {
    let count = 0;

    for (let j = 0; j < arr10.length; j++) {
      if (arr10[i] === arr10[j]) {
        count++;
      }
    }
    
    if (count > maximumCount) {
      maximumCount = count;
      mostFrequent = arr10[i];
    }
  }

  return mostFrequent;
}


  
//



