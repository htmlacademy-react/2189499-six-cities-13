import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
function ErrorPage(): JSX.Element {
  return (
    <div className='error-page'>
      <h1 className='error-page-title'><b>404</b></h1>
      <h2 className='error-page-text'>Page Not Found :&lt;</h2>
      <h3 className='error-page-link'><b><Link to={AppRoute.Main}>Вернуться на главную страницу</Link></b></h3>
    </div >
  );
}

export default ErrorPage;
