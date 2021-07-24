import { useState, useEffect } from 'react';

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [multipleByThree, setMultipleByThree] = useState('');
  const [multipleByFive, setMultipleByFive] = useState('');

  const ONE_SECOND = 1000;
  const MIN = 1;
  const MAX = 100;
  const getRandomNumber = Math.floor(Math.random() * (MAX - MIN) + MIN)

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const newTimer = timer + 1;

      if(newTimer <= 10) {
        setTimer(newTimer);
      } else {
        setTimer(0);
      }
      if (newTimer === 10) {
        setRandomNumber(getRandomNumber);
      }
    }, ONE_SECOND);

    return () => {
      clearInterval(timeInterval);
    }
  }, [timer]);

  const FOUR_SECONDS = 5000;

  useEffect(() => {
    let isMultipleByThree;
    let isMultipleByFive;

    if (randomNumber % 3 === 0) {
      isMultipleByThree = 'This number is multiple of 3';
      setMultipleByThree(isMultipleByThree);
    }
    if (randomNumber % 5 === 0) {
      isMultipleByFive = 'This number is multiple of 5';
      setMultipleByFive(isMultipleByFive);
    }
    isMultipleByThree = setTimeout(() => {
      setMultipleByThree('')
    }, FOUR_SECONDS);
    isMultipleByFive = setTimeout(() => {
      setMultipleByFive('')
    }, FOUR_SECONDS);

    return () => {
      clearTimeout(isMultipleByThree)
      clearTimeout(isMultipleByFive)
    }
  }, [randomNumber])

  return {
    timer,
    randomNumber,
    multipleByThree,
    multipleByFive,
  }
}

export default useTimer;