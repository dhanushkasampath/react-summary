import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){
    function addMeetupHandler(meetupData){//This is how we propagate the data upwards.
        fetch('https://react-prep-b4fd7-default-rtdb.firebaseio.com/meetups.json',
            {
            method: 'POST',
            body: JSON.stringify(meetupData),//data should be send as json to this api
            headers:{
                'Content-Type': 'application/json'
            }
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupsPage;