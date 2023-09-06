import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    const response = await "https://jsonplaceholder.typicode.com/users";
    const data = response.json();
    console.log(data);
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      const response = console.log(response);
    } catch (error) {}

    // return () => {
    //   "second";
    // };
  }, [users]);

  return <div>user</div>;
}

export default User;
