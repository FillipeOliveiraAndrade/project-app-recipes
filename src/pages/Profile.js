import React from 'react';
import Footer from '../components/Footer';
import ProfileElements from '../components/ProfileElements';
import Header from '../components/Header';
import '../styles/Profile.css';

function Profile() {
  return (
    <div>
      <Header />
      <ProfileElements />
      <Footer />
    </div>
  );
}

export default Profile;
