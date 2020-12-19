import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-contents: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div``;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.215rem;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;

  @media (min-width: 600px) {
    font-size: 1.25rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
