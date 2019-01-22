import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Userlist from './components/Userlist';

const links = [
  {
    title: 'Nav 1',
    active: true,
  },
  {
    title: 'Nav 2'
  },
];

const userList = [
  {
    id:1,
    img: "//photoshablon.ru/_ph/46/2/315860622.jpg?1547928858" ,
    first_name: 'Julia',
    age: 29,

  },
  {
    id:2,
    img:"//photoshablon.ru/_ph/46/2/772695716.jpg?1547926597" ,
    first_name: 'Tommy',
    age: 25,
    
  },
  {
    id:3,
    img: "//photoshablon.ru/_ph/46/2/390113888.jpg?1547928695",
    first_name: 'Luc',
    age: 18,
  }
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenList: false,
    }
  }
  toggleUsers = () => {
    this.setState({
      isOpenList: !this.state.isOpenList,
    });
  }

  handleClick = (name) => {
    console.log('123', name);
  }
  

  render() {
    console.log('RENDER', this);
    const {
      isOpenList,
    } = this.state;

    
    return (
      <div className="App">
        <Header title="Header"
          links={links}
          handleClick={this.handleClick}
        />
        <Header
          title="Header2"
        />
        <button onClick={this.toggleUsers}>
          Open
        </button>
        <div>
          <button onClick={this.toggleUsers}>
              Open
          </button>
        </div>
        {
          isOpenList &&
          <UserList
            userList={userList}
          />
        }

        <Nav />
        <Sidebar />
        <Footer />



      </div>


    );
  }
}

export default App;
