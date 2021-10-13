import React, {Component} from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import EditProjectModal from './edit_project_modal'
import ErrorModal from '../error_modal';
import { render } from '@testing-library/react';

import { connect } from 'react-redux';
import * as repositoryActions from '../../actions/repositoryActions';

class ProjectsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
        this.showModal = false
    }

    // componentDidMount(){
    //     Axios.get('http://localhost:5000/projects')
    //         .then(response => {
    //             console.log(response)
    //             this.setState({projects: response.data})
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    componentDidMount(){
        // this.setState = getData("http://localhost:5000/", this.props);
        let url = 'http://localhost:5000/projects';
        this.props.onGetData(url, { ...this.props });
    }

    // deleteProject(id){
    //     Axios.delete("http://localhost:5000/projects/" + id)
    //         .then(function (response) {
    //             console.log(response);
    //             window.location.reload();
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             render(<ErrorModal errorText = "Eroare la stergerea proiectului!"/>)
    //         });
    // }

    deleteProject(id){
        let url = 'http://localhost:5000/projects/' + id;
        this.props.onDeleteData(url, { ...this.props });
        // this.setState(this.state);
    }

    render() {
        // const {projects} = this.state
        const projects = this.props.data
        return (
            <>
            
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
                        <td><EditProjectModal e_project={project}/></td>
                        <td><Button onClick={() => this.deleteProject(project.id)}>Delete</Button></td>
                    </tr>
                    ) : null
                }
            </tbody>
            </>
        )
    }
}

const mapStateToProps = (state) => {     
    return {  
       data: state.data     
    } 
}
const mapDispatchToProps = (dispatch) => {
     return {
         onGetData: (url, props) => dispatch(repositoryActions.getData(url, props)), 
         onDeleteData: (url, props) => dispatch(repositoryActions.deleteData(url, props))    
    } 
} 
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);

// export default ProjectsList;