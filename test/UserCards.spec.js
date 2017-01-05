import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import UserCards from '../src/client/app/components/UserCardsComponent/UserCards';

let wrapper, Props;


const handleLikeClick = () => {};
const isLoggedIn = '123abc';
const userCards = [
  {
    _owner: ['123abc'],
    tagLine: 'Hello',
    imgURL: 'me.jpg',
    twitterIMG: 'you.jpg',
    likes: ['123abc']
  }
]

describe('<UserCards />', () => {
  beforeEach(() => {
    wrapper = shallow(<UserCards
                        isLoggedIn={isLoggedIn}
                        userCards={userCards}
                        handleLikeClick={handleLikeClick}/>)

    Props = wrapper.unrendered.props;
  });

  it('should have a string isLoggedIn prop', () => {
    const { isLoggedIn } = Props;
    expect(isLoggedIn).to.be.defiend;
    expect(isLoggedIn).to.be.a('string');
  });

  it('should have an array userCards prop', () => {
    const { userCards } = Props;
    expect(userCards).to.be.defiend;
    expect(userCards).to.be.an('array');
  });

  it('should have a function handleLikeClick prop', () => {
    const { handleLikeClick } = Props;
    expect(handleLikeClick).to.be.defiend;
    expect(handleLikeClick).to.be.a('function');
  });

});
