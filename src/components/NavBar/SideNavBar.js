import { Row, Column, Grid,SideNav,Icon, SideNavItems, SideNavMenuItem, SideNavMenu,SideNavLink , DatePickerInput, DatePicker } from 'carbon-components-react';
import React from 'react';
import propTypes from 'prop-types';
import { Fade16,Information16, Bullhorn32, SettingsAdjust32,Calendar32 } from '@carbon/icons-react';
import './NavBar.css';
import { CatoBtn } from '../Buttons/CatoBtn';
import {SubMenu} from './SubMenu';
import { Button } from 'carbon-components-react';
import '../styles/Button.css';
export const SideNavBar = ({ className , btnType,onClick, width, height, backgroundColor, size, label, ...props }) => {
  return (
    <>
      <SideNav
      className = {className}
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation">
          <SubMenu link = "javascript:void(0)" className = "navLink">
          <label style = {{textAlign:'center', fontSize: '10px'}}> Choose Campaign Period <Information16/></label>
            <br/> 
            <DatePicker datePickerType="range">
              <DatePickerInput
                id="date-picker-input-id-start"
                placeholder="mm/dd/yyyy"
                // labelText="Start date"
              />
              <DatePickerInput
                id="date-picker-input-id-finish"
                placeholder="mm/dd/yyyy"
                // labelText="End date"
              />
            </DatePicker>
          </SubMenu>
        <br/><br/>
        <Row>
          <Column>
          <label style = {{textAlign : 'center', fontSize : '15px', color :'black'}}> Enable Channel(s) <Information16/></label>
          </Column>
        </Row>
        <br/>
        <Row>
          <Column md="6">
            <Button
              className='sideNavBtn' kind = {btnType} width = {width} height = {height}>
                <Fade16 aria-label="Add" className="my-custom-class" /><br/>
              <label style = {{paddingLeft : '20px'}}>Test Button</label>
            </Button>
          </Column>
          <Column md="6">
            <Button
              className='sideNavBtn' kind = {btnType} width = {width} height = {height}>
                <Fade16 aria-label="Add" className="my-custom-class" /><br/>
              <label style = {{paddingLeft : '20px'}}>Test Button</label>
            </Button>
          </Column>
          
        </Row>
        <br/>
        <Row>
          <Column md="2">
            <Button
              className='normalBtn' kind = {btnType} width = {width} height = {height}>
                <Fade16 aria-label="Add" className="my-custom-class" /><br/>
              <label style = {{paddingLeft : '20px'}}>Test Button</label>
            </Button>
          </Column>
          <Column md="2">
            <Button
              className='normalBtn' kind = {btnType} width = {width} height = {height}>
                <Fade16 aria-label="Add" className="my-custom-class" /><br/>
              <label style = {{paddingLeft : '20px'}}>Test Button</label>
            </Button>
          </Column>
          
        </Row>
        <Row>
          <Column md="2">
            <Button
              className='normalBtn' kind = {btnType} width = {width} height = {height}>
                <Fade16 aria-label="Add" className="my-custom-class" /><br/>
              <label style = {{paddingLeft : '20px'}}>Test Button</label>
            </Button>
          </Column>
          <Column md="2">
            <Button
              className='normalBtn' kind = {btnType} width = {width} height = {height}>
                <Fade16 aria-label="Add" className="my-custom-class" /><br/>
              <label style = {{paddingLeft : '20px'}}>Test Button</label>
            </Button>
          </Column>
          
        </Row>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </SideNav>
    </>
  );
};

SideNavBar.propTypes = {
  backgroundColor: propTypes.string,
  className : propTypes.string,
};

SideNavBar.defaultProps = {
  backgroundColor: '#75BF42',
  className : 'SideNavBar'
};
export default SideNavBar;
