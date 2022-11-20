const hartvatenBtn = document.querySelector('#hartvaten');
const spijsverteringBtn = document.querySelector('#spijsvertering');
const hormonaalBtn = document.querySelector('#hormonaal');
const urinairBtn = document.querySelector('#urinair');
const ademhalingBtn = document.querySelector('#ademhaling');
const offBtn = document.querySelector('#off');

let selected;

hartvatenBtn.addEventListener('click', () => {
  if (selected == 'hartvaten') return;
  if (selected && selected != '' && selected != 'hartvaten') {
    eval(`${selected}Btn.classList.remove('btn-success'); ${selected}Btn.classList.add('btn-danger')`);
  }
  selected = 'hartvaten';
  hartvatenBtn.classList.add('btn-success');
  hartvatenBtn.classList.remove('btn-danger');
  console.log(selected);

  fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ group: 'hartvaten' }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(async (response) => {
      const res = await response.json();
      console.log(res);
    })
    .catch((error) => console.log(error));
});

spijsverteringBtn.addEventListener('click', () => {
  if (selected == 'spijsvertering') return;
  if (selected && selected != '' && selected != 'spijsvertering') {
    eval(`${selected}Btn.classList.remove('btn-success'); ${selected}Btn.classList.add('btn-danger')`);
  }
  selected = 'spijsvertering';
  spijsverteringBtn.classList.add('btn-success');
  spijsverteringBtn.classList.remove('btn-danger');
  console.log(selected);

  fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ group: 'spijsvertering' }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(async (response) => {
      const res = await response.json();
      console.log(res);
    })
    .catch((error) => console.log(error));
});

hormonaalBtn.addEventListener('click', () => {
  if (selected == 'hormonaal') return;
  if (selected && selected != '' && selected != 'hormonaal') {
    eval(`${selected}Btn.classList.remove('btn-success'); ${selected}Btn.classList.add('btn-danger')`);
  }
  selected = 'hormonaal';
  hormonaalBtn.classList.add('btn-success');
  hormonaalBtn.classList.remove('btn-danger');
  console.log(selected);

  fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ group: 'hormonaal' }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(async (response) => {
      const res = await response.json();
      console.log(res);
    })
    .catch((error) => console.log(error));
});

urinairBtn.addEventListener('click', () => {
  if (selected == 'urinair') return;
  if (selected && selected != '' && selected != 'urinair') {
    eval(`${selected}Btn.classList.remove('btn-success'); ${selected}Btn.classList.add('btn-danger')`);
  }
  selected = 'urinair';
  urinairBtn.classList.add('btn-success');
  urinairBtn.classList.remove('btn-danger');
  console.log(selected);

  fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ group: 'urinair' }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(async (response) => {
      const res = await response.json();
      console.log(res);
    })
    .catch((error) => console.log(error));
});

ademhalingBtn.addEventListener('click', () => {
  if (selected == 'ademhaling') return;
  if (selected && selected != '' && selected != 'ademhaling') {
    eval(`${selected}Btn.classList.remove('btn-success'); ${selected}Btn.classList.add('btn-danger')`);
  }
  selected = 'ademhaling';
  ademhalingBtn.classList.add('btn-success');
  ademhalingBtn.classList.remove('btn-danger');
  console.log(selected);

  fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ group: 'ademhaling' }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(async (response) => {
      const res = await response.json();
      console.log(res);
    })
    .catch((error) => console.log(error));
});

offBtn.addEventListener('click', () => {
  if (selected && selected != '') {
    eval(`${selected}Btn.classList.remove('btn-success'); ${selected}Btn.classList.add('btn-danger')`);
  }
  selected = '';

  fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ group: 'off' }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(async (response) => {
      const res = await response.json();
      console.log(res);
    })
    .catch((error) => console.log(error));
});
