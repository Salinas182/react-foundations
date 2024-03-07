import axios from "axios"
import { useEffect, useState, useRef } from 'react';
import type { ReqResUsersListResponse, User } from "../interfaces";

const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUsersListResponse>('https://reqres.in/api/users', {
      params: {
        page
      }
    });
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsers(currentPageRef.current)
      .then((usersInfo) => setUsers(usersInfo));
  }, []);

  const nextPage = async() => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);

    if (users?.length) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  }
  const prevPage = async () => {
    if (currentPageRef.current <= 1) return;
    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setUsers(users);
  }

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

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const { avatar, first_name, last_name, email} = user;
  return (
    <tr>
      <td><img style={{ width: '50px' }} src={avatar} alt="user avatar" /></td>
      <td>{`${first_name} ${last_name}`}</td>
      <td>{email}</td>
    </tr>
  )
}

