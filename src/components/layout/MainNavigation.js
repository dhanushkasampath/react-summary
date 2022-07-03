import {Link} from "react-router-dom";
import classes from './MainNavigation.module.css';
import {useContext} from "react";
import FavoritesContext from "../../store/favorite-context";

function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext);
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
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
//Link component is similart to anchor tag. but anchor tag makes api call to back end once clicked. but Link does
// not. as all pages loaded at the initial loading time.

export default MainNavigation;