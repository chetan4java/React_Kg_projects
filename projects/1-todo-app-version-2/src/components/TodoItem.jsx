function TodoItem({todoName,todoDate}) {
 
console.log(todoName)
console.log(todoDate)
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
