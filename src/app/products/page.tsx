import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";

export const revalidate = 3; // ISR 렌더링, 3초마다 빌드 및 재렌더링

export default async function ProductsPage() {
  // 서버 파일(DB)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    // next: { revalidate: 0 }, // SSR, 요청이 올 때마다 서버에서 html을 만들고 전달
    // cache: 'force-cache', // SSG
    // cache: 'no-store' // SSR
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}><Link href={`/products/${id}`}>{name}</Link></li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}