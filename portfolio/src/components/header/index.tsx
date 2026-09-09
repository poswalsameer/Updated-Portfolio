import BlurFade from "../magicui/blur-fade"
import { GithubSvg, LinkedinSvg, MailSvg, TwitterSvg } from "../svgs"
import BlurFadeText from "../magicui/blur-fade-text"
import { blurFadeDelay, description } from "@/constants"
import { SettingsMobile } from "@/components/settings"

const BLUR_FADE_DELAY = 0.04

function SocialLinks() {
  return (
    <>
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
    </>
  )
}

export default function Header() {
  return (
    <div className="w-full max-w-2xl py-4 border-b border-zinc-700" id="hero">
      <div className="w-full flex flex-col justify-center items-center gap-y-3 sm:gap-y-6 px-6">
        <BlurFade
          delay={blurFadeDelay * 8}
          className="w-full flex flex-col gap-y-3"
        >
          {/* Top row: name + desktop socials / mobile gear */}
          <div className="w-full flex justify-between items-center">
            <div className="text-2xl font-medium tracking-tight text-white">Hi, I'm Sameer</div>
            <div className="flex items-center gap-x-3">
              <div className="hidden sm:flex gap-x-4 items-center text-white">
                <SocialLinks />
              </div>
              <SettingsMobile />
            </div>
          </div>
          {/* Mobile socials row */}
          <div className="flex sm:hidden gap-x-4 items-center text-white">
            <SocialLinks />
          </div>
        </BlurFade>

        <BlurFadeText
          className="w-full text-sm md:text-base  text-zinc-300"
          delay={BLUR_FADE_DELAY * 9}
          text={description}
        />
      </div>
    </div>
  )
}