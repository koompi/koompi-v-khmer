import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import FadeIn from "react-lazyload-fadein";

const software_image_right = (icon, title, desc, image) => {
  return (
    <div className="two column row feature-padding">
      <div className="column feature-padding-text">
        <img src={icon} className="smallFeatureImg" alt={title} />
        <p className="contentTitle">{title}</p>
        <p>{desc}</p>
      </div>
      <div className="column mobile only">
        <center>
          <FadeIn height={600} duration={100}>
            {onload => (
              <img
                src={image}
                className="ui fluid image image-margin-top"
                alt={title}
                onload={onload}
              />
            )}
          </FadeIn>
        </center>
      </div>
      <div className="column mobile hidden">
        <center>
          <FadeIn height={600} duration={100}>
            {onload => (
              <img
                src={image}
                className="ui fluid image"
                alt={title}
                onLoad={onload}
              />
            )}
          </FadeIn>
        </center>
      </div>
    </div>
  );
};
const software_image_left = (icon, title, desc, image) => {
  return (
    <div className="two column row feature-padding feature-margin">
      <div className="column mobile hidden">
        <FadeIn height={600} duration={100}>
          {onload => (
            <img
              src={image}
              className="ui fluid image image-margin-top"
              alt={title}
              onLoad={onload}
            />
          )}
        </FadeIn>
      </div>
      <div className="column feature-padding-text-right">
        <img src={icon} className="smallFeatureImg" alt={title} />
        <p className="contentTitle">{title}</p>
        <p>{desc}</p>
      </div>
      <div className="column mobile only">
        <center>
          <img src={image} className="ui fluid image" alt={title} />
        </center>
      </div>
    </div>
  );
};

