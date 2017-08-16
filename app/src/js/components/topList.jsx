import React from 'react';
import ListItem from './listItem';

export default function TopList({ list }) {
    return (
        <div className="list">
            {list && Object.keys(list).map(item => (
                <ListItem key={item} item={list[item]} />
            ))}
        </div>
    );
}
