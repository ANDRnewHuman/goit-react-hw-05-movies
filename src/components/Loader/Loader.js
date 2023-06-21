import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';
import Loader from 'react-loader-spinner';

const loader = () => (
  <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={5000}
    className={style.Loader}
  />
);

export default loader;
