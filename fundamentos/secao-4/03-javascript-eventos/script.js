const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const addHolidayClass = (day, listItem) => {
  if (day === 24 || day === 25 || day === 31) {
    listItem.classList.add('holiday');
  }
};

const addFridayClass = (day, listItem) => {
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    listItem.classList.add('friday');
  }
};

const createDaysList = (daysList) => {
  const days = document.getElementById('days');

  for (let index = 0; index < daysList.length; index += 1) {
    const decemberDay = daysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.classList.add('day');
    dayListItem.style.backgroundColor = 'rgb(238,238,238)';
    addHolidayClass(decemberDay, dayListItem);
    addFridayClass(decemberDay, dayListItem);

    dayListItem.innerText = decemberDay;
    days.appendChild(dayListItem);
  }
};
createDaysList(decemberDaysList);

const setHolidayBgColor = () => {
  const holidayButton = document.getElementById('btn-holiday');

  holidayButton.addEventListener('click', () => {
    const holidays = document.getElementsByClassName('holiday');

    for (let index = 0; index < holidays.length; index += 1) {
      const holiday = holidays[index];

      if (holiday.style.backgroundColor.includes('rgb(238, 238, 238)')) {
        holiday.style.backgroundColor = 'rgb(169, 180, 19)';
      } else {
        holiday.style.backgroundColor = 'rgb(238, 238, 238)';
      }
    }
  });
};
setHolidayBgColor();

const setFridayBgColor = () => {
  const fridayBtn = document.getElementById('btn-friday');

  fridayBtn.addEventListener('click', () => {
    const fridays = document.getElementsByClassName('friday');
    const daysArr = ['4', '11', '18', '25'];

    for (let index = 0; index < fridays.length; index += 1) {
      const friday = fridays[index];

      if (friday.innerText !== 'Sextouuu!!') {
        friday.innerText = 'Sextouuu!!';
      } else {
        friday.innerText = daysArr[index];
      }
    }
  });
};
setFridayBgColor();

const setDaysZoom = () => {
  const daysArr = document.getElementsByClassName('day');

  for (let index = 0; index < daysArr.length; index += 1) {
    const day = daysArr[index];
    day.addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px';
    });
    day.addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
    });
  }
};
setDaysZoom();

const setTaskCalendar = () => {
  const myTasks = document.getElementsByClassName('task');

  for (let index = 0; index < myTasks.length; index += 1) {
    const task = myTasks[index];

    task.addEventListener('click', (event) => {
      event.target.classList.toggle('selected');
    });
  }
};
setTaskCalendar();

const verifyTaskColor = (event) => {
  const selectedTask = document.getElementsByClassName('selected')[0];
  const liColor = window.getComputedStyle(event.target)
    .getPropertyValue('color');

  if (selectedTask && liColor.includes('rgb(119, 119, 119)')) {
    event.target.style.color = selectedTask.style.backgroundColor;
  } else {
    event.target.style.color = 'rgb(119, 119, 119)';
  }
};

const setTaskColorToCalendarDay = () => {
  const getDaysList = document.getElementsByClassName('day');
  for (let index = 0; index < getDaysList.length; index += 1) {
    getDaysList[index].addEventListener('click', verifyTaskColor);
  }
};
setTaskColorToCalendarDay();

const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');

const addWithEnterKey = (key) => {
  if (taskInput.value === '' && key.code === 'Enter') {
    alert('Preencha o campo vazio antes de adicionar!');
  }

  if (key.code === 'Enter' && taskInput.value !== '') {
    const newTaskItem = document.createElement('li');
    newTaskItem.innerText = taskInput.value;
    taskList.appendChild(newTaskItem);
    taskInput.value = '';
  }
};

const addWithButton = () => {
  if (taskInput.value === '') {
    alert('Preencha o campo vazio antes de adicionar!');
  } else {
    const newTaskItem = document.createElement('li');
    newTaskItem.innerText = taskInput.value;
    taskList.appendChild(newTaskItem);
    taskInput.value = '';
  }
};

const addNewCommitment = () => {
  const addBtn = document.getElementById('btn-add');

  taskInput.addEventListener('keydown', addWithEnterKey);
  addBtn.addEventListener('click', addWithButton);
};
addNewCommitment();
