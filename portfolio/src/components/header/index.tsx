import BlurFade from "../magicui/blur-fade";
import GithubSvg from "../svgs/github";
import LinkedinSvg from "../svgs/linkedin";
import MailSvg from "../svgs/mail";
import TwitterSvg from "../svgs/twitter";
import BlurFadeText from "../magicui/blur-fade-text";
import { blurFadeDelay, description } from "@/constants";

const BLUR_FADE_DELAY = 0.04;

export default function Header() {
  return (
    <div className="w-full max-w-2xl py-4 border-b border-zinc-700" id="hero">
      <div className="w-full flex flex-col justify-center items-center gap-y-3 sm:gap-y-4 px-6">
        <BlurFade
          delay={blurFadeDelay * 8}
          className="w-full flex flex-col gap-y-3 justify-start items-start sm:flex-row sm:justify-between sm:items-center"
        >
          <div className="text-2xl font-medium text-white">Hi, I'm Sameer</div>
          <div className="flex gap-x-4 items-center text-white">
            <a href="https://github.com/poswalsameer" target="_blank">
              <GithubSvg />
            </a>
            <a href="https://twitter.com/samposwal" target="_blank">
              <TwitterSvg />
            </a>
            <a href="https://www.linkedin.com/in/sameerposwal" target="_blank">
              <LinkedinSvg />
            </a>
            <a href="mailto:poswalsameer2003@gmail.com" target="_blank">
              <MailSvg />
            </a>
          </div>
        </BlurFade>

        <BlurFadeText
          className="w-full text-sm md:text-base text-zinc-300"
          delay={BLUR_FADE_DELAY}
          text={description}
        />
      </div>
    </div>
  )
}