
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe("Header", () => {
  it("renders the header with logo", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const roomsLink = screen.getByRole('link', { name: /Rooms/i });
    const amenitiesLink = screen.getByRole('link', { name: /Amenities/i });
    const contactsLink = screen.getByRole('link', { name: /Contacts/i });

    expect(homeLink).toBeInTheDocument();
    expect(roomsLink).toBeInTheDocument();
    expect(amenitiesLink).toBeInTheDocument();
    expect(contactsLink).toBeInTheDocument();
  });

  it("renders the Sign In button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const signInLink = screen.getByRole('link', { name: /Sign In/i });
    const signInButton = signInLink.closest('button');
    expect(signInButton).toBeInTheDocument();
  });
});
