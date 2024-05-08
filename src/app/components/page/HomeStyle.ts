import styled from "styled-components";

export const HomeContainer = styled.section`
  header {
    background: #5ab2ff;
    height: 7rem;
    padding: 1rem;
    color: #fff;

    & > h2 {
      font-weight: 600;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    & > p {
      color: #000;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .gasoline,
    .diesel {
      width: 100%;
      height: 3rem;
      background: #fff;
      border-radius: 0.75rem;
    }
  }
`;
