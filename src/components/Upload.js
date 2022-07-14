import React, { Component} from 'react';

class Upload extends Component {

    constructor(props) {
      super(props)
      this.state = {
        searchTerm: "",
        files: [],
      
      }
    
    }
  
    render() {
      return (
        <div class="d-flex justify-content-center" >
            <div class="shadow-lg p-3 mb-5 rounded w-50 bg-grad rounded">
                <h2 className="text-white text-monospace"><b><ins>Issue Document</ins></b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    const receiver = this.fileReceiver.value
                    const ftype = this.fType
                    const issuer = this.fileIssuer.value
                    const susn = this.sUSN.value
                    this.props.uploadFile(description, receiver, ftype, issuer, susn)
                  }} >
                      <div className="form-group">
                        <br></br>
                        <div class="input-group mb-4">
                          <span class="input-group-text text-white bg-pallet1" id="basic-addon1">USN of Student</span>
                          <input
                            id="sUSN"
                            type="text"
                            ref={(input) => { this.sUSN = input }}
                            className="form-control text-monospace"
                            placeholder="USN of Student"
                            required />
                        </div>

                        <div class="input-group mb-4">
                          <span class="input-group-text text-white bg-pallet1" id="basic-addon1">Student Name</span>
                          <input
                            id="fileIssuer"
                            type="text"
                            ref={(input) => { this.fileIssuer = input }}
                            className="form-control text-monospace"
                            placeholder="Student Name"
                            required />
                        </div>
                        
                        <div class="input-group mb-4">
                          <span class="input-group-text text-white bg-pallet1" id="basic-addon1">Student Address</span>
                          <input
                            id="fileReceiver"
                            type="text"
                            ref={(input) => { this.fileReceiver = input }}
                            className="form-control text-monospace"
                            placeholder="Student Address.."
                            required />
                        </div>
                          
                        <div class="input-group mb-4">
                          <span class="input-group-text text-white bg-pallet1" id="basic-addon1">Description</span>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="Description"
                            required />
                        </div>
                          
                        <div class="input-group mb-4">
                          <label class="input-group-text bg-pallet1 text-white" for="inputGroupSelect01">Options</label>
                          <select class="" id="inputGroupSelect01" onChange={(e) => {this.fType = e.target.value; console.log(this.fType)}}>
                            <option value="Marksheet">Marksheet</option>
                            <option value="Receipt">Receipt</option>
                            <option value="Certificate">Certificate</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                      </div>

                      <div class="input-group mb-5">
                        <input type="file" onChange={this.props.captureFile} class="form-control" id="inputGroupFile01"/>
                      </div>

                    <button type="submit" className="btn btn-lg text-white fs-4 bg-pallet1"><b>Issue</b></button>
                  </form>
                </div>
        </div>

      );
    }
  }
  
  export default Upload;