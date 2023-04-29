# 학습한 내용

## Next.js


### 실행 명령어 세부 설명
yarn dev: 우리가 개발할때 쓰는 개발용 모드
yarn build: 서버에 배포한뒤 프로젝트를 빌드할때
yarn start: 서버에 배포한뒤 빌드 후 실행할때 쓰는 것
yarn lint: 프로젝트 소스코드 검사할 때 사용


### 디렉토리 네이밍
service 폴더: (다른 이름은 api, manager) 재사용을 목적으로 데이터를 끌고 올 수 있게 도와주는 함수들이 포함된 폴더


### 렌더링 방법 선정
- CSR: 다소 중요한 요소가 아니고, 나중에 렌더링되어도 상관없는 경우 사용


### fetch 옵션에 따른 렌더링 방법
```
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 0 }, // SSR, 요청이 올 때마다 서버에서 html을 만들고 전달
    cache: 'force-cache', // SSG
    cache: 'no-store' // SSR
  });
  const data = await res.json();
  const factText = data.data[0];
```


### Image Component에 with height를 추가하는 이유
```
  <Image 
    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
    alt="shop"
    width={400} // 👈
    height={400} // 👈
  />
```
이미지가 로드되기 전 자리에 다른 UI가 있다가, 이미지가 나타나면서 UI 위치들이 바뀌는 문제(layout shift)로 인한 성능, UX 저하
를 막기 위함.

### Image Component의 priority 속성
사이트의 배너 등 우선적으로 보여야하는 이미지에 주어져야하는 속성이다. 해당 속성이 있으면 우선적으로 브라우저에서 다운받는다.
