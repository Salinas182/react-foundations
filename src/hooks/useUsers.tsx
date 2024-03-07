import { useEffect, useRef, useState } from "react";
import type { ReqResUsersListResponse, User } from "../interfaces";
import axios from 'axios';

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

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsers(currentPageRef.current)
      .then((usersInfo) => setUsers(usersInfo));
  }, []);

  const nextPage = async () => {
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

  return {
    users,

    prevPage,
    nextPage
  }
}