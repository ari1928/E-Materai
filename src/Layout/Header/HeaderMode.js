import { WindmillContext } from '@windmill/react-ui'
import React, { useContext } from 'react'
// import { useDispatch } from 'react-redux'

function HeaderMode() {
    // const dispatch = useDispatch()
    const { mode } = useContext(WindmillContext)

    function handleChange() {
        // dispatch({ type: 'set', ProfileMenuOpen: false })
    }
    return (
        <>
            <div
            >
                {mode === 'dark' ? (
                    <>
                        <i className="fas fa-sun" aria-hidden="true" />
                    </>
                ) : (
                    <i className="fas fa-moon" aria-hidden="true" />
                )}

                <span className="ml-2">
                    Dark Mode
                </span>
                <div className="relative inline-block w-11 mr-2 align-middle select-none transition duration-200 ease-in ml-2">
                    <input type="checkbox" name="toggle" id="toggle"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        checked={mode === 'dark' ? true : false}
                        onChange={handleChange}
                        aria-label="Toggle color mode"
                    />
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
                </div>
            </div>
        </>
    )
}
export default HeaderMode