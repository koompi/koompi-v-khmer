import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import FadeIn from "react-lazyload-fadein";

const Banner = () => {
  return (
    <div className="bannerPage">
      <div className="bannerBackground">
        <div className="bannerText">
          <h1 className="bannerTitle">Koompi Kosmos</h1>
          <p className="bannerDesc">ស្រស់ស្អាត សមត្ថភាពខ្ពស់ ប្រព័ន្ធបើកចំហ</p>
          <h6 className="leanMoreBanner">
            <Link to="/retailers">
              <i className="fas fa-angle-right" /> ទិញគម្ពីរ (KOOMPI)
            </Link>
          </h6>
          <p>
          គម្ពីរ (KOOMPI) គឺជាកុំព្យូទ័រយួរដៃដែលមានគុណភាពខ្ពស់ តម្លៃសមរម្យ និងមានប្រសិទ្ធិភាពល្អ
          ជាច្រើនយ៉ាង។ វាត្រូវបានរចនាឡេីងក្នុងគោលបំណងជួយសម្រួលដល់កិច្ចការប្រចាំថ្ងៃសម្រាប់ការងារនានានិងការ
          សិក្សារៀនសូត្ររបស់សិស្សានុសិស្សផងដែរ។
            <a href="/about-us" className="about-us"> អានបន្ត</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const Shapelines = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <div className="beautyPadding">
          <div className="ui vertically divided grid">
            <div className="ui stackable two column grid">
              <div className="column controlColor">
                <h4 className="smallTitle">រចនាបថរបស់គម្ពីរ (KOOMPI)</h4>
                <h2 className="fontWidth">
                កុំព្យូទ័រគម្ពីរ (KOOMPI) ត្រូវបានរចនាឡើង ជាមួយនឹងកម្រិតអេក្រង់​ 13,3 អ៊ីញ អមនឹងអេក្រង់ កម្រិតច្បាស់ល្អ Full HD
                </h2>
                <p className="websiteContent">
                រូបរាងស្តើង ហើយស្រាល រួមជាមួយការច្នៃប្រតិដ្ឋយ៉ាងប្រណិត  និង បំពាក់ជាមួយប្រព័ន្ធប្រតិបត្តិការទូលំទូលាយជាច្រើន ជាមួយនឹងអនុភាពខ្ពស់។
                </p>
                <div className="ui grid beautyDetail">
                  <div className="two column row">
                    <div className="column">
                      <h5 className="beautyDetailTitle">កម្រាស់របស់គម្ពីរ (KOOMPI)</h5>
                      <h3 className="beautyDetailDesc">
                        13.5
                        <span className="tourDetailSize"> មម</span>
                      </h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">ទម្ងន់</h5>
                      <h3 className="beautyDetailDesc">
                        1.3
                        <span className="tourDetailSize"> គីឡូក្រាម</span>
                      </h3>
                    </div>
                  </div>
                  <div className="two column row">
                    <div className="column">
                      <h5 className="beautyDetailTitle">ការរចនាទាំងមូល</h5>
                      <h3 className="beautyDetailDesc">
                        ទំហំ​ 13.3
                        <span className="tourDetailSize"> អ៊ីញ</span>
                      </h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">រាងរ៉ូវ</h5>
                      <h3 className="beautyDetailDesc">
                        ទំហំ 13,5 
                        <span className="tourDetailSize"> មីលីម៉ែត្រ</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <FadeIn height={600} duration={100}>
                  {onload => (
                    <img
                      src="img/koompi-beauty-1.webp"
                      className="koompiBeautyImg"
                      alt="koompi-beauty"
                      onLoad={onload}
                    />
                  )}
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundKoompiGallery">
        <img
          src="img/Presentation-Price.webp"
          className="koompi-gallery"
          alt="koompi-gallery"
        />
      </div>
    </React.Fragment>
  );
};

const Screen = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <div className="beautyPadding">
          <div className="ui vertically divided grid">
            <div className="ui stackable two column grid">
              <div className="column controlColor">
                <h4 className="smallTitle">អេក្រង់</h4>
                <h2 className="fontWidth">
                  អមជាមួយបន្ទះ FHD IPS ដែលជាកញ្ចក់ប្រឆាំងនឹងពន្លឺមិនបណ្តាលឲ្យផ្លាត
                </h2>
                <p className="websiteContent">
                គ្រាន់តែដកវាចេញពីប្រអប់របស់គម្ពីរ KOOMPI ភ្លាម កម្មវិធីនានាត្រូវបានដំឡើងរួចជាស្រេច
                ដែលកម្មវិធីទាំងនេះសុទ្ធតែមានភាពចាំបាច់សម្រាប់ការងារប្រចាំថ្ងៃរបស់អ្នកប្រើប្រាស់ ។ 
                សម្រាប់ព័ត៌មានលម្អិតរបស់កម្មវិធីប្រើប្រាស់…….។
                </p>
                <div className="ui grid beautyDetail">
                  <div className="two column row">
                    <div className="column">
                      <h5 className="beautyDetailTitle">អេក្រង់ IPS</h5>
                      <h3 className="beautyDetailDesc">13.3</h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">បណ្តោយ & ទទឹង</h5>
                      <h3 className="beautyDetailDesc">16 : 9</h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">គុណភាពច្បាស់ល្អ</h5>
                      <h3 className="beautyDetailDesc">1920 x 1080 </h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">
                        ទំហំរូបរាង
                      </h5>
                      <h3 className="beautyDetailDesc">73.44%</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <FadeIn height={600} duration={100}>
                  {onload => (
                    <img
                      src="img/screen.webp"
                      className="koompiBeautyImg"
                      alt="koompi-screen"
                      onLoad={onload}
                    />
                  )}
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Performance = () => {
  return (
    <div className="performanceBack">
      <div>
        <div className="ui stackable two column grid">
          <div className="row removeShadow">
            <div className="six wide column performanceImage">
              <img
                src="img/koompi-performance.webp"
                heigh="400px"
                className="mobile hidden"
                alt="koompi-performance"
              />
              <img
                src="img/koompi-performance1.webp"
                heigh="400px"
                className="mobile only"
                alt="koompi-performance"
              />
            </div>
            <div className="eight wide column">
              <div className="performancePadding">
                <h5>មុខងារប្រតិបត្តិការមិនធ្លាប់មានពីមុនមក</h5>
                <p>
                គម្ពីរ (KOOMPI) ជាឧបករណ៍ជំនាន់ថ្មីដែលមានរូបរាងស្តើង ហើយស្រាល 
                ដើម្បីផ្តល់ជូននូវបទពិសោធន៍ដែលមិនធ្លាប់ពីមុនមក ដោយរួមបញ្ចូលគ្នារវាងប្រព័ន្ធបើកចំហ 
                Arch Linux ដ៏ល្បីល្បាញ និងការរចនាទាំងស្រុង។ វាគឺធ្វើឡើងសមស្របទៅនឹងរូបរាងរបស់គម្ពីរ (KOOMPI) 
                ក្នុងការសម្រេចបាននូវមុខងារចម្រុះនានារបស់គម្ពីរ (KOOMPI)។ គម្ពីរ (KOOMPI) មានបំណងក្នុងការជំរុញយុវជនកម្ពុជា
                ឱ្យក្លាយជាអ្នកបង្កើតនិងអ្នកច្នៃប្រតិដ្ឋនៅពេលអនាគត។ ការបង្កើតនូវបរិយាកាសមុខងារដ៍ថ្មីស្រឡាងដើម្បីជំរុញឱ្យអ្នកប្រើប្រាស់
                មិនផ្តោតទៅលើតែឧបករណ៍ប៉ុន្តែសំដៅលើការជម្នះនូវរាល់ឧបសគ្គនានាដោយខ្លួនឯង។ គម្ពីរ (KOOMPI) មានអនុភាពខ្លាំង 
                ប៉ុន្តែមានភាពងាយស្រួលនិងមានទម្ងន់ស្រាលងាយស្រួលក្នុងការយកជាប់ខ្លួនគ្រប់ទីកន្លែង។
                </p>
                <div className="ui two column divided grid">
                  <div className="row performanceRemoveMargin">
                    <div className="column">
                      <div className="performanceTitle">
                        ស៊ីភីយូ Intel Celeron
                        <h2>N4100</h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        សន្ទុះដល់
                        <h2>
                          2.4<span className="koompiSpeedMB">GHz</span>
                        </h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        M.2 SATA3 SSD
                        <h2>
                          128<span className="koompiSpeedMB"> ជីកាបៃ</span> | 256
                          <span className="koompiSpeedMB"> ជីកាបៃ</span>
                        </h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        ល្បឿនអាន | សរសេរ
                        <h2>
                          537 <span className="koompiSpeedMB">MB/s</span> | 439{" "}
                          <span className="koompiSpeedMB">MB/s</span>
                        </h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        RAM DDR4
                        <h2>
                          8<span className="koompiSpeedMB"> ជីកាបៃ</span>
                        </h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        USB-C Port
                        <h2>
                          10<span className="koompiSpeedMB">Gbps</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Battery = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <div className="beautyPadding">
          <div className="ui vertically divided grid">
            <div className="ui stackable two column grid">
              <div className="column controlColor">
                <h4 className="smallTitle">ថ្ម</h4>
                <h2 className="fontWidth">សាករយៈពេលខ្លី ថ្មកាន់បានយូរ</h2>
                <p className="websiteContent">
                  រចនាឡើងជាមួយថ្មដែលមានរាងរ៉ូវដ៏ស្តើងបំផុត
                  ដែលអាចកាន់ថ្មដល់ 7 ម៉ោងដោយសមត្ថភាពខ្ពស់ក្នុងកម្រិត 5000mAh ។
                </p>
                <div className="ui grid beautyDetail">
                  <div className="two column row">
                    <div className="column">
                      <h5 className="beautyDetailTitle">ថ្ម Li-polymer</h5>
                      <h3 className="beautyDetailDesc">5000mAH</h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">ថ្ម</h5>
                      <h3 className="beautyDetailDesc">រហូតដល់ 7 ម៉ោង</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <FadeIn height={600} duration={100}>
                  {onload => (
                    <img
                      src="img/koompi-battery.webp"
                      className="koompiBeautyImg "
                      alt="koompi-battery"
                      onLoad={onload}
                    />
                  )}
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

function demoAsyncCall() {
  return new Promise(resolve => setTimeout(() => resolve(), 2000));
}

class Index extends Component {
  state = {
    data: "",
    loading: true
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return (
        <div className="loadingImage">
          <img src="/img/koompi-logo-w-02.svg" alt="loading ..." />
          <center>
            <div className="loader" />
          </center>
        </div>
      ); // render null when app is not ready
    }
    return (
      <React.Fragment>
        <Navbar />
        {Banner()}
        {Shapelines()}
        {Screen()}
        {Performance()}
        {Battery()}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
