import UserCard from "../../components/UserCard/UserCard";
import { users } from "../../tempdb";
import styles from "./Users.module.css";
const Users = () => {
  return (
    <main>
      <div className={styles.users}>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </main>
  );
};
export default Users;
