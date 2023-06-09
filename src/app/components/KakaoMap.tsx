'use client';
import Script from 'next/script';
import { Map } from 'react-kakao-maps-sdk';

const NEXT_PUBLIC_KAKAO_APP_JS_KEY = 'fee72b2c70f2e725e20d4b5fc6eb9b2f';
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy='beforeInteractive' />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: '100%', height: '100%' }}
      ></Map>
    </>
  );
};

export default KakaoMap;
