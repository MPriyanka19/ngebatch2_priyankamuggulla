/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserInfo from './UserInfo'

/* eslint-enable */


describe('Display UserInfo', () => {
  it('should render the user\'s name', () => {
    //Arrange
    const user = {
      name: "Alice",
      avatarUrl: "https://robohash.org/Fiona?size=60x60",
    };
    render(
      <UserInfo user={user} />
    );
    // Assert
    const foundElement = screen.getByText(/Ali/)
    expect(foundElement).toHaveTextContent("Alice")

  })

  it("should render the user's name", () => {
    //Arrange
    const user = {
      name: "Alice",
      avatarUrl: "https://robohash.org/Fiona?size=60x60",
    };
    render(<UserInfo user={user} />);
    // Assert
    const Image = screen.getByRole("img");
    expect(Image).toBeInTheDocument();
  });

})
