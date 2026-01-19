import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {Services} from "./components/Services/Services.jsx";
import {Projects} from "./components/Projects/Projects.jsx";
import {Advantages} from "./components/Advantages/Advantages.jsx";
import {Catalog} from "./components/Catalog/Catalog.jsx";

function App() {


    return (
        <main>
            <Header/>
            <Services/>
            <Projects/>
            <Advantages/>
            <Catalog/>
        </main>
    )
}

export default App
