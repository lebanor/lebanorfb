import styled from 'styled-components';

const Wrapper = styled.div`
  height: 82px;
  background-color: #3b5998;
`;

const SignupBanner = styled.div`
  position: absolute;
  margin-top: 8px;
  margin-left: 445px;

  i {
    background-image: url(/static/fb-banner.png);
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    height: 24px;
    width: 170px;
    height: 34px;
    background-position: 0 -49px;
  }

  button {
    background-color: #42b72a;
    color: #fff;
    line-height: 26px;
    border: 1px solid #42b72a;
    border-radius: 2px;
    box-sizing: content-box;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    text-shadow: none;
    vertical-align: middle;

    position: relative;
    top: -50px;
    left: 180px;
    width: 54px;
    height: 24px;
  }
`;

const Header = () => (
  <Wrapper>
    <SignupBanner>
      <h1>
        <a href='https://www.facebook.com/' title='Go to Facebook Home'>
          <i className='fb_logo img sp_OjtZjqBWeR8 sx_b0ae32' />
        </a>
      </h1>
      <button>
        Sign Up
      </button>
    </SignupBanner>
  </Wrapper>
);

export default Header;