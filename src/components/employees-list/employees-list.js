import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ serverData, onDeleteItem }) => {

    const elements = serverData.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <EmployeesListItem
             key={id} {...itemProps}
             onDelete={() => onDeleteItem(id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList