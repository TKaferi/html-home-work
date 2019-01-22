import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Userlist from './components/Userlist';
import ActiveUser from './components/ActiveUser';



const userList = [
  {
    id: 1,
    img: "//photoshablon.ru/_ph/46/2/315860622.jpg?1547928858",
    first_name: 'Julia',
    age: 29,

  },
  {
    id: 2,
    img: "//photoshablon.ru/_ph/46/2/772695716.jpg?1547926597",
    first_name: 'Tommy',
    age: 25,

  },
  {
    id: 3,
    img: "//photoshablon.ru/_ph/46/2/390113888.jpg?1547928695",
    first_name: 'Luc',
    age: 18,
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenList: true,
    }
  }

  render() {
    console.log('RENDER', this);

    const {
      isOpenList,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HomePage
            </p>
        </header>
        <Search />

        <div className="container">
        
            {
              isOpenList &&
              <ActiveUser
                userList={userList}
              />
            }
            <div className="list">
            <div title="Users"></div>
            { 
              isOpenList &&
              <Userlist

                userList={userList}
              />
            }
            </div>
         
          
        </div>


      </div>
    );
  }
}

export default App;
