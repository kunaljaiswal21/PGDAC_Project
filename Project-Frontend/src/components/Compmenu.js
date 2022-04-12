import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { HashRouter as Router, Route,Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../css/bootstrap.css'
import './index.css';
//import Wiselap from '../assets/img/brand/wiselapComplete.png'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import LoanForm from './LoanForm'
import LoanDetails from './LoanDetails'
import EMIDetails from './EMIDetails'
import PayEMI from './PayEMI'
import PaidEmiDetails from './PaidEmiDetails'
import EditProfile from './EditProfile'
import CustomerLoanDetails from './CustomerLoanDetails'
import LoanApplication from './LoanApplication'
import VerifiedDocument from './VerifiedDocuments'
import PendingDocuments from './PendingDocuments'
enableRipple(true);

class compmenu extends Component {
  constructor() {
    super(...arguments);

    this.mediaQuery = '(min-width: 1800px)';

    this.AccountMenuItem = [
      {
        text: 'Account',
        items: [
          {
            text: 'Edit Profile',
            url: '/EditProfile#/Compmenu'
          },
          {
            text: 'Sign out',
            url: "/"
          },
        ]
      }
    ];
    //clerk
    //
    this.menuItemsForCustomer = [
      {
        text: 'Apply For Loan',
        iconCss: 'icon-globe icon',
        url: "/LoanForm#/Compmenu"
      },
      {
        text: 'Loan Details',
        iconCss: 'icon-globe icon',
        url:"/LoanDetails#/Compmenu"
      },
      {
        text: 'EMI Details',
        iconCss: 'icon-globe icon',
        url:"/EMIDetails#/Compmenu"
      },
      {
        text: 'Pay EMI',
        iconCss: 'icon-globe icon',
        url:"/PayEMI#/Compmenu"
      },
      {
        text: 'Paid EMI details',
        iconCss: 'icon-globe icon',
        url:"/PaidEmiDetails#/Compmenu"
      },
    ];
    this.menuItemsForClerk = [
      {
         text:'Customer Loan Details',
         iconCss: 'icon-globe icon',
         url:"/CustomerLoanDetails#/Compmenu"
      },
      {
        text:'Loan Accept/Reject',
        iconCss: 'icon-globe icon',
        url:"/LoanApplication#/Compmenu"
     }
    ]
    this.menuItemsForManager = [
      {
        text: 'Paid EMI details',
        iconCss: 'icon-globe icon',
        url:"/PaidEmiDetails#/Compmenu"
      },
      {
         text:'Customer Loan Details',
         iconCss: 'icon-globe icon',
         url:"/CustomerLoanDetails#/Compmenu"
      },
      {
        text:'Loan Accept/Reject',
        iconCss: 'icon-globe icon',
        url:"/LoanApplication#/Compmenu"
     }
    ]
    this.menuItemsForInvestegator = [
      {
         text:'Customer Loan Details',
         iconCss: 'icon-globe icon',
         url:"/CustomerLoanDetails#/Compmenu"
      },
      {
        text:'Verified Customer Documents',
        iconCss: 'icon-globe icon',
        url:"/VerifiedDocuments#/Compmenu"
      },
      {
        text:'Pending Customer Documents',
        iconCss: 'icon-globe icon',
        url:"/PendingDocuments#/Compmenu"
      }
      
    ]
    this.enableDock = true;
    this.dockSize = '52px';
    this.width = '200px';
    this.target = '.main-content';
  }
  render() {
    return (
      <Router >
           
             <div className="control-section">
          <div className="col-lg-12 col-sm-12 col-md-12 center">
            Click/Touch the button to view the sample
             </div>
          <div className="col-lg-12 col-sm-12 col-md-12 center">
          </div>
          <div id="wrapper">
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="header-section dock-menu" id="header" style={{ border: "none" }}>
                <ul className="header-list">
                  <li id="hamburger" className="icon-menu icon list" onClick={this.openClick.bind(this)}></li>
                  <span style={{ textAlign: "center" }}><h3 style={{ marginTop: "0.5%" }}>ROYAL BANK
                                <MenuComponent items={this.AccountMenuItem} style={{ marginTop: "-0.4%" }} cssClass='dock-menu'></MenuComponent>
                  </h3>
                  </span>
                </ul>
              </div>
              <SidebarComponent id="sidebar-menu" ref={Sidebar => this.sidebarobj = Sidebar} enableDock={this.enableDock}
                mediaQuery={this.mediaQuery} dockSize={this.dockSize} width={this.width} target={this.target}>
                <div className="main-menu">
                  <p className="main-menu-header"></p>
                  <MenuComponent items={localStorage.role==="clerk"?this.menuItemsForClerk:localStorage.role==="manager"?this.menuItemsForManager:localStorage.role==="customer"?this.menuItemsForCustomer:this.menuItemsForInvestegator} orientation='Vertical' cssClass='dock-menu'></MenuComponent>
                   </div>

              </SidebarComponent>
              <div className="main-content" id="maintext">
                <div ml-5="true">
                    <Route path="/LoanForm" exact component={LoanForm} />
                    <Route path="/LoanDetails" exact component={LoanDetails} />
                    <Route path="/EMIDetails" exact component={EMIDetails}/>
                    <Route path="/PayEMI" exact component={PayEMI}/>
                    <Route path="/PaidEmiDetails" exact component={PaidEmiDetails}/>
                    <Route path="/EditProfile" exact component={EditProfile}/>
                    <Route path="/CustomerLoanDetails" exact component={CustomerLoanDetails}/>
                    <Route path="/LoanApplication" exact component={LoanApplication}/>
                    <Route path="/VerifiedDocuments" exact component={VerifiedDocument}/>
                    <Route path="/PendingDocuments" exact component={PendingDocuments}/>
                </div>
              </div>
            </div>
          </div>
        </div>
       

      </Router>
    );
  }
  openClick() {
    this.sidebarobj.toggle();
  }
}
export default compmenu;
