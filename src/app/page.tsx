import Image from 'next/image'
import Banner from "@/components/Banner";
import PopularTours from "@/components/PopularTours";

export default function Home() {
  return (
      <main>
          <Banner/>
          <PopularTours/>
      </main>
  )
}
