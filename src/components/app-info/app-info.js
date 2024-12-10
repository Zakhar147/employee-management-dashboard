import './app-info.css'

const AppInfo = ({employeesCount, increaseCount}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in company N</h1>
            <h2>Total number of employees: {employeesCount}</h2>
            <h3>The prize will be received by: {increaseCount} </h3>
        </div>
    )
}
export default AppInfo