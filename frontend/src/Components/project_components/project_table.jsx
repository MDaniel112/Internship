import React from "react";
import {Table} from "react-bootstrap";
import ProjectsList from "./project_list";
import ProjectModal from "./project_modal"

function TabelProjects() {
    if (sessionStorage.getItem("isLoggedIn") === "logged")
        return(
            <div>
                <ProjectModal />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>Planned End Date</th>
                        <th>Description</th>
                        <th>Project Code</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <ProjectsList />
                </Table>
            </div>
        );
    else {
        window.location.replace("/signin");
    }
}

export default TabelProjects;