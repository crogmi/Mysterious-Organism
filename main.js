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

function pAequorFactory(num, arr) {
  this.specimenNum = num;
  this.dna = arr;
};

const sample = new pAequorFactory(1, mockUpStrand());
/*
  return {
    // Receives the sample DNA strand and mutates one element within the strand
    mutate: function (obj) {
      const index = Math.floor(Math.random () * 15);
      let temp = returnRandBase();
      // *NOTE TO SELF* Should "this" be used instead of obj? Possible?
      while (temp === obj.dna[index]) {
         temp = returnRandBase();
      }
      obj.dna[index] = temp;
      return obj;
    },
    // Compares the input obj to the sample
    compareDNA: function (obj) {
      let counter = 0;
      for (let i = 0; i < obj.dna.length; i++) {
        obj.dna[i] === this.dna[i] ? counter++ : counter += 0;
      }
      let percentage = (counter / (obj.dna.length + 1)).toFixed(2);
      console.log('specimen' + this.specimenNum + ' and specimen' + obj.specimenNum + ' have ' + percentage + '% DNA in common.')
    }
  }
}
*/

console.log(sample); // Should print object with specinemNum set as num and dna set as random DNA strand







