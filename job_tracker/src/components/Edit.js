import React from 'react';
import axios from 'axios';

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

  render = () => {
    const { index } = this.props;
    return (
      <React.Fragment>{(this.state.show)
        ?
          <form id={index._id} onSubmit={this.changeStatus}>
            <input onChange={this.updateStatus} type="text" placeholder="Submitted/Interviewing/Offer/Reject"/>
            <input type="submit" value="submit" />
          </form>
        : <p onClick={this.toggleShow}>{index.status}</p>
      }</React.Fragment>
    )
  }
}

export default Edit;
