import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';


function NewMeetupsPage(){
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){//This is how we propagate the data upwards.
        fetch('https://react-prep-b4fd7-default-rtdb.firebaseio.com/meetups.json',
            {
            method: 'POST',
            body: JSON.stringify(meetupData),//data should be send as json to this api
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/', {replace:true});//once this happens user can not go back by clicking the back button to
            // previous form.
        });

        // and then replace history.push('/path') with navigate('/path')
        // Change history.replace('/path') with navigate('/path', { replace: true })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupsPage;