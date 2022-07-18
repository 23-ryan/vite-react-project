import React from 'react'
import './topReviews.css'

function TopReviews(){
    return(
        <div className="reviews">
            <h1>
                Check Out Our Inventory
            </h1>
            <ul className="img-rev">    
                <li>
                    <img className="arduino" src="/src/images/arduino.jpg" alt="arduino" />
                    <div className="content">
                        <h1>Arduino</h1>
                        <p>
                        Arduino is an open-source electronics platform based on easy-to-use hardware and software. <br />
                        Build exciting projects: <br />
                        Arduino Guitar Player<br />
                        Arduino Bot <br />
                        And many others....
                        </p>
                    </div>

                </li>
                <li>
                    <img className="micro" src="/src/images/micro.jpg" alt="micro controller" />
                    
                    <div className="content">
                        <h1>Micro <span>Controller</span></h1>
                        <p>
                        Arduino is an open-source electronics platform based on easy-to-use hardware and software.<br />
                        Build exciting projects:<br />
                        Arduino Guitar Player<br />
                        Arduino Bot <br />
                        And many others....
                        </p>
                    </div>

                </li>
                <li>
                    <img className="music" src="/src/images/music.jpg" alt="music" />
                    
                    <div className="content">
                        <h1>Music</h1>    
                        <p>
                        Arduino is an open-source electronics platform based on easy-to-use hardware and software.<br />
                        Build exciting projects:<br />
                        Arduino Guitar Player<br />
                        Arduino Bot <br />
                        And many others....
                        </p>
                    </div>
                    
                </li>
                <li>
                    <img className="sports" src="/src/images/sports.png" alt="sports" />
                    <div className="content">
                        <h1>Sports</h1>
                        <p>
                        Arduino is an open-source electronics platform based on easy-to-use hardware and software.<br />
                        Build exciting projects:<br />
                        Arduino Guitar Player<br />
                        Arduino Bot <br />
                        And many others....
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default TopReviews