import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/cancel.png';

const buttonStyle = {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem'
}

export default function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
            <button style={buttonStyle} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                <img src={closeIcon} alt='Close'></img>
            </button>
        </div>
    )
} 