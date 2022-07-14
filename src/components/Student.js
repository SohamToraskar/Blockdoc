import DStorage from '../abis/DStorage.json'
import React, { Component } from 'react';
import Navbar from './Navbar'
import Main2 from './Main2'
import Web3 from 'web3';
import './App.css';
import Card from './Card'
import styled from 'styled-components';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

const Grid = styled.div`
  
  flex-wrap: nowrap;
  padding-left: calc(50px);

  /* Fake padding-right */
  &::after {
    content: '';
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(160px);
    
  }

  > button {
    margin: 15px;
  }

  /* Hide the others cards */
  > button:not(:first-child) {
    visibility: visible; /* switch to 'visible' */
  }
`;

class Student extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = DStorage.networks[networkId]

    if (this.state.account === "0x8f1dd89eF6eB976E55a1c2016C40E247843d2641") {
      window.alert('You are not a Jain Student')
      window.location.href='http://localhost:3000'
    } else {
      
    }

    if(networkData) {
      // Assign contract
      const dstorage = new web3.eth.Contract(DStorage.abi, networkData.address)
      this.setState({ dstorage })
      // Get files amount
      const filesCount = await dstorage.methods.fileCount().call()
      this.setState({ filesCount })
      // Load files&sort by the newest
      for (var i = filesCount; i >= 1; i--) {
        const file = await dstorage.methods.files(i).call()
        if (file.fileReceiver === this.state.account) {
            this.setState({
                files: [...this.state.files, file]
              })
          }
      }
    } else {
      window.alert('DStorage contract not deployed to detected network.')
    }
  }
  

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      dstorage: null,
      files: [],
      loading: false,
      type: null,
      name: null,
      searchTerm: "",
    
    }
  
  }

  render() {
    return (
      <div>
        
        { this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
          
          : 
            
          
          
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
                 placeholder="Search"
                 required /> 
              </div>
            <Grid>
            
                 
          { this.state.files.filter((val) => {
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
                }).map((file, key) => (
            <Card
              key={file.fileId}
              hexa="#FF5041"
              title={file.fileIssuer}
              name={file.sUSN}
              usn={file.fileDescription}
              issuer={file.uploader}
              description={file.fType}
              image={file.fileHash}
              date={file.uploadTime}
            />
          ))}
        </Grid>
 
        </div>

        }   
      </div>
  
    );
  }
}

export default Student;