import React, {useState, useEffect} from 'react';
import './Edit.css';

export default function Edit() {

  const [edit,setEdit] = useState(true);

  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  
  const focusInput = () => setEdit(!edit)

  useEffect(()=>{
    if(!edit)
     ref1.current.focus()  
  },[edit])
  
  const renderInput = () => edit? null : <input type="text" ref={ref1}/>
  const renderButton = () => edit? <input type="button" ref={ref2} value="Edit" onClick={focusInput}/> : <input type="button" ref={ref2} value="Save" onClick={focusInput}/>

  return (
    <div className="edit-container">
      <div className="edit-focus-wrapper">
        {renderButton()}
        {renderInput()}
      </div>
    </div>
  )
}
