import {act,fireEvent, render, screen, waitFor} from '@testing-library/react'
import BookingForm from './BookingFrom'
import userEvent from '@testing-library/user-event'

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
    const guestInput = screen.getByLabelText("Number of guests");
    const occasionInput = screen.getByLabelText("Occasion");
    const submitButton = screen.getByRole("button");
    const timeInputOptions = await screen.findAllByTestId('booking-time');

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
    test("form submit", async () =>
{
    render (<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitData={submitData}/>);
    const dateInput = screen.getByLabelText("Choose date");
    const timeInput = screen.getByLabelText("Choose time");
    const guestInput = screen.getByLabelText("Number of guests");
    const occasionInput = screen.getByLabelText("Occasion");

    //await waitFor (() => fireEvent.change(dateInput, {target: {value: "2023-05-28"}})) ;
    await waitFor (() => fireEvent.change(guestInput, {target: {value: 4}}));
    const timeInputOptions = await screen.findAllByTestId('booking-time');

    //fireEvent.change(dateInput, {target: {value: "2023-05-28"}}) ;
    userEvent.selectOptions(timeInput,timeInputOptions[0]) ;

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton)
    expect(submitData).toHaveBeenCalled
})

test("shows error message", async () =>
{
    render (<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitData={submitData}/>);
    const guestInput = screen.getByLabelText("Number of guests");
    await waitFor (() => fireEvent.change(guestInput, {target: {value: -2}}));
    await waitFor (() => fireEvent.blur(guestInput));
    const error = screen.getByTestId("error")
    expect(error).toBeInTheDocument

})
})

