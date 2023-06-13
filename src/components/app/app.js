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

            this.setState(({ data }) => ({
                data: data.reduce((newData, currentEl) => {

                    newData.unshift(currentEl);
                    return newData;
                }, [newElement])
            }))
        }


    }

    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => ({
    //         data :  data.map(item => {
    //               if(item.id === id ){
    //                   return {...item, increase: !item.increase}
    //               }
    //               return item;
    //           })
    //       }))

    //     // this.setState(({ data }) => {
    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index];
    //     //     const newItem = {...old, increase: !old.increase};
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // } более длинный но тоже раьочий спотоб как изменить свойство инкрис
    // }

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

    render() {
        const { data } = this.state;

        const employeesCount = data.length;
        const increaseCount = data.filter(item => item.increase === true).length;

        return (
            <div className="app">
                <AppInfo
                    employeesCount={employeesCount}
                    increaseCount={increaseCount} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    serverData={data}
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