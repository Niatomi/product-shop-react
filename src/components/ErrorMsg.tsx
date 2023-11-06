export const ErrorMsg = (props: {
  error: string
}) => {
  return (
    <p className="text-red-700">{ props.error }</p>
  )
}