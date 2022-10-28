import {useState} from 'react';

export let Functional =()=>{
    const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    
    setIsShown(current => !current);
  };
    return (<div id='box1'>
    <button id='but1' onClick={handleClick}>To see styling in functional component</button>
    {isShown && (
    <div id='func'>
        <h3 id="para1">This is created using functional component</h3>
        <br></br>
        <p id="p1">This is done in external CSS</p>
        <p style={{textAlign:'center',color:"blue"}}>This is done in inline CSS</p>
    </div>
    )}
    </div>)

}