import React, { useEffect } from "react";
import Img1 from "./../../assets/img1.jpg";
import Img2 from "./../../assets/img2.jpg";
import Img3 from "./../../assets/img3.jpg";
import Img4 from "./../../assets/img4.jpg";
import Img5 from "./../../assets/img5.jpg";
import Img6 from "./../../assets/img6.jpg";
import MusicLoad from "./../../assets/music.mp3";
import {
  ButtonDown,
  SectionWrapper,
  MainContent,
  BigTitle,
  SecondTitle,
  FinalText,
  ButtonWrapper,
  ButtonDownTwo,
  PrincipalTitle,
  SecondTranslateTitle,
  ImgView,
} from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactFullpage from "@fullpage/react-fullpage";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";

export default function Home() {
  useEffect(() => {
    document.querySelector("audio").currentTime = 47;
    let playAttempt = setInterval(() => {
      document.querySelector("audio").play()
        .then(() => {
          clearInterval(playAttempt);
        })
        .catch(error => {
          console.log('Unable to play the video, User has not interacted yet.');
        });
    }, 3000);
  }, []);

  return (
    <>
      <audio controls loop autoplay style={{display: 'none'}} currentTime={46}>
        <source src={MusicLoad} type="audio/mp3" />
      </audio>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div
                className="section"
                style={{ overflow: "hidden", backgroundColor: "#6CF5E0" }}
              >
                <SectionWrapper>
                  <MainContent>
                    <BigTitle>Oieeee amor!</BigTitle>
                    <SecondTitle>Eai como vc ta? ❤️</SecondTitle>
                    <FinalText>
                      O amor de Deus é o que nos conecta, por amor Deus fez, faz
                      e fará todas as coisas, O Amor me amou e morreu e
                      ressuscitou por mim, Jesus é O próprio Amor de Deus e
                      quanto mais conhecemos Ele mais poderemos amar um ao
                      outro, e eu sou grato a Jesus por poder aprender mais
                      sobre Ele e poder viver mais o amor de Deus com vc 🤍
                    </FinalText>
                  </MainContent>
                  <ButtonDown onClick={() => fullpageApi.moveSectionDown()}>
                    <BiChevronDownCircle />
                  </ButtonDown>
                </SectionWrapper>
              </div>
              <div className="section" style={{ backgroundColor: "#60DBC9" }}>
                <SectionWrapper>
                  <MainContent
                    style={{ padding: "0px 5%", JustifyContent: "flex-start" }}
                  >
                    <PrincipalTitle>
                      I prayed for a girl who would pray for me, One who fears
                      God, who leads!
                    </PrincipalTitle>
                    <SecondTranslateTitle>
                      "Eu orei por uma garota que oraria por mim, uma que teme a
                      Deus, que lidera"
                    </SecondTranslateTitle>
                    <ImgView src={Img1} />
                  </MainContent>
                  <ButtonWrapper>
                    <ButtonDownTwo
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <BiChevronDownCircle />
                    </ButtonDownTwo>
                    <ButtonDownTwo onClick={() => fullpageApi.moveSectionUp()}>
                      <BiChevronUpCircle />
                    </ButtonDownTwo>
                  </ButtonWrapper>
                </SectionWrapper>
              </div>
              <div
                className="section"
                style={{ overflow: "hidden", backgroundColor: "#50B5A6" }}
              >
                <SectionWrapper>
                  <MainContent
                    style={{ padding: "0px 5%", JustifyContent: "flex-start" }}
                  >
                    <PrincipalTitle>
                      She'd love me so well, She'd be so cute, She'd love Jesus
                      with all her heart.
                    </PrincipalTitle>
                    <SecondTranslateTitle>
                      "Ela me amaria tanto, ela seria tão fofa, ela amaria Jesus
                      de todo coração"
                    </SecondTranslateTitle>
                    <ImgView src={Img2} />
                  </MainContent>
                  <ButtonWrapper>
                    <ButtonDownTwo
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <BiChevronDownCircle />
                    </ButtonDownTwo>
                    <ButtonDownTwo onClick={() => fullpageApi.moveSectionUp()}>
                      <BiChevronUpCircle />
                    </ButtonDownTwo>
                  </ButtonWrapper>
                </SectionWrapper>
              </div>
              <div
                className="section"
                style={{ overflow: "hidden", backgroundColor: "#34756B" }}
              >
                <SectionWrapper>
                  <MainContent
                    style={{ padding: "0px 5%", JustifyContent: "flex-start" }}
                  >
                    <PrincipalTitle>
                      And everyday I'm with you I don't think I could ever love
                      you more.
                    </PrincipalTitle>
                    <SecondTranslateTitle>
                      "E todos os dias estou com você acho que nunca poderia te
                      amar mais"
                    </SecondTranslateTitle>
                    <ImgView src={Img3} />
                  </MainContent>
                  <ButtonWrapper>
                    <ButtonDownTwo
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <BiChevronDownCircle />
                    </ButtonDownTwo>
                    <ButtonDownTwo onClick={() => fullpageApi.moveSectionUp()}>
                      <BiChevronUpCircle />
                    </ButtonDownTwo>
                  </ButtonWrapper>
                </SectionWrapper>
              </div>
              <div
                className="section"
                style={{ overflow: "hidden", backgroundColor: "#1D423C" }}
              >
                <SectionWrapper>
                  <MainContent
                    style={{ padding: "0px 5%", JustifyContent: "flex-start" }}
                  >
                    <PrincipalTitle>
                      But everyday I find out That I love you more than the day
                      before.
                    </PrincipalTitle>
                    <SecondTranslateTitle>
                      "Mas todo dia eu descubro Que te amo mais do que no dia
                      anterior"
                    </SecondTranslateTitle>
                    <ImgView src={Img4} />
                  </MainContent>
                  <ButtonWrapper>
                    <ButtonDownTwo
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <BiChevronDownCircle />
                    </ButtonDownTwo>
                    <ButtonDownTwo onClick={() => fullpageApi.moveSectionUp()}>
                      <BiChevronUpCircle />
                    </ButtonDownTwo>
                  </ButtonWrapper>
                </SectionWrapper>
              </div>
              <div
                className="section"
                style={{ overflow: "hidden", backgroundColor: "#183631" }}
              >
                <SectionWrapper>
                  <MainContent
                    style={{ padding: "0px 5%", JustifyContent: "flex-start" }}
                  >
                    <PrincipalTitle>
                      She shows me love in the way she acts Reminds me of who I
                      am in God and not in my past
                    </PrincipalTitle>
                    <SecondTranslateTitle>
                      "Ela me mostra amor na forma como age, me lembra de quem
                      eu sou em Deus e não do meu passado"
                    </SecondTranslateTitle>
                    <ImgView src={Img5} />
                  </MainContent>
                  <ButtonWrapper>
                    <ButtonDownTwo
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <BiChevronDownCircle />
                    </ButtonDownTwo>
                    <ButtonDownTwo onClick={() => fullpageApi.moveSectionUp()}>
                      <BiChevronUpCircle />
                    </ButtonDownTwo>
                  </ButtonWrapper>
                </SectionWrapper>
              </div>
              <div
                className="section"
                style={{ overflow: "hidden", backgroundColor: "#16332E" }}
              >
                <SectionWrapper>
                  <MainContent
                    style={{ padding: "0px 5%", JustifyContent: "flex-start" }}
                  >
                    <PrincipalTitle>
                      I hate that goodnight means goodbye But one day we'll have
                      all the time
                    </PrincipalTitle>
                    <SecondTranslateTitle>
                      "Eu odeio que boa noite significa adeus, mas um dia
                      teremos todo o tempo"
                    </SecondTranslateTitle>
                    <ImgView src={Img6} />
                  </MainContent>
                  <ButtonWrapper>
                    <ButtonDownTwo
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <BiChevronDownCircle />
                    </ButtonDownTwo>
                    <ButtonDownTwo onClick={() => fullpageApi.moveSectionUp()}>
                      <BiChevronUpCircle />
                    </ButtonDownTwo>
                  </ButtonWrapper>
                </SectionWrapper>
              </div>
              <div
                className="section"
                style={{ overflow: "hidden", backgroundColor: "#0F2420" }}
              >
                <SectionWrapper>
                  <MainContent>
                    <BigTitle>Eu amo vc ❤️</BigTitle>
                    <SecondTitle>
                      E eu só sei te amar pq Jesus me ama 🤍
                    </SecondTitle>
                    <FinalText>
                      Que cada dia seja um dia novo pra nos conhecermos em
                      Cristo e que cada dia eu possa te dar um amor próximo do
                      de Deus, vc é uma mulher de Deus, pela qual eu me apaixono
                      todos os dias e vejo mais de Jesus em vc, vc é linda por
                      dentro e por fora, e tem sido um presente de Deus poder te
                      conhecer mais a cada dia, Deus é bom, e sou mt grato a Ele
                      por ter colocado vc na minha vida, obs: te amo....
                    </FinalText>
                  </MainContent>
                  <ButtonDown onClick={() => fullpageApi.moveTo(1)}>
                    <BiChevronUpCircle />
                  </ButtonDown>
                </SectionWrapper>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
