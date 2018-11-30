import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { getApartment, deleteApartment } from '../api'


class Apartment extends Component {
  constructor(props){
    super(props)
    this.state = {
      deleteSubmitted: false,
      aptInfo: {},
    }
  }
  render() {
    let stillLoading;
    if(this.state.aptInfo.length == 0){
      stillLoading = true
    }else{
      stillLoading = false
    }
    let { aptInfo } = this.state
    return (
      <div className="pageviewContainer">
        {!stillLoading && <div className="pageview">
          <div>
            <img className="pageview" src="https://png.pngtree.com/element_origin_min_pic/20/16/02/0156af774ba6864.jpg" />
            <div id="contactInfo">
              <h4>Contact {aptInfo.manager_name} today!</h4>
              <p>{`Contact: ${aptInfo.phone}`}</p>
              <p>{`Hours: ${aptInfo.hours}`}</p>
            </div>
          </div>
          <div className="pageviewInfo">
            <div>
              <button className="btn btn-danger btn-xs delete" onClick={this.handleDelete} >DELETE</button>
              <h1 className="text-info">{`${aptInfo.street_a} at ${aptInfo.street_b}`}</h1>
              <h4>{`${aptInfo.city}, ${aptInfo.state} ${aptInfo.postal_code}, ${aptInfo.country}`}</h4>
              <p className="pageviewInfo">{`${aptInfo.long_desc}`}</p>
            </div>
          </div>
        </div>}
        {stillLoading && <img id="loading" src="https://www.pedul.com/images/loading.gif" />}
        {this.state.deleteSubmitted && <Redirect to="/apartments" />}
      </div>
    );
  }

  componentDidMount() {
    getApartment(this.props.match.params.id)
    .then(apt => {
      console.log(apt);
      this.setState({aptInfo: apt})
    })
  }

  handleDelete = () => {
    deleteApartment(this.state.aptInfo.id)
    .then(resp => {
      console.log("Deleted!");
      this.setState({deleteSubmitted: true})
    })
  }
}

export default Apartment;
