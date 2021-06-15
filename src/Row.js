import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';

const Row = ({title,fetchUrl,isLargeRow = false}) => {
    const [movies,setMovies] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original';
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl])
    console.log(movies);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map(movies =>{
            
                    return(<img
                        className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
                        key= {movies.id}
                        src={`${baseURL}${
                        isLargeRow? movies.poster_path : movies.backdrop_path
                    }`} alt="" />)
                    })
                }
            </div>
            
        </div>
    );
};

export default Row;