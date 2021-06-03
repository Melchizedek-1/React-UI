import React from 'react'
import './Searchresult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    
    return (
        <div className='searchresult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchresult-heart" />
            <div className="searchresult-info">
                <div className="searchresult-infotop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>______</p>
                    <p>{description}</p>
                </div>
                <div className="searchresult-infobottom">
                    <div className="searchresult-stars">
                        <StarIcon className="searchresult-star" />
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className='searchresukts-price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
