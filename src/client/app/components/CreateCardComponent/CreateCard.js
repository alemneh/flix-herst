import React, { Component } from 'react';
import Styles from './styles';

class CreateCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Create New Card</h4>
            </div>
            <div className="modal-body">
              <div className="text-center" style={ Styles.imageHolder}><img style={ Styles.image} src={ this.props.imgURL } /></div>
              <div className="form-group">
                <label className="control-label" for="inputSmall">Image Url</label>
                <input className="form-control input-sm" type="text" id="inputSmall"
                        onChange={ this.props.handleImgChange }/>
              </div>
              <div className="form-group">
                <label className="control-label" for="inputSmall">Tag-line</label>
                <input className="form-control input-sm" type="text" id="inputSmall"
                       onChange={ this.props.handleTagLineChange }/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button onClick={ this.props.handleCreateCardClick } type="button" className="btn btn-primary" data-dismiss="modal">Create</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateCard;
