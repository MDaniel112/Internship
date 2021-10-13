import Axios from 'axios';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class ProjectSelection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
        this.result = {}
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/projects', {headers: {'x-access-token': sessionStorage.getItem('accessToken')}})
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
        
        return(
            <Form.Select name="p_id">
                {
                    projects.length ? projects.map(project =>
                        <option key={project.id} value={project.id}>id={project.id}, {project.project_name}</option>
                    ) : null
                    
                }
                
            </Form.Select>
            
        );
    }
        
}


export default ProjectSelection;