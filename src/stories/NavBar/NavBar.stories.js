import React from 'react';

import { NavBar } from '../../components/NavBar/NavBar';

export default {
  title: 'UI/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Login',
};