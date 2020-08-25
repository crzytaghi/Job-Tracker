import React from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Edit extends React.Component {
  state = {
    show:false,
    app:[]
  }



  toggleShow = () => {
    this.setState({
      show:!this.state.show
    })
  }

  updateStatus = (event) => {
    this.setState({
      updatedStatus:event.target.value
    })
  }

  changeStatus = (event) => {
    // event.preventDefault();
    axios.put('http://localhost:3000/application/' + event.target.getAttribute('id'),
    {
      status:this.state.updatedStatus
    }
  ).then(
      (response) => {
        this.setState({
          app:response.data
        })
      }
    )
  }

  options = ['one','two','three'];
  defaultOptions = this.options[0];


  render = () => {
    const { index } = this.props;
    return (
      <React.Fragment>{(this.state.show)
        ?
          <form id={index._id} onSubmit={this.changeStatus}>
            <select onChange={this.updateStatus}>
              <option value="Pending">Pending</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
            <input type="submit" value="submit" />
          </form>
        : (index.status === "Offer") ? <p onClick={this.toggleShow} style={{background:"rgba(0,255,0,0.5)"}}>{index.status}</p>
        : (index.status === "Rejected") ? <p onClick={this.toggleShow} style={{background:"rgba(255,0,0,0.5)"}}>{index.status}</p>
        : <p onClick={this.toggleShow} style={{background:"rgb(255,155,0)"}}>{index.status}</p>
      }</React.Fragment>
    )
  }
}

export default Edit;
