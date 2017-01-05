import React, { PropTypes } from 'react';
import Styles from './styles';

const CreateCard = ({
  imgURL,
  handleImgChange,
  handleTagLineChange,
  handleCreateCardClick
}) => {

  return (
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 className="modal-title">Create New Card</h4>
          </div>
          <div className="modal-body">
            <div className="text-center" style={ Styles.imageHolder}><img style={ Styles.image} src={ imgURL } /></div>
            <div className="form-group">
              <label className="control-label" for="inputSmall">Image Url</label>
              <input className="form-control input-sm" type="text" id="inputSmall"
                      onChange={ handleImgChange }/>
            </div>
            <div className="form-group">
              <label className="control-label" for="inputSmall">Tag-line</label>
              <input className="form-control input-sm" type="text" id="inputSmall"
                     onChange={ handleTagLineChange }/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="reset" className="btn btn-default" data-dismiss="modal">Close</button>
            <button onClick={ handleCreateCardClick } type="submit" className="btn btn-primary" data-dismiss="modal">Create</button>
          </div>
        </div>
      </div>
    </div>
  )

}

CreateCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  handleImgChange: PropTypes.func.isRequired,
  handleTagLineChange: PropTypes.func.isRequired,
  handleCreateCardClick: PropTypes.func.isRequired
}

export default CreateCard;
