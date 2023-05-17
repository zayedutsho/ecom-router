import { HiMenuAlt1, HiOutlineHome } from 'react-icons/hi';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai';
import { CiDeliveryTruck } from 'react-icons/ci'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='top-0 fixed let-0 h-screen p-2 bg-gray-400'>
            <ul className='p-5 space-y-8'>
                <li>


                    <button>
                        <HiMenuAlt1 size={"1.5rem"}></HiMenuAlt1  >
                    </button>
                </li>
                <li>
                    <Link to='/'>
                        <button>
                            <HiOutlineHome size={"1.5rem"}></HiOutlineHome>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>

                        <button>
                            <BsFillCartCheckFill size={"1.5rem"}></BsFillCartCheckFill>
                        </button>
                    </Link>

                </li>

                <li>
                    <Link to='/favourite'>
                        <button>
                            <AiFillHeart size={"1.5rem"}></AiFillHeart>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='/order'>
                        <button>
                            <CiDeliveryTruck size={"1.5rem"}></CiDeliveryTruck>
                        </button>
                    </Link>
                </li>
            </ul>
        </div >
    );
};

export default SideBar;