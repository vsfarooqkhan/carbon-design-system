import React from 'react';

import { NavBar } from '../../components/NavBar/NavBar';

export default {
  title: 'UI/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const NavigationBar = Template.bind({});
NavigationBar.args = {
  label: 'Login',
};