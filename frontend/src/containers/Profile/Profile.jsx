import { useContext, useState } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import AddBlog from "../AddBlog/AddBlog";


const Profile = () => {

    return (
        <div className="container container-fluid">
            <br />
        <div className="row">
            <div className="col"><h1>My blogs</h1></div>
            <div className="col-6"></div>
            <div className="col">
                <Link to="/add"><button className="btn btn-primary">
                    Add Blog
                </button></Link>
                </div>
            </div>
            </div>
        
    )
}

export default Profile;