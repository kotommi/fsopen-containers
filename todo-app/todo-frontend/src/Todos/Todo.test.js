import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
    const todo = {
        text: "clean kitchen",
        done: false
    }

    render(<Todo todo={todo} />)

    const element = screen.getByText('clean kitchen')
    expect(element).toBeDefined()
})