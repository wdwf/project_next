import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 65px;
  color: ${props => props.theme.colors.text_primary};
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  span {
    width: 70px;
    height: 8px;
    background-color: ${props => props.theme.colors.text_primary};
    display: inline-block;
    margin-right: 10px;
  }
`;

export const Locations = styled.article``;

export const GalleryImages = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`

  img {
    width: 360px;
  }
`;

export const ContentText = styled.div`
  margin-top: 15px;
`;

export const TitleCard = styled.h3`
  color: ${props => props.theme.colors.text_primary_opacity};
`;

export const Spot = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  p {
    color: ${props => props.theme.colors.text_primary_opacity};
    margin-left: 10px;
  }
`;

export const SectionNumber = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      color: ${props => props.theme.colors.text_primary_opacity};
      display: flex;
      margin: 5px;

      &:nth-child(1) {
        font-weight: 700;
        font-size: 20px;
        align-items: center;

        &::after {
          content: "";
          display: inline-block;
          width: 50px;
          height: 2px;
          background-color: ${props => props.theme.colors.text_primary};
          margin-left: 5px;
        }
      }
      a {
        text-decoration: none;
        color: ${props => props.theme.colors.text_primary};
      }
    }
  }
`;

export const WrapperArrow = styled.div`
  display: flex;
`;

export const ButtonLeft = styled.div`
  transform: rotate(90deg) scale(.5);
  cursor: pointer;
`;

export const ButtonRight = styled.div`
  transform: rotate(270deg) scale(.5);
  cursor: pointer;
`;