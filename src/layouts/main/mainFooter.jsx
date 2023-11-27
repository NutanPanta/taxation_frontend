import { Link as RouterLink } from 'react-router-dom';
// @mui
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack,
} from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '@assets/images/logo.svg';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Taxation',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'support@taxation.cc', href: '#' },
      { name: 'Kathmandu, Nepal', href: '#' },
    ],
  },
];

// const RootStyle = styled('div')(({ theme }) => ({
//   position: 'relative',
//   backgroundColor: theme.palette.background.default,
// }));

// ----------------------------------------------------------------------

const MainFooter = () => {
  return (
    <div className='position-relative'>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo />
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant='body2' sx={{ pr: { md: 5 } }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quo, sed molestiae maiores, quaerat illo quod dolore officia ipsum
              sit expedita quis possimus dolores sunt iste qui, quibusdam ea
              hic.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent='space-between'
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component='p' variant='overline'>
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color='inherit'
                      variant='body2'
                      component={RouterLink}
                      sx={{ display: 'block' }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component='p'
          variant='body2'
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2021. All rights reserved
        </Typography>
      </Container>
    </div>
  );
};

export default MainFooter;
