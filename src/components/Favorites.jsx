import react from "react";
import "../App"
import { useAppContext } from "./context/appContext";

const Favorites = ()=>{

    const {favorites,addToFavotites,removeFromFavorites}=useAppContext();

    // console.log("favorites are ",favorites);

    const favoritesChecker=(id) => {
        const boolean =favorites.some((item) => item.url===id );
        return boolean;
    }


    return (
        <div className="album py-5 ">
        <div className=" container midde-image">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 favorites">
        {/* <div className="favorites"> */}
                {favorites.length>0 ? favorites.map((item)=>{
                return (
                    <div className="col">
                        <div className="card my-3" >
                            <a href={item.url} target="_blank"><img src={item.urlToImage} className="card-img-top" alt="..." /></a>
                            
                            <div className="card-body">
                                <h5 className="card-title">{item.title}...</h5>
                                <p className="card-text">{item.description}</p>
                                {/* <div> */}
                            {favoritesChecker(item.url) ? 
                            // <button className="btn btn-sm btn-dark" onClick={()=>removeFromFavorites(item.url)}>Remove from Bookmarks</button>
                            <i onClick={()=>removeFromFavorites(item.url)} class="fa-solid fa-bookmark"></i>
                            :
                            // <button className="btn btn-sm btn-dark" onClick={()=>addToFavotites(item)}>Bookmark</button>
                            <i onClick={()=>addToFavotites(item)} class="fa-regular fa-bookmark"></i>
                            }
                            {/* <button onClick={()=>addToFavotites(item)}>Add to favourites</button> */}
                        {/* </div> */}
                                {/* <a href={item.urlToImage} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a> */}
                            </div>
                        </div>
                    </div>
                    // <div key={item.url} className="item">
                    //     <div>
                    //         <h4>{item.title}</h4>
                    //     </div>
                    //     <div>
                    //         <img src={item.urlToImage} alt="Image not found" />
                    //     </div>
                    //     <div>
                    //         {favoritesChecker(item.url) ? 
                    //         <button onClick={()=>removeFromFavorites(item.url)}>Remove from favourites</button>
                    //         :
                    //         <button onClick={()=>addToFavotites(item)}>Add to favourites</button>
                    //         }
                    //         {/* <button onClick={()=>addToFavotites(item)}>Add to favourites</button> */}
                    //     </div>
                    // </div>
                    // <h2>hell</h2>
                )
                
            }):<h1>No News😔</h1>}

        </div>
        </div>
        </div>
    )
}

export default Favorites;