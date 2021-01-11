import React from 'react';

import { Col } from '../../components/GridSystem/Col';

export default {
  title: 'UI/Grid',
  component: Col,
};

const Template = (args) => <Col {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Columns',
};