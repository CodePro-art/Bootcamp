import React, { Component } from 'react'

export default class Avatar extends Component {
  
  render() {
    const {name,picture,country,phone,email,} = this.props.data;
    
    return (
      <div className="card-container-avatar">
        <div className="inner-content">
          <h3 className="avatar-name">{`${name.title} ${name.first} ${name.last}`}</h3>
          <img className="avatar-img" src={picture} alt="avatar"/>
            <h3 className="contact-info">contact info</h3>
          <div className="description-container">
            <p><span className="primery-text-avatar">Country:</span> {country}</p>
            <p><span className="primery-text-avatar">E-mail:</span> {email}</p>
            <p><span className="primery-text-avatar">Phone Number:</span> {phone}</p>
          </div>
        </div>        
      </div>
    )
  }
}
