import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CreateCard from '../src/client/app/components/CreateCardComponent/CreateCard';

let wrapper, Props;

const imgURL = 'me.jpg';
const tagLine = 'Hello';
const handleImgChange = () => {};
const handleTagLineChange = () => {};
const handleCreateCardClick = () => {};

describe('<CreateCard />', () => {
  beforeEach(() => {
    wrapper = shallow(<CreateCard
                        imgURL={imgURL}
                        tagLine={tagLine}
                        handleImgChange={handleImgChange}
                        handleTagLineChange={handleTagLineChange}
                        handleCreateCardClick={handleCreateCardClick}/>)
    Props = wrapper.unrendered.props;
  });

  it('should have a string imgURL prop', () => {
    const { imgURL } = Props;
    expect(imgURL).to.be.defiend;
    expect(imgURL).to.be.a('string');
  });

  it('should have a function handleImgChange prop', () => {
    const { handleImgChange } = Props;
    expect(handleImgChange).to.be.defiend;
    expect(handleImgChange).to.be.a('function');
  });

  it('should have a function handleTagLineChange prop', () => {
    const { handleTagLineChange } = Props;
    expect(handleTagLineChange).to.be.defiend;
    expect(handleTagLineChange).to.be.a('function');
  });

  it('should have a function handleCreateCardClick prop', () => {
    const { handleCreateCardClick } = Props;
    expect(handleCreateCardClick).to.be.defiend;
    expect(handleCreateCardClick).to.be.a('function');
  })
})
