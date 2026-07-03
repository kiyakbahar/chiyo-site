import Image from "next/image";
import { NavBar } from "@/features/navigation";
import { Tilt3D } from "@/shared";
import { pageContent } from "@/config";

export default function Home() {
  const { nav, hero, about, ingredients, nutrition, gallery, footer } =
    pageContent;

  return (
    <div className="w-full overflow-x-hidden">
      <NavBar
        logo={nav.logo}
        navItems={nav.items}
        cartItemCount={nav.cartCount}
        textColor="#6c4c9e"
        bgColor="rgba(247, 221, 202, 0.85)"
        themeColor="#ee86a6"
      />

      {/* Hero */}
      <section
        className="relative min-h-screen w-full flex items-center overflow-hidden"
        style={{ backgroundColor: "var(--chiyo-peach)" }}
      >
        <div className="max-w-[1320px] mx-auto w-full px-6 md:px-16 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6"
              style={{ backgroundColor: "var(--chiyo-orange)", color: "white" }}
            >
              {hero.eyebrow}
            </span>

            <Image
              src="/assets/chiyo/logo.png"
              alt="Chiyo"
              width={2339}
              height={1654}
              className="w-[280px] md:w-[360px] h-auto -ml-3 mb-2"
              priority
            />

            <h1
              className="font-[family-name:var(--font-thunder)] font-semibold text-4xl md:text-6xl leading-[0.95] mb-6"
              style={{ color: "var(--chiyo-purple)" }}
            >
              {hero.title}
            </h1>

            <p className="text-lg md:text-xl text-black/70 max-w-[480px] mb-8">
              {hero.description}
            </p>

            <div className="flex items-center gap-4">
              <button
                className="px-8 py-3.5 rounded-full font-bold text-lg text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "var(--chiyo-pink)" }}
              >
                {hero.buttonText}
              </button>
              <span
                className="px-5 py-3.5 rounded-full font-semibold border-2"
                style={{ borderColor: "var(--chiyo-green)", color: "var(--chiyo-green)" }}
              >
                {hero.flavorTag}
              </span>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <Tilt3D className="chiyo-float w-full max-w-[460px]">
              <div
                className="rounded-[2.5rem] overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 40px 60px -15px rgba(108, 76, 158, 0.45)" }}
              >
                <Image
                  src="/assets/chiyo/jars-both.png"
                  alt="Chiyo strawberry chia pudding jars"
                  width={7516}
                  height={4600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </Tilt3D>
          </div>
        </div>
      </section>

      {/* About / Transparency */}
      <section
        className="w-full py-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--chiyo-cream)" }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-thunder)] font-semibold text-3xl md:text-5xl mb-6"
            style={{ color: "var(--chiyo-green)" }}
          >
            {about.heading}
          </h2>
          <p className="text-lg md:text-xl text-black/70 leading-relaxed">
            {about.body}
          </p>
        </div>
      </section>

      {/* Ingredients & Nutrition */}
      <section
        className="w-full py-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--chiyo-peach)" }}
      >
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10">
          <div
            className="rounded-3xl p-8 md:p-10 shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            <h3
              className="font-[family-name:var(--font-thunder)] font-semibold text-3xl mb-6"
              style={{ color: "var(--chiyo-pink)" }}
            >
              {ingredients.heading}
            </h3>
            <ul className="space-y-3">
              {ingredients.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-black/75 text-base md:text-lg"
                >
                  <span style={{ color: "var(--chiyo-green)" }}>●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl p-8 md:p-10 shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            <h3
              className="font-[family-name:var(--font-thunder)] font-semibold text-3xl mb-6"
              style={{ color: "var(--chiyo-pink)" }}
            >
              Nutrition Facts
            </h3>
            <ul className="divide-y divide-black/10">
              {nutrition.map((fact) => (
                <li
                  key={fact.label}
                  className="flex justify-between py-2.5 text-base md:text-lg text-black/75"
                >
                  <span>{fact.label}</span>
                  <span className="font-bold" style={{ color: "var(--chiyo-purple)" }}>
                    {fact.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery / Lifestyle */}
      <section
        className="w-full py-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--chiyo-pink)" }}
      >
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/assets/chiyo/hero-mockup.png"
              alt="Chiyo pudding in hand"
              width={4961}
              height={3508}
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2 text-white">
            <h2 className="font-[family-name:var(--font-thunder)] font-semibold text-3xl md:text-5xl mb-6">
              {gallery.heading}
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {gallery.body}
            </p>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer
        className="w-full py-20 px-6 md:px-16 text-center"
        style={{ backgroundColor: "var(--chiyo-purple)" }}
      >
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-[family-name:var(--font-thunder)] font-semibold text-3xl md:text-5xl mb-4 text-white">
            {footer.heading}
          </h2>
          <p className="text-lg text-white/80 mb-8">{footer.body}</p>
          <button
            className="px-8 py-3.5 rounded-full font-bold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--chiyo-pink)", color: "white" }}
          >
            {hero.buttonText}
          </button>
          <p className="mt-10 text-white/50 text-sm">
            © {new Date().getFullYear()} Chiyo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
