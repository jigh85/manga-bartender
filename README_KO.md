# 🍷 만화 바텐더 (Manga Bartender)

감정 기반 큐레이션을 중심으로 한 웹툰 추천 모바일 앱 프로토타입

## 📱 프로젝트 개요

**만화 바텐더**는 사용자의 감정과 취향을 기반으로 맞춤형 웹툰을 추천하는 혁신적인 플랫폼입니다.
마치 바텐더가 손님의 기분을 읽고 칵테일을 추천하듯이, 우리는 사용자의 감정에 맞는 "한 잔의 만화"를 제안합니다.

## 🎯 핵심 기능

### 1️⃣ 온보딩 (Onboarding)
- **감정 선택**: 위로, 설렘, 자극, 웃음, 여운
- **장르 선택**: 로맨스, 판타지, 일상, 스릴러, 드라마
- **개인화 기반 마련**: 선택 데이터를 저장하여 맞춤 추천 초기화

### 2️⃣ 홈 (Home)
- 감정별 테마 필터링
- 바텐더(큐레이터)의 추천 만화 피드
- 감정 태그와 짧은 추천 문구 표시

### 3️⃣ 탐색 (Explore)
- 키워드 검색 기능
- 실시간 인기 키워드 태그
- 감정/장르/캐릭터 필터 탭

### 4️⃣ 큐레이션 상세
- 큐레이터 프로필 표시
- 감정별 만화 컬렉션
- 큐레이터별 코멘트
- 팔로우/공유/저장 기능

### 5️⃣ 마이페이지
- 사용자 프로필 및 바텐더 레벨
- **MY 바틀**: 감정별 저장 아카이브 시각화
- 최근 본 작품 이력
- 구독한 바텐더 목록
- 설정 및 로그아웃

## 🛠 기술 스택

- **프레임워크**: React Native + Expo
- **네비게이션**: Expo Router (파일 기반 라우팅)
- **상태 관리**: AsyncStorage (로컬 저장)
- **UI 컴포넌트**: React Native, Expo Icons
- **언어**: TypeScript

## 📁 프로젝트 구조

```
manga-bartender/
├── app/                          # Expo Router 앱 디렉토리
│   ├── _layout.tsx              # 루트 레이아웃 (온보딩 상태 관리)
│   ├── onboarding/              # 온보딩 화면들
│   │   ├── splash.tsx           # 시작 화면
│   │   ├── emotion.tsx          # 감정 선택
│   │   ├── genre.tsx            # 장르 선택
│   │   └── complete.tsx         # 완료 화면
│   ├── (tabs)/                  # 탭 네비게이션
│   │   ├── _layout.tsx          # 탭 레이아웃
│   │   ├── home.tsx             # 홈 화면
│   │   ├── explore.tsx          # 탐색 화면
│   │   └── mypage.tsx           # 마이페이지
│   └── curation-detail.tsx      # 큐레이션 상세
├── src/
│   ├── screens/                 # 화면 컴포넌트들
│   │   ├── OnboardingSplash.tsx
│   │   ├── OnboardingEmotion.tsx
│   │   ├── OnboardingGenre.tsx
│   │   ├── OnboardingComplete.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── ExploreScreen.tsx
│   │   ├── MyPageScreen.tsx
│   │   └── CurationDetailScreen.tsx
│   ├── components/              # 재사용 가능한 컴포넌트
│   │   ├── WebtoonCard.tsx      # 웹툰 카드
│   │   ├── EmotionButton.tsx    # 감정 선택 버튼
│   │   └── PrimaryButton.tsx    # 주요 버튼
│   ├── constants/               # 상수
│   │   ├── colors.ts            # 색상 팔레트
│   │   ├── emotions.ts          # 감정 및 장르 데이터
│   │   └── mockData.ts          # 목 데이터
│   └── utils/                   # 유틸리티
│       └── storage.ts           # AsyncStorage 래퍼
├── package.json
├── app.json
├── tsconfig.json
└── README.md
```

## 🎨 디자인 시스템

### 색상 팔레트
- **메인**: `#F7CACA` (따뜻한 분홍)
- **포인트**: `#FF4D4D` (강렬한 빨강)
- **배경**: `#FFFDFB` (부드러운 아이보리)

### 감정별 색상
- 위로: `#FFB6C1` (라이트 핑크)
- 설렘: `#FFD700` (골드)
- 자극: `#FF6347` (토마토)
- 웃음: `#87CEEB` (스카이 블루)
- 여운: `#DDA0DD` (플럼)

## 🚀 시작하기

### 설치

```bash
cd manga-bartender
npm install
```

### 개발 서버 실행

```bash
# 웹 버전
npm run web

# iOS (macOS 필요)
npm run ios

# Android
npm run android
```

### 빌드

```bash
npm run build
```

## 📋 온보딩 플로우

```
시작 화면
   ↓
감정 선택 (위로, 설렘, 자극, 웃음, 여운)
   ↓
장르 선택 (로맨스, 판타지, 일상, 스릴러, 드라마)
   ↓
완료 화면
   ↓
홈 화면 (맞춤 추천 시작)
```

## 💾 로컬 스토리지 키

- `user_emotion`: 선택한 감정
- `user_genre`: 선택한 장르
- `saved_webtoons`: 저장한 웹툰 목록
- `user_profile`: 사용자 프로필 정보

## 🔄 상태 관리

현재 프로토타입은 AsyncStorage를 사용하여 로컬 상태를 관리합니다.
향후 백엔드 연동 시 이를 API 호출로 변경할 수 있습니다.

## 📝 현재 상태

✅ UI/UX 프로토타입 완성
- 전체 화면 설계 및 구현
- 네비게이션 플로우
- 기본 상호작용

📋 추가 계획
- 실제 데이터베이스 연동
- 사용자 인증 시스템
- 추천 알고리즘 구현
- 소셜 기능 (팔로우, 공유)
- 실제 웹툰 데이터 통합

## 🤝 기여

이는 프로토타입 프로젝트입니다. 개선 사항이나 제안사항은 언제든 환영합니다!

## 📄 라이선스

MIT License

---

**Manga Bartender** - 당신의 감정에 어울리는 만화를 찾아보세요! 🍷📚
