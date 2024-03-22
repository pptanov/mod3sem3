import { HeadText } from "./showHeadText";
import showStyledImg from "./imgModule";


export default function Page3() {
  return (
    <>
      <HeadText>Невероятно красивое небо в Краснодаре</HeadText>

      {showStyledImg()}
    </>
  );
}
