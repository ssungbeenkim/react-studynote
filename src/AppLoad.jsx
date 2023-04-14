/* 로딩중, 에러, 로드 성공을 알려주는 상태를 추가해보자.  */
import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = () => setChecked((prev) => !prev);
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;
  return (
    <>
      <input type='checkbox' value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show only 🔥Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
