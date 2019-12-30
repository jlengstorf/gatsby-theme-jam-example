import * as React from 'react'

export const Icon = ({
  style,
  className,
  iconPath,
  iconFill = 'currentcolor',
  iconSize = 24,
  showBackground = true
}) => (
  <svg
    style={{ ...style }}
    className={`${className}`}
    width={iconSize}
    height={iconSize}
    viewBox={`0 0 24 24`}
    preserveAspectRatio="xMidYMid meet"
    x="0"
    y="0"
    id={iconPath}
  >
    <path d={iconPath} fill={iconFill} />
    {/* {showBackground && <path d="M0 0h24v24H0z" fill="none" />} */}
  </svg>
)
