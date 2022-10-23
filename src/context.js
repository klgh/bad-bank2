import React, {createContext} from 'react';

export const UserContext = createContext(null);

export function Card(props){
    function classes(){
      const bg  = props.backgroundColor ? ' bg-' + props.backgroundColor : ' ';
      const txt = props.textColor ? ' text-' + props.textColor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} >
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }