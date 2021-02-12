import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <React.Fragment>
            <Header title="My first Pokemon Game"
                    descr="Let's go"/>
            <Layout
                urlBg="url(https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4337cf5-3f3b-4436-b045-8aff91da2cac/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210212T075323Z&X-Amz-Expires=86400&X-Amz-Signature=0ef5bf5e7bf8ffb3ee611dcc953d6325eb606d1c549f0e5efde0c9adc60404c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg1.jpg%22)"
                id="1"
                title="Pickachu"
                descr="Storm"
            />
            <Layout
                colorBg="#6761A8"
                id="2"
                title="Chirmander"
                descr="Fire"
            />
            <Layout
                urlBg="url(https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4337cf5-3f3b-4436-b045-8aff91da2cac/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210212T075323Z&X-Amz-Expires=86400&X-Amz-Signature=0ef5bf5e7bf8ffb3ee611dcc953d6325eb606d1c549f0e5efde0c9adc60404c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg1.jpg%22)"
                id="3"
                title="Squidvard"
                descr="Water"
            />
            <Footer />
        </React.Fragment>
    )
}

export default App;
