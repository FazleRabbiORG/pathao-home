import React from 'react';
import "./earn.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Earn = () => {
    AOS.init();
    return (
        <div className=' earn' data-aos="fade-right" data-aos-duration="1000">
            <div className="section-title text-center">
                <h2>বাইক, গাড়ি অথবা সাইকেলের মাধ্যমে আয় করুন</h2>
                <p>জয়েন করুন দেশের সর্বোচ্চ আয়ের প্ল্যাটফর্মে</p>
                <a href="btn-solid btn-solid-link wow fadeInUp"> আয় শুরু করুন  </a>
            </div>
            <div className="earn-img">
            </div>
        </div>
    )
}

export default Earn
