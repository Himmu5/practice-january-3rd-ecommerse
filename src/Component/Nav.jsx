import { BsBag } from 'react-icons/bs'

function Nav() {
  return (
    <div>
      <div className="flex justify-between px-20 py-5 border-b items-center ">
        <div className="">
          <img
            src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
            alt=""
            className="h-full w-full"
          />
        </div>

        <ul className="flex gap-4 items-center ">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>ALL PRODUCTS</li>
            <li>CONTACT</li>
            <li>ACCOUNT</li>
            <li><BsBag size={25}/></li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
