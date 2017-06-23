import React, {Component} from 'react'
import Navbar from '../modules/navbar.js'
import Footer from '../modules/footer.js'
import {Link} from 'react-router-dom'
import '../../javascripts/main.js'
import { Redirect } from 'react-router-dom'


class Timeline extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eventList: [],
      eventInfo: [],
      redirect: false
    }

    this.renderRedirect = this.renderRedirect.bind(this)

  }

  componentWillMount() {
    if (!localStorage.token) {
      this.setState({redirect: true})
    }
  }

  renderRedirect() {
    if (this.state.redirect) {
      return (<Redirect to="/"/>)
    }
  }

  componentDidMount() {
    fetch(`/api/events/4`, {method: 'GET'}).then(res => {
      return res.text().then(events => {
        events = JSON.parse(events)
        let e_list = []
        let ei_list = []

        events = events.sort((a, b) => {
          let a_date = parseInt(a.event_date.substring(0, 4))
          let b_date = parseInt(b.event_date.substring(0, 4))
          return a_date - b_date
        })

        events.forEach((item) => {
          let e_date = item.event_date.substring(0, 4)
          if (item === events[0]) {
            e_list.push(
              <li>
                <Link to="#0" data-date={e_date} className="selected">{e_date}</Link>
              </li>
            )
            ei_list.push(
              <li className="selected" data-date="16/01/2014">
                <h2>{item.title}</h2>
                <em>{e_date}</em>
                <p>{item.description}</p>
              </li>
            )
          } else {
            e_list.push(
              <li>
                <Link to="#0" data-date={e_date}>{e_date}</Link>
              </li>
            )
            ei_list.push(
              <li data-date="16/01/2014">
                <h2>{item.title}</h2>
                <em>{e_date}</em>
                <p>{item.description}</p>
              </li>
            )
          }
        })

        this.setState({eventList: e_list, eventInfo: ei_list})
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar/>

        <section className="cd-horizontal-timeline">
          <div className="timeline">
            <div className="events-wrapper">
              <div className="events">
                <ol>
                  <li>
                    <Link to="#0" data-date="16/01/2014" className="selected">16 Jan</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="28/02/2014">28 Feb</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="20/04/2014">20 Mar</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="20/05/2014">20 May</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="09/07/2014">09 Jul</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="30/08/2014">30 Aug</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="15/09/2014">15 Sep</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="01/11/2014">01 Nov</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="10/12/2014">10 Dec</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="19/01/2015">29 Jan</Link>
                  </li>
                  <li>
                    <Link to="#0" data-date="03/03/2015">3 Mar</Link>
                  </li>
                </ol>

                <span className="filling-line" aria-hidden="true"></span>
              </div>
            </div>

            <ul className="cd-timeline-navigation">
              <li>
                <Link to="#0" className="prev inactive anchor">Prev</Link>
              </li>
              <li>
                <Link to="#0" className="next anchor">Next</Link>
              </li>
            </ul>
          </div>

          <div className="events-content">
            <ol>
              <li className="selected" data-date="16/01/2014">
                <h2>Horizontal Timeline</h2>
                <em>January 16th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="28/02/2014">
                <h2>Event title here</h2>
                <em>February 28th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="20/04/2014">
                <h2>Event title here</h2>
                <em>March 20th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="20/05/2014">
                <h2>Event title here</h2>
                <em>May 20th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="09/07/2014">
                <h2>Event title here</h2>
                <em>July 9th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="30/08/2014">
                <h2>Event title here</h2>
                <em>August 30th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="15/09/2014">
                <h2>Event title here</h2>
                <em>September 15th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="01/11/2014">
                <h2>Event title here</h2>
                <em>November 1st, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="10/12/2014">
                <h2>Event title here</h2>
                <em>December 10th, 2014</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="19/01/2015">
                <h2>Event title here</h2>
                <em>January 19th, 2015</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>

              <li data-date="03/03/2015">
                <h2>Event title here</h2>
                <em>March 3rd, 2015</em>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <ol>{this.state.eventList}</ol>
        <ol>{this.state.eventInfo}</ol>
        <Footer/>
        {this.renderRedirect()}
      </div>
    )
  }
}

export default Timeline
