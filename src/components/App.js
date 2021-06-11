import NavBar from './navbar';
import Test from '@client/Test';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <div className="row">
          <div className="col">
            <Test />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
