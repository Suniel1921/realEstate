import React from 'react';
import './about.css';

const About = () => {
  return (

    <div className="container">
      <div id='aboutContainer'>
      {/* Upper part */}
      <div id='upper-part'>
        <div id='image-container'>
          <img src='https://img.freepik.com/free-photo/door-opening-revealing-beautiful-city_23-2149768547.jpg?uid=R98263876&ga=GA1.1.1863079335.1717151144&semt=ais_user-customized' alt="house" id='image' />
        </div>
        <div id='text-section'>
          <h1 id='title'>About RealState</h1>
          <h2 id='subtitle'>REAL ESTATE MARKETPLACE FOR ALL</h2>
          <div id='text-container'>
            <p id='text'>
              At realEstate Innovation, we specialize in guiding you to your perfect real estate property within your desired location in Nepal. Our platform simplifies the search for houses, lands, apartments, flats, and office spaces. You can find contact information along with email or messaging options for every property listed by individual owners, agents, or agencies.
            </p>
            <p id='text'>
              We also help you to sell your property fast. Our personalized property promotion techniques are tailored to enhance the visibility of your real estate property to serious buyers. We use different kinds of marketing techniques to promote your property for better visibility and conversion among thousands of property seekers every day.
            </p>
          </div>
        </div>
      </div>
      <hr id='divider' />
      {/* Content */}
      <div id='content'>
        <div id='content-item'>
          <div id='icon-container'>
            {/* <img src={HouseIcon} alt="house icon" id='icon' /> */}
          </div>
          <h3 id='content-title'>HOUSES & APARTMENTS</h3>
          <div id='content-text-container'>
            <p id='content-text'>
              Our platform showcases the most recent listings of houses & apartments for sale listed by owners, agents & agencies.
            </p>
            <p id='content-text'>
              List your house or apartment on Realestateinnov.com and extend the visibility of your property and get calls or message by serious buyers every day.
            </p>
          </div>
        </div>
        <div id='content-item'>
          <div id='icon-container'>
            {/* <img src={LandIcon} alt="land icon" id='icon' /> */}
          </div>
          <h3 id='content-title'>LANDS & PLOTTINGS</h3>
          <div id='content-text-container'>
            <p id='content-text'>
              Are you looking for plotted land or house to buy in any major cities of Nepal like Kathmandu, Lalitpur, or Bhaktapur?
            </p>
            <p id='content-text'>
              Realestateinnov.com has thousands of listings of different types of land pieces exclusively available for you. You can also sell your land on this platform.
            </p>
          </div>
        </div>
        <div id='content-item'>
          <div id='icon-container'>
            {/* <img src={RentalIcon} alt="rental icon" id='icon' /> */}
          </div>
          <h3 id='content-title'>RENTAL PROPERTIES</h3>
          <div id='content-text-container'>
            <p id='content-text'>
              We host 100s of listings of properties on rent in Nepal. Explore recent listings of houses, apartments, lands, flats, or office space for rent.
            </p>
            <p id='content-text'>
              If you are planning to rent out your real estate property you can simply use our platform to list your rentals online. There are 100s of people looking for different rentals every day.
            </p>
          </div>
        </div>
      </div>
      <hr id='divider' />
    </div>
    </div>
  );
};

export default About;
