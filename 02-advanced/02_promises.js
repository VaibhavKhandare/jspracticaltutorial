const successPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

successPromise.then(result => console.log(result));

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve({ data: 'API response' });
      } else {
        reject(new Error('API failed'));
      }
    }, 50);
  });
};

fetchData()
  .then(response => console.log('Got:', response))
  .catch(error => console.error('Error:', error.message));

const step1 = () => Promise.resolve(1);
const step2 = (value) => Promise.resolve(value * 2);
const step3 = (value) => Promise.resolve(value + 3);

step1()
  .then(step2)
  .then(step3)
  .then(result => console.log('Result:', result));

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(results => console.log('All results:', results));

const failingPromise = Promise.reject('Error');
const successPromise2 = Promise.resolve('Success');

Promise.allSettled([failingPromise, successPromise2])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Fulfilled:', result.value);
      } else {
        console.log('Rejected:', result.reason);
      }
    });
  });

const fastPromise = new Promise(resolve => setTimeout(() => resolve('Fast'), 100));
const slowPromise = new Promise(resolve => setTimeout(() => resolve('Slow'), 500));

Promise.race([fastPromise, slowPromise])
  .then(winner => console.log('Winner:', winner));

Promise.resolve()
  .then(() => console.log('1'))
  .then(() => {
    console.log('2');
    return Promise.resolve('3');
  })
  .then(value => console.log(value))
  .finally(() => console.log('Cleanup'));
