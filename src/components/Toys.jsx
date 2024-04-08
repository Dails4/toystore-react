import React, { useState } from 'react'
import Animals from './Animals'
import { useSelector } from 'react-redux';

const Toys = ({ showByType }) => {
    const [toys, setToys] =  useState(useSelector(state => state.toys.toys))

    return (
        <div>
            {showByType ? (
                <>
                    <Animals showByType={true} toys={toys} title='Stuffed Animals' />
                    <Animals showByType={true} toys={toys} title='Wooden Toys' />
                </>
            ) : (
                <Animals setToys={setToys} showByType={false} toys={toys} title='All Toys' />
            )}
        </div>
    );
}

export default Toys;