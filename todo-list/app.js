/***********************
 * FUNCTIONALITY START *
 **********************/

// this function will add new tasks.
const addTaskToUI = function(obj) {

  const rowTemplate = `<div class="list-group-item list-group-item-action flex-column align-items-start">
<div class="d-flex w-100 justify-content-between">
  <h5 class="mb-1">__task__</h5>
  <small>
    <a class='edit-link'>Edit</a> |
    <a class='delete-link'>Delete</a>
  </small>
</div>
</div>`;

  // create content from template
  const content = rowTemplate.replace('__task__', obj.task);

  // update DOM
  $('#task-list').append(content);
  console.log(`Task ${obj.task} has been added to the DOM`);
}

const editTask = function(){
  console.log('task edited');
};

const deleteTaskFromUI = function(element){
  element.remove();
  console.log('task deleted');
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

  $('#task-form').submit(function(event){
    event.preventDefault();
    // add a task only if the vaule is empty.
    const value = $('#task-input').val();
    if( value.length > 0) {
      addTaskToUI( {task: value} );
    }
    $('#task-input').val('');
  });


  // The following code snipet only adds
  // event listeners to already existing
  // DOM elements
  // $('.delete-link').click(function() {
  //   console.log(
  //     'Delete link was clicked',
  //     $(this).closest('.list-group-item').html()
  //   );
  // });

  // this will add event listeners to already
  // existing elements and elements that are
  // created in the future.
  $(document).on("click", ".edit-link", function(event){
    editTask();
  });

  $(document).on("click", ".delete-link", function(event){
    deleteTaskFromUI( $(this).closest('.list-group-item') );
  });

  // const data = {
  //   a: { task: 'Cook' },
  //   b: { task: 'Clean the bathroom' },
  //   c: { task: 'Go grocery shopping' }
  // };

  // /**
  //  * Iterate through tasks to update DOM
  //  */
  // for( const key in data ) {
  //   console.log(`adding ${key} to list`);
  //   const obj = data[key];
  //   addTaskToUI(obj);
  // }

});
