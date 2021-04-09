function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let dezDays = document.getElementById('days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index in dezDaysList) {
  let list = document.createElement('li');
  dezDays.appendChild(list);
  list.innerText = dezDaysList[index];
  list.className = 'day';

  if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
    list.className = 'day holiday';
  } else if (dezDaysList[index] === 25) {
    list.className = 'day holiday friday';
  } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
    list.className = 'day friday';
  }
};

function addHolidayButton(string) {
  let dinamicBtn = document.createElement('button');
  dinamicBtn.id = 'btn-holiday';
  let containBtn = document.getElementsByClassName('buttons-container')[0];
  containBtn.appendChild(dinamicBtn).innerText = 'Feriados';
};

addHolidayButton();

function holidayColorButton() {
  let holidayBtn = document.getElementById('btn-holiday');
  let holidayClass = document.getElementsByClassName('holiday');
  
  holidayBtn.addEventListener('click', function(){
    for (let index = 0; index < holidayClass.length; index += 1) {
      if (holidayClass[index].style.backgroundColor === 'lightgrey') {
        holidayClass[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holidayClass[index].style.backgroundColor = 'lightgrey';
      };
    }
  });
};

holidayColorButton();

function addFridayButton(string) {
  let fridayBtn = document.createElement('button');
  fridayBtn.id = 'btn-friday';
  let containBtn = document.getElementsByClassName('buttons-container')[0];
  containBtn.appendChild(fridayBtn).innerText = 'Sexta-feira';
};

addFridayButton();

function fridayTextButton(string) {
  let fridayBtn = document.getElementById('btn-friday');
  let fridayClass = document.getElementsByClassName('friday');
  
  fridayBtn.addEventListener('click', function(){
    for (let index = 0; index < fridayClass.length; index += 1) {
      if (fridayClass[index].innerText !== 'SEXTA-FEIRA') {
        fridayClass[index].innerText = 'SEXTA-FEIRA';
      } else {
        fridayClass[index].innerText = string[index];
      };
    }
  });
};

fridayTextButton([4, 11, 18, 25]);

function mouseOver() {
  let overDays = document.getElementById('days');

  overDays.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '35px';
    event.target.style.transition = '0.8s';
  })
}

function mouseOut() {
  let outDays = document.getElementById('days');
  outDays.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
  })
}

mouseOver();
mouseOut();

function addTaskList() {
  let taskList = document.createElement('span');
  let myTasks = document.getElementsByClassName('my-tasks');
  myTasks.appendChild(taskList);

};

