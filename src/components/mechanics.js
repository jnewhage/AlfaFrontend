import React, { Component } from 'react';
import '../assets/css/mechanics.css';
import '../assets/css/alfa_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import DiFatta from "../assets/images/DiFatta.jpg";
import autoItaliaMechanics from "../assets/images/autoItaliaMechanics.jpg";
import LocoExotics from "../assets/images/LocoExotics.jpg";
import RossoMech from "../assets/images/RossoMech.jpg";

class MechanicsComponent extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  // npm i jquery --save
  componentDidMount() {
    $('#filter').keyup(function () {

      var rex = new RegExp($(this).val(), 'i');
      $('.searchable tr').hide();
      $('.searchable tr').filter(function () {
        return rex.test($(this).text());
      }).show();

    })
  };


  render() {
    return (

      <div id="main">
        <div className="grid-container" style={{ marginTop: "-1em" }}>
          <div className="grid-child purple">
            <div className="card  card-default" id="card_contacts">
              <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                <ul className="list-group pull-down" id="contact-list" >

                  <li className="list-group-item">
                    <div className="row w-150">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={DiFatta} alt="../assets/images/DiFatta.jpg" style={{ width: "100%", maxHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center">
                        <label className="headerP">Giovanni DiFatta</label>
                        <br />

                        <span className="fa fa-fw fa-map-marker fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="5928 Belair Road, Baltimore, MD 21206"></span>
                        <span>5928 Belair Road, Baltimore, MD 21206</span>
                        <br />

                        <span className="fa fa-fw fa-phone fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="410-426-7524"></span>
                        <span>410-426-7524</span>
                        <br />

                        <span className="fa fa-fw fa-envelope fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="giovanni@difatta.com"></span>
                        <span>giovanni@difatta.com</span>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row w-150">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={autoItaliaMechanics} alt="../assets/images/autoItaliaMechanics.jpg" />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center">
                        <label className="headerP">Auto Italia Staff</label>
                        <br />

                        <span className="fa fa-fw fa-map-marker fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="7200 Westmore Road Rockville, MD 20850"></span>
                        <span>7200 Westmore RoadRockville, MD 20850</span>
                        <br />

                        <span className="fa fa-fw fa-phone fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="301-340-8394"></span>
                        <span>301-340-8394</span>
                        <br />
                      </div>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="row w-150">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={LocoExotics} alt="../assets/images/LocoExotics.jpg" />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center">
                        <label className="headerP">Loco Exotics Greg Miller and Casey Bremilst </label>
                        <br />

                        <span className="fa fa-fw fa-map-marker fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="22890 Quicksilver Drive, Unit 137 Sterling, Virginia  20166"></span>
                        <span>22890 Quicksilver Drive, Unit 137 Sterling, Virginia 20166</span>
                        <br />

                        <span class="fa fa-fw fa-phone fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="703-665-2490"></span>
                        <span>703-665-2490</span>
                        <br />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row w-150">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={RossoMech} alt="../assets/images/RossoMech.jpg" />

                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center">
                        <label className="headerP">Rosso Service Scott Lankford</label>
                        <br />

                        <span className="fa fa-fw fa-map-marker fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="7 Newport Drive Suite A Forest Hill, MD 21050"></span>
                        <span>7 Newport Drive Suite A Forest Hill, MD 21050</span>
                        <br />

                        <span className="fa fa-fw fa-phone fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="410-638-2886"></span>
                        <span>410-638-2886</span>
                        <br />

                        <span className="fa fa-fw fa-envelope fa-fw text-muted" data-toggle="tooltip" title=""
                          data-original-title="info@RossoService.com"></span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid-child blue">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <div className="input-group"> <span className="input-group-addon">Filter</span>
                <input id="filter" type="text" className="form-control" placeholder="Text..." />
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Repair Shops</th>
                    <th>Specialty</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody className="searchable">
                  <tr>
                    <td><a href="https://www.difatta.com/">DiFatta Brothers Service Center</a></td>
                    <td>Auto Repair, Collision Repair, Parts</td>
                    <td>5928 Belair Road Baltimore, MD 21206</td>
                    <td>Phone: 410-426-7524 Orders: (800) 638-7656)</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.autoitaliaofmd.com/">Auto Italia</a></td>
                    <td>Auto Repair, Collision Repair, Body Shop</td>
                    <td>7200 Westmore Road Rockville, MD 20850</td>
                    <td>Phone: 301-340-8394 Fax: 301-340-0618</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.locoexotics.com/luxury-car-repair/maserati-service-repair/">Loco Exotics</a>
                    </td>
                    <td>Service Maintenance and Repair</td>
                    <td>22890 Quicksilver Drive, Unit 137 Sterling, Virginia 20166</td>
                    <td>Phone: 703-665-2490</td>,
                  </tr>
                  <tr>
                    <td><a href="https://www.rossoservice.com/">Rosso Service </a></td>
                    <td>High performance car specialists, repairs, rebuilding, and upgrades</td>
                    <td>7 Newport Drive Suite A Forest Hill, MD 21050</td>
                    <td>Phone: 410-638-2886</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <br />
            <div>
              <p align="center"><a href="tweets.js">Or to see other reviews by real people, click here!</a></p>
            </div>
          </div>

        </div>
      </div >
    )
  }
}

export default MechanicsComponent;