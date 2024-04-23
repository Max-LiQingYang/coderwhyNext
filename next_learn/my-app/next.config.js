/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 严格模式
  env: {
    PORT: 3000,
    NEXT_PUBLIC_TEST: "TEST"
  },
  // basePath: "/music", // 设置路径前缀, 访问路径必须是 /music 下的路径
}

module.exports = nextConfig
