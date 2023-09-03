import "./App.css";
import { Example } from "./components/Example/Example";
import UsersFromServer from "./components/UsersFromServer/UsersFromServer";
import UserCard from "./components/userCard/userCard";
function App() {
  return (
    <>
      <Example />{" "}
      <UsersFromServer/>
      <UserCard/>
    </>
  );
}

export default App;
