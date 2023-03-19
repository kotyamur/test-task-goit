import { Avatar, BgImg, Button, FollowersText, Layout, Line, LogoBox, TweetsText } from "./Card.styled";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import cardImg from '../../images/Boy.png';
import bgImg from '../../images/pictureBg.png';
import { useEffect, useState } from "react";
import { getDataFromLocalStorage, setDataToLocalStorage } from "utils/getSetDataLocalStorage";

export const Card = () => {
  const [followersAmount, setFollowersAmount] = useState(
    () => getDataFromLocalStorage().followersAmount ?? 100500
  );
  const [isFollow, setIsFollow] = useState(
    () => getDataFromLocalStorage().isFollow ?? false
  );

  useEffect(() => {
    setDataToLocalStorage({ followersAmount, isFollow });
  }, [followersAmount, isFollow]);

  const countedFollowersAmount = new Intl.NumberFormat('en-US').format(
    followersAmount
    );
    const btnText = isFollow ? 'Following' : 'Follow';
    const handleClick = () => {
      if (isFollow) {
        setFollowersAmount(followersAmount - 1);
        setIsFollow(false);
        return;
      }
      setFollowersAmount(followersAmount + 1);
      setIsFollow(true);
    };
    
  return (
    <Layout>
      <LogoBox>
        <Logo />
      </LogoBox>
      <BgImg src={bgImg} alt="avatar" />
      <Avatar src={cardImg} alt="avatar" />
      <Line />
      <TweetsText>777 tweets</TweetsText>
      <FollowersText>{countedFollowersAmount} Followers</FollowersText>
      <Button type="button" onClick={handleClick} isFollow={isFollow}>
        {btnText}
      </Button>
    </Layout>
  );
};
