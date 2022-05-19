import styles from './main.less';
import { connect } from 'umi';
import { Button } from 'antd';
function MainPage(props) {
  console.log(props);
  const onCLickBtn = (n) => {
    props.dispatch({
      type: 'main/wait2sAdd',
      payload: n,
    });
  };
  return (
    <div>
      <h1 className={styles.title}>
        {props.count}
        {props.children}
        <Button onClick={() => onCLickBtn(2)}>123</Button>
      </h1>
    </div>
  );
}

export default connect(({ main: { count } }) => {
  return {
    count,
  };
})(MainPage);
