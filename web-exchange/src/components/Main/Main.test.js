import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import About from '../About/About';
import Home from '../Home/Home';
import Main from './Main';

configure({ adapter: new Adapter() });

describe('<Main />', () => {
  let wrapper;
  const homeRoute = <Route exact path="/" component={Home} />;
  const aboutRoute = <Route exact path="/about" component={About} />;
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('Home route exists', () => {
    expect(wrapper.contains(homeRoute)).toEqual(true);
  });

  it('About route exists', () => {
    expect(wrapper.contains(aboutRoute)).toEqual(true);
  });
});
