import React from 'react-native';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

jest.autoMockOff();

import DrawerLayout from '../DrawerLayout.ios';
jest.dontMock('../DrawerLayout.ios');

const {
  View,
} = React;

describe('<MyComponent />', () => {
  it('should render stuff', () => {
    const wrapper = shallow(<DrawerLayout />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains(<Text>I wonder if there will be any problems...</Text>)).to.equal(true);
  });
});
