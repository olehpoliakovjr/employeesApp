

import EmployeesItem from "../employees-item/employees-item.jsx";

import "./employees-list.css"

const EmployeesList = ({data}) => { // app.jsx |  26 line

    const elements = data.map(item => {
        return (
            <EmployeesItem key={item.id} name={item.name} salary={item.salary} increase={item.increase}/> // OR {...item}
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;