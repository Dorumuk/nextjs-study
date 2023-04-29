import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";
import clothesImage from "../../../public/images/clothes.jpg";
import Image from "next/image";

// export const revalidate = 3; // ISR 렌더링, 3초마다 빌드 및 재렌더링

export default async function ProductsPage() {
  // 서버 파일(DB)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt="Cothes" priority />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
