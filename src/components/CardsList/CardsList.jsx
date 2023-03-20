import { Card } from 'components/Card/Card';
import { useEffect, useState } from 'react';
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from 'utils/getSetDataLocalStorage';
import usersDb from '../../db.json';
import { Container } from './CardsList.styled';

export const CardList = () => {
  const [users, setUsers] = useState(
    () => getDataFromLocalStorage() ?? usersDb
  );
  useEffect(() => {
    setDataToLocalStorage(users);
  }, [users]);
    
  const changeFollowersAmount = (value, id, following) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, followers: value, following } : user
      )
    );
    setDataToLocalStorage(users);
  };
  return (
    <Container>
      {users &&
        users.map(({ id, avatar, user, followers, tweets, following }) => (
          <Card
            key={id}
            avatar={avatar}
            user={user}
            followers={followers}
            tweets={tweets}
            changeFollowersAmount={changeFollowersAmount}
            id={id}
            following={following}
          />
        ))}
    </Container>
  );
};
