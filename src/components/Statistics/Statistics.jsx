import PropTypes from "prop-types";
import statisticStyles from "./Statistics.module.css";

function Statistics({title, data}) {
    
    return (
        <section className={statisticStyles.statistics}>
            {title ? (<h2 className="title">{title}</h2>)
            :
            null }
        
        <ul className={statisticStyles.stat__list}>
        {data.map(item => {
        return (
        <li key={item.id} style={{backgroundColor:`#${randomColor()}`}} className={statisticStyles.item}>
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}%</span>
      </li>
      )
    })}
        </ul>
      </section>
)
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired
    }).isRequired)
}

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}  
console.log(randomColor)
export {Statistics}