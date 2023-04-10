
import './app.css';
import AppInfo from "../app-info/app-info.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import AppFilter from "../app-filter/app-filter.jsx";
import EmployeesList from "../employees-list/employees-list.jsx";
import EmployeesAddForm from "../employees-add-form/employees-add-form.jsx";

function App () {

    const dataBase = [
        {name: "Oleg P.", salary: 2500, increase: true, id:1},
        {name: "John M.", salary: 1450, increase: true, id:2},
        {name: "Jack J.", salary: 970, increase: false, id:3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={dataBase}/>

            <EmployeesAddForm/>

        </div>
    )
}

export default App;