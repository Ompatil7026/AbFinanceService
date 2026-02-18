"use client";
import Image from "next/image";

const Hero = () => {

  // ✅ Email handler (desktop + mobile compatible)
const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // 📱 Mobile → open default email app
        window.location.href =
    "mailto:ashishbirajdar90@gmail.com?subject=Loan%20Enquiry%20-%20Speedy%20Loan%20Finance%20Services&body=Hello%20Team,%0D%0A%0D%0AI%20would%20like%20to%20enquire%20about%20the%20following%20loan:%0D%0A%0D%0A•%20Type%20of%20Loan:%20__________%0D%0A•%20Loan%20Amount:%20__________%0D%0A•%20City:%20__________%0D%0A•%20Employment%20Type:%20Salaried%20/%20Self-Employed%0D%0A%0D%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0D%0A%0D%0ARegards,%0D%0A__________";

    } else {
      // 💻 Desktop → open Gmail Web
        window.open(
            "https://mail.google.com/mail/?view=cm&to=ashishbirajdar90@gmail.com" +
            "&su=Loan%20Enquiry%20-%20Ab%20-%20Finance%20Services" +
            "&body=Hello%20Team,%0D%0A%0D%0AI%20would%20like%20to%20enquire%20about%20the%20following%20loan:%0D%0A%0D%0A•%20Type%20of%20Loan:%20__________%0D%0A•%20Loan%20Amount:%20__________%0D%0A•%20City:%20__________%0D%0A•%20Employment%20Type:%20Salaried%20/%20Self-Employed%0D%0A%0D%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0D%0A%0D%0ARegards,%0D%0A__________",
            "_blank"
            );

    }
  };

  return (
    <section className="dark:bg-darkmode">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">

          {/* LEFT CONTENT */}
          <div className="col-span-6">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="relative z-0 inline-block text-primary text-lg font-bold
              before:absolute before:content-[''] before:bg-primary/20 before:w-full
              before:h-2 before:-z-1 dark:before:-z-1 before:bottom-0"
            ></p>

            <h1
              className="py-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Fast. Secure. Trusted.
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="text-xl text-SlateBlueText dark:text-opacity-80 font-normal md:pb-14 pb-6"
            >
              We help individuals, professionals, and businesses get the right loan
              from the right bank, with the best interest rates and quick approvals.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919423398032?text=Hello%20Ab%20-%20Finance%20Services,%0A%0AI%20would%20like%20to%20enquire%20about%20a%20loan.%0A%0A•%20Type%20of%20Loan:%20__________%0A•%20Loan%20Amount:%20__________%0A•%20City:%20__________%0A•%20Employment%20Type:%20Salaried%20/%20Self-Employed%0A%0APlease%20assist%20me%20with%20the%20next%20steps.%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
              >
                <span className="!flex !items-center gap-14">
                  <i className="bg-[url('/images/hero/whatsapp.png')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
                  WhatsApp Chat
                </span>
              </a>

              {/* EMAIL (FIXED) */}
              <a
                href="#"
                onClick={handleEmailClick}
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                className="btn_outline btn-2 hover-outline-slide-down group"
              >
                <span className="!flex !items-center gap-14">
                  <i className="bg-[url('/images/hero/mail.svg')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
                  ashishbirajdar90@gmail.com
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT IMAGES (DESKTOP ONLY) */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="col-span-6 lg:flex hidden items-center gap-3"
          >
            <div className="bg-ElectricAqua relative rounded-tl-166 rounded-br-166 w-full">
              <Image
                src="/images/hero/john.png"
                alt="hero"
                width={0}
                height={0}
                quality={100}
                layout="responsive"
                sizes="100vh"
                className="w-full h-full"
              />
            </div>

            <div className="bg-primary relative rounded-tr-166 rounded-bl-166 w-full mt-32">
              <Image
                src="/images/hero/jijuph.png"
                alt="hero"
                width={0}
                height={0}
                quality={100}
                layout="responsive"
                sizes="100vh"
                className="w-full h-full"
              />

              <div className="bg-[#fcf7fb] rounded-22 shadow-hero-box py-1 px-4 absolute -left-24 mr-6 bottom-9 -translate-x-1/2 text-center">
                <p className="text-lg font-bold text-blue-400">
                  Mr. Ashish Birajdar
                </p>
                <p className="text-base font-medium text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Founder of AbFinance Services.
                    </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
