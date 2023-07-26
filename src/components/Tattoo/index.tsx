import * as S from './styles'

const array = ['01', '02', '03', '04', '05', '06']

const Tattoo = () => (
  <S.TattooContainer id="Tattoo">
    <S.TattooTitle>Confira minhas Tattoos</S.TattooTitle>
    <S.PortfolioContainer>
      {array.map((item) => (
        <S.Tattoo src={`img/assets/tattoo_${item}.jpg`} key={item} />
      ))}
    </S.PortfolioContainer>
  </S.TattooContainer>
)

export default Tattoo
