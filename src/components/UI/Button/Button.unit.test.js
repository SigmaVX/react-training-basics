import React from 'react';
import Button from './Button';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

let mockOnClick = jest.fn();

let props = {
    text: "Click Me",
    type: "std",
    onClick: mockOnClick,
    disabled:  false
}

let altProps ={
    ...props,
    type: "cta",
    disabled: true
}

it('[Button] should render with props', async () => {
    const { getByTestId, getByText } = render(<Button {...props} />);
    expect(getByText("Click Me")).toBeInTheDocument();
    fireEvent.click(getByText("Click Me"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(getByTestId('color-std')).toBeInTheDocument(); 
});

it('[Button] should change color and disable with props', async () => {
    const { getByTestId, getByText } = render(<Button {...altProps} />);
    expect(getByText('Click Me')).toBeDisabled();
    expect(getByTestId('color-cta')).toBeInTheDocument(); 
});