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

          ` កម្ម វិធី Apache OpenOffice គឺ ជា ឈុត កម្មវិធី ការិយាល័យ ប្រព័ន្ធ បើក ចំហ ដែល បង្កើត ឡើង 
          ដោយ Apache Software Foundation ដែល ក្នុង នោះ រួម មាន Word, spreedsheet, កម្មវិធី 
          បង្ហាញ កម្មវិធី គូររូប និង មូល ដ្ឋាន គ្រប់ គ្រង ទិន្នន័យ។ ការ រក្សា ទុក នូវ ឯកសារ ដើម របស់ វា គឺ ជា ទម្រង់ 
          OpenDocument (ODF) ដើម្បី ជា ជំនួយ ដល់ អ្នក ប្រើប្រាស់ សម្រាប់ ការងារ ការិយា ល័យ។
          `,

          "img/Apps/Office.webp"
        )}
        {software_image_left(
          "img/store.webp",

          "Software Center",

          ` គម្ពីរ (KOOMPI) ប្រើ ប្រាស់ កម្មវិធី GNOME សម្រាប់ ឱ្យ អ្នក ប្រើប្រាស់ អាច ធ្វើ ការ ដំឡើង កម្មវិធី 
          ផ្សេងៗ ប្រៀប ដូច ជា Google Store។ `,

          "img/Apps/App-Store.webp"
        )}
        {software_image_right(
          "img/Apps/icons/brave_logo_horz.png",

          "Brave ( web browser )",

          ` វា ត្រូវ បាន បង្កើត ឡើង ដោយ Brave Software Inc. គឺ ជា កម្មវិធី ស្វែង រក ដែល ប្រើប្រាស់ ប្រព័ន្ធ 
          បើកចំហ និង ឥត គិត ថ្លៃ។ Web browser នេះ ការពារ អ្នក ប្រើប្រាស់ ពី ads នានា និង ការ តាម ដាន ប្រតិបតិ្តការ 
          របស់ លោក អ្នក។ វា ត្រូវ បាន តម្លើង រួច ជា ស្រេច លើ គម្ពីរ (KOOMPI) ដើម្បី សម្រួល ឱ្យ អ្នក ប្រើ ទទួល បាន
          បទ ពិសោធន៏ ប្រ សើរ  ជាង មុន។
          `,

          "img/Apps/Firefox.webp"
        )}
        {software_image_left(
          "img/Apps/icons/KMP.png",

          "KMPlayer",

          ` គម្ពីរ (KOOMPI) បាន ប្រើ កម្មវិធី K-Multimedia ដែល ស្គាល់ ថា ជា KMPlayer ដើម្បី អាច 
          ប្រើប្រាស់ បាន លើ សណ្ឋាន ជា ច្រើន ដោយ វា បង្កើត បាន ជា បទ ពិសោធន៍  រីករាយ ថ្មី ទាំង 
          ស្រុង ដល់ អ្នក ប្រើ ដែល ដំឡើង រួច ជា ច្រើន លើ  គម្ពីរ (KOOMPI)។
          `,

          "img/Apps/VLC.webp"
        )}

        {software_image_right(
          "img/Apps/icons/Krita.png",

          "Krita",

          ` Krita ជ្រក នៅ ក្រោម អាជ្ញា ប័ណ្ណ របស់ ប្រព័ន្ធ បើក ចំហ និង ផ្ដល់ នូវ លក្ខណៈ ពិសេស  ជា ច្រើន 
          មិន ចាញ់ កម្មវិធី ដទៃ ទៀត។ Krita មាន លក្ខណៈ ពិសេស ល្អៗ ជា ច្រើន ជា ជំនួយ ដល់  ដំណើរការ
          ប្រើប្រាស់ ទាំង មូល របស់ អ្នក។ ជា មួយ នឹង មុខងារ សម្បូរ បែប អ្នក អាច ផ្លាស់ ប្ដូរ សមស្រប ទៅ 
          តាម ចំណង់ ចំណូល ចិត្ត។
          គម្ពីរ (KOOMPI) តែងតែ  ស្វែង រក ឧបករណ៍ ជំនួយ ដែល អាច បំពេញ តម្រូវ ការ របស់ អ្នក ប្រើប្រាស់ 
          ទៅ តាម អ្វី ដែល ពួក គេ ចង់ បាន ដោយ សេរី។
          `,

          "img/Apps/Krita.webp"
        )}

        {software_image_left(
          "img/koompi-visual-icon.webp",

          "Visual Studio Code",

          ` ជា កម្មវិធី សរសេរ កូដ ដ៏ ពេញ និយម ដែល ត្រូវ បាន គេ ប្រើប្រាស់ នូវ ទូទាំង សកល លោក។  
          គម្ពីរ (KOOMPI) ចង់ ជំរុញ និង លើក ទឹក ចិត្ត ដល់ ការ ច្នៃប្រតិដ្ឋ ទៅ ដល់ អ្នក ប្រើប្រាស់។
          `,

          "img/Apps/VsCode.webp"
        )}

        {software_image_right(
          "img/Apps/icons/Popcorn_Time.png",

          "Popcorn Time",

          ` Popcorn Time ជា កម្មវិធី ដែល អាច បំពេញ តម្រូវ ការ បាន ជា ច្រើន យ៉ាង ចំពោះ ការ កម្សាន្ត
          ដល់ លោក អ្នក។ ជា កម្មវិធី ទើប ដំឡើង ថ្មី សម្រាប់ បំពេញ តម្រូវ ការ កម្សាន្ត នានា ជូន ដល់
          អ្នក ប្រើប្រាស់។
          `,

          "img/Apps/PopCornTime.webp"
        )}

        {software_image_left(
          "img/Apps/icons/microsoft-365.png",

          "ការិយាល័យ 365",

          ` គម្ពីរ (KOOMPI) ភ្ជាប់ មក ជា មួយ នឹង ឈុត ការិយាល័យ MS online សម្រាប់ ការ ប្រើប្រាស់ ទូទៅ។ 
          បន្ថែម ជាង នេះ ទៅ ទៀត ដើម្បី បំពេញ បំណង ដល់ អ្នក ប្រើប្រាស់ យើង បង្កើត បាន ជា បទ  ពិសោធន៍
          កាន់ តែ ប្រសើរ ជាង មុន ដល់ អ្នក ប្រើ ក្នុង  ការ ប្រើ កំុព្យូរទ័រ និង ប្រព័ន្ធ ឌីជីថល ផ្សេងៗ។
          `,

          "img/Apps/Office365.webp"
        )}

        {software_image_right(
          "img/Apps/icons/new-kdenlive-logo.png",

          "Kdenlive",

          ` គម្ពីរ (KOOMPI) មាន បំណង ផ្តល់ ជូន នូវ កម្មវិធី ដ៏ សម្បូរ បែប ដើម្បី គាំទ្រ ដល់ តម្រូវ ការ របស់
          អ្នក ប្រើប្រាស់។ លោក អ្នក អាច ប្រើ កម្មវិធី Kdenlive សម្រាប់ ការ កាត់ តវីដេអូ ព្រោះ វា គឺ ជា ប្រព័ន្ធ 
          មួយ ដែល ឥត គិត ថ្លៃ ទេ។
          `,

          "img/Apps/Kdenlive.webp"
        )}

        {software_image_left(
          "img/Apps/icons/Guvcview.png",

          "Guvcview",

          ` គឺ ជា កម្មវិធី webcam ដែល ធ្វើ ការ ដំឡើង រួច ជា ស្រេច នៅ លើ KOOMPI ហើយ អាច  ប្រើ បាន ដោយ  ឥត 
          គិត ថ្លៃ ដើម្បី ឱ្យ អ្នក ប្រើប្រាស់ ទទួល បាន នូវ បទ ពិសោធ រីក រាយ ជា មួយ នឹង ដំណើរ ការ webcam យ៉ាង រលូន។
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
                គម្ពីរ (KOOMPI) បាន ជ្រើស រើស នូវ កម្មវិធី សម្រាប់ ភារកិច្ច ការងារ ប្រចាំ ថ្ងៃ ក្នុង នោះ មាន<br />ប្រព័ន្ធ
                រុករក កម្ម វិធី ធ្វើ ឯកសារ ដើម្បី បង្កើន សមត្ថភាព ដល់ អ្នក ប្រើ ប្រាស់ ការ កម្សាន្ត និង កម្មវិធី<br />ជា ច្រើន ទៀត។  
                យើង ជឿ ជាក់ ថា កុំព្យូទ័រ គួរ តែ មាន លក្ខណៈ សាមញ្ញ និង ពោរ ពេញ ទៅ ដោយ<br />សេរីភាព ដែល អាច
                អនុញ្ញាត ឱ្យ យេីង ធ្វើ អ្វី បាន គ្រប់ បែប យ៉ាង។ ដោយ វា ជា ឧបករណ៍ ជំនួយ<br />ដល់ អ្នក ប្រើ ប្រាស់
                ដោយ មាន ប្រសិទ្ធិ ភាព ទាំង ការ រៀន សូត្រ និង សិក្សា បន្ថែម ទៀត។
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
              គម្ពីរ (KOOMPI) បាន ជ្រើស រើស នូវ កម្មវិធី សម្រាប់ ភារកិច្ច ការងារ ប្រចាំ ថ្ងៃ ក្នុង នោះ មាន<br />ប្រព័ន្ធ
              រុករក កម្ម វិធី ធ្វើ ឯកសារ ដើម្បី បង្កើន សមត្ថភាព ដល់ អ្នក ប្រើ ប្រាស់ ការ កម្សាន្ត និង កម្មវិធី<br />ជា ច្រើន ទៀត។  
              យើង ជឿ ជាក់ ថា កុំព្យូទ័រ គួរ តែ មាន លក្ខណៈ សាមញ្ញ និង ពោរ ពេញ ទៅ ដោយ<br />សេរីភាព ដែល អាច
              អនុញ្ញាត ឱ្យ យេីង ធ្វើ អ្វី បាន គ្រប់ បែប យ៉ាង។ ដោយ វា ជា ឧបករណ៍ ជំនួយ<br />ដល់ អ្នក ប្រើ ប្រាស់
              ដោយ មាន ប្រសិទ្ធិ ភាព ទាំង ការ រៀន សូត្រ និង សិក្សា បន្ថែម ទៀត។
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
