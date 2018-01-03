import React, { Component } from 'react';
import Tooltip from 'react-simple-tooltip';
import Styles from './styles.scss';

export default class ListToDo extends Component {

    constructor (props) {
        super(props);

        this.state = {
            todo:    [],
            message: ''
        };
    }

    componentWillMount () {
        const todo = JSON.parse(localStorage.getItem('todo') || '[]');

        this.setState({ todo });
    }

    componentWillUpdate (_, { todo }) {
        this.savePostsToLocalStorage(todo);
    }

    savePostsToLocalStorage = (value) => {
        localStorage.setItem('todo', JSON.stringify(value));
    };

    addItems (e) {
        e.preventDefault();

        const { todo } = this.state;
        const newToDo = this.newToDo.value;
        const isOnTheList = todo.includes(newToDo);

        if (!isOnTheList) {
            newToDo !== '' && this.setState({
                todo:    [newToDo, ...this.state.todo],
                message: ''
            });
        } else {
            this.setState({
                message: 'This one is already in the list'
            });
        }

        this.addIntoList.reset();
    }

    removeItems (item) {
        const { todo } = this.state;
        const newToDo = todo.filter((todos) => todos!== item);

        this.setState({
            todo: [...newToDo]
        });

        if (newToDo.length === 0) {
            this.setState({
                message: 'nothing to do?'
            });
        }
    }

    clearAll () {
        this.setState({
            todo:    [],
            message: 'nothing to do?'
        });
    }

    render () {
        const { todo, message } = this.state;

        return (
            <div className = { Styles.List }>
                <header>
                    <div className = { Styles.header } />
                </header>
                <form
                    ref = { (input) => this.addIntoList = input }
                    onSubmit = { (e) => {
                        this.addItems(e);
                    } }>
                    <input
                        className = { Styles.addTextInput }
                        placeholder = 'Here you can add something into your list'
                        ref = { (input) => this.newToDo = input }
                        type = 'text'
                    />
                    <button
                        className = { Styles.addTextButton }
                        type = 'submit'>
                        Add
                    </button>
                </form>

                <div className = { Styles.content }>
                    {
                        (message !== '' || todo.length === 0)&&
                        <p className = { Styles.warningMessages }>{ message }</p>
                    }
                    {
                        todo.length > 0 &&
                        <table className = { Styles.listtodo }>
                            <caption>To-Do list</caption>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th colSpan = '2'>What to-do next</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody className = { Styles.tableBody }>
                                {
                                    todo.map((item, index) => (
                                        <tr key = { item }>
                                            <td scope = 'row'>{ index +1}</td>
                                            <Tooltip
                                                arrow = { 15 }
                                                background = '#8D99B1'
                                                border = '#000'
                                                color = '#fff'
                                                fixed = { false }
                                                fontFamily = 'inherit'
                                                fontSize = 'inherit'
                                                padding = { 16 }
                                                placement = 'top'
                                                radius = { 0 }
                                                zIndex = { 1 }
                                                content = 'Do you want to mark as done'>
                                                <td
                                                    className = { Styles.data }
                                                    colSpan = '2'>
                                                    { item }
                                                </td>
                                            </Tooltip>
                                            <td>
                                                <button
                                                    className = { Styles.buttonRemove }
                                                    onClick = { (e) => this.removeItems(item) }>
                                                Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                            <tfoot className = { Styles.footerTable }>
                                <tr>
                                    <td scope = 'row' > Total </td>
                                    <div>
                                        <td
                                            colSpan = '2' > { todo.length } </td>
                                    </div>
                                    <td>
                                        <button
                                            className = { Styles.removeAllButton }
                                            onClick = { (e) => this.clearAll() }>
                                    Clear List
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    }
                </div>
            </div>
        );
    }
}
