document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    // remove default refresh
    e.preventDefault()
    buildTaskLister(e.target.new_task_description.value)
    form .reset()
  })
});


function buildTaskLister(task) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' x';
  li.textContent = `${task}  `;
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}




