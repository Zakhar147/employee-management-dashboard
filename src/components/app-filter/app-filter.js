
import './app-filter.css'

const AppFilter = (props) => {

    const { filter, onUpdateFilter} = props;

    const buttonsData = [
        { name: 'all', label: 'All employees' },
        { name: 'likeFilter', label: 'Up for promotion' },
        { name: 'salaryFilter', label: 'Salary more than $1000' }
    ];

    const buttons = buttonsData.map(({ name, label }) => {

        const active = filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => onUpdateFilter(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>

    )
}

export default AppFilter