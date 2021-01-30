import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";


    const App = () => {
        return (
            <React.Fragment>
                <Header />
                <Layout />
                <Layout />
                <Layout />
                <Footer />
            </React.Fragment>
        )
    }

ReactDOM.render(<App/>, document.getElementById('root'));
