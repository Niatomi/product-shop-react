export const StarIcon = (props: {
  offset: number,
}) => {
  return (
    <svg height="24"
      viewBox="0 0 24 24"
      width="24">
      <defs>
        <linearGradient id={ 'offset' + props.offset }>
          <stop offset="0%"
            stopColor="#ffea00" />
          <stop offset={ `${props.offset}%` }
            stopColor="#ffea00" />
          <stop offset={ `${props.offset}%` }
            stopColor="white" />
          <stop offset="100%"
            stopColor="white" />
        </linearGradient>
      </defs>
      <path d="M0 0h24v24H0z"
        fill="none" />
      <path
        fill={ 'url(#offset' + props.offset + ')' }
        stroke="gray"
        strokeWidth="1"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
      <path d="M0 0h24v24H0z"
        fill="none"/>
    </svg>
  )
}