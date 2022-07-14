import React, { Component, useState } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'
import Table from './Table';
import Upload from './Upload'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
    
      files: [],
    
    }
  
  }

  render() {

    return (
      
      <div className="container-fluid mt-5 text-center">
        
        <div className="row">
          <main role="main" className="col-lg-12 mr-auto ml-auto d-flex justify-content-center" style={{ maxWidth: '1024px' }}>
            <div className="content">

            <p>&nbsp;</p>

              <Upload 
                captureFile={this.props.captureFile}
                uploadFile={this.props.uploadFile}
              />
              
              <p>&nbsp;</p>

              
              <Table 
                files={this.props.files}
                />           
          

              
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;