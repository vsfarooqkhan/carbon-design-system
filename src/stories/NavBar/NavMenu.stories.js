import React from 'react';

import { SideNavBar } from '../../components/NavBar/SideNavBar';

export default {
  title: 'UI/SideNavBar',
  component: SideNavBar,
};

const Template = (args) => <SideNavBar {...args} />;

export const NavigationBar = Template.bind({});
NavigationBar.args = {
  label: 'Login',
};