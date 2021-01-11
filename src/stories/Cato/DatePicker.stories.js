import React from 'react';

import { DatePicker } from '../../components/DatePicker';

export default {
  title: 'UI/DatePicker',
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'DatePicker',
};