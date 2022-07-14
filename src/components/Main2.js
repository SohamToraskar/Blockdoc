import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'
import Table from './Table'



class Main2 extends Component {

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
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <Table 
            files={this.props.files}
            />

          </main>
        </div>
      </div>
    );
  }
}

export default Main2;