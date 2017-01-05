import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Profile from '../src/client/app/components/ProfileComponent/Profile';

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
const imgURL = 'me.jpg'
const handleLikeClick = () => {}
const handleImgChange = () => {}
const handleRemoveCardClick = () => {}
const handleTagLineChange = () => {}
const handleCreateCardClick = () => {}



describe('<Profile />', () => {
  beforeEach(() => {
    wrapper = shallow(<Profile
                  handleImgChange={ handleImgChange }
                  handleTagLineChange={ handleTagLineChange }
                  handleRemoveCardClick={ handleRemoveCardClick }
                  handleCreateCardClick={ handleCreateCardClick }
                  cards={ cards }
                  imgURL={imgURL}/>);

    Props = wrapper.unrendered.props;
  })

  it('should have an array of cards prop', () => {
    let { cards } = Props;
    expect(cards).to.be.defiend;
    expect(cards).to.be.an('array');
  });

  it('should have an imgURL prop', () => {
    const { imgURL } = Props;
    expect(imgURL).to.be.defiend;
    expect(imgURL).to.be.a('string');

  })

  it('should have a handleImgChange function prop', () => {
    const { handleImgChange } = Props;
    expect(handleImgChange).to.be.defiend;
    expect(handleImgChange).to.be.a('function');
  });

  it('should have a handleTagLineChange function prop', () => {
    const { handleTagLineChange } = Props;
    expect(handleTagLineChange).to.be.defiend;
    expect(handleTagLineChange).to.be.a('function');
  });

  it('should have a handleRemoveCardClick function prop', () => {
    const { handleRemoveCardClick } = Props;
    expect(handleRemoveCardClick).to.be.defiend;
    expect(handleRemoveCardClick).to.be.a('function');
  });

  it('should have a handleCreateCardClick function prop', () => {
    const { handleCreateCardClick } = Props;
    expect(handleCreateCardClick).to.be.defiend;
    expect(handleCreateCardClick).to.be.a('function');
  });


});
