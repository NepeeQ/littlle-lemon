import {fireEvent, render, screen} from '@testing-library/react'
import BookingForm from './BookingFrom'

describe("Booking Form", () =>
{
    const availableTimes = ["17:00", "18:00", "19:00"]
    const date = new Date().toISOString().split('T')[0];
    const dispatch = jest.fn();
    const submitData = jest.fn();
    test ("correctly render form", async () =>{
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitData={submitData} />);
    const dateInput = screen.getByLabelText("Choose date");
    const timeInput = screen.getByLabelText("Choose time");
    const timeInputOptions = await screen.findAllByTestId('booking-time');
    const guestInput = screen.getByLabelText("Number of guests");
    const occasionInput = screen.getByLabelText("Occasion");
    const submitButton = screen.getByRole("button");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');

    expect(timeInput).toBeInTheDocument();
    expect(timeInputOptions.length).toBe(3);

    expect(guestInput).toBeInTheDocument();
    expect(guestInput).toHaveAttribute('type','number');

    expect(occasionInput).toBeInTheDocument();

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    })
    test("form submit", () =>
{
    render (<BookingForm availableTimes={availableTimes} submitData={submitData}/>);
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton)
    expect(submitButton).toHaveBeenCalled
})
})

