import { ImSpinner8 } from 'react-icons/im'

function Loading() {
  return (
    <div className='h-screen flex justify-center items-center text-red-500 '>
        <div className='animate-spin'><ImSpinner8 size={40}/></div>
    </div>
  )
}
export default Loading