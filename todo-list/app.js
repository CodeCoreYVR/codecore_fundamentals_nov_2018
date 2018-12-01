/***********************
 * FUNCTIONALITY START *
 **********************/

// this function will add new tasks.
const addTask = function(obj) {

  const rowTemplate = `<div class="list-group-item list-group-item-action flex-column align-items-start">
<div class="d-flex w-100 justify-content-between">
  <h5 class="mb-1">__task__</h5>
  <small>-- functionality --</small>
</div>
</div>`;

  // create content from template
  const content = rowTemplate.replace('__task__', obj.task);

  // update DOM
  $('#task-list').append(content);
  console.log(`Task ${obj.task} has been added to the DOM`);
}

const editTask = function(){};
const deleteTask = function(){};

/*********************
 * FUNCTIONALITY END *
 *********************/


/**
 * We need to make sure that our
 * code gets executed after the
 * page is loaded.
 */
$(document).ready(function() {

  const data = {
    a: { task: 'Cook' },
    b: { task: 'Clean the bathroom' },
    c: { task: 'Go grocery shopping' }
  };

  /**
   * Iterate through tasks to update DOM
   */
  for( const key in data ) {
    console.log(`adding ${key} to list`);
    const obj = data[key];
    addTask(obj);
  }
});