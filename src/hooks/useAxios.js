import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid} from "uuid";

const useAxios = (url) => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [arrayValues, setArrayValues] = useState([]);

  // after the first render, fetch our data




    async function fetchData(urlAddition = "none"){


      try {

        if(urlAddition === "none"){
  
            const res = await axios.get(url);
            const json = await res.data;
            return json;

        }else{

     
            const fullUrl = url +  urlAddition ;

            console.log(fullUrl);

            const res = await axios.get(fullUrl);
            const json = await res.data;
            return json;


        }
        

        //await delay();
        

        
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);


     
    };


  const addArrayValue = (urlAddition = "none") =>{


    let response;


   
    if(urlAddition === "none"){
        (async function(){
            response = await fetchData();
            setArrayValues(arrayValues => [...arrayValues, {response, id: uuid()}]);
            
          })();

    }else{

        (async function(){
            response = await fetchData(urlAddition);
            setArrayValues(arrayValues => [...arrayValues, {response, id: uuid()}]);
            
        })();


    }


  
    
  }

  

  return [ arrayValues, addArrayValue ];
};




export default useAxios;