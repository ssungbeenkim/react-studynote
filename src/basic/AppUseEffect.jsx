/* use Effect는 컴포넌트를 작성할 때 처음으로 네트워크 통신을 받아오거나 처음으로 
무거운 일을 처리해 줘야 하는 것이 있으면 유용하게 사용할 수 있다. */
import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  // useEffect를 사용하지 않으면 무한루프에 빠진다.
  // 컴포넌트가 처음 mount되었을 때 한번만 네트워크 통신을 받아오고, 그 뒤로는 네트워크를 호출하지 않토록 한다.
  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    // return에는 컴포넌트가 unmount 될 때 실행될 콜백함수를 전달해준다.
    // 컴포넌트가 없어질 때 메모리 정리나 소켓을 닫거나 등의 해야 할 일을 return으로 전달하면 된다.
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]); // DependencyList에 텅빈 배열을 전달하면 컴포넌트가 보여질 때 콜백을 한번만 호출한다.
  /* 특정한 값이 변경될 때 다시 네트워크 요청을 해야 할 때가 있다.
  checked를 dependencyList에 전달하므로써 초기 한번 실행 이후에도 dependency가 변경될 
  때마다 useEffect의 콜백이 다시 실행이 된다.*/

  /* 실행해 보면 바로 언마운트 되었다가 다시 마운트 된 것처럼 행동하는데, strict mode와 관련있다. 
  https://legacy.reactjs.org/docs/strict-mode.html#ensuring-reusable-state
  */

  return (
    // 리스트에 자식요소를 만드는 경우 고유한 key를 전달하지 않으면 Warning
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
