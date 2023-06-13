import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ serverData, onDeleteItem, onToggleIncrease, onToggleLike }) => {

    const elements = serverData.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <EmployeesListItem
             key={id} {...itemProps}
             onDelete={() => onDeleteItem(id)}
             onToggleIncrease={() => onToggleIncrease(id)}
             onToggleLike={() => onToggleLike(id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList