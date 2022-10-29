import React,{useState} from 'react';
import './index.css'

export function App(){
    const [Name,setName]=useState("");
    const [Department,setDepartment]=useState("");
    const [Rating,setRating]=useState("");

    const [list,setList]=useState([]);

    function handleClick(event){
        event.preventDefault();
        const data ={Name,Department,Rating};
        if(Name && Department && Rating){
            setList((texts)=>[...texts,data])
            setName("")
            setDepartment("")
            setRating("")
        }
    }
return (
    <div>
      <center>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form onSubmit={handleClick}>
        <label>Name :</label>
        <input type='text'  value={Name}  onChange={(event)=>setName(event.target.value)} /><br></br><br></br>
        <label>Department :</label>
        <input type='text'  value={Department} onChange={(event)=>setDepartment(event.target.value)} /><br></br><br></br>
        <label>Rating :</label>
        <input type='number'  value={Rating} onChange={(event)=>setRating(event.target.value)} /><br></br><br></br>
        <button >
          Submit
        </button>
        <br></br><br></br><br></br><br></br>
      </form>
      <div id="container">
          {
            list.map((a)=><div id='msg'>
          Name : {a.Name} | Department : {a.Department} | Rating : {a.Rating}
            </div>)
          }
        </div>
      </center>
    </div>
  );

}
