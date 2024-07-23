import "bootstrap/dist/css/bootstrap.min.css";
import ClockHeading from "../Clockheading";
import ClockSlogan from "../ClockSlogan";
import CurrentTime from "../CurrentTime";

function App() {
  return (
    <>
      <div className="text-center">
        <ClockHeading/>
        <ClockSlogan/>
        <CurrentTime />
      </div>
     
    </>
  );
}

export default App;
