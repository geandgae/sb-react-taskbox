import React from 'react';
import Task  from './Task';

export default {
  title: 'Task',
  component: Task,
  tags: ['autodocs'],
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Task',
  state: 'default',
};

export const Completed = Template.bind({});
Completed.args = {
  title: 'Completed Task',
  state: 'completed',
};
