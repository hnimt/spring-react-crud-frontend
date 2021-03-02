import React, { Component } from "react";
import EmployeeService from "../../services/EmployeeService";

export default class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    this.props.history.push("/add-employee/_add");
  }

  editEmployee = (id) => {
    this.props.history.push(`/add-employee/${id}`);
  };

  deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  };

  viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`)
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email id</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => this.editEmployee(employee.id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteEmployee(employee.id)}
                        style={{ marginLeft: "10px" }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.viewEmployee(employee.id)}
                        style={{ marginLeft: "10px" }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
