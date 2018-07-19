



//
// export function getTasksThunk() {
//  return dispatch => {
//  const tasks = [];
//  database.ref(`/`).once('value', snap => {
//   snap.forEach(data => {
//   let task = data.val();
//   tasks.push(task)
//   })
//  })
//  .then(() => dispatch(getTasks(tasks)))
//  }
// }
