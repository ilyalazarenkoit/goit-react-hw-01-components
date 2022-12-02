import cardStyle from "./Profile.module.css";
import PropTypes from "prop-types";

function Profile ({username, tag, location, avatar, stats}) {
    return (
   <div className={cardStyle.profile}>
    <div className={cardStyle.description}>
   <img className={cardStyle.avatar} src={avatar} alt={username} />
   <p className={cardStyle.name}>{username}</p>
   <p className={cardStyle.tag}>@{tag}</p>
   <p className={cardStyle.location}>{location}</p>
    </div>
    <ul className={cardStyle.stats}>
        <li className={cardStyle.item}>
            <span className='label'>Followers</span>
            <span className='quantity'>{stats.followers}</span>
        </li>
        <li className={cardStyle.item}>
            <span className='label'>Views</span>
            <span className='quantity'>{stats.views}</span>
        </li>
        <li className={cardStyle.item}>
            <span className='label'>Likes</span>
            <span className='quantity'>{stats.likes}</span>
        </li>
    </ul>
   </div>
)
}

Profile.propTypes = {
    username: PropTypes.string,
    tag:PropTypes.string, 
    location:PropTypes.string, 
    avatar:PropTypes.string, 
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export {Profile} ;