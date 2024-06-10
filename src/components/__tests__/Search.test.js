// import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect, jest, it } from "@jest/globals";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from '.././mocks/mockResListData.json'
import { BrowserRouter } from "react-router-dom";
// import { act } from "react";
import { fireEvent, render, act,screen } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component and res List and search input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
      <Body/>
      </BrowserRouter>
    );
  });
  
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  // const searchbtn = screen.getByRole("button", { name: "Search" });
  // const searchInput = screen.getByTestId("searchInput");
  
  // fireEvent.change(searchInput, { target: { value: "Wok" } });
  // fireEvent.click(searchbtn);

  // const cards = screen.getAllByTestId("resCard");
  // expect(cards.length).toBe(1);
});

// it("Should render the body component and get button", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });
//   // const searchBtn = screen.getByRole("button",{name:"Search"});
//   // console.log(searchBtn);
//   // expect(searchBtn).toBeInTheDocument();

// });