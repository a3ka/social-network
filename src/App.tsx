import React from 'react';
import './App.css';
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: (postMessage: string)=> void
}

function App(props: AppPropsType) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Navbar />
              <div className="app-wrapper-content">
                  {/*<Route path='/dialogs' component={Dialogs} />*/}
                  {/*<Route path='/profile' component={Profile} />*/}
                  <Route
                      path='/dialogs'
                      render={ () => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                              messages={props.state.dialogsPage.messages}/>} />
                  <Route path='/profile'
                         render={ () => <Profile
                             state={props.state.profilePage}
                             addPost={props.addPost} />} />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/settings' component={Settings} />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
