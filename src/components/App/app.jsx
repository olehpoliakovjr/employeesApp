
import './app.css';
import AppInfo from "../app-info/app-info.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import AppFilter from "../app-filter/app-filter.jsx";
import EmployeesList from "../employees-list/employees-list.jsx";
import EmployeesAddForm from "../employees-add-form/employees-add-form.jsx";

function App () {
    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList/>

            <EmployeesAddForm/>

        </div>
    )
}

export default App;