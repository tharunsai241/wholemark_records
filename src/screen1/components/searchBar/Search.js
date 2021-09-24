import React, {useState,useEffect} from 'react'
import Select from "react-select";
import data from './list.js';
import Table from '../table/Table';

const Search = (props) => {
    //result stores the selected value
    const [result, setResult] = useState([data.label])
    const [resultArr, setresultArr] = useState([])

    const resultHandler = (e) => {
        let val = e.value
        setResult([e.value, e.label, e.price, e.owner, e.quantity])
        
        //Removes duplications
        for(let i=0; i<resultArr.length; i++){
          if(val === resultArr[i].value){
            alert(e.label + " is already present")
            var count=1;
          }
        }

        if(!count){
          setresultArr([...resultArr, {label: e.label, owner: e.owner, value: e.value, price: e.price, quantity:e.quantity}])
        }
    }

    useEffect(() => {
     localStorage.setItem("resultArr", JSON.stringify(resultArr));
    }, [resultArr]);
 
    return (
      <div>
        <Select options={data} onChange={resultHandler} />
        {result !== null ? <Table arr={resultArr} /> : []}
      </div>
    );
}

export default Search