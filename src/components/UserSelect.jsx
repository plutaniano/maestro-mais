import { useEffect, useState } from 'react';
import { Select } from '@chakra-ui/react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

export default function UserSelect({
  user,
  onChange,
  isAdvisor,
  filters = {},
}) {
  const params = { ...filters };
  const [users, setUsers] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate.get('/api/users/', { params, is_advisor: isAdvisor })
      .then((resp) => setUsers(resp.data.results));
  }, []);

  return (
    <Select
      value={user.id}
      onChange={
        (event) => onChange(users.find((u) => u.id === parseInt(event.target.value, 10)))
      }
    >
      {users.map((u) => (
        <option
          key={u.id}
          value={u.id}
        >
          {`${u.first_name} ${u.last_name}`}
        </option>
      ))}
    </Select>
  );
}
