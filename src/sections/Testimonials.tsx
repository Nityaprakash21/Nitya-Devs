import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Dr. Biswashree Mohanty",
    position: "CEO @ Foresight Financials",
    text: "Nitya skilledfully transformed our complex ideas into streamlined SaaS Solutions. His ability to understand our vision and deliver beyond expectations. We're thrilled with the results!",
    avatar: memojiAvatar2,
  },
  {
    name: "Santosh Bagh",
    position: "Financial Consultant",
    text: "Working with Nitya was a pleasure. He played a key role in simplifying our user experience, leading to seamless integration and high client satisfaction. The website has exceeded our expectations.",
    avatar: memojiAvatar1,
  },
  {
    name: "Anurag Barjo",
    position: "Vice President @ Business Club, NIT Rourkela",
    text: "Nitya's leadership as Social Media & Tech Head greatly boosted our club’s digital presence and team impact along with keeping our club image high.",
    avatar: memojiAvatar3,
  },
  {
    name: "Hadiqa Taiba",
    position: "Freelancer Frontend Developer",
    text: "Nitya is a rare blend of tech genius and creative filmmaker — his code solves problems, and his lens captures memories. A true asset to any project.",
    avatar: memojiAvatar4,
  },
  {
    name: "Shruti Agarwal",
    position: "Accountant @ Gallagher and Mohan",
    text: "Nitya built my portfolio website in just 15 days with exceptional skill and attention to detail — his work played a key role in helping me land interviews at top companies.",
    avatar: memojiAvatar2,
  },
  {
    name: "Prasant Ku. Jena",
    position: "Executive Head @ Purnima Fast Food",
    text: "Nitya is a skilled designer whose creative work and dedication boosted our brand and positively impacted sales during his 6-month tenure.",
    avatar: memojiAvatar5,
  },
  {
    name: "Dushyant Ashok Mahadik",
    position: "Assistant Professor @ NIT Rourkela",
    text: "Nitya demonstrated excellent skills in drone mapping, image processing, and GPS data analysis, making a valuable impact on our agricultural monitoring project at NIT Rourkela.",
    avatar: memojiAvatar1,
  },
  {
    name: "Sambashiva Rao Kunja",
    position: "Assistant Professor @ NIT Rourkela",
    text: "Nitya excelled as a Field Investigator in an ICSSR-funded Odisha Millet Mission`s millet marketing study, delivering key insights on urban consumer behavior showcasing strong research and fieldwork skills.",
    avatar: memojiAvatar3,
  },
    {
    name: "Tanushree Parida",
    position: "Senior Manager CO @ RSP SAIL",
    text: "Nitya’s creative direction and design clarity brought unmatched polish to our Chairman Trophy deck — delivering both impact and elegance.",
    avatar: memojiAvatar3,
  },
    {
    name: "Jyotirmayee Rautia",
    position: "Manager NPM @ RSP SAIL",
    text: "Nitya’s visuals spoke louder than words — his contribution turned our ideas into a high-impact visual story worthy of top-tier recognition for Chairman Trophy.",
    avatar: memojiAvatar3,
  },
    {
    name: "Rita Murmu",
    position: "Senior Manager HSM-2 @ RSP SAIL",
    text: "Nitya ability to translate complex data into a compelling narrative was instrumental in elevating our Chairman Trophy presentation to a strategic showcase.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  return (
    <div id="testimonials" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say About Me" description="Don`t just take my word for it. See what my clients have to say about my work." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-white/40">{testimonial.position}</div>
                        </div>
                      </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
