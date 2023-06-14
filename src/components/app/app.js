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
                { name: "Zahar Kh.", salary: 1010, increase: false, like: true, id: 1 },
                { name: "Roma Ly.", salary: 10, increase: false, like: false, id: 2 },
                { name: "Misha Kh.", salary: 1009, increase: true, like: false, id: 3 },
            ],
            term: '',
            filter: 'salaryFilter'
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const newData = data.filter(item => item.id !== id);
            return {
                data: newData,
            }
        })
    }

    add = (e) => {
        e.preventDefault();
        const { name, salary } = e.target;

        if (name.value === '' || salary.value === '') {
            name.classList.add('error');
            salary.classList.add('error');
            return;
        } else {
            name.classList.remove('error');
            salary.classList.remove('error');

            const newElement = {
                name: name.value,
                salary: salary.value,
                increase: false,
                like: false,
                id: this.state.data.length + 1
            }

            this.setState(({ data }) => {
                const newData = [newElement, ...data];

                return {
                    data: newData,
                }
            })
        }

    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    search = (term, items) => {
        if (term.length === 0) return items

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })

    }

    onUpdateSearch = (term) => {
        this.setState({ term: term });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'likeFilter':
                return items.filter(item => item.like === true);
            case 'salaryFilter':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({ filter: filter })
    }

    render() {
        const { data, term, filter } = this.state;

        const employeesCount = data.length;
        const increaseCount = data.filter(item => item.increase === true).length;

        const visibleData = this.filterPost(this.search(term, data), filter);

        return (
            <div className="app">
                <AppInfo
                    employeesCount={employeesCount}
                    increaseCount={increaseCount} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />

                    <AppFilter
                        filter={filter}
                        onUpdateFilter={this.onUpdateFilter}
                    />
                </div>

                <EmployeesList
                    serverData={visibleData}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleProp={this.onToggleProp}
                    onDeleteItem={this.deleteItem}
                />

                <EmployeesAddForm
                    onAdd={this.add} />
            </div>
        )
    }
}
export default App