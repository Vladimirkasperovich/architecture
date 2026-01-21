import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {Services} from "./components/Services/Services.jsx";
import {Projects} from "./components/Projects/Projects.jsx";
import {Advantages} from "./components/Advantages/Advantages.jsx";
import {Catalog} from "./components/Catalog/Catalog.jsx";
import {Request} from "./components/Request/Request.jsx";

function App() {


    return (
        <main>
            <Header/>
            <Services/>
            <Projects/>
            <Advantages/>
            <Catalog/>
            <Request/>
            <footer>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam dolore ex incidunt
                    iusto laudantium possimus sequi velit, voluptatibus? Cum delectus maiores molestias necessitatibus
                    nihil quae quos, suscipit temporibus voluptatibus.
                </div>
                <div>Animi aperiam consequuntur inventore iure optio. Minima ratione rerum veritatis! Accusamus autem
                    debitis dolores ea enim laborum sapiente sequi vero vitae? Assumenda ea ex illum laudantium nemo
                    perspiciatis possimus, totam!
                </div>
            </footer>
        </main>
    )
}

export default App
