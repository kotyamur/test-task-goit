import { Avatar, BgImg, Button, FollowersText, Layout, Line, LogoBox, TweetsText } from "./Card.styled";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import cardImg from '../../images/Boy.png';
import bgImg from '../../images/pictureBg.png';

export const Card = () => {
    return (
      <Layout>
        <LogoBox>
          <Logo />
        </LogoBox>
        <BgImg src={bgImg} alt="avatar" />
            <Avatar src={cardImg} alt="avatar" />
            <Line />
        <TweetsText>777 tweets</TweetsText>
        <FollowersText>100,500 Followers</FollowersText>
        <Button>Follow</Button>
      </Layout>
    );
};
