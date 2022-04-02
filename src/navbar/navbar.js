import './navbar.css'
export default function Navbar(props){
    return(
        <div className='shadow'>
            <div className='d-flex justify-content-between  p-2 nav'>
                <div className=' nav_item d-flex align-items-center'>
                    <h3>TheAnimeStudio</h3>
                </div>
                <div className='menu'>
                    <div className='d-flex align-items-center nav_item'>
                        <form onSubmit={props.HandleSearch}>
                            <input 
                            required
                            type= "search" 
                            placeholder="search" 
                            className='search ' 
                            onChange={e => props.SetSearch(e.target.value)} 
                            value={props.search}/>
                        </form>
                    </div>
                    <div>
                        <ul className='d-flex align-items-center nav_item '>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Gallery</a></li>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Contacts</a></li>
                        </ul>
                    </div>
                </div>
                <div className='burger-menu nav_item'>
                    menu
                </div>  
            </div>
        </div>
    )
}