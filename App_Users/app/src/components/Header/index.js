import React from 'react';


export default (props) => {
  console.log('HEADER PROPS', props);
  return (
     <header className="App-header" style={{marginBottom: '20px'}}>
     {props.title}
     <div>
        
      </div>
    </header>
  )
};


