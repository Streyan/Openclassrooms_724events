import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    const listOfEvents = screen.getByTestId("events-list-testid");
    expect(listOfEvents).toBeInTheDocument();
  });
  it("a list a people is displayed", () => {
    render(<Home />);
    const listOfPeople = screen.getByTestId("people-list-testid");
    expect(listOfPeople).toBeInTheDocument();
  });
  it("a footer is displayed", () => {
    render(<Home />);
    const footer = screen.getByTestId("footer-testid");
    expect(footer).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    const cardElement = screen.getByTestId("card-testid");
    expect(cardElement.className.includes("EventCard--small")).toEqual(true);
  });
});
