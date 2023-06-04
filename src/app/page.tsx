import type { NextPage } from 'next';
import KakaoMap from './components/KakaoMap';

const Home: NextPage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <main style={{ width: '100vw', height: '100vh' }}>
        <KakaoMap />
      </main>
    </div>
  );
};

export default Home;
