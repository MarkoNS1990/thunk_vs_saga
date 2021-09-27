import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsersBegin, fetchUsersThunk } from "./redux/users/usersActions";

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsersBegin());
  }, []);

  return (
    <div className="App">
      {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default App;
