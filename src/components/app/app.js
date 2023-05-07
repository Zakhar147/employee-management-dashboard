import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Zahar Kh.", salary: 1010, increase: false, id: 1 },
                { name: "Roma Ly.", salary: 10, increase: false, id: 2 },
                { name: "Misha Kh.", salary: 1009, increase: true, id: 3 },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    add = (e) => {
        e.preventDefault();
        const { name, salary } = e.target;
        const newElement = {
            name: name.value,
            salary: salary.value,
            increase: false,
            id: this.state.data.length + 1
        }

        this.setState(({ data }) => ({
            data: data.reduce((newData, currentEl) => {

                newData.unshift(currentEl);
                return newData;
            }, [newElement])
        }))

    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    serverData={data}
                    onDeleteItem={this.deleteItem} />

                <EmployeesAddForm
                    onAdd={this.add} />
            </div>
        )
    }
}
export default App