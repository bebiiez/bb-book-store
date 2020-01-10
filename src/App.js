import React from 'react';
import './App.css';
import Menubar from './component/Menubar';


import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Book from './pages/Book';
import AddBook from './component/AddBook';
import Cart from './pages/Cart';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="App">

      <Header style={{ backgroundColor: '#F78888', width: '100%', height: '42px', lineHeight: '42px', position: 'fixed', zIndex: 1, padding: '0px 15px' }}>
        <Menubar style={{ width: '100%', height: '100%', lineHeight: '100%' }} />
      </Header>

      <Content className="App" style={{ marginTop: '42px' }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/book" component={Book}/>
          <Route exact path="/addBook" component={AddBook}/>
          <Route exact path="/cart" component={Cart}/>
          <Redirect to='/home' />
        </Switch>
      </Content>

    </Layout>
  );
}

export default App;
