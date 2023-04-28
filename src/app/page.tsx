import Image from 'next/image'
import './globals.css'
import os from 'os'; // 노드 APIs
import Counter from '@/components/Counter';

// app 내의 컴포넌트는 기본적으로 '서버컴포넌트' 이다.
export default function Home() {
  // console.log(os.hostname()); node api를 사용, 서버에서 실행됨.
  return (
    <>
      <h1>Home page</h1>
      <Counter />
      <Image 
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  )
}
