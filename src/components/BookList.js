import FormSelect from './FormSelect'
import React from 'react'

export default function BookList({ books }) {
    return (
        <div>
            <h1 className='bg-info'>Book List</h1>
            <FormSelect books={books} />
        </div>
    )
}
