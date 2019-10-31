import React from 'react';

import Home from '~p/Home';
import Header from '~c/Header/Header';
import Footer from '~c/Footer/Footer';

import './app.scss'

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <Header />
                    <Home />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;