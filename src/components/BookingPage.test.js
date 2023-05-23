import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from './BookingPage';

describe("BookingPage", () => {
    test("time options available", async () => {
        render(
            <MemoryRouter>
                <BookingPage/>
            </MemoryRouter>
        );
        const timeInputOptions = await screen.findAllByTestId('booking-time');
        expect(timeInputOptions.length).toBeGreaterThan(0);
    })
    test("times change after new date is picked", async () =>{
        render(
        <MemoryRouter>
            <BookingPage/>
        </MemoryRouter>)

    const dateInput = screen.getByLabelText("Choose date");
    const newDate = "2023-05-28";
    const firstTimeInputOptions = await screen.findAllByTestId('booking-time');
    fireEvent.change(dateInput, {target: {value:newDate}});
    const newTimeInputOptions = await screen.findAllByTestId('booking-time');

    expect(firstTimeInputOptions.length).not.toBe(newTimeInputOptions.length);
});
})