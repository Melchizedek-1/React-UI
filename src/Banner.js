import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core"
import Search from './Search'
import { useHistory } from 'react-router'

function Banner() {

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner-search'>
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className='banner-searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner-info'>
                <h1>get out of here faka</h1>
                <h5>jdiu jbduygu jhgu hygyu yug uygu cyugy gy</h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner
