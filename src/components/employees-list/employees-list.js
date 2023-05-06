import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({ serverData }) => {

    const elements = serverData.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <EmployeesListItem key={id} {...itemProps} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList