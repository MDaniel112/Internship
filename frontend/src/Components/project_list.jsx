import React, {Component} from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';

class ProjectsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/projects')
            .then(response => {
                console.log(response)
                this.setState({projects: response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const {projects} = this.state
        return (
            <tbody>
                {
                    projects.length ? projects.map(project => 
                    <tr key={project.id}>
                        <td >{project.id}</td>
                        <td >{project.project_name}</td>
                        <td >{project.start_date}</td>
                        <td >{project.planned_end_date}</td>
                        <td >{project.description}</td>
                        <td >{project.project_code}</td>
                        <td><Button>Edit</Button></td>
                        <td><Button>Delete</Button></td>
                    </tr>
                    ) : null
                }
            </tbody>
        )
    }
}

export default ProjectsList;