import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={props.width ? props.width : 439}
      height={props.height ? props.height : 475}
      viewBox="0 0 439 475"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M406.901 22.043l-12.45 238.33a20.005 20.005 0 01-7.041 14.213L197.016 435.967c-7.498 6.356-18.504 6.321-25.961-.083l-71.477-61.377c-17.382-14.926 5.02-57.935 27.804-55.524C204.286 327.119 284.958 317.193 292 252V21c0-11.046 8.954-20 20-20h74.928c11.456 0 20.57 9.603 19.973 21.043z"
          fill="#903749"
        />
        <path
          d="M424.901 22.043l-12.45 238.33a20.005 20.005 0 01-7.041 14.213L215.016 435.967c-7.498 6.356-18.504 6.321-25.961-.083l-71.477-61.377c-17.382-14.926 5.02-57.935 27.804-55.524C222.286 327.119 302.958 317.193 310 252V21c0-11.046 8.954-20 20-20h74.928c11.456 0 20.57 9.603 19.973 21.043z"
          fill="#2B2E4A"
          stroke="#E84545"
        />
        <path
          d="M434.901 48.043l-12.45 238.33a20.005 20.005 0 01-7.041 14.213L225.016 461.967c-7.498 6.356-18.504 6.321-25.961-.083l-71.477-61.377c-17.382-14.926 5.02-57.935 27.804-55.524C232.286 353.119 312.958 343.193 320 278V47c0-11.046 8.954-20 20-20h74.928c11.456 0 20.57 9.603 19.973 21.043z"
          fill="#E84545"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={-4}
          y={0.5}
          width={444}
          height={480.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent