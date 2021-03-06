import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HomePage from '../src/client/app/components/HomePageComponent/HomePage';

let wrapper;
let Props;

const cards = [
  {
    _owner: ['123abc'],
    tagLine: 'Hello',
    imgURL: 'me.jpg',
    twitterIMG: 'you.jpg',
    likes: ['123abc']
  }
]

const handleLikeClick = () => {}
const handleGetUserCards = () => {}

describe('<HomePage />', () => {
  before(() => {
    wrapper = shallow(<HomePage
                        cards={cards}
                        isLoggedIn='123abc'
                        handleGetUserCards={handleGetUserCards}
                        handleLikeClick={handleLikeClick}/>);
    Props = wrapper.unrendered.props;
  });

  it('should have prop for array of cards', () => {
    expect(Props.cards).to.be.defiend;
    expect(Props.cards).to.be.an('Array');
  });

  it('should have a string prop for isLoggedIn', () => {
    expect(Props.isLoggedIn).to.be.defiend;
    expect(Props.isLoggedIn).to.be.a('String');
  })

  it('should have prop for function handleLikeClick', () => {
    expect(Props.handleLikeClick).to.be.defiend;
  })

  it('should have prop for function handleGetUserCards', () => {
    expect(Props.handleGetUserCards).to.be.defiend;
  })

});
