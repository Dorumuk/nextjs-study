import { getProducts } from "@/service/products";
import Link from "next/link";

const products = ['shirt', 'pants', 'skirt', 'shoes'];

export default async function ProductsPage() {
  // 서버 파일(DB)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}><Link href={`/products/${id}`}>{name}</Link></li>
        ))}
      </ul>
    </>
  );
}