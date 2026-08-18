import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 상위 디렉터리의 lockfile을 워크스페이스 루트로 오인하지 않도록 고정
  turbopack: {
    root: __dirname,
  },

  async redirects() {
    return [
      // 예전 주소로 들어오는 경우가 있어 홈으로 넘긴다.
      { source: "/main", destination: "/", permanent: false },
      { source: "/home", destination: "/", permanent: false },
      { source: "/index", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
