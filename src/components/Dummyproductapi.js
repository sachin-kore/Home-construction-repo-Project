import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Laptop from './../assets/laptop.jpg'

export default function Dummyproductapi() {
  const [demo, setdemo] = useState(true);
  const [data, setdata] = useState();
  const fetchproducts = async () => {
    let result = await axios.get('https://dummyjson.com/products').then((res) => {
      setdata(res.data.products);
    }).then((err) => {
      return err;
    })
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    let result = await axios.get("https://dummyjson.com/todos").then((res) => {
      setdata(res);
      console.log(result);
    }).then((err) => {
      console.log(err)
    }, []);
  }

  return (
    <>

      <div className='flex flex-wrap bg-white justify-between'>
        {/* {data.map((val) => {
          return <div key={val.id} className='p-3 m-1 border border-gray-500 w-[300px] gap-10 mt-5'>
            <img src={val.thumbnail} className='h-[150px] m-2' />
            <div className='flex justify-between'>
              <span>{val.title}</span>
              <b>${val.price}</b>
            </div>
            <div className='justify-center pt-2  items-center'>
              <button className='bg-[#00df9a] mb-2 w-full p-1  rounded-sm'>Add to cart</button>
              <button className='bg-red-600 w-full  p-1 rounded-sm'>Remove from cart</button>
            </div>
          </div>
        })} */}




      </div>

      <div className='text-black bg-white flex flex-wrap justify-between'>
        {/* {data.map((val) => {
          return <div id={val.id} className=' p-3 m-2 border border-gray-500 gap-8 mt-5'>
            <img src={val.thumbnail} className='w-[300px] h-[250px]' />
            <div className='flex justify-between '>
              <span>{val.title}</span>
              <span className='font-bold'>${val.price}</span>
            </div>
            <div className='flex flex-col'>
              {demo ? <button className='bg-green-600  p-1 rounded-md w-auto mt-2'>Add to Cart</button> :
                <button className='bg-red-600 p-1 rounded-md w-auto mt-2'>Remove from Cart</button>}
            </div>
          </div>
        })} */}
      </div>



      <figure class="bg-white rounded-xl p-8cd">
        <img class="w-24 h-24 rounded-full mx-auto" src={Laptop} alt="" width="384" height="512" />
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>


  )
}
