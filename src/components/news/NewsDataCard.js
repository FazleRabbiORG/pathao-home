import React from 'react'

const NewsDataCard = ({data}) => {
    return (
        <div>
            <h4>{data.title}</h4>
            <h2>{data.descriptions}</h2>
            <a href="#">আর্টিকেল দেখুন </a>
        </div>
    )
}

export default NewsDataCard;
