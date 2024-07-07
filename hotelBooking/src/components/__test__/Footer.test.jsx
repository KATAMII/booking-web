// src/components/__tests__/Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe("Footer", () => {
  it("renders the footer with site name", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const siteName = screen.getByText(/SAROVA HOTEL/i);
    expect(siteName).toBeInTheDocument();
  });

 
  
 


  it("renders the social media links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const twitterLink = screen.getByTitle(/Twitter/i);
    const facebookLink = screen.getByTitle(/Facebook/i);
    const instagramLink = screen.getByTitle(/Instagram/i);
    const linkedinLink = screen.getByTitle(/LinkedIn/i);

    expect(twitterLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const roomsLink = screen.getByRole('link', { name: /Rooms/i });
    const amenitiesLink = screen.getByRole('link', { name: /Amenities/i });
    const contactLink = screen.getByRole('link', { name: /Contact Us/i });

    expect(homeLink).toBeInTheDocument();
    expect(roomsLink).toBeInTheDocument();
    expect(amenitiesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

 

  it("renders the copyright information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const copyright = screen.getByText(/All Rights Reserved/i);
    expect(copyright).toBeInTheDocument();
  });
});
