import React from 'react'
import TopReviews from '../components/topReviews.js';
import ConnectForm from '../components/connectForm.js';

function Home(){
    return (
        <div class="App">
            <TopReviews />
            <ConnectForm />
        </div>
    );
}
export default Home;