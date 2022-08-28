import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { articleRoute, profileRoute } from "../../api/routes";
import { toast } from "react-toastify";


import "./Home.scss";

function Home() {
  const [state, setState] = useState();
  useEffect(
    function(){
      axios
        .get(articleRoute, {
          status: "test",
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          toast.error(error);
        });
      
    }
  )
  return (
    <div className="text-center">
      <main>
        
        <h1 className="mt-4 mb-2">Welcome to the Home Page!</h1>
        <p>Believe you can and you're halfway there.</p>
      </main>
    </div>
  );
}




export default Home;
