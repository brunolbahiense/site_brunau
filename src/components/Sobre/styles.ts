import styled from 'styled-components'

export const SobreContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  width: 100%;
  min-height: 80vh;
  gap: 10em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Photo = styled.div`
  background-image: url('/img/assets/mainPhoto.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 600px;
  height: 700px;
  box-shadow: 9px 4px 11px 0px rgba(0, 0, 0, 0.25);
`
export const TextContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SobreTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 1em;
`
export const SobreDescription = styled.p`
  font-size: 2em;
  text-align: center;
`
