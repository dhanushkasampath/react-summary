import React, {useState} from "react";

//here we set up initial values
const FavoritesContext = React.createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

//this function responsible for updating the context values.
//so we can use below 3 functions to change the context.
export function FavoritesContextProvider(props) {//we have to wrap this component around all components that are
    // interested in these states
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {//react does not updates states at once. to handle that here we
            // have passed a function since react execute functions immediately.
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites) => {//react does not updates states at once. to handle that here we
            // have passed a function since react execute functions immediately.
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);//this ask react to show other items
            // except item with given id.
        });
    }

    function itemIsFavoriteHandler(meetupId){//some is a built in method of vanilla js
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {//the values we define here are exposed to other components they can be variables as well as methods
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };//now we can expose these functions to all interested components

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;