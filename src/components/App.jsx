import user from './user.json';
import data from './data.json';
import friends from './friends.json'
import transactions from './transactions.json'
import {Profile} from './Profile/Profile'
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
    <Profile
    username = {user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    />
    <Statistics 
    data={data}
    />
    <FriendsList 
    friends={friends}
    />
    <TransactionHistory
    transactions = {transactions}
    />
    </>
  );
};
