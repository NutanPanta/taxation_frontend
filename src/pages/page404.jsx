import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// mui
import { Button, Typography } from '@mui/material';
// config
import { PATH_AFTER_LOGIN } from '../config';
// images
import NotFound from '../assets/images/404.gif';

const Page404Wrapper = styled.section`
  padding: 40px 0;
  background: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Page404ImageWrapper = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
`;

const Page404ImageText = styled.div`
  font-size: 80px;
  text-align: center;
`;

const Page404 = ({ clearError }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Page404Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 d-flex justify-content-center'>
            <div className='col-sm-10 col-sm-offset-1  text-center'>
              <Page404ImageWrapper>
                <Page404ImageText>404</Page404ImageText>
              </Page404ImageWrapper>

              <div className='contant_box_404'>
                <Typography variant='h2'>Looks like you're lost</Typography>

                <p className='mb-3' style={{ maxWidth: '100%' }}>
                  The page you are looking for is not available!
                </p>

                <Button
                  variant='contained'
                  to={isAuthenticated ? PATH_AFTER_LOGIN : '/auth/login'}
                  component={Link}
                  onClick={() => clearError && clearError()}
                >
                  Go to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page404Wrapper>
  );
};

export default Page404;
