import Image from 'next/image';
import { client } from "@/lib/sanityClient";
import { Image as IImage} from 'sanity';
import { urlForImage } from '../../sanity/lib/image';
import Hero from '@/Components/views/Hero';
import Promotion from '@/Components/widgets/Promotion';
import ProducSlide from '@/Components/widgets/ProducSlide';
import Vintage from '@/Components/widgets/Vintage';
import Newsletter from '@/Components/widgets/Newsletter';

export default async function Home() {
  return(
   <div className=''>

    {/* {Hero Section Her} */}

    <Hero />
     
   {/* Promotion Section here */}

   <Promotion />

   {/* Product Slider Section here */}
   
   <ProducSlide />

   {/* Vintage Jewellery Section here */}

   <Vintage />

   {/* Newsletter Section here */}
    
    <Newsletter />

    </div>
  )
}
