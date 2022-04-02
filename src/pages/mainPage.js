import axios from 'axios';
import { useEffect, useState } from 'react';

import Grid from '../components/grid/grid';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from '../components/pagination/pagination';
import Navbar from '../navbar/navbar';
import { Spinner } from 'react-bootstrap';
import Sidebar from '../components/sidebar/sidebar';


export default function Main(){
    const [animes,setAnimes] = useState([])
    const [allAnimes,setAllAnimes] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage,setPostsPerPage] = useState(10)
    const [search, SetSearch] = useState("");
    const [isLoading, setLoading] = useState(true)

    useEffect(() =>{
        setTimeout(() => {
          axios.get('https://api.jikan.moe/v3/genre/anime/2')
          .then(res => {
            setAllAnimes(res.data.anime)
            setAnimes(res.data.anime)
          })
          .catch(err => console.log(err))
          setLoading(false)
        }, 3000);
    
      },[]) 
      const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}
    const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`)
			.then(res => res.json());
      setAnimes(temp.results);
      setLoading(false)
	}
   const update = (updatedAnimes) =>{
      setAnimes(updatedAnimes)
      setCurrentPage(1)
   }
   const indexOfLastPost = currentPage * postsPerPage
   const indexOfFirstPost = indexOfLastPost - postsPerPage
   const currentPosts = animes.slice(indexOfFirstPost,indexOfLastPost)
   const paginate = pageNumber => setCurrentPage(pageNumber);
   return (
    <div style={{background:'#e3ecfa',height:'250vh'}}>
        <div>
            <Navbar HandleSearch={HandleSearch} SetSearch={SetSearch} search={search}/>
        </div>
        <div className='d-flex justify-content-between'>
            <div>
                <Sidebar update = {update} data = {animes} all = {allAnimes}/>
            </div>
            <div className='w-100 d-flex justify-content-center'>
            {
                isLoading?
                <Spinner animation="border" role="status" className=''>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <div>
                    <Grid data = {currentPosts}/>
                    <Pagination postsPerPage = {postsPerPage} totalPosts = {animes.length} paginate = {paginate}/>
                </div>
            }
            </div>
        </div>
    </div>
   )
}