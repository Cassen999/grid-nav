// import { describe, test, expect, beforeEach } from 'vitest';
// import { render, screen, waitFor } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
// import { Counter } from '../components/Counter';

// describe('Tests for counter', () => {
//   beforeEach(() => {
//     render(<Counter />)
//   })
//   test('clicking the count button will incrememnt the count', async () => {
//     // Find Button and assert value is at base value
//     const countBtn: HTMLButtonElement = await screen.findByText(/Count: 0/i);
//     expect(countBtn).toBeInTheDocument();
//     expect(countBtn.value).toBe('0');

//     // Click Button
//     userEvent.click(countBtn);

//     // Wait for value to change and assert expected value is received
//     waitFor(() => {
//       expect(countBtn.value).toBe('1');
//     });
//   });

//   test('Clicking the reset button will reset the button value to 0', async () => {
//     // Find Button and assert value is at base value
//     const countBtn: HTMLButtonElement = await screen.findByText(/Count/i);
//     expect(countBtn.value).toBe('0');

//     // Find reset button
//     const resetBtn: HTMLButtonElement = await screen.findByText(/Reset/i);

//     // Increment count
//     userEvent.click(countBtn);
//     userEvent.click(countBtn);

//     // Wait for value to change and assert that expected value is received
//     waitFor(() => {
//       expect(countBtn.value).toBe('2');
//     })

//     // Click Reset and assert value of button to be 0
//     userEvent.click(resetBtn);
//     expect(countBtn.value).toBe('0');
//   });
// });