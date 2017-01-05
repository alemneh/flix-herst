import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CreateCard from '../src/client/app/components/CreateCardComponent/CreateCard';

let wrapper, Props;

const imgUrl = 'me.jpg';
const tagLine = 'Hello';
const handleCreateCardClick = () => {};

describe('<CreateCard />', () => {
  beforeEach(() => {
    wrapper = shallow(<CreateCard
                        imgURL={imgURL}
                        tagLine={tagLine}
                        handleCreateCardClick={handleCreateCardClick}/>)
    Props = wrapper.unrendered.props;
  });

  it('should have a string imgURL prop', () => {
    const { imgURL } = Props;
    expect(imgURL).to.be.defiend;
    expect(imgURL).to.be.a('string');
  })
})
