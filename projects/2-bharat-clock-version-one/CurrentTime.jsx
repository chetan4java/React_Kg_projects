const CurrentTime=()=>{

  let time = new Date();

  return(<>
   <p>This is the current time {time.getDate()}/ {time.getDay()}/ {time.getFullYear()}and {time.toTimeString()}</p>
   <p>This is the current time {time.toLocaleDateString()} and {time.toLocaleTimeString()}</p>
  </>);
}

export default CurrentTime;