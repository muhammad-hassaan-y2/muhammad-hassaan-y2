import { Image as IImage} from 'sanity';
import { client } from "@/lib/sanityClient";
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';


// export const getProductData = async () => {
//   const res = await client.fetch(`*[_type =="product"]{
//     price,
//     _id,
//     title,
//     image,
//     category -> {
//       name
//     }
//   }`);
//   return res
// }


// export default async function Home() {

//   interface IProduct {
//     title: string,
//     _id: string,
//     description: string,
//     image: IImage,
//     price: number,
//     category : {
//       name: string
//     }
//   }

  
//   const data:IProduct[] = await getProductData()
//   console.log(data)
//   return (
//   <div className="flex justify-evenly mt-16 py-10 flex-wrap">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-24 mx-auto">
//     {data.map((item) => (
//       <div>
//         <Image src={urlForImage(item.image).url()} alt={"imag"} 
//         width={200} height={300} 
//         className='max-h-[200px] object-cover object-top
//         ' />
//       <h1 className='font-bold'>{item.title}</h1>
//       <p>{item.description}</p>
//       <h4>${item.price}</h4>

//       <button className='border py-2 px-6 rounded bg-blue-600 text-white
//       font-medium'>
//         Add to Cart</button>
//       </div>
//     ))}

//   </div></div>
//   )
// }

