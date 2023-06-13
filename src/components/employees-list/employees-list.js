import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ serverData, onDeleteItem, onToggleProp }) => {

    const elements = serverData.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <EmployeesListItem
             key={id} {...itemProps}
             onDelete={() => onDeleteItem(id)}
             onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList