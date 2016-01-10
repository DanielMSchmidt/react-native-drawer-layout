'use strict';

jest.autoMockOff();

const React = require('react-native');
const { View } = React;
const TestUtils = require('react-addons-test-utils');
const ShallowTestUtils = require('react-shallow-testutils');

jest.dontMock('../DrawerLayout.ios');
var DrawerLayout = require('../DrawerLayout.ios');

const defaultProps = {
  drawerPosition: 'left',
  drawerWidth: 50,
  renderNavigationView: function() {
    return (
      <View />
    );
  }
}

describe('API surface', function() {
  it('should be a ReactElement', function() {
    var is_element = TestUtils.isElement(
      <DrawerLayout {...defaultProps} />
    );
    expect(is_element).toBe(true);
  });

  function renderDrawerLayout(props) {
    const renderer = TestUtils.createRenderer();
    renderer.render(() => <DrawerLayout {...props}/>);

    return renderer.getMountedInstance();
  }

  describe('Instance.openDrawer', function() {
    const foo = renderDrawerLayout(defaultProps);
    it('true to be true', function() {
      expect(foo).toBe(true);
    });
  });

  describe('Instance.closeDrawer', function() {
    it('true to be true', function() {
      expect(true).toBe(true);
    });
  });
});
