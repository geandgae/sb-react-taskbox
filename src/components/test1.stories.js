import { Title } from '@storybook/blocks';
import { test1 } from './test1';

//👇 This default export determines where your story goes in the story list
export default {
  Title: "btnSets",
  component: test1,
  tags: ['autodocs'],
  // parameters: {
  //   // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
};

export const primaryBtn = {
  args: {
    type: "primary",
    label: "primary",
    opt: "rounded"
  },
};

export const secondaryBtn = {
  args: {
    type: "secondary",
    label: "secondary"
  },
};

export const successBtn = {
  args: {
    type: "success",
    label: "success"
  },
};

export const dangerBtn = {
  args: {
    type: "danger",
    label: "danger"
  },
};

export const warningBtn = {
  args: {
    type: "warning",
    label: "warning"
  },
};

export const infoBtn = {
  args: {
    type: "info",
    label: "info"
  },
};

export const lightBtn = {
  args: {
    type: "light",
    label: "light"
  },
};

export const darkBtn = {
  args: {
    type: "dark",
    label: "dark",
  },
};

export const notFlag = {
  args: {
    label: "notflag",
    flag: "error",
  },
};