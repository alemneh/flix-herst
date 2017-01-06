import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Card from '../src/client/app/components/CardComponent/Card';

let wrapper, Props;

const card = {
  _owner: ['123abc'],
  tagLine: 'Hello',
  imgURL: 'me.jpg',
  twitterIMG: 'you.jpg',
  likes: ['123abc']
}
const view = '';
const handleLikeClick = () => {};
const handleGetUserCards = () => {};
const handleRemoveCardClick = () => {};

describe('<Card />', () => {
  beforeEach(() => {
    wrapper = shallow(<Card
                        card={card}
                        view={view}
                        handleLikeClick={handleLikeClick}
                        handleGetUserCards={handleGetUserCards}
                        handleRemoveCardClick={handleRemoveCardClick}/>)
    Props = wrapper.unrendered.props;
  });

  it('should have an object card prop', () => {
    const { card } = Props;
    expect(card).to.be.defiend;
    expect(card).to.be.an('object');
  });

  it('should have a string view prop', () => {
    const { view } = Props;
    expect(view).to.be.defiend;
    expect(view).to.be.a('string');
  });

  it('should have a function handleLikeClick prop', () => {
    const { handleLikeClick } = Props;
    expect(handleLikeClick).to.be.defiend;
    expect(handleLikeClick).to.be.a('function');
  });

  it('should have a function handleRemoveCardClick', () => {
    const { handleRemoveCardClick } = Props;
    expect(handleRemoveCardClick).to.be.defiend;
    expect(handleRemoveCardClick).to.be.a('function');
  });

});
