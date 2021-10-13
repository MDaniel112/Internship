import React from "react";

function EmployeeTableRow(props){
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.adress}</td>
            <td>{props.email}</td>
            <td>{props.hire_date}</td>
            <td>{props.job_title}</td>
            <td>{props.project_id}</td>
        </tr>
    );
}

export default EmployeeTableRow;