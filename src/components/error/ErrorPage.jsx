import { useRouteError } from 'react-router-dom';
import ErrorStyles from './ErrorPage.module.css';
export function ErrorPage() {
  const error = useRouteError();
  return (
    <div className={ErrorStyles.errorPage}>
      <img src='/404.jpeg' alt='Error Image 404' width='500' height='500'></img>
      <h1 className={ErrorStyles.errorText}>
        {error.statusText || error.message}
      </h1>
    </div>
  );
}
