function TodoItem1() {
  let todoName = "Buy MILK";
  let todoDate = "4/10/2023";

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
