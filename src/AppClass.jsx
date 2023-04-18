/* 
함수형 컴포넌트가 나오기 이전에는 클래스 컴포넌트를 사용했다.
많은 곳에서 함수로 쓰기를 원해서 함수를 사용하게 되었지만, 클래스 컴포넌트는 여전히 많이 사용된다.
클래스형 컴포넌트에 비해 함수형 컴포넌트는 무언가 변경될 때마다 함수 전체가 다 호출되기 때문에 
useEffect나 useMemo와 같은 훅을 사용하여 최적화를 해야하지만 
클래스는 멤버함수로 정의되어져있기 때문에 상태가 변경될 때 render 함수만 호출되기 때문에 
최적화를 할 필요가 없다.
또한 객체지향 프로그래밍으로 클라에서 복잡한 일을 해야 할 때는 클래스형 컴포넌트가 더 편할 수 있다.
그러나 대세는 함수형 컴포넌트이고 함수가 모두 호출되어 성능이 걱정되어도 훅이 잘 되어 있으며 
리엑트 팀 내부에서 컴포넌트를 재사용 할 수 있는 방법을 고안하고 있으니 걱정하지 않아도 될 것이다. 
*/

import React from 'react';
import Counter from './basic/components/Counter';

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    // 컴포넌트가 마운트 되었을 때 호출되는 메서드
    console.log('컴포넌트가 마운트 되었음!');
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트 되기 직전에 호출되는 메서드
    console.log('컴포넌트가 곧 언마운트될 예정임!');
  }

  render() {
    return (
      <div className='container'>
        <div className='banner'>
          Total Count: {this.state.count} {this.state.count > 10 ? '🔥' : '❄️'}
        </div>
        <div className='counters'>
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
