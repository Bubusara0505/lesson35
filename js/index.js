const obj1 = {
  name: 'Object 1',
};

const obj2 = {
  name: 'Object 2',
};

function logName() {
  console.log(this.name);
}

obj1.logName = logName;
obj2.logName = logName;


obj1.logName();
obj2.logName();

const boundFunction = logName.bind(obj1);
boundFunction(); 

const arrowLogName = () => {
  console.log(this.name);
};


const objWithGreeting = {
  greeting: 'Привет',
  names: ['Жаныбек', 'Алина', 'Иван'],
  greetEveryone: function () {
    this.names.forEach((name) => {
      console.log(`${this.greeting}, ${name}!`);
    });
  },
};

objWithGreeting.greetEveryone();