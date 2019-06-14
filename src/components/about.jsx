import React from "react";
import Navbar from "./navbar";
import MemberState from "./states/member";
import Footer from "./footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Helmet>
        <title>
          About | Koompi mission is build and provide tools for the next
          generation of engineers, problem solvers and discoverers
        </title>
      </Helmet>
      <div className="backgroundAbout">
        <div className="ui container">
          <div className="ui divided grid">
            <div className="ui stackable two column grid">
              <div className="column aboutPadding ten wide">
                <h2>រឿងរ៉ាវ</h2>
                <p>
                  ការបង្កេីត KOOMPI គឺផ្តេីមឡេីងដោយមេគំនិតម្នាក់ ដែលគិតថា កំុព្យូទ័រ 
                  គឺជាស្ពានដែលអាចភ្ជាប់យេីងទៅកាន់ជំនាញថ្មីនិងផ្សារភ្ជាប់ចំណេះដឹង។ 
                  គម្ពីរ ដែលជាសៀវភៅនៃចំណេះដឹង គឺជាប្រភពបណ្តាលចិត្តឲ្យយេីងចង់ដាក់ឈ្មោះកំុព្យូទ័ររបស់យេីងថា គម្ពីរ។ 
                  យេីងក៍ចង់ក្លាយជាប្រភពនៃចំណេះដឹងដូចគ្នា ដូច្នេះ គម្ពីរ ក៍កេីតឡេីង។
                </p>
                <h2>បេសកកម្ម</h2>
                <p>
                  បេសកម្ម របស់ KOOMPI គឺចង់ក្លាយខ្លួនជាឧបករណ៍សម្រាប់ជំនាន់ក្រោយនៃវិស្វករ អ្នករុករក និងអ្នកច្នៃប្រឌិត។
                </p>
                <h2>អំពី​​យើង</h2>
                <p>
                  KOOMPI គឺជាកុំព្យូទ័រយួរដៃដែលមានគុណភាព តម្លៃសមរម្យ និងមានប្រសិទ្ធិភាព។ វាត្រូវបានរចនាឡេីងក្នុងគោលបំណង
                  ជួយសម្រួលដល់កិច្ចការប្រចាំថ្ងៃសម្រាប់ការងារនិងការសិក្សា។ បង្កើតឡើងជាមួយនឹងប្រព័ន្ធប្រតិបត្តិការផ្ទាល់ខ្លួនរបស់យើងដែល
                  ត្រូវបានគេហៅថា KramaOS ដោយផ្អែកលើមូលដ្ឋានគ្រឹះប្រព័ន្ធបើកចំហ Arch Linux ដ៏ល្បីល្បាញ។ ការច្នៃប្រឌិត 
                  បូករួមទាំងការរចនាទាំងស្រុងគឺធ្វើឡើងសមស្របនឹងរូបរាងរបស់ KOOMPI ។
                </p>
                <p>
                  បង្កើននូវបទពិសោធន៍ប្រចាំថ្ងៃដល់អ្នកប្រើប្រាស់ឲ្យកាន់តែល្អប្រសើរដើម្បីទាក់ទាញមនុស្សឲ្យចូលទៅពិភពកុំព្យូទ័រនិងប្រព័ន្ធឌីជីថល។ 
                  ការបង្កើតនូវបរិយាកាសមុខងារដ៍ស្រឡាងដើម្បីជំរុញឲ្យអ្នកប្រើប្រាស់មិនផ្តោតលើតែឧបករណ៍ប៉ុន្តែសំដៅលើការជម្នះនូវរាល់ឧបសគ្គដោយខ្លួនឯង។
                </p>
              </div>
              <div className="column six wide">
                <img
                  className="ui fluid image koompi-about-image"
                  src="img/teamwork.svg"
                  alt="koompi-about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about state components */}
      <MemberState />
      <Footer />
    </React.Fragment>
  );
};

export default About;
