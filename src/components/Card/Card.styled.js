import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding-top: ${p => p.theme.space[7]}px;
  padding-bottom: ${p => p.theme.space[8]}px;
  padding-left: ${p => p.theme.space[8]}px;
  padding-right: ${p => p.theme.space[8]}px;
`;

export const LogoBox = styled.div`
  position: absolute;
  left: ${p => p.theme.space[5]}px;
  top: ${p => p.theme.space[5]}px;
`;

export const BgImg = styled.img`
  margin-bottom: 88px;
`;

export const AvatarBox = styled.div`
  position: absolute;
  top: 178px;
  z-index: 1;
  width: 80px;
  height: 80px;
  background: #5736a3;
  border-radius: ${p => p.theme.radii.round};
`;

export const Avatar = styled.img`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: -1;
  width: 50px;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  width: 100%;
  width: 380px;
  height: 8px;
  background: ${p => p.theme.colors.bg};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primaryText};
  text-transform: uppercase;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const TweetsText = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semi};
  color: ${p => p.theme.colors.primaryText};
  text-transform: uppercase;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const FollowersText = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semi};
  color: ${p => p.theme.colors.primaryText};
  text-transform: uppercase;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => {
    return p.isFollow ? p.theme.colors.green : p.theme.colors.bg;
  }};
  color: ${p => p.theme.colors.btnText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    scale: 1.1;
  }
`;
