import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

export const UsersPage = () => {
  const { users, prevPage, nextPage } = useUsers();

  return (
    <>
      <h3>Users:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) =>
          (
            <UserRow key={user.id} user={ user}/>
          )
          )}
        </tbody>
      </table>

      <div>
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </>
  )
}
