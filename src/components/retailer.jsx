import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Code } from "react-content-loader";
import { Helmet } from "react-helmet";

class Retailer extends Component {
  state = {
    data: [
      {
        id: 0,
        logo: "img/retailers/sw-greens.webp",
        name: "SmallWorld Venture",
        location:
          "https://www.facebook.com/pg/smallworldventure/about/?ref=page_internal"
      },
      {
        id: 1,
        logo: "img/retailers/it-store.webp",
        name: "Sombok IT Store",
        location:
          "https://www.facebook.com/pg/store.sombokit/about/?ref=page_internal"
      },
      {
        id: 2,
        logo: "img/retailers/ufo-logo.webp",
        name: "UFO Store",
        location:
          "https://www.facebook.com/pg/ufostorekh/about/?ref=page_internal"
      },
      {
        id: 3,
        logo: "img/retailers/E-shop-cam.webp",
        name: "E-Shop Cambodia",
        location:
          "https://www.facebook.com/pg/eshopcambo/about/?ref=page_internal"
      },
      {
        id: 5,
        logo: "img/retailers/LS.webp",
        name: "Leang sreng computer",
        location:
          "https://www.facebook.com/pg/Leang-sreng-computer-1-229172480968041/about/?ref=page_internal"
      },
      {
        id: 6,
        logo: "img/retailers/BCS.webp",
        name: "BCS Computer",
        location:
          "https://www.facebook.com/pg/bcscomputer1/about/?ref=page_internal"
      },
      {
        id: 7,
        logo: "img/retailers/One-Gears.webp",
        name: "One Gears",
        location:
          "https://www.facebook.com/pg/onegears/about/?ref=page_internal"
      },
      {
        id: 8,
        logo: "img/retailers/my-psar.webp",
        name: "My PHSAR",
        location: "https://www.facebook.com/pg/myphsar/about/?ref=page_internal"
      },
      {
        id: 9,
        logo: "img/retailers/K4.webp",
        name: "KFOUR",
        location:
          "https://www.facebook.com/pg/Kfour.Group/about/?ref=page_internal"
      },

      {
        id: 10,
        logo: "img/retailers/PRC.webp",
        name: "PRC បញ្ញរ៉ុង",
        location:
          "https://www.facebook.com/pg/prcomputerservice/about/?ref=page_internal"
      }
    ],
    isLoading: true
  };

  displayLoading = () => {
    let loading = [];
    for (let index = 0; index < 10; index++) {
      loading.push(
        <div className="column blur">
          <Code />
        </div>
      );
    }
    return loading;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>KOOMPI Retailer</title>
          <meta
            name="keywords"
            content="get koompi, koompi retailer, retailer koompi, koompi, smallworld venture"
          />
          <meta
            name="description"
            content="Engaging and interact with KOOMPI wherever you are, get KOOMPI from your nearest store. We aim to satisfied the users need and be convenient for everyone."
          />
        </Helmet>
        <Navbar />
        <div className="backgroundRetailer">
          <div className="ui container">
            <div className="ui divided grid">
              <div className="ui stackable two column grid">
                <div className="column ten wide">
                  <div
                    className="retailerPadding"
                    style={{ paddingTop: "10%" }}
                  >
                    <h2>ការជាវគម្ពីរ (KOOMPI)</h2>
                    <p>
                      ចូលកាន់តែជិតនិង ស្និតស្នាលជាមួយ KOOMPI បានគ្រប់ទីកន្លែងដែលអ្នកទៅ ដោយទទួលយកគម្ពីរ (KOOMPI) ពីហាងដែលនៅជិតលោកអ្នកបំផុត។ 
                      បំពេញតម្រូវការ និង សម្រួលដល់ភាពងាយស្រួលជូនអតិថិជនគ្រប់គ្នា។ អ្នកអាចរកជាវ KOOMPI បានពីដៃគូ
                      <br />លក់រាយរបស់យើងដែលមានបញ្ជីខាងក្រោម:
                    </p>
                  </div>
                </div>
                <div className="column six wide">
                  <img
                    className="ui fluid image koompi-retailer-image koompi-about-image"
                    src="img/Koompi_Retailer.webp"
                    alt="koompi-about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui container">
          <center>
            <h2 className="retailer">Our Retailer</h2>
            <div className="ui stackable four column grid">
              {this.state.isLoading
                ? this.displayLoading()
                : this.state.data.map(data => (
                    <div className="column" key={data.id}>
                      <div className="image-card">
                        <img
                          src={data.logo}
                          className="ui fluid image"
                          alt={data.name}
                        />
                        <h2>{data.name}</h2>
                        <div className="shopHere">
                          <a
                            href={data.location}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p>Shop Here</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </center>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Retailer;
