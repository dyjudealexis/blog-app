import React from 'react'
import './style.css'

/**
* @author
* @function Admin
**/

const Admin = (props) => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-8" >
          <div className="content-section">
            <form method="POST">
              <fieldset className="form-group">
                <legend className="border-bottom mb-4">Administration</legend>
                  <div id="div_id_username" className="form-group">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>AUTHENTICATION AND AUTHORIZATION</th>
                        </tr>
                        <tr>
                          <td><button type="button" className=" btn btn-outline-primary content-section" htmlFor="id_username">Users</button></td>
                          <td><small className="text-muted">
                            <a className="ml-2 btn btn btn-link" href="/register/"><img src="https://img.icons8.com/doodle/20/000000/plus--v1.png"/>Add</a>

                            </small></td>
                          <td><small className="text-muted">
                            <a className="ml-2 btn btn btn-link" href="/register/"><img src="https://img.icons8.com/cute-clipart/20/000000/pencil.png"/>Change</a>
                          </small></td>
                        </tr>
                        <tr>
                          <td><button type="button" className=" btn btn-outline-secondary content-section" htmlFor="id_username">Posts</button></td>
                          <td><small className="text-muted">
                            <a className="ml-2 btn btn btn-link" href="/register/"><img src="https://img.icons8.com/doodle/20/000000/plus--v1.png"/>Add</a>

                            </small></td>
                          <td><small className="text-muted">
                            <a className="ml-2 btn btn btn-link" href="/register/"><img src="https://img.icons8.com/cute-clipart/20/000000/pencil.png"/>Change</a>
                          </small></td>
                        </tr>
                      </thead>
                    </table>
                    
                  </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content-section">
            <h3>Our Sidebar</h3>
            <p className='text-muted'>You can put any information here you'd like.
                
              <ul className="list-group">
                <li className="list-group-item list-group-item-light">Latest Posts</li>
                <li className="list-group-item list-group-item-light">Announcements</li>
                <li className="list-group-item list-group-item-light">Calendars</li>
                <li className="list-group-item list-group-item-light">etc</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
   )

 }

export default Admin