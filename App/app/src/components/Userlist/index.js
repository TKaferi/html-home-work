import React from 'react';


export default (props) => {
  return (
    <div className='App-users'>
      {props.name}
      <div>
        {
          props.users.map((item, index) => {
            return (
              <div className='userName' style={{ marginBottom: '5px' }}
                key={index}
                onClick={() => props.userClick(item.name)}
              >
                <p>
                {item.avatar}
                </p>
                <p>
                  {item.name}
                </p>
                <p>
                  {item.age}
                  {' years'}
              </p>
              </div>
          )
        })
      }
      </div>

    </div>

  )
};