import styled from 'styled-components';
import Link from 'next/link';

//Styled Compoenents
const Header = styled.header`
  height: 80px;
  padding: 0 48px;
  width: 100%;
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 992px) {
    padding: 0 24px;
  }
`;

const HeaderContainer = styled.header`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.titleColor};
  text-decoration: none;

  svg {
    height: 24px;
    width: auto;
    margin-right: 12px;
  }
`;

export default function HeaderMain() {
  return (
    <Header>
      <HeaderContainer>
        <Link href='/'>
          <Logo>
            <svg
              width='300'
              height='360'
              viewBox='0 0 300 360'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_109_7)'>
                <path
                  d='M148.5 13C106.333 34.1667 21.3 76.5 18.5 76.5V243L152 340.5L285 232V76.5L148.5 13Z'
                  fill='#55ACEE'
                  fillOpacity='0.24'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M299.92 122.628L299.92 122.528V122.527C299.907 108.233 299.895 93.9415 299.933 79.6454C299.933 72.0475 296.796 66.9189 289.793 63.6613C245.61 43.0898 201.484 22.4519 157.415 1.74753C155.125 0.588782 152.591 -0.0154266 150.019 -0.0154266C147.448 -0.0154266 144.913 0.588782 142.623 1.74753C98.8105 22.3253 54.9626 42.8176 11.0795 63.2244C3.40539 66.7764 0 72.0665 0 80.4242C0.080515 101.429 0.0765555 122.434 0.0725957 143.441C0.0690072 162.478 0.0654184 181.517 0.124704 200.557C0.0830327 207.174 0.52223 213.786 1.43889 220.34C5.0745 244.549 16.1636 264.684 36.1354 279.481C70.2213 304.744 104.377 329.909 138.604 354.976C147.707 361.672 152.398 361.624 161.482 354.976C185.483 337.323 209.465 319.668 233.427 302.009C236.789 299.525 240.189 297.082 243.588 294.64C252.302 288.38 261.017 282.119 269.112 275.15C290.551 256.715 299.549 232.412 299.856 204.746C300.039 190.409 300.002 176.072 299.964 161.735C299.948 155.814 299.933 149.893 299.933 143.971C299.933 136.856 299.927 129.742 299.92 122.628ZM270.512 211.128C270.167 229.296 262.272 244.92 247.317 256.07C245.077 257.74 242.837 259.409 240.595 261.076C232.784 239.545 213.017 223.143 189.431 221.706C164.808 220.08 140.109 219.906 115.464 221.183C88.0366 222.681 67.9787 237.618 59.8777 261.466C58.2253 260.258 56.572 259.051 54.9178 257.846C38.6103 245.955 29.977 229.771 29.4206 210.036C28.911 190.412 28.9741 170.779 29.0373 151.146C29.0633 143.062 29.0893 134.978 29.0753 126.895C29.0753 123.673 29.0798 120.449 29.0843 117.226V117.225V117.225C29.0972 108.013 29.1101 98.7985 29.0177 89.5892C29.0177 87.2054 29.8043 86.0942 31.9722 85.0875C70.5154 67.15 109.046 49.1809 147.563 31.1801C149.123 30.5534 150.868 30.5534 152.427 31.1801C190.906 49.0162 229.347 66.941 267.75 84.9545L267.953 85.0501C269.619 85.8303 271.001 86.4774 270.992 88.9054C270.937 102.561 270.948 116.218 270.959 129.874C270.981 156.964 271.003 184.052 270.512 211.128ZM180.221 191.655C193.444 178.558 202.68 162.073 206.883 144.068C211.19 125.184 210.113 107.127 196.171 91.6962C187.866 82.5382 176.962 76.0481 164.872 73.0661C152.781 70.0841 140.061 70.7475 128.358 74.9705C105.163 83.4413 91.13 103.296 91.13 127.486C91.13 149.391 102.408 174.534 120.328 192.087C138.249 209.64 162.593 209.496 180.221 191.655Z'
                  fill='#55ACEE'
                />
              </g>
              <defs>
                <clipPath id='clip0_109_7'>
                  <rect width='300' height='360' fill='white' />
                </clipPath>
              </defs>
            </svg>
            Basic Privacy
          </Logo>
        </Link>
      </HeaderContainer>
    </Header>
  );
}