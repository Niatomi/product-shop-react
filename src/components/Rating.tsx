import { StarIcon } from '../assets/StarIcon'

export const Rating = (props: {
  rating: number
}) => {

  let rating: number[] = []
  for (let i = 1; i <= 5; i++) {

    if ((props.rating > i - 1) && (props.rating < i)) {
      rating.push(Math.round(props.rating * 100 / 5))
    } else if (props.rating > i) {
      rating.push(100)
    } else {
      rating.push(0)
    }
  }

  return (
    <div className='flex flex-row gap-2'>
      <div className="flex flex-row">
        { rating.map((value) => (
          <StarIcon
            offset={ value }
            key={ Math.random() }/>
        )) }
      </div>
      <p>{ props.rating }/5</p>
    </div>
  )
}
