// Scoping errors are commented out as below

// The scope of `random` is too loose
//const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = runningEvent => {
  let days;
  if (runningEvent === "Marathon") {
    // let days = 50
    days = 50;
  } else if (runningEvent === "Triathlon") {
    // let days = 100
    days = 100;
  } else if (runningEvent === "Pentathlon") {
    // let days = 200
    days = 200;
  }

  return days;
};

// Define a `name` variable. Use it as an argument after updating logEvent and logTime
const name = "Nala";

// The scope of `name` is too tight
const logEvent = (name, runningEvent) => {
  // const name = 'Nala';
  console.log(`${name}'s event is: ${runningEvent}`);
};

const logTime = (name, days) => {
  // const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const runningEvent = getRandEvent();
const days = getTrainingDays(runningEvent);

logEvent(name, runningEvent);
logTime(name, days);

const runningEvent2 = getRandEvent();
const days2 = getTrainingDays(runningEvent2);
const name2 = "Warren";

logEvent(name2, runningEvent2);
logTime(name2, days2);
