import names from './names.json';
import React,{useState} from 'react';
function Search() {
  const [searchkey, setSearchKey] = useState("");
  return(
    <>
      Search : <input type="search" placeholder="Search here" onChange={(event)=> {
        setSearchKey(event.target.value);

        }}/>
        {names.filter((value)=>{
          if(searchkey === ""){
            return true
          }
          else if(value.name.toLowerCase().includes(searchkey.toLowerCase())){
            return true
          }
        }).map((names)=>{
          return(
            <div>{names.name}</div>
          )
        })}
    </>
  )
}
export default Search;
