import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Admin from './components/admin.jsx';
import Post from './components/Post.jsx';
import Feed from './components/Feed.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'feed',
      data : [],
      currentBlog:{}
    }
    this.RetrieveData();
this.RetrieveData = this.RetrieveData.bind(this)
    this.changeView = this.changeView.bind(this);
  }

  RetrieveData(){
    var that = this;
$.get('/api/anime', function(data){
  console.log(data)
that.setState({data : data})
})
  }

  addFanPost(obj){
    var that = this;
    console.log('Add fan post Function',obj)
    $.ajax({
     url: '/api/anime',
     method: 'POST',
     data: obj
   })
   .done (function (data) {
     console.log('Data sent');
     that.RetrieveData()
   })
   .fail(function( jqXHR, textStatus ) {
     alert( "Request failed: " + textStatus );
   });
  }


  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const {view} = this.state;

    if (view === 'feed') {
      return <Feed handleClick={this.changeView}  anime={this.state.data}/>
    }     else if(view === 'admin') {
      return <Admin/>
    }  
    else {
      return <Post anime={this.state.view}/>
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('feed')}>
            Black-Ben
          </span>
          <span className={this.state.view === 'feed'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('feed')}>
            See all Posts
          </span>
          <span className="nav-unselected" onClick={() => this.changeView('admin')}>
            Admin
          </span>
        </div>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
