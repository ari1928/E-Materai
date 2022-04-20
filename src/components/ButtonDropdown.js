import React, { useEffect, useRef } from "react";
import { createPopper } from "@popperjs/core";
import { useDispatch, useSelector } from "react-redux";


const ButtonDropdown = () => {
    const dispatch = useDispatch()
    const name = useSelector((state) => state.ReduxState.btnDropDown)
    const dropdownPopoverShow = useSelector((state) => state.ReduxState.btnDropDownShow)
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        dispatch({ type: 'set', btnDropDownShow: true })
    };
    const closeDropdownPopover = () => {
        dispatch({ type: 'set', btnDropDownShow: false })
    };

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!dropdownRef.current.contains(event.target)) {
                dispatch({ type: 'set', btnDropDownShow: false })
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })
    return (
        <>
            <div className="flex flex-wrap text-black">
                <div className="w-full sm:w-6/12 md:w-4/12 px-4">
                    <div
                        ref={dropdownRef}
                        className="relative inline-flex align-middle w-full"
                    >
                        <button
                            className={
                                "bg-gray-500 text-white cursor-pointer text-sm font-bold px-6 h-10 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  ease-linear transition-all duration-150"
                            }
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}
                        >
                            {name}
                            <i className={(dropdownPopoverShow) ? "ml-2 fas fa-angle-down" : "ml-2 fas fa-angle-up"} />
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                "fixed text-base z-50 float-right rounded-lg py-2 px-4  list-none text-left shadow-lg  bg-cool-gray-50"
                            }
                        >
                            <div className="text-sm py-2 p-4 font-semibold block  whitespace-nowrap bg-transparent hover:bg-cool-gray-100 cursor-pointer"
                                onClick={() => dispatch({ type: 'set', btnDropDownShow: false, btnDropDown: 10 })}
                            >
                                10
                            </div>
                            <div className="text-sm py-2 p-4 font-semibold block  whitespace-nowrap bg-transparent hover:bg-cool-gray-100 cursor-pointer"
                                onClick={() => dispatch({ type: 'set', btnDropDownShow: false, btnDropDown: 25 })}
                            >
                                25
                            </div>
                            <div className="text-sm py-2 p-4 font-semibold block  whitespace-nowrap bg-transparent hover:bg-cool-gray-100 cursor-pointer"
                                onClick={() => dispatch({ type: 'set', btnDropDownShow: false, btnDropDown: 50 })}
                            >
                                50
                            </div>
                            <div className="text-sm py-2 p-4 font-semibold block  whitespace-nowrap bg-transparent hover:bg-cool-gray-100 cursor-pointer"
                                onClick={() => dispatch({ type: 'set', btnDropDownShow: false, btnDropDown: 100 })}
                            >
                                100
                            </div>
                            <div className="text-sm py-2 p-4 font-semibold block  whitespace-nowrap bg-transparent hover:bg-cool-gray-100 cursor-pointer"
                                onClick={() => dispatch({ type: 'set', btnDropDownShow: false, btnDropDown: "All" })}
                            >
                                All
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ButtonDropdown