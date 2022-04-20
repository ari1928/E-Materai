import React from 'react'
import NumberFormat from 'react-number-format';

export const FieldFormInput = ({
    input,
    label,
    type,
    defaultValue,
    placeholder,
    disabled,
    autoComplete,
    readOnly,
    maxLength,
    minLength,
    meta: { touched, error, warning },
}) => (
    <>
        <div className="wrapper">
            <label
                className="block  text-blueGray-600 text-xs font-bold  "
            >
                {label}
            </label>
            <input
                {...input}
                type={type}
                defaultValue={defaultValue}
                autoComplete={autoComplete}
                className="px-3 py-3 placeholder-blueGray-300 text-sm w-full focus:outline-none focus:ring-0  border-0 border-b-2 focus:border-0 dark:bg-gray-800"
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                maxLength={maxLength}
                minLength={minLength}
            />
            {touched &&
                ((error && <span className="text-sm text-red-500">{error}</span>) ||
                    (warning && <span className="text-sm text-yellow-500">{warning}</span>))}
        </div>
    </>
);

export const FieldFormInputAnim = ({
    input,
    label,
    type,
    name,
    defaultValue,
    placeholder,
    disabled,
    autoComplete,
    readOnly,
    maxLength,
    minLength,
    meta: { touched, error, warning },
}) => (
    <>
        <div className="relative w-full mb-3 ">
            <input
                {...input}
                type={type}
                name={name}
                defaultValue={defaultValue}
                autoComplete={autoComplete}
                className="px-3 py-3 placeholder-blueGray-300 text-sm w-full focus:outline-none focus:ring-0  border-0 border-b-2 focus:border-0 Iinput"
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                maxLength={maxLength}
                minLength={minLength}
            />
            <label htmlFor={name} className="absolute top-3 -z-1  left-0 duration-300 origin-0">
                {label}
            </label>
            <div className="fixed">
                {touched &&
                    ((error && <span className="text-sm text-red-500">{error}</span>) ||
                        (warning && <span className="text-sm text-yellow-500">{warning}</span>))}
            </div>
        </div>

    </>
);

export const FieldFormInputSelect = ({
    input,
    label,
    meta: { touched, error, warning },
    children,
    disabled,
    readOnly,
    ...custom
}) => (
    <>
        <div className="wrapper">
            <label
                className="block text-blueGray-600 text-xs font-bold "
            >
                {label}
            </label>
            <select
                className=" px-3 py-3 placeholder-blueGray-300 text-sm w-full focus:outline-none focus:ring-0 border-0 border-b-2 focus:border-0 dark:bg-gray-800"
                {...input} {...custom} disabled={disabled} readOnly={readOnly}
            >
                {children}
            </select>
            {touched &&
                ((error && <span className="text-sm text-red-500">{error}</span>) ||
                    (warning && <span className="text-sm text-yellow-500">{warning}</span>))}
        </div>
    </>
);

export const FieldFormInputNumber = ({
    input,
    label,
    type,
    displayType,
    Format,
    prefix,
    placeholder,
    autoComplete,
    disabled,
    readOnly,
    maxLength,
    isAllowed,
    meta: { touched, error, warning },
}) => (
    <>
        <div className="wrapper">
            <label
                className="block text-blueGray-600 text-xs font-bold  "
            >
                {label}
            </label>
            <NumberFormat
                className="px-3 py-3 pl-10 placeholder-blueGray-300 text-sm w-full focus:outline-none focus:ring-0 border-0 border-b-2 focus:border-0 dark:bg-gray-800"
                // style={{ borderColor: "#f5f5f0" }}
                {...input}
                value={input.value}
                isAllowed={isAllowed}
                autoComplete={autoComplete}
                displayType={displayType}
                format={Format}
                thousandSeparator={false}
                type={type}
                maxLength={maxLength}
                prefix={prefix}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
            >
            </NumberFormat >
            {touched &&
                ((error && <span style={{ color: "red" }}>{error}</span>) ||
                    (warning && <span style={{ color: "brow" }}>{warning}</span>))}
        </div>
    </>
);

export const FieldFormInputSpan = ({
input,
label,
type,
defaultValue,
placeholder,
disabled,
autoComplete,
readOnly,
maxLength,
minLength,
meta: { touched, error, warning },
}) => (
<>
    <div className="wrapper">
        <label
            className="block  text-blueGray-600 text-xs font-bold  "
        >
            {label}
        </label>
        <textarea
            {...input}
            type={type}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            className="px-3 py-3 placeholder-blueGray-300 text-sm w-full focus:outline-none focus:ring-0  border-0 border-b-2 focus:border-0 dark:bg-gray-800"
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
            minLength={minLength}
        />
        {touched &&
            ((error && <span className="text-sm text-red-500">{error}</span>) ||
                (warning && <span className="text-sm text-yellow-500">{warning}</span>))}
    </div>
</>
);