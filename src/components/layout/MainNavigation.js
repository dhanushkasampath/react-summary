import {Link} from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Millennium Fitness Center</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetings</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;