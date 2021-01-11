import React from 'react';

import { PrimaryBtn } from '../../components/Buttons/PrimaryButton';

export default {
  title: 'UI/PrimaryBtn',
  component: PrimaryBtn,
};

const Template = (args) => <PrimaryBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Login',
};