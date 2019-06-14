import React, { Component } from "react";

class MemberState extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Rithy THUL",
        position: "PR and Partnership",
        image: "img/team/rithy.webp"
      },
      {
        id: 2,
        name: "Sela THUL",
        position: "Linux Developer",
        image: "img/team/sela.webp"
      },
      {
        id: 3,
        name: "Saing SAB",
        position: "Kernel Developer",
        image: "img/team/saing.webp"
      },
      {
        id: 4,
        name: "Vuthy SAN",
        position: "Full Stack Web Developer",
        image: "img/team/vuthy.webp"
      },
      {
        id: 5,
        name: "Panha YOU",
        position: "Sale & Marketing Manager",
        image: "img/team/panha_you.webp"
      },
      {
        id: 6,
        name: "Panha Sok",
        position: "Graphic Designer",
        image: "img/team/panha.webp"
      },
      {
        id: 7,
        name: "Sokunthy CHAN",
        position: "Accountant",
        image: "img/team/khunthy.webp"
      },
      {
        id: 8,
        name: "Brilliant PHAL",
        position: "Linux Administator",
        image: "img/team/brillaint.webp"
      },
      {
        id: 9,
        name: "Sreyleap SUN",
        position: "Customer service",
        image: "img/team/leap.webp"
      },
      {
        id: 10,
        name: "Chandara VIREAK",
        position: "Head of Design",
        image: "img/team/dara.webp"
      },
      {
        id: 11,
        name: "Sofy THY",
        position: "Marketing Officer",
        image: "img/team/sofy.webp"
      },
      {
        id: 12,
        name: "Raksme VEN",
        position: "Accountant",
        image: "img/team/reaksmie.webp"
      },
      {
        id: 13,
        name: "Sreysor KHEM",
        position: "Customer Services",
        image: "img/team/sreysor.webp"
      }
    ]
  };
  render() {
    return (
      <div className="ui container paddingAbout">
        <h1 className="memberTitle">សមាជិក</h1>
        <div className="ui grid">
          <div className="doubling five column row">
            {this.state.data.map(info => (
              <div className="column" key={info.id}>
                <div>
                  <center>
                    <img
                      src={info.image}
                      className="ui fluid image teamImage"
                      alt={info.name + info.position}
                    />
                    <h3 className="memberName">{info.name}</h3>
                    <p className="memberPosition">{info.position}</p>
                  </center>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MemberState;
