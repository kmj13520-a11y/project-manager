import heroImg from "../assets/portfolio.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>리액트 프로젝트 포트폴리오</h1>
          <p>
            이 포트폴리오 사이트는 React를 중심으로 다양한 웹 프로젝트를
            제작하고 학습한 결과물을 한 곳에 모아놓은 공간입니다. TMDB API를
            활용한 영화 추천 서비스부터 구구단 게임, 메모리 매칭 게임까지 다양한
            인터랙티브 기능을 직접 설계하고 구현했습니다.
            <br />
            <br />
            컴포넌트 기반 설계, 상태 관리, 이벤트 처리, 비동기 데이터 흐름 등
            React의 핵심 개념들을 프로젝트 전반에 적용하며 프론트엔드
            개발자로서의 기초 역량과 실전 능력을 차근차근 쌓아가고 있습니다.
            또한 UI/UX를 고려한 화면 구성과 재사용 가능한 구조 설계를 통해
            완성도 높은 사용자 경험을 제공하는 것을 목표로 하였습니다.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="portfolio" className="img" />
        </div>
      </div>
    </section>
  );
}
