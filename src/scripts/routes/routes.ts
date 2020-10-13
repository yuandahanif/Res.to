/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import PageI from '../views/pages/pages.interface';

const routes: {[key: string]: PageI} = {
  '/': Home,
  '/detail/:id': Detail,
};

export default routes;
