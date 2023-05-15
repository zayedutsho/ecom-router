import watch from '../assets/watch.jpg'
import glass from '../assets/glass1.jpg'
import glasses from '../assets/glasses.jpeg'
import keyboard from '../assets/keyboard.jpg'
import laptop from '../assets/laptop.jpg'
import monitor from '../assets/monitor.jpg'
import mouse from '../assets/mouse.jpg'
import pc from '../assets/prof.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'
const Main = () => {


    let products = [


        {
            img: watch,
            title: 'Z4 Watch',
            price: 400,


        },
        {
            img: glass,
            title: 'Z4 glass',
            price: 300,


        },
        {
            img: glasses,
            title: 'Z4 glasses',
            price: 4200,


        },
        {
            img: monitor,
            title: 'Z4 monitor',
            price: 400,


        },
        {
            img: laptop,
            title: 'Z4 laptop',
            price: 400,


        },
        {
            img: pc,
            title: 'Z4 pc',
            price: 300,


        },
        {
            img: keyboard,
            title: 'Z4 keyboard',
            price: 400,


        },
        {
            img: mouse,
            title: 'Z4 mouse',
            price: 400,


        },


    ]


    const [filterProducts, setFilterProducts] = useState(products)


    const search = (e) => {

        const filterArray = products.filter(product => product.title.toLocaleLowerCase().includes(e.target.value))

        if (filterArray.length != 0) {


            setFilterProducts(filterArray)
        }


    }
    return (




        <div className='w-full relative px-10 mx-10 top-3'>

            <div className='header flex justify-between px-2 py-2 '>

                <div>
                    <h1 className='text-2xl'>Shop</h1>

                </div>
                <div className='search flex justify-between items-center bg-gray-200 rounded px-5 py-2'>
                    <input type="text" placeholder='search here' className='bg-transparent outline-0' onChange={search} />
                    <button onClick={() => search()}


                    ><AiOutlineSearch></AiOutlineSearch></button>
                </div>



            </div>

            <div className="categories w-full flex space-x-8 px-5 py-5">


                <div className='text-2xl bg-black rounded text-white px-5 py-2 mx-2 drop-shadow-xl'>
                    <p >Watches</p>

                </div>
                <div className='text-2xl bg-white rounded text-black px-5 py-2 mx-2 drop-shadow-xl'>
                    <p >sunglass</p>

                </div>
                <div className='text-2xl bg-white rounded text-black px-5 py-2 mx-2 drop-shadow-xl'>
                    <p >glasses</p>

                </div>
                <div className='text-2xl bg-white rounded text-black px-5 py-2 mx-2 drop-shadow-xl'>
                    <p >keyboard</p>

                </div>
                <div className='text-2xl bg-white rounded text-black px-5 py-2 mx-2 drop-shadow-xl'>
                    <p >mouse</p>

                </div>
                <div className='text-2xl bg-white rounded text-black px-5 py-2 mx-2 drop-shadow-xl'>
                    <p >laptop</p>

                </div>
                <div className='text-2xl bg-white rounded text-black px-5 py-2 mx-2 drop-shadow-xl'>
                    <p >monitor</p>

                </div>
                <div className='text-2xl bg-white rounded text-black px-5 py-2 mx-2 drop-shadow-xl'>
                    <p >pc</p>

                </div>
            </div>


            <div className="products grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1  gap-8 p-4 z-10">

                {

                    filterProducts.map((product) => {

                        return (
                            <>


                                <div className='product h-[300px] bg-white drop-shadow-2xl p-2 border rounded-md  '>
                                    <img src={product.img} alt="" className='w-full h-[60%] object-cover p-2' />
                                    <div className='detail m-2 bg-gray-100 p-2'>
                                        <h1 className='text-3xl'>{product.title}</h1>
                                        <p className='text-sm'>a1 watch</p>

                                        <div className='w-full flex justify-between'>
                                            <p className='text-xl'>price:{product.price}</p>
                                            <AiOutlineShoppingCart size={'1.4rem'}></AiOutlineShoppingCart>

                                        </div>

                                    </div>
                                </div>
                            </>
                        )


                    })}

            </div>

        </div>





    );
};

export default Main;