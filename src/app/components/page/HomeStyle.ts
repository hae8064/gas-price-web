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
      padding-left: 0.25rem;
      color: #000;
      display: flex;
      align-items: center;

      & > i {
        width: 2.25rem;
        font-size: 0.75rem;
        color: grey;
        margin-right: 1rem;
      }
    }
  }
`;
