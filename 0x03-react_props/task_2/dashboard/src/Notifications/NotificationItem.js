import React from 'react';

export default function NotificationItem(props) {
    const {type, html, value} = props;
    return html ? (
        <li 
            dangerouslySetInnerHTML={{__html: html.__html}}
            data-priority={type}>
        </li>
    ) : (
        <li 
            data-priority={type}>
            {value}
        </li>
    )
}