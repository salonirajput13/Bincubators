// File: App.js

import React from 'react';
import map from '../assets/roadmap.png'
import img1 from '../assets/bus_name.png'


const Roadmap = () => {
  return (
    <div>
      <section className='d-flex justify-content-center'>
        <img className='roadmap mt-0' src={map} />
      </section>
      <div className="app-container">
        <h1 className='r-head text-dark'>10 Steps to start your business</h1>

        {/* Step 1 */}
        <div className="row">
          <div className="col-md-8">
            <div className="step-container mt-5">
              <h2 className='r-txt '>Step 1: Conduct Market Research</h2>
              <p className='r-p'>Market research will tell you if there’s an opportunity to turn your idea into a successful business. It’s a way to gather information about potential customers and businesses already operating in your area. Use that information to find a competitive advantage for your business</p>
              {/* Your basic component structure goes here */}
            </div>
          </div>
          <div className="col-md-4">
            <img className='i' src={img1} />
          </div>
        </div>
        {/* Step 2 */}
        <div className="row">
          <div className="col-md-4">
            <img className='ii' src={img1} />
          </div>
          <div className="col-md-8">
            <div className="step-container">
              <h2 className='r-txt'>Step 2: Write your business plan</h2>
              <p className='r-p'>Your business plan is the foundation of your business. It’s a roadmap for how to structure, run, and grow your new business. You’ll use it to convince people that working with you — or investing in your company — is a smart choice.</p>
              {/* Your data fetching logic goes here */}
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="row">
          <div className="col-md-8">
            <div className="step-container">
              <h2 className='r-txt'>Step 3: Fund your business</h2>
              <p className='r-p'>Your business plan will help you figure out how much money you’ll need to start your business. If you don’t have that amount on hand, you’ll need to either raise or borrow the capital. Fortunately, there are more ways than ever to find the capital you need.</p>
              {/* Display data here */}
            </div>
          </div>
          <div className="col-md-4">
            <img className='iii' src={img1} />
          </div>
        </div>

        {/* Step 4 */}
        <div className="row">
          <div className="col-md-4">
            <img className='ii' src={img1} />
          </div>
          <div className="col-md-8">
            <div className="step-container">
              <h2 className='r-txt'>Step 4: Pick your business location</h2>
              <p className='r-p'>Your business location is one of the most important decisions you’ll make. Whether you’re setting up a brick-and-mortar business or launching an online store, the choices you make could affect your taxes, legal requirements, and revenue.</p>
              {/* Display data here */}
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="row">
          <div className="col-md-8">
            <div className="step-container">
              <h2 className='r-txt'>Step 5: Choose a business structure</h2>
              <p className='r-p'>The legal structure you choose for your business will impact your business registration requirements, how much you pay in taxes, and your personal liability.</p>
              {/* Display data here */}
            </div>
          </div>
          <div className="col-md-4">
            <img className='iii' src={img1} />
          </div>
        </div>

        {/* Step 6 */}
        <div className="row">
          <div className="col-md-4">
            <img className='ii' src={img1} />
          </div>
          <div className="col-md-8">
            <div className="step-container">
              <h2 className='r-txt'>Step 6: Choose your business name</h2>
              <p className='r-p'>It’s not easy to pick the perfect name. You’ll want one that reflects your brand and captures your spirit. You’ll also want to make sure your business name isn’t already being used by someone else.</p>
              {/* Display data here */}
            </div>
          </div>
        </div>

        {/* Step 7 */}
        <div className="row">
          <div className="col-md-8">
            <div className="step-container">
              <h2 className='r-txt'>Step 7: Register your business</h2>
              <p className='r-p'>Once you’ve picked the perfect business name, it’s time to make it legal and protect your brand. If you’re doing business under a name different than your own, you’ll need to register with the federal government, and maybe your state government, too.</p>
              {/* Display data here */}
            </div>
          </div>
          <div className="col-md-4">
            <img className='iii' src={img1} />
          </div>
        </div>

        {/* Step 8 */}
        <div className="row">
          <div className="col-md-4">
            <img className='ii' src={img1} />
          </div>
          <div className="col-md-8">
            <div className="step-container">
              <h2 className='r-txt'>Step 8: Get federal and state tax IDs</h2>
              <p className='r-p'>You’ll use your employer identification number (EIN) for important steps to start and grow your business, like opening a bank account and paying taxes. It’s like a social security number for your business. Some — but not all — states require you to get a tax ID as well.</p>
              {/* Display data here */}
            </div>
          </div>
        </div>

        {/* Step 9 */}
        <div className="row">
          <div className="col-md-8">
            <div className="step-container">
              <h2 className='r-txt'>Step 9: Apply for licenses and permits</h2>
              <p className='r-p'>Keep your business running smoothly by staying legally compliant. The licenses and permits you need for your business will vary by industry, state, location, and other factors.</p>
              {/* Display data here */}
            </div>
          </div>
          <div className="col-md-4">
            <img className='iii' src={img1} />
          </div>
        </div>

        {/* Step 10 */}
        <div className="row">
          <div className="col-md-4">
            <img className='ii' src={img1} />
          </div>
          <div className="col-md-8">
            <div className="step-container">
              <h2 className='r-txt '>Step 10: Open a business bank account</h2>
              <p className='r-p'>A small business checking account can help you handle legal, tax, and day-to-day issues. The good news is it’s easy to set one up if you have the right registrations and paperwork ready.</p>
              {/* Display data here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
