import { Link } from "react-router"
import PeopleContainer from "./components/PeopleContainer"

function App() {

  return (
    <div>
    <div>
      
        <PeopleContainer/>
      
    </div>
    <Link to="/p2">Page 2</Link>;
    </div>
  )
}

export default App
