import friendsList from "./FriendsList.module.css";
import PropTypes from "prop-types";

function FriendsList({friends}) {
    return (
        <ul className={friendsList.friend__list}>
            {friends.map(friend => {
                return (
                <li key={friend.id} className={friendsList.friend}>
                {friend.isOnline ? 
                (<span className={friendsList.online}></span>)
                :
                (<span className={friendsList.offline}></span>)}
                <img className={friendsList.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={friendsList.name}>{friend.name}</p>
                </li>
                )
            })}
        </ul>
    )
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          }).isRequired
    ).isRequired
}

export {FriendsList}