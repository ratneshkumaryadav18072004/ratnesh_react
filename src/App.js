import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import About from "./Components/About.js";
import Contact from "./Components/contact.js";
import Error from "./Components/Error.js";

const AppLayout = () =>{
    return (
        <div className="app">
            
            <Header />
            <Outlet/>  {/*it will render the children of the route, oit will be replaced by childeren*/}   
            
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },

            {
                path:"/contact",
                element:<Contact/>
            },
        ],
        errorElement:<Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); //takes the object and push it to the browser and replaced the html






// // //React.createElement=> object => React Element => HTML Element
// // const heading = React.createElement("h1",{ id: "heading" },"Namaste React"); //creation of object
// // console.log(heading);


// //jsx react is HTML like syntax
// //transpiled(understanable by the browser) befor it reaches to js engine - Parcel - Babel(transpiler get jsx and convert to js(react) unserstandable form) 
// //React Element
// // const jsxHeading=<h1 className="head" tabIndex="5" >Namaste using JSX</h1> // converted to createElement , thisis done by babel transpiler 
// // console.log(jsxHeading);
 


// const elem = <span>React Element</span>
// const Title=() => (
//         <h1 className="head" tabIndex="5">
//             {elem}
//             Namaste React using JSX
//             {/* <HeadingComponent/> */}
//         </h1> 
// );
// //React Component 
// //Class Baased Component -OLD

// //React Functinal Component(that returns jsx code) -NEW
// //Component Composition
// const HeadingComponent = () =>(
//     <div id="container">
//         <Title/>
//         {/* {/* <Title></Title>
//         {Title()} */}
//         <h1>Namste React Functional Component</h1>
//     </div>
// );
// // const HeadingComponent = () =><h1>Namste React Functional Component</h1>
// // Both are same

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>); //takes the object and push it to the browser and replaced the html




// ( {resName , cuisine})
 
 

//not using key (not acceptable)<<<< but using index as key (not recommended) <<<<<<<<< using any unique id for the restaurant card)

