import LinkButton from '../components/common/LinkButton';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PostList from '../components/post/PostList';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <section>
          <div className="max-w-5xl mx-auto px-6 lg:px-24 py-6 lg:py-12">
            <div className="px-8 py-6 bg-(--color-primary) rounded-xl">
              <p className="mb-4 text-right text-background text-sm font-bold">
                <span>여인영</span> | <span className="font-serif">Marine</span>
              </p>
              <h2 className="mb-8 font-serif text-background text-6xl font-semibold">
                YEO <br /> IN-YEONG
              </h2>
              <h3 className="mb-2 text-background text-2xl font-bold">
                사용자 중심의 구조 설계로 더 나은 경험을 완성합니다.
              </h3>
              <p className="mb-8 text-sm text-background break-keep">
                사용자 관점에서 제품을 바라보고 실질적인 사용성 개선에 가치를 두고 있습니다. 디자인 시스템을 비롯해
                지속가능한 개발 환경과 원활한 협업에 집중합니다. 다양한 분야에 관심을 두고 시야를 확장하며, 더 나은
                사용자 경험을 만드는 것을 목표로 합니다.
              </p>
              <ul className="flex justify-center">
                {/* <li className="mx-1">
                <LinkButton
                  href="Project"
                  styleType={'background'}
                  linkType={true}
                  text={'Project'}
                  className={'font-serif'}
                />
              </li> */}
                <li className="mx-1">
                  <LinkButton
                    href="/resume.pdf"
                    styleType={'outline'}
                    linkType={false}
                    text={'about'}
                    className={'font-serif'}
                    downloadName="resume.pdf"
                    isDownload={true}
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <article className="max-w-5xl mx-auto px-6 lg:px-24 py-6 lg:py-12">
            <h2 className="mb-3 font-serif text-primary text-4xl leading-12 font-bold">PORTFOLIO</h2>
            <dl className="mb-8">
              <dt className="mb-1 text-xl leading-8 font-bold">
                에스랩아시아 <span className="ml-2 text-sm font-medium">2022.10 - 2023.12</span>
              </dt>
              <dd className="text-gray002 text-sm leading-6">
                주요 역할: 전체 퍼블리싱 담당으로 반응형 웹 구현과 디자인 참여 및 컨펌 진행, 기획자 및 백엔드 개발자와
                소통
              </dd>
              <dd>5개의 메인 및 3개 프로덕트 사이트 구축 참여</dd>
            </dl>
            <PostList />
          </article>
          <article className="max-w-5xl mx-auto px-6 lg:px-24 py-6 lg:py-12">
            <h2 className="mb-3 font-serif text-primary text-3xl font-bold">ETC</h2>
            <dl>
              <dt className="mb-1 text-xl leading-8 font-bold">
                더로카<span className="ml-2 text-sm font-medium">2021.06-2022.03</span>
              </dt>
              <dd className="text-gray002 text-sm leading-6">클라이언트: 대기업, 공공기관</dd>
              <dd className="text-gray002 text-sm leading-6">
                주요 역할: 웹 및 앱 디자인 시안 구현, 웹 접근성 기준 대응, 크로스 브라우징 확인 및 QA 대응
              </dd>
              <dd className="text-gray002 text-sm leading-6">3개의 메인 및 2개 어드민 웹사이트 구축 참여</dd>
            </dl>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