const Software = () => {
  return (
    <div className="ui container containerFeature">
      <div className="ui stackable divided grid beautyDetail">
        {software_image_right(
          "img/Apps/icons/orb.png",

          "កម្មវិធី Apache OpenOffice",

          ` កម្មវិធី Apache OpenOffice គឺជាឈុតកម្មវិធីការិយាល័យប្រព័ន្ធបើកចំហដែលបង្កើតឡើងដោយ
          Apache Software Foundation ដែលក្នុងនោះរួមមាន Word, spreedsheet, កម្មវិធីបង្ហាញ 
          កម្មវិធីគូររូប និងមូលដ្ឋានគ្រប់គ្រងទិន្នន័យ។ ការរក្សារទុកនូវឯកសារដើមរបស់វាគឺជាទម្រង់ OpenDocument (ODF) 
          ដើម្បីជាជំនួយដល់អ្នកប្រើប្រាស់សម្រាប់ការងារការិយាល័យ។
          `,

          "img/Apps/Office.webp"
        )}
        {software_image_left(
          "img/store.webp",

          "Software Center",

          ` KOOMPI ប្រើប្រាស់កម្មវិធី GNOME សម្រាប់ឲ្យអ្នកប្រើប្រាស់អាចធ្វើការដំឡើងកម្មវិធីផ្សេងៗ ប្រៀបដូចជា Google Store។ `,

          "img/Apps/App-Store.webp"
        )}
        {software_image_right(
          "img/Apps/icons/brave_logo_horz.png",

          "Brave ( web browser )",

          ` វាត្រូវបានបង្កើតឡើងដោយ Brave Software Inc. គឺជាកម្មវិធីស្វែងរកដែលប្រើប្រាស់ប្រព័ន្ធបើកចំហ និងឥតគិតថ្លៃ។ 
          Web browser នេះការពារអ្នកប្រើប្រាស់ពី ads នានា និងការតាមដានប្រត្តិបតិ្តការរបស់លោកអ្នក។ វាត្រូវបានតម្លើងរួចជាស្រេចលើ KOOMPI 
          ដើម្បីសម្រួលឲ្យអ្នកប្រើទទួលបានបទពិសោធន៏ប្រសើរជាងមុន។`,

          "img/Apps/Firefox.webp"
        )}
        {software_image_left(
          "img/Apps/icons/KMP.png",

          "KMPlayer",

          ` KOOMPI បានប្រើកម្មវិធី K-Multimedia ដែលស្គាល់ថាជា KMPlayer ដើម្បីអាចប្រើប្រាស់បានលើសណ្ឋានជាច្រើន 
          បង្កើតបានជាបទពិសោធន៍រីករាយថ្មីទាំងស្រុងដល់អ្នកប្រើ ដែលតម្លើងរួចជាងច្រើនលើ KOOMPI។ `,

          "img/Apps/VLC.webp"
        )}

        {software_image_right(
          "img/Apps/icons/Krita.png",

          "Krita",

          ` Krita ជ្រកនៅក្រោមអាជ្ញាប័ណ្ណរបស់ប្រព័ន្ធបើកចំហ និងផ្ដល់នូវលក្ខណៈពិសេសជាច្រើនមិនចាញ់កម្មវិធីដ៍ទៃទៀត។ 
          Krita មានលក្ខណៈពិសេសល្អៗជាច្រើនជាជំនួយដល់ដំណើរការប្រើប្រាស់ទាំងមូលរបស់អ្នក។ ជាមួយនឹងមុខងារសំបូរបែប 
          អ្នកអាចផ្លាស់ប្ដូរសមស្របទោតាមចំណង់ចំណូលចិត្ត។ KOOMPI តែងតែស្វែងរកឧបករណ៍ជំនួយដែលអាចបំពេញតម្រូវការរបស់អ្នកប្រើប្រាស់ 
          ទៅតាមអ្វីដែលពួកគេចង់បានដោយសេរី។ `,

          "img/Apps/Krita.webp"
        )}

        {software_image_left(
          "img/koompi-visual-icon.webp",

          "Visual Studio Code",

          ` ជាកម្មវិធីសរសេរកូដ ដ៏ពេញនិយមដែលត្រូវបានគេប្រើប្រាស់នូវទូទាំងសកលលោក KOOMPI ចង់ជំរុញ និងលើកទឹកចិត្តដល់ការច្នៃប្រឌិត 
          ទៅដល់អ្នកប្រើប្រាស់។ `,

          "img/Apps/VsCode.webp"
        )}

        {software_image_right(
          "img/Apps/icons/Popcorn_Time.png",

          "Popcorn Time",

          ` Popcorn Time ជាកម្មវិធីដែលអាចបំពេញតម្រូវការបានជាច្រើនយ៉ាង ចំពោះការកំសាន្តដល់លោកអ្នក។ ជាកម្មវិធីទើបតម្លើងថ្មី 
          សំរាប់បំពេញតម្រូវការកំសាន្តជូនដល់អ្នកប្រើប្រាស់។ `,

          "img/Apps/PopCornTime.webp"
        )}

        {software_image_left(
          "img/Apps/icons/microsoft-365.png",

          "ការិយាល័យ 365",

          ` KOOMPI ភ្ជាប់មកជាមួយនឹងឈុតការិយាល័យ MS online សម្រាប់ការប្រើប្រាស់ទូទៅ។ បន្ថែមមកដើម្បីបំពេញបំណងដល់
          អ្នកប្រើប្រាស់បង្កើតបានជាបទពិសោធកាន់តែប្រសើរជាងមុនដល់អ្នកប្រើ ក្នុងការប្រើកំុព្យូរទ័រនិងប្រព័ន្ធឌីជីថល។
          `,

          "img/Apps/Office365.webp"
        )}

        {software_image_right(
          "img/Apps/icons/new-kdenlive-logo.png",

          "Kdenlive",

          ` KOOMPI មានបំណងផ្តល់ជូននូវកម្មវិធីដ៏សំបូរបែបដើម្បីគាំទ្រដល់តម្រូវការរបស់អ្នកប្រើប្រាស់។ លោកអ្នកអាចប្រើកម្មវិធី Kdenlive 
          សម្រាប់ការកាត់តវីដេអូព្រោះវាប្រព័ន្ធនិងឥតគិតថ្លៃទាំងស្រុង។ `,

          "img/Apps/Kdenlive.webp"
        )}

        {software_image_left(
          "img/Apps/icons/Guvcview.png",

          "Guvcview",

          ` គឺជាកម្មវិធី webcam ដែលធ្វើការដំឡើងរួចជាស្រេចនៅលើ KOOMPI ហើយអាចប្រើបានដោយឥតគិតថ្លៃដើម្បីឱ្យអ្នកប្រើប្រាស់
          ទទួលបាននូវបទពិសោធរីករាយជាមួយ នឹងដំណើរការ webcam យ៉ាងរលូន។
          `,

          "img/Apps/Guvcview.webp"
        )}
      </div>
    </div>
  );
};

