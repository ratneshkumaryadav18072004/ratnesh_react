import { LOGO_URL } from "../utils/constant";
import { useState,useEffect } from "react";

//state vaiable wont use inside if(),declate at the top, not use as argument of function

const Header= ()=>{


    //let buttonName ="LOGIN";
    const [buttonNameReact, setbuttonReact] =useState("LOGIN");
    useEffect(()=>{
        // Simulate an API call or some side effect
        //if there is no dependency arrayuse effect is called on every render
        //if te dependency array [] is empty use effect is called only once when the component is mounted
        //if the dependency array is[buttonNameReact]=> called everytime buttonNameReact is updated 
    }, [buttonNameReact]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li>cart</li>
                    <button className="login" onClick={()=>{
                        buttonNameReact=="LOGIN"? 
                        setbuttonReact("LOGOUT"):
                        setbuttonReact("LOGIN")}}>
                        {buttonNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;
