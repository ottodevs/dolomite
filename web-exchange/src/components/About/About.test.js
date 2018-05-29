import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import About from './About';

configure({ adapter: new Adapter() });

describe('<About />', () => {
  const homeLink = props => <Link to="/" {...props} />;
  const homeButton = (
    <Button
      variant="raised"
      color="primary"
      component={homeLink}
    >
      Head back home
    </Button>
  );
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it('About page contains link to home by default', () => {
    expect(wrapper.find(Button).props().component().props).toHaveProperty('to', '/');
  });

  it('About page contains link to home by default WRITING USING CONTAINS', () => {
    expect(wrapper.find(Button).props().component()).toEqual(homeLink());
  });

  it('About page does not contain link to home when falsy prop is passed', () => {
    wrapper.setProps({ shouldLinkHome: false });
    expect(wrapper.contains(homeButton)).toEqual(false);
  });
});
