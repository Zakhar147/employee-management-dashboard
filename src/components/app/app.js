import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

function App() {

    const data = [
        {name: "Zahar Kh.", salary: 1010, increase:false },
        {name: "Roma Ly.", salary: 10, increase:false },
        {name: "Misha Kh.", salary: 1009, increase:true },
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data = {data} />

            <EmployeesAddForm />
        </div>
    )
}
export default App