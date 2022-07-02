import classes from './Card.module.css';

//our intention is to use this component as a wrapper
function Card(props){
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Card;