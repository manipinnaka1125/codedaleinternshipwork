import React, { useState } from "react";
import "./Home.css"; // ✅ Import CSS file

const Home = () => {
  const [description, setDescription] = useState("");

  return (
    <div className="container">
      <div className="banner">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="reactLogo"
        />
        <p className="bannerText">Export your site to React</p>
        <a href="#" className="bannerLink">
          Try it now
        </a>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65ab316a98b1254dc17f79f1_relume%20logo%20symbol%20with%20shadow.png"
            alt="Company Logo"
            className="companyLogo"
          />
        </div>
        <div className="navLinks">
          <a href="/products" className="navLink">Products</a>
          <a href="/community" className="navLink">Community</a>
          <a href="/pricing" className="navLink">Pricing</a>
          <a href="/learn" className="navLink">Learn</a>
          <a href="/contact" className="navLink">Contact Sales</a>
        </div>
        <div className="authButtons">
          <button className="loginButton">Log in</button>
          <button className="signupButton">Start for free</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="heroHeading">
          Websites designed &<br />
          built faster with AI
        </h1>
        <p className="heroText">
          Use AI as your design ally, not as a replacement. Effortlessly
          generate <br />
          sitemaps and wireframes for marketing websites in minutes.
        </p>
      </div>

      {/* Input Section */}
      <div className="inputSection">
        <label className="inputLabel">
          Describe a company in a sentence or two...
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., 'A sustainable fashion brand focusing on eco-friendly materials...'"
          className="textarea"
        />
      </div>
    </div>
  );
};

export default Home;
