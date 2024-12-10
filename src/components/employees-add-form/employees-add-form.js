import { Component } from 'react'

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    OnValueChanged = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const { name, salary } = this.state;
        const {onAdd} = this.props

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {onAdd}>
                    <input type="text"
                        className="form-control new-post-label "
                        placeholder="What's his name?"
                        name="name"
                        value={name}
                        onChange={this.OnValueChanged} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name="salary"
                        value={salary}
                        onChange={this.OnValueChanged} />

                    <button type="submit"
                        className="btn btn-outline-light"
                        >Add</button>
                </form>

            </div>
        )
    }
}

export default EmployeesAddForm