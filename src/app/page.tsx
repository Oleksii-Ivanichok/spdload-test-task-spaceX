import Image from 'next/image'
import Banner from "@/components/Home/Banner";
import PopularTours from "@/components/Home/PopularTours";

export default function Home() {
  return (
      <main>
          <Banner/>
          <PopularTours/>
      </main>
  )
}
