import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ReduxStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export type AppPropsType = {
    store: ReduxStoreType
}

const App: React.FC<AppPropsType> = (props) => {
    //const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Routes>*/}
                    <Switch>
                        {/*instead render={()=> <Component>} -> element={<Component/>}*/}
                        <Route path="/dialogs/*"
                               render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/news" render={() => 'News'}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        {/*</Routes>*/}
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