class Feature extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            Feature | Koompi mission is build and provide tools for the next
            generation of engineers, problem solvers and discoverers
          </title>
        </Helmet>
        <Navbar />
        <div className="backgroundColorBanner">
          <div className="featureBanner">
            <div className="featureKoompi mobile hidden">
              <img
                src="img/feature-koompi-banner1.webp"
                className="bannerImageFeature"
                alt="koompi-feature"
              />
              <div className="featureBannerContent">
                <h2>
                  អ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវការ<br />មាននៅទីនេះ
                </h2>
                <p>
                  KOOMPI បានជ្រើសរើសនូវកម្មវិធីសំរាប់កិច្ចការការងារប្រចាំថ្ងៃ ក្នុងនោះមាន ប្រព័ន្ធ<br />រុករក 
                  កម្មវិធីធ្វើកសារដើម្បីបង្កើនសមត្ថភាពដល់អ្នកប្រើប្រាស់ ការកំសាន្ត និងកម្មវិធី<br />ជាច្រើនទៀត។ 
                  យើងជឿជាក់ថា កុំព្យូទ័រគួរតែមានលក្ខណៈសាមញ្ញ និងពោរពេញ<br />ទៅដោយសេរីភាពដែលអាច
                  អនុញ្ញាតឲ្យយេីងធ្វើអ្វីបានគ្រប់បែបយ៉ាង។ ជាឧបករណ៍ជំនួយ<br />ដល់អ្នកប្រើប្រាស់ ក្នុងការសម្រេច
                  សម័ត្ថផលព្រមទាំងការរៀនសូត្របន្ថែមទៀត។
                </p>
                <p>
                  {/* <i className="fas fa-angle-right featureIcon" />
                  <i className="fas fa-angle-right featureIcon" /> */}
                  <a
                    href="https://goo.gl/jHSZRL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ស្វែងយល់បន្ថែម
                  </a>
                </p>
              </div>
            </div>
            <div className="mobile only mobileFeature">
              <h2>
                អ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវការ<br />មាននៅទីនេះ
              </h2>
              <p>
                KOOMPI បានជ្រើសរើសនូវកម្មវិធីសំរាប់កិច្ចការការងារប្រចាំថ្ងៃ ក្នុងនោះមាន ប្រព័ន្ធរុករក 
                <br />កម្មវិធីធ្វើកសារដើម្បីបង្កើនសមត្ថភាពដល់អ្នកប្រើប្រាស់ ការកំសាន្ត និងកម្មវិធីជាច្រើនទៀត។ 
                <br />យើងជឿជាក់ថា កុំព្យូទ័រគួរតែមានលក្ខណៈសាមញ្ញ និងពោរពេញទៅដោយសេរីភាពដែលអាច
                <br />អនុញ្ញាតឲ្យយេីងធ្វើអ្វីបានគ្រប់បែបយ៉ាង។ ជាឧបករណ៍ជំនួយដល់អ្នកប្រើប្រាស់ ក្នុងការសម្រេច
                <br />សម័ត្ថផលព្រមទាំងការរៀនសូត្របន្ថែមទៀត។
              </p>
              <p>
                <i className="fas fa-angle-right featureIcon" />
                <i className="fas fa-angle-right featureIcon" />
                <a
                  href="https://goo.gl/jHSZRL"
                  target="_blank"
                  className="linkColor"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
        {Software()}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Feature;
