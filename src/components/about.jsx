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
                <h2>រឿងរ៉ាវរបស់គម្ពីរ (KOOMPI)</h2>
                <p>
                ការ បង្កេីត KOOMPI គឺ ផ្តេីម ឡេីង ដោយ មនុស្សម្នាក់ ដែល ផ្តួច ផ្តើម គំនិតឡើង ដោយគិតថា កំុព្យូទ័រ គឺ ជា ស្ពាន ដែល អាច ត ភ្ជាប់ យេីង ទៅ កាន់ ជំនាញ ថ្មី និង ការ ផ្សា ភ្ជាប់ ចំណេះ ដឹង ឱ្យ ទូលំ ទូលាយ ផង ដែរ។ 
                គម្ពីរ ជា សៀវភៅ នៃ ចំណេះដឹង ដូច នេះ ឈ្មេាះនេះ ក៏ បាន បណ្តាល ចិត្ត ឱ្យ យេីង ចង់ ដាក់ ឈ្មោះ កំុព្យូទ័រ
                របស់ យេីង ថា “គម្ពីរ” ឬ “KOOMPI” ។ គោល ដៅ របស់ យេីង ចង់ ក្លាយ ជា ប្រភព នៃ ចំណេះ ដឹង មួយ ដូច្នេះ គម្ពីរ KOOMPI ក៍ ចាប់ផ្តើម កេីតមាន ឡេីង។
                </p>
                <h2>បេសកកម្មរបស់គម្ពីរ (KOOMPI)</h2>
                <p>
                បេសកម្ម របស់ KOOMPI គឺចង់ ក្លាយ ខ្លួន ជា ឧបករណ៍ ថ្មី សម្រាប់ វិស្វករ អ្នករុករកថ្មី 
                និង អ្នកច្នៃប្រតិដ្ឋ ថ្មី ជំនាន់ ក្រោយ នេះ។ 
                </p>
                <h2>អំពី​​កុំព្យូទ័រគម្ពីរ (KOOMPI)</h2>
                <p>
                KOOMPI គឺ ជា កុំព្យូទ័រ យួរ ដៃ ដែល មាន គុណ ភាព ល្អ តម្លៃ សម រម្យ និង មាន ប្រសិទ្ធិ ភាព ខ្ពស់។ 
                វា ត្រូវ បាន រចនា ឡេីង ក្នុង គោលបំណង ជួយ សម្រួល ដល់ កិច្ចការ ប្រចាំ ថ្ងៃ សម្រាប់ ការងារ និង ការ
                សិក្សា របស់ សិស្សានុសិស្ស និង ប្រជាជន កម្ពុជា។ គម្ពីរ (KOOMPI) បង្កើត ឡើង ជាមួយ នឹង ប្រព័ន្ធ
                ប្រតិបត្តិការ ផ្ទាល់ ខ្លួន របស់ យើង ដែល ត្រូវ បាន គេ ហៅ ថា “KramaOS” ដោយ ផ្អែក លើ មូលដ្ឋាន
                គ្រឹះ ប្រព័ន្ធ បើកចំហ Arch Linux ដ៏ ល្បីល្បាញ មួយ។ 
                ការ ច្នៃ ប្រតិដ្ឋ មួយ នេះ បូក រួម ទាំង ការ រចនា ទាំង ស្រុង គឺ ធ្វើ ឡើង សម ស្រប នឹង រូប រាង របស់ គម្ពីរ (KOOMPI) តែម្តង។ គម្ពីរ បង្កើន នូវ បទ ពិសោធន៍ ប្រចាំ ថ្ងៃ ដល់ អ្នក ប្រើ ប្រាស់ ឱ្យ កាន់ តែល្អ ប្រសើរ 
                ដើម្បី ទាក់ ទាញឱ្យ មនុស្ស ចូល ទៅ កាន់ ពិភព កុំព្យូទ័រ និង ប្រព័ន្ធ ឌីជីថល ថ្មី មួយ ទៀត។ ការ បង្កើត នូវ បរិយាកាស មុខងារ ដ៍ ថ្មី ស្រឡាង ដើម្បី ជំរុញ ឱ្យ អ្នក ប្រើប្រាស់ មិន ផ្តោត ទៅ លើ តែ ឧបករណ៍ ប៉ុណ្ណេាះ 
                ទេ ប៉ុន្តែ សម្តៅ ទៅ លើ ការ ជម្នះ នូវ រាល់ ឧបសគ្គ ដោយ ខ្លួន ឯង។
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
