import  { FC } from 'react';
import { Redirect, useParams, withRouter } from 'react-router-dom';

const HomePage: FC = () => {
  let { id }: any = useParams();
  const page = id  ? "/tables" : "/dashboardLogin"
  return (
     <Redirect to={page} /> 
  );
}

export default withRouter(HomePage);