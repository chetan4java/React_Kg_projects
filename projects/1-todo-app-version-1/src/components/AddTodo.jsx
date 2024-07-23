function AddTodo() {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-5">
          <input type="text" placeholder="Enter Todo here.." />
        </div>
        <div class="col-5">
          <input type="date" name="" id="" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
