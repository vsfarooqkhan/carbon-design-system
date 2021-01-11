import React from 'react';

import { CatoBtn } from '../../components/Buttons/CatoBtn';

export default {
  title: 'UI/CatoBtn',
  component: CatoBtn,
};

const Template = (args) => <CatoBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Register',
};