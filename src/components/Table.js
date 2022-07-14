import React, { Component} from 'react';
import moment from 'moment'

class Table extends Component {

    constructor(props) {
      super(props)
      this.state = {
        searchTerm: "",
        files: [],
      
      }
    
    }
  
    render() {
      return (
        <div>
             

            <div class="input-group mb-3 shadow-lg p-3 mb-3 bg-pallet1 rounded">
              <span class="input-group-text text-white" id="basic-addon1">Search</span>
              <input
                type="text"
                 onChange={(e)=> {
                    this.setState({
                        searchTerm: e.target.value,
                      })
                 }}
                className="form-control text-monospace"
                 placeholder="Eg. student name, USN, Etc.."
                 required />
            </div>
              
              <div class="shadow-4 rounded">
              <table class="table align-middle table-dark table-striped table-hover">
                <thead class="">
                  <tr>

                    <th>id</th>
                    <th>Student</th>
                    
                    <th>Type</th>
                    <th>Description</th>
                    <th>Student Address</th>
                    <th>Issuer</th>
                    <th>Hash/View</th>                    
                    <th>Date</th>
                  </tr>
                </thead>
                { this.props.files.filter((val) => {
                    if (this.state.searchTerm === "") {
                      return val;
                    }else if(
                      val.fileDescription.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                      val.fileId.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                      val.fType.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                      val.sUSN.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                      val.fileIssuer.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || 
                      val.fileReceiver.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                    ){
                      return val;
                    }
                }).map((file, key) => {
                  return(
                    <tbody key={key}>
                      <tr>
                        <td>
                        <span class="badge rounded-pill bg-light text-dark fs-6">{file.fileId}</span>
                        </td>
                        <td>
                        <div class="ms-3">
                          <p class="fw-bold mb-1">{file.sUSN}</p>
                          <p class="mb-0">USN : {file.fileDescription}</p>
                        </div>
                       </td>
                       <td>
                        <span class="badge bg-info text-light rounded-pill fs-6">{file.fileIssuer}</span>
                      </td>                
                        
                        <td>{file.fType}</td>
                        
                        <td>
                          <div class="ms-3">
                          <p class="mb-0">{file.fileReceiver}</p>
                          
                          <button type="button" class="btn btn-link btn-sm btn-rounded">
                          <a
                            href={"https://etherscan.io/address/" + file.fileReceiver}
                            rel="noopener noreferrer"
                            target="_blank">
                            View on Etherscan
                          </a>
                        </button>
                        </div>
                          
                        </td>
                          
                        <td>

                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                        <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                        </button>
                         </td>
                        <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                        <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </button>
                          
                        </td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
              </div>
        </div>
        
      );
    }
  }
  
  export default Table;

