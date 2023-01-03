function Button(props) {
  return (
    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md ">{props.children}</button>
  )
}
export default Button