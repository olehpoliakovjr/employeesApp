
import './app.css';
import AppInfo from "../app-info/app-info.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";

function App () {
    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
            </div>
        </div>
    )
}

export default App;