import React, { Component } from 'react';
import authors from './data';

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <sidebar>
              <img src="theindex.svg" className="logo" />
              <section>
                <h4 className="menu-item active">
                  <a href="#">AUTHORS</a>
                </h4>
              </section>
            </sidebar>
          </div>
          <div className="content col-10">
            <div className="authors">
              <h3>Authors</h3>
              <div className="row">
                <div className="col-4">
                  <a href="#" className="card">
                    <div className="image">
                      <img className="card-img-top img-fluid" src={authors[0].imageUrl} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>{authors[0].firstName + " " + authors[0].lastName}</span>
                      </h5>
                      <small className="card-text">{authors[0].books.length} books</small>
                    </div>
                  </a>
                </div>
                <div className="col-4">
                  <a href="#" className="card">
                    <div className="image">
                      <img className="card-img-top img-fluid" src={authors[1].imageUrl} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>{authors[1].firstName + " " + authors[1].lastName}</span>
                      </h5>
                      <small className="card-text">{authors[1].books.length} books</small>
                    </div>
                  </a>
                </div>
                <div className="col-4">
                  <a href="#" className="card">
                    <div className="image">
                      <img className="card-img-top img-fluid" src={authors[2].imageUrl} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>{authors[2].firstName + " " + authors[2].lastName}</span>
                      </h5>
                      <small className="card-text">{authors[2].books.length} books</small>
                    </div>
                  </a>
                </div>
                <div className="col-4">
                  <a href="#" className="card">
                    <div className="image">
                      <img className="card-img-top img-fluid" src={authors[3].imageUrl} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>{authors[3].firstName + " " + authors[3].lastName}</span>
                      </h5>
                      <small className="card-text">{authors[3].books.length} books</small>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
