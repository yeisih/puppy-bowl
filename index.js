import React,{useEffect,useState} from 'react';
import  ReactDOM  from 'react-dom';
<link rel="Stylesheet" href="style.css"></link>


import{ createBrowserRouter,RouterProvider} from"react-router-dom";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import AllPuppies from "./components/Puppies";
import ErrorPage from "./components/error";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Homepage/>,
        errorElement:<ErrorPage/>,
        
         children:[
        {
            path:"/about",
            element:<AboutUs/>
        },
        {
            path:"/puppies",
            element:<AllPuppies/>

        }
        

        
        ]
    }
])

     ReactDOM.render(<RouterProvider router={router}/>,document.getElementById("app"));

    




// const puppyArray=["puppies","players"]

const puppyBowl=()=>{
    const [puppyPlayers,setPuppyPlayers]=useState([]);



// function exampleFunc () {
//     console.log("Iam an example func")
// }



    useEffect(()=>{
    async function fetchPuppyData(){

    try{
        const response= await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players");
    // console.log("This is the response",response)

    const puppyData= await response.json();
    console.log( "This is the translated JSON rsponse",puppyData);
    // console.log(" This is the puppy data fr",puppyData.data.players);



    setPuppyPlayers(puppyData.data.players)

        }catch (error) {
        console.log(error);
            }
        }
        fetchPuppyData()
},[])

return (
    <div>
        <h1> Puppy Bowl</h1>
        
       
            <div> 
            {
                puppyPlayers && puppyPlayers.length ? puppyPlayers.map ((puppy,idx) => {
                    return <div key={idx}>
                        <p>Name of Player:{puppy.name}</p>
                        <p>Player Breed:{puppy.breed}</p>
                        <img src={puppy.imageUrl}></img>
                    </div>
                 }) : <p>NO PUPPIES TO DISPLAY</p>
                }
            </div>
    </div>
)};

// ReactDOM.render(<puppyBowl/>,document.getElementById("app"))