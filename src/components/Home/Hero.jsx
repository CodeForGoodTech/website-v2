import * as React from "react"
import img1 from "../../assets/Mainhero/image1.png"
import img2 from "../../assets/Mainhero/image2.png"
import img3 from "../../assets/Mainhero/image3.png"
import img4 from "../../assets/Mainhero/image4.png"
import img5 from "../../assets/Mainhero/image5.png"
import img6 from "../../assets/Mainhero/image6.png"
import img7 from "../../assets/Mainhero/image7.png"
import img8 from "../../assets/Mainhero/image8.png"
import img9 from "../../assets/Mainhero/image9.png"
import img10 from "../../assets/Mainhero/image10.png"
import img11 from "../../assets/Mainhero/image11.png"
import img12 from "../../assets/Mainhero/image12.png"
import img13 from "../../assets/Mainhero/image13.png"
import img14 from "../../assets/Mainhero/image14.png"
import img15 from "../../assets/Mainhero/image15.png"
import img16 from "../../assets/Mainhero/image16.png"
import img17 from "../../assets/Mainhero/image17.png"
import img18 from "../../assets/Mainhero/image18.png"
import img19 from "../../assets/Mainhero/image19.png"
import img20 from "../../assets/Mainhero/image20.png"
import img21 from "../../assets/Mainhero/image21.png"
import img22 from "../../assets/Mainhero/image22.png"
import img23 from "../../assets/Mainhero/image23.png"
import img24 from "../../assets/Mainhero/image24.png"
import img25 from "../../assets/Mainhero/image25.png"
import img26 from "../../assets/Mainhero/image26.png"
import img27 from "../../assets/Mainhero/image27.png"
import img28 from "../../assets/Mainhero/image28.png"
import img29 from "../../assets/Mainhero/image29.png"
import img30 from "../../assets/Mainhero/image30.png"
import img31 from "../../assets/Mainhero/image31.png"
import img32 from "../../assets/Mainhero/image32.png"
import img33 from "../../assets/Mainhero/image33.png"
import img34 from "../../assets/Mainhero/image34.png"
import img35 from "../../assets/Mainhero/image35.png"
import img36 from "../../assets/Mainhero/image36.png"  
import img37 from "../../assets/Mainhero/image37.png"

const photos1 = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
]

const photos2 = [
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
]

const photos3 = [
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
]

const rotatingTexts = [
  "Create Impact",
  "Build for Good",
  "Drive Change",
  "Shape the Future",
]

// Added 'offset' prop to perfectly stagger the columns without clipping
function PhotoColumn({ photos, direction = "up", speed = 25, offset = 0 }) {
  const doubled = [...photos, ...photos]

  return (
    <div className="w-[140px] shrink-0 overflow-hidden lg:w-[170px] md:w-[140px] sm:w-[110px]">
      <div
        className={`flex w-full flex-col gap-4 ${
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down"
        }`}
        style={{ 
          animationDuration: `${speed}s`,
          animationDelay: `-${offset}s` // This instantly jumps the animation forward to create the stagger
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="w-full shrink-0 overflow-hidden rounded-2xl shadow-sm bg-[#F8F9FA]"
          >
            <img
              src={src}
              alt=""
              loading={i < 6 ? "eager" : "lazy"}
              className="block h-[180px] w-full object-cover transition-transform duration-300 hover:scale-[1.04] lg:h-[220px] md:h-[180px] sm:h-[140px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current" aria-hidden="true">
      <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.191.328-.404.77-.553 1.116a18.27 18.27 0 0 0-6.663 0A12.64 12.64 0 0 0 8.116 3a19.736 19.736 0 0 0-4.433 1.369C.533 9.091-.32 13.695.099 18.242A19.9 19.9 0 0 0 5.993 21c.479-.655.905-1.35 1.27-2.08a12.93 12.93 0 0 1-2-.963c.168-.123.332-.252.49-.386 3.861 1.808 8.051 1.808 11.866 0 .16.134.323.263.49.386a12.89 12.89 0 0 1-2.004.964c.365.729.79 1.424 1.27 2.079a19.88 19.88 0 0 0 5.895-2.758c.5-5.27-.838-9.832-3.954-13.873ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.175 1.095 2.157 2.419 0 1.334-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.175 1.095 2.157 2.419 0 1.334-.947 2.419-2.157 2.419Z" />
    </svg>
  )
}

function LinkedInSvg() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05C19.22 8 21 10.03 21 13.74V23h-4v-8.1c0-1.93-.03-4.41-2.69-4.41-2.69 0-3.1 2.1-3.1 4.27V23h-4V8Z" />
    </svg>
  )
}

export function HeroSection() {
  const [textIndex, setTextIndex] = React.useState(0)
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      const timeout = setTimeout(() => {
        setTextIndex((i) => (i + 1) % rotatingTexts.length)
        setVisible(true)
      }, 400)
      return () => clearTimeout(timeout)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>
        {`
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scrollDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-24px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-scroll-up {
            animation-name: scrollUp;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .animate-scroll-down {
            animation-name: scrollDown;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .animate-slide-left {
            animation: slideInLeft 0.8s ease both;
          }
          .blinking-cursor::after {
            content: '';
            display: inline-block;
            width: 4px;
            height: 0.9em;
            background: #880163;
            margin-left: 6px;
            vertical-align: middle;
            animation: blink 1s step-end infinite;
          }
        `}
      </style>

      <section 
        className="relative flex h-[calc(100vh-88px)] w-full items-center overflow-hidden bg-white"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='100' viewBox='0 0 60 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0zM15 85.98V100h30V85.98l-15-8.66-15 8.66z' fill='%23f3f4f6' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 100px'
        }}
      >
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1320px] items-center justify-between gap-[40px] px-6 md:flex-row sm:flex-col lg:px-10 lg:gap-[80px]">
          
          {/* Left Text Content */}
          <div className="animate-slide-left min-w-0 max-w-[600px] flex-1 mt-10 lg:mt-0">
            <h2 className="mb-6 flex flex-col font-extrabold tracking-tight leading-[1.05] text-[#1B2336]">
              <span className="block text-[clamp(44px,5vw,64px)]">Contribute</span>
              <span className="block text-[clamp(44px,5vw,64px)]">Collaborate &amp;</span>
              <span
                className={`blinking-cursor relative inline-block text-[clamp(44px,5vw,64px)] text-[#880163] transition-all duration-300 ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-[10px] opacity-0"
                }`}
              >
                {rotatingTexts[textIndex]}
              </span>
            </h2>

            <p className="mb-8 max-w-[500px] text-[17px] leading-[1.7] text-[#4B5563]">
              Code for Good Tech (C4GT) is an ecosystem initiative that connects skilled
              technical talent with Digital Public Infrastructure (DPI), Digital Public Goods
              (DPGs), and tech-for-good organizations to build robust, population-scale
              solutions for social good.
            </p>

            <div className="flex items-center gap-[16px]">
              <a
                href="https://bit.ly/c4gtdiscord1"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#5865F2] text-white transition-all duration-200 hover:-translate-y-[3px] hover:opacity-85 hover:shadow-lg"
              >
                <DiscordIcon />
              </a>

              <a
                href="https://www.linkedin.com/company/code-for-govtech/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#0A66C2] text-white transition-all duration-200 hover:-translate-y-[3px] hover:opacity-85 hover:shadow-lg"
              >
                <LinkedInSvg />
              </a>
            </div>
          </div>

          {/* Right Grid Container */}
          <div className="relative hidden shrink-0 sm:flex h-full lg:w-[580px] justify-end">
            
            {/* FIXED: The Concentric Circles Pattern */}
            {/* Moved to 'top-12' and forced into the background with 'z-0' so it does not distort the flex grid */}
            <img
              src={img37}
              alt=""
              className="pointer-events-none absolute -left-12 top-12 z-0 w-[140px] opacity-90 lg:-left-16 lg:top-16 lg:w-[160px]"
            />

            {/* FIXED: The Yellow Dots Pattern */}
            <img
              src={img37}
              alt=""
              className="pointer-events-none absolute -left-8 bottom-16 z-0 w-[100px] opacity-90 lg:-left-12 lg:bottom-20 lg:w-[120px]"
            />

            {/* The Image Columns Container */}
            {/* Kept on 'z-10' so it slides cleanly over the background patterns */}
            <div className="absolute -top-10 -bottom-10 right-0 z-10 flex gap-4 lg:gap-6 w-[95%] max-w-[550px] justify-end">
              {/* FIXED: Added offset values so the columns are staggered naturally without needing CSS margins that break the flow */}
              <PhotoColumn photos={photos1} direction="up" speed={30} offset={12} />
              <PhotoColumn photos={photos2} direction="down" speed={35} offset={5} />
              <PhotoColumn photos={photos3} direction="up" speed={28} offset={18} />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}