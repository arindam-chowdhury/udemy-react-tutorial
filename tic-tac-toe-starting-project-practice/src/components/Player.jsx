import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ playerName, setPlayerName ] = useState(name);

  let editPlayerName = <span className="player-name">{ playerName }</span>;

  if(isEditing) {
    editPlayerName = <input type="text" required value={ playerName } onChange={handleChangeEvent}/>
  }

  function handleChangeEvent(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);

    if(isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  
  return (
    <li className={isActive ? 'active' : undefined}  >
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{ symbol }</span>
      </span>
      <button onClick={handleEditClick}>{ isEditing ? "Save" : "Edit" }</button>
    </li>
  );
}
