// Initialize Firebase
var config = {
  apiKey: "AIzaSyDvrZMoZ5eUDeRXd4fquKLV2-yPMItge7E",
  authDomain: "ravelo-todo-app.firebaseapp.com",
  databaseURL: "https://ravelo-todo-app.firebaseio.com",
  projectId: "ravelo-todo-app",
  storageBucket: "ravelo-todo-app.appspot.com",
  messagingSenderId: "1075327471805"
};
firebase.initializeApp(config);

/***********************
 * FUNCTIONALITY START *
 **********************/

// this function will add new tasks.
const addTaskToUI = function(key, taskValue) {

  const rowTemplate = `<div id="__key__" class="list-group-item list-group-item-action flex-column align-items-start">
<input type="hidden" value="__key__" />
<div class="d-flex w-100 justify-content-between">
  <h5 class="mb-1">__task__</h5>
  <small>
    <a class='edit-link'>Edit</a> |
    <a class='delete-link'>Delete</a>
  </small>
</div>
</div>`;

  // create content from template
  const content = rowTemplate
    .replace('__task__', taskValue) // string replace
    .replace(/__key__/g, key); // string replacement
                               // through regular
                               // expression

  // update DOM
  $('#task-list').append(content);
  console.log(`Task ${taskValue} has been added to the DOM`);
}

const editTask = function(){
  console.log('task edited');
};

const deleteTaskFromUI = function(element){
  element.remove();
  console.log('task deleted');
};

const addTaskToFirebase = function (task) {
  firebase
    .database()
    .ref('/tasks')
    .push({
      task: task
    })
    .then(function() {
      console.log("Document added successfully!");
    }).catch(function(error) {
      console.error("Error adding document: ", error);
      alert('we couldn\'t delete the item :(');
    });
}

const deleteTaskFromFirebase = function(key){
  return firebase
    .database() //https://ravelo-todo-app.firebaseio.com
    .ref(`/tasks`) // /tasks - collection
    .child(key)
    .remove();
};

/*********************
 * FUNCTIONALITY END *
 *********************/


/**
 * We need to make sure that our
 * code gets executed after the
 * page is loaded.
 */
$(document).ready(function() {

  /**
   * Submit event listener
   * 
   * This intercepts the submission
   * of the form and prevents its
   * default behaviour.
   * 
   */
  $('#task-form').submit(function(event){
    event.preventDefault();
    // add a task only if the vaule is empty.
    const value = $('#task-input').val();
    if( value.length > 0) {
      addTaskToFirebase(value);
    }
    $('#task-input').val('');
  });

  // this will add event listeners to already
  // existing elements and elements that are
  // created in the future.
  $(document).on("click", ".edit-link", function(event){
    editTask();
  });

  $(document).on("click", ".delete-link", function(event){
    const element = $(this).closest('.list-group-item');
    const key = element.find('input').val()
    // console.log(key, element);
    deleteTaskFromFirebase(key)
      .then(function() {
        console.log("Document successfully deleted!");
        deleteTaskFromUI( element );
      }).catch(function(error) {
        console.error("Error removing document: ", error);
        alert('we couldn\'t delete the item :(');
      });
  });

  /**
   * this will only get called once,
   * and loads all the records from
   * my database.
   */
  // firebase
  //   .database()
  //   .ref('/tasks')
  //   .once('value')
  //   .then(function(record) {
  //   console.log( 'called once', record.val() );
  // });

  /**
   * This block of code, will get executed
   * for every item added in my tasks collection
   * within firebase database.
   */
  firebase
    .database()
    .ref('/tasks')
    .on('child_added', function(record) {
      // when an item is added,
      // i call the function addTaskToUI so that
      // my newly added task, is displayed in the
      // UI
      addTaskToUI(
        record.key,
        record.val().task
      )
  });

  firebase
    .database()
    .ref('/tasks')
    .on('child_removed', function(record) {
      // <div id="c"></div>
      const element = $(`#${record.key}`);
      deleteTaskFromUI( element );
  });

});
