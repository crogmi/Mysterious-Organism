// Creates pairs object database
const pairs = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
}


// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Create function to return an object that contains specimenNum and dna
// First parameter is number (no duplicates) second parameter is an array of 15 DNA bases
// Object will be used to add more methods to it later

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    // Mutates one element in the dna strand to a new dna base
    mutate() {
      const index = Math.floor(Math.random () * 15);
      let temp = returnRandBase();
      while (temp === this.dna[index]) {
         temp = returnRandBase();
      }
      this.dna[index] = temp;
      return this.dna;
    },
    // Compares two dna strands and returns the percentage of strands in common
    compareDNA(obj) {
      let counter = 0;
      for (let i = 0; i < obj.dna.length; i++) {
         obj.dna[i] === this.dna[i] ? counter++ : counter += 0;
      }
      let percentage = (counter / (obj.dna.length + 1)).toFixed(2);
      return 'specimen' + this.specimenNum + ' and specimen' + obj.specimenNum + ' have ' + percentage + '% DNA in common.';
    },
    // Checks whether the dna strand comprises C and G for greater than or equal to 60%
    willLikelySurvive() {
      const survival = ([...this.dna].filter(x => x === 'C' || x === 'G').length) / (this.dna.length);
      return survival >= 0.6;
    },
    // Outputs the complementary strand of the objects current dna strand
    complementStrand() {
      const complement = [];
      for (let x = 0; x < this.dna.length; x++) {
        complement.push(pairs[this.dna[x]]);
      }
      return complement;
    }
  }
};

// Function to create any number of samples
const createSamples = (num) => {
  const sampleList = [];
  for (let i = 1; i <= num; i++) {
    sampleList.push(pAequorFactory(i, mockUpStrand()));
  }
  return sampleList;
}


// Should print object with specinemNum set as num and dna set as random DNA strand
const sample = pAequorFactory(1, mockUpStrand()); // Creates sample to perform below tests
console.log(sample); // Should print the original sample DNA strand
console.log(sample.mutate()); // Should print the original DNA strand with one strand mutated
console.log(sample.compareDNA(pAequorFactory(2, mockUpStrand()))); // Should print the percentage of DNA strands in common
console.log(sample.willLikelySurvive()); // Should print true or false based on likelihood of survival
console.log(sample.complementStrand()); // Should print the complementary strand to the current dna strand


const testSamples = createSamples(30);
console.log(testSamples.length); // Should print a length of 30 for 30 objects created


// Other improvements in functionality includes findings the two DNA strands in testSamples with the most common DNA










