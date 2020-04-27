import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import ContactList from "./components/contacts.component";
import CreateContact from "./components/create-contact.component";

function App() {
  return (
    <Router>
          <Navbar />
          <Route path="/" exact component={ContactList} />
          <Route path="/create" exact component={CreateContact} />
    </Router>
  );
}

export default App;