import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Userlist from './components/Userlist';


class App extends Component {
  constructor(props) {
    super(props);
  }

  userClick = (userName) => {
    console.log('User', userName );
  }

  render() {
    console.log('RENDER', this);
    const links = [
      {
        title: 'Nav 1',
        active: true,
      },
      {
        title: 'Nav 2'
      },
    ];

    const users = [
      {
        avatar: <img src="//photoshablon.ru/_ph/46/2/315860622.jpg?1547928858" />,
        name: 'Julia',
        age: 29,

      },
      {
        avatar:<img src="//photoshablon.ru/_ph/46/2/772695716.jpg?1547926597" />,
        name: 'Tommy',
        age: 25,
        
      },
      {
        avatar: <img src="//photoshablon.ru/_ph/46/2/390113888.jpg?1547928695" />,
        name: 'Luc',
        age: 18,
      }
    ]
    return (
      <div className="App">
        <Header title="Header"
          links={links}
          handleClick={this.handleClick}
        />
        <Header
          title="Header2"
        />
        <Userlist 
        users={users}
        userClick={this.userClick}
        />

        <Nav />
        <Sidebar />
        <Footer />



        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    </header>*/}

      </div>


    );
  }
}

export default App;
