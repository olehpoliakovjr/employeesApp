

import EmployeesItem from "../employees-item/employees-item.jsx";

import "./employees-list.css"

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesItem/>
            <EmployeesItem/>
            <EmployeesItem/>
        </ul>
    )
}

export default EmployeesList;