import React, { Component, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem,FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Student from './Student';
import Home from './App'
import Test from './Test'
import Upload from './Upload'
import Table from './Table'

class Sidebar extends Component {

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
            <ProSidebar className="sidebar-width">
                <SidebarHeader> 
                <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>Dashboard
                        <Link to="/" />
                        </MenuItem>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>Dashboard
                        <Link to="/Student" />
                        </MenuItem>
                        <MenuItem icon={<FaGem />}>Dashboard
                        <Link to="/Upload" />
                        </MenuItem>
                        <MenuItem icon={<FaGem />}>Table
                        <Link to="/Table" />
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>

      );
    }
  }
  
  export default Sidebar;