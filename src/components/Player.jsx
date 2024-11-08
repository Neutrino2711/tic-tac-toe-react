import {useState} from 'react';

export default function Player({initialName,symbol}){
    const [playerName,setplayerName] = useState(initialName)

    const [isEditing, setisEditing] = useState(false);

    function handleEdit(){
        setisEditing((editing)=>!editing);
    }

    function handleChange(event) {
        setplayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing)
    {
        editablePlayerName = (<input type = 'text' required value = {playerName} onChange = {handleChange} />)
    }

    return (
        <li >
        <span className='player'>
          {editablePlayerName}
          <span className="player-symbol" >{symbol}</span>
        </span>
        <button onClick = {handleEdit}> 
            {isEditing? 'Save':'Edit'}
            
            </button>
        </li>
    );
}