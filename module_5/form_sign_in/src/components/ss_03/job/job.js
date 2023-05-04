import {Component} from "react";

export class Job extends Component {
    constructor() {
        super();
        this.state = {
            job: '',
            listJob: []
        }
    }

    inputJob(value) {
        this.setState({
            job: value
        })
    }

    addJob() {
        this.setState({
            listJob: [...this.state.listJob, this.state.job],
            job: ''
        })
        document.getElementById("job").value = ""
    }

    render() {
        return (
            <>
                <h1>TodoList</h1>
                <input id="job" onChange={(event) => this.inputJob(event.target.value)}/>
                <button onClick={() => this.addJob()}>
                    Add
                </button>
                <ul>
                    {this.state.listJob.map((job, index) => (
                        <li key={index}>
                            {job}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
