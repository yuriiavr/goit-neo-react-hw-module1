import "./App.css";
import { Profile } from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="container">
      <div className="left-column">
        <Profile userData={userData} />
      </div>
      <div className="right-column">
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;