"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Link from "next/link";

export default function Home() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, 1000 * 2);

    return () => {
      clearInterval(handle);
    };
  }, []);

  const classIcon =
    "p-1 rounded-3xl bg-slate-500/50 transition ease-in-out delay-350 hover:bg-slate-600/50 hover:scale-105";

  return (
    <main className="relative w-full h-screen select-none overflow-hidden bg-black">
      <video
        playsInline
        className="w-[101%] max-w-[101%] h-full object-cover object-[50% 50%]"
        muted
        autoPlay
        loop
        src="/video/ai16z.mini.mp4"
        preload="none"
        x5-playsinline="true"
        x5-video-player-type="h5-page"
      />
      <div className="absolute w-full h-full top-0 z-10 overflow-hidden">
        <div className="marquee-top pt-[6px]">
          <VelocityScroll
            defaultVelocity={2}
            numRows={1}
            className="text-white px-2"
          >
            &nbsp;&nbsp;Goldoge 金狗科技 助您暴富&nbsp;&nbsp;🚀
          </VelocityScroll>
        </div>
        <div className="marquee-bottom w-full absolute bottom-4">
          <VelocityScroll
            defaultVelocity={-2}
            numRows={1}
            className="text-white px-2"
          >
            &nbsp;&nbsp;Goldoge 金狗科技 助您暴富&nbsp;&nbsp;🚀
          </VelocityScroll>
        </div>
        <div className="content-top mt-28 flex justify-center flex-col items-center space-y-4">
          <div className="time text-3xl font-semibold text-white font-sans">
            {time.getHours()}:{`00${time.getMinutes()}`.slice(-2)}
          </div>
          <h1 className="font-semibold leading-none tracking-tighter text-5xl md:text-6xl text-white">
            Fund
            <LineShadowText className="italic" shadowColor="white">
              OS
            </LineShadowText>
          </h1>
        </div>
        <div className="login-form absolute top-1/2 left-1/2"></div>
        <div className="content-bottom absolute w-full bottom-[100px]">
          <div className="icons flex justify-center flex-wrap gap-x-8 gap-y-4">
            <Link href="https://goldog.netlify.app/" target="_blank">
              <div className={classIcon}>
                <Image
                  src="/image/ai16z2.avif"
                  alt="ai16z Logo"
                  className="rounded-3xl"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <p className="text-center text-white mt-1 font-semibold">
                Goldoge
              </p>
            </Link>
            <Link href="https://goldoge.vercel.app/" target="_blank">
              <div className={classIcon}>
                <Image
                  src="/image/goldoge.jpeg"
                  alt="goldoge Logo"
                  className="rounded-3xl"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <p className="text-center text-white mt-1 font-semibold">
                金狗科技
              </p>
            </Link>
            <Link href="https://docs.qq.com/desktop/" target="_blank">
              <div className={classIcon}>
                <Image
                  src="/image/wendang.png"
                  alt="腾讯文档 Logo"
                  className="rounded-3xl"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <p className="text-center text-white mt-1 font-semibold">
                腾讯文档
              </p>
            </Link>
            <Link
              href="https://www.mexc.com/zh-TW/support/categories/360000254192?utm_source=mexc&utm_medium=webmenu&utm_campaign=announcements"
              target="_blank"
            >
              <div className={classIcon}>
                <Image
                  src="/image/mexc.jpeg"
                  alt="mexc Logo"
                  className="rounded-3xl"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <p className="text-center text-white mt-1 font-semibold">
                抹茶公告
              </p>
            </Link>
            <Link
              href="https://www.cryptohunt.ai/zh-CN/dashboard/twitterTags"
              target="_blank"
            >
              <div className={classIcon}>
                <Image
                  src="/image/x.jpg"
                  alt="cryptohunt Logo"
                  className="rounded-3xl"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <p className="text-center text-white mt-1 font-semibold">
                热门话题
              </p>
            </Link>
            <Link href="https://www.deepseek.com/" target="_blank">
              <div className={classIcon}>
                <Image
                  src="/image/deepseek.ico"
                  alt="deepseek Logo"
                  className="rounded-3xl"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <p className="text-center text-white mt-1 font-semibold">
                deepseek
              </p>
            </Link>
          </div>
          <div className="texts flex justify-center space-x-4 text-white mt-9">
            <Link
              href="https://github.com/fundgao"
              target="_blank"
              className="px-4 py-[4px] bg-slate-600/30 rounded-3xl hover:underline"
            >
              Github
            </Link>
            <Link
              href="mailto:fundgao@163.com"
              target="_blank"
              className="px-4 py-[4px] bg-slate-600/30 rounded-3xl hover:underline"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
