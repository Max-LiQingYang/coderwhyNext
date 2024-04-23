import { NextRequest, NextResponse } from "next/server";

// 只在服务端运行, 拦截 API 请求, router 切换, 资源加载 和 站点图片等
export function middleware(req: NextRequest) {
  console.log("中间件", req.url);

  // 返回 next();
  // return NextResponse.next();

  // 返回 重定向
  //   let token = req.cookies.get("token")?.value;

  //   if (!token && req.nextUrl.pathname !== "/login") {
  //     // 重定向到登录页
  //     return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  //   }

  // 路径重写, 相当于反向代理
  if (req.nextUrl.pathname === "/login") {
    // 当请求到 /login 时, 重写到其他路径
    return NextResponse.rewrite(
      new URL(req.nextUrl.pathname, "http://localehost.com:9000")
    );
  }
}

// 匹配器
export const config = {
  // matcher: ['/sys/:path*'] // 匹配 /sys/... 的路径
  matcher: ["/((?!_next/static|api|favicon.icon).*)"], // 支持正则
};
