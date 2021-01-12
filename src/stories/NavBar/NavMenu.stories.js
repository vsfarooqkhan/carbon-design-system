import React from 'react';

import { NavMenu } from '../../components/NavBar/NavMenu';

export default {
  title: 'UI/NavMenu',
  component: NavMenu,
};

const Template = (args) => <NavMenu {...args} />;

export const NavigationBar = Template.bind({});
NavigationBar.args = {
  label: 'Login',
};