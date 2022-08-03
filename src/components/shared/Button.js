import React from 'react'

function Button({ children, version, isDisabled, type }) {
    return (
        <button className={`btn btn-${version}`} disabled={isDisabled} type={type}
        >
            {children}
        </button>
    )
}


Button.defaultProps = {
    version: 'primary',
    isDisabled: false
}

export default Button