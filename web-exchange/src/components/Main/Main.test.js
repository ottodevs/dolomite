import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Wallet from '../Wallet/Wallet';
import Exchange from '../Exchange/Exchange';
import Main from './Main';

configure({ adapter: new Adapter() });

describe('<Main />', () => {
  let wrapper;
  const exchangeRoute = <Route exact path="/" component={Exchange} />;
  const walletRoute = <Route exact path="/wallet" component={Wallet} />;
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('Exchange route exists', () => {
    expect(wrapper.contains(exchangeRoute)).toEqual(true);
  });

  it('Wallet route exists', () => {
    expect(wrapper.contains(walletRoute)).toEqual(true);
  });
});
