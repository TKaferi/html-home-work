import React, { Component } from 'react';


class ActiveUser extends Component {

  itemUser = (user) => {
    const {
      id,
      img,
      age,
      first_name,
    } = user;

    return (
      <div key={id}>
        <img
          alt=''
          src={img}
          className='avatarUser'
        />
        <p>{first_name}</p>
        <p>{age}</p>
      </div>
    )
  }



  render() {
    const {
      userList,
    } = this.props;

    return (
      <div className="active_user">
        {userList.map(item => this.itemUser(item))}
      </div>
    );
  }
};

export default ActiveUser;