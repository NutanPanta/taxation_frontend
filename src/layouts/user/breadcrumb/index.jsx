import {
  Link as RouterLink,
  useLocation,
  useParams,
  useMatch,
} from 'react-router-dom';
import * as _ from 'lodash';
// mui
import { Breadcrumbs, Link, Typography } from '@mui/material';
// api
import { House } from '@phosphor-icons/react';
import { PATH_DASHBOARD } from '@/routes/paths';

// ----------------------------------------------------------------------

const BreadCrumb = () => {
  const location = useLocation();

  const match = useMatch(location.pathname);
  const pathnames = location.pathname.split('/').filter((pathname) => pathname);

  const filteredPathnames = pathnames.filter(
    (pathname) => pathname !== 'dashboard' && pathname !== 'home'
  );

  const currentPage = location.pathname.split('/').at(2);

  const replacements = {};

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      {pathnames?.length < 3 && (
        <Typography className='text-capitalize' variant='h4'>
          {currentPage}
        </Typography>
      )}
      {pathnames?.length > 2 && (
        <Link
          variant='subtitle4'
          sx={{ display: 'flex', alignItems: 'center' }}
          underline='hover'
          color='inherit'
          to={PATH_DASHBOARD.general.home}
          component={RouterLink}
        >
          <House size={22} />
        </Link>
      )}
      {pathnames?.length > 2 &&
        filteredPathnames.map((pathname, key) => {
          const routePath = `/${pathnames.slice(0, key + 2).join('/')}`;
          const isMatch = match && match.path === routePath;
          const isLast = key === filteredPathnames.length - 1;

          const replacement = replacements[pathname];
          const displayPathname = replacement
            ? replacement
            : _.capitalize(pathname);

          return isLast ? (
            <Typography key={routePath} variant='subtitle4' color='primary'>
              {displayPathname}
            </Typography>
          ) : (
            <Link
              variant='subtitle4'
              underline='hover'
              color={isMatch ? 'textPrimary' : 'inherit'}
              to={routePath}
              component={RouterLink}
              key={key}
            >
              {displayPathname}
            </Link>
          );
        })}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
