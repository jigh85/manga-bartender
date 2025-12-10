import { useEffect } from 'react';

export function useIPhoneLayout() {
  useEffect(() => {
    // 웹 환경인지 확인
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // CSS 스타일 동적 추가
      const style = document.createElement('style');
      style.textContent = `
        :root {
          --iphone-width: 390px;
          --iphone-height: 844px;
        }

        @media (prefers-color-scheme: light) {
          body {
            background-color: #f5f5f5;
          }
        }

        @media (prefers-color-scheme: dark) {
          body {
            background-color: #1a1a1a;
          }
        }

        body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        #root {
          width: 390px;
          height: 844px;
          max-width: 100vw;
          max-height: 100vh;
          background: white;
          border-radius: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          position: relative;
          margin-top: 20px;
        }

        #root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 28px;
          background: black;
          border-radius: 0 0 25px 25px;
          z-index: 1000;
        }

        #root > * {
          width: 100%;
          height: 100%;
        }

        @media (min-width: 768px) {
          body {
            padding: 40px 20px;
          }

          #root {
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
          }
        }

        @media (max-width: 450px) {
          #root {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
            max-width: none;
            max-height: none;
            margin-top: 0;
          }

          #root::before {
            display: none;
          }
        }
      `;
      document.head.appendChild(style);

      // 클린업
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);
}
