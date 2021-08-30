import Navigation from './Navigation';

export default {
  title: 'Components/Organisms/Navigation',
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});

Default.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '25%',
    average: '2.0',
  },
};
