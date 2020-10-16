import React from 'react';


class Admin extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		title: '',
    		imageUrl: '',
    		description: ''	
      };
}

render (){
  return (
<div className="create">
  <div className="create-editor">
    <h2>AUTHOR</h2>
    <form>
      <input className="create-input" type="text"  placeholder="Anime Title" onChange={this.handleChangeTitle}></input>
      <input className="create-input" type="text"  placeholder="Image URL" onChange={this.handleChangeImage} ></input>
      <textarea className="create-body-textarea"  placeholder="Description" onChange={this.handleChangeDescription}></textarea>
      <button className="create-submit-button" type="submit">Save post</button>
    </form>
  </div>
  <div className="create-preview">
    <h2>PREVIEW</h2>
  </div>
</div>
)
  }
}

export default Admin;