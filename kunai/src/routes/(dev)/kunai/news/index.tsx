import { component$ } from "@builder.io/qwik";
import News from "./sections/News";
import Signup from "../../@shared/Signup";
import Article from "./sections/Article";
import Recent from "./sections/Recent";
import Divider from "../../@shared/Divider";

export default component$(() => {
  const recents = [
    {
      title: "Five Benefits of Digital Transformation In Banking",
      description:
        "Find out about the benefits of digital transformation in banking.",
      img: "https://kunaico.com/static/b9323cfbaf6ba516fb4e8854b34d1c66/44a1d/63f1382644fc0f4b39644f4f_Customer%2520making%2520payment%2520with%2520digital%2520banking..avif",
    },
    {
      title:
        "Cybersecurity in FinTech: 5 Best Practices for Developing a Secure FinTech App",
      description:
        "Learn more about the security best practices for fintech application development.",
      img: "https://kunaico.com/static/618dbb803b7ca5e51fe14167d3d6ff80/4a0a3/63f1382644fc0f78ee644f4c_Cybersecurity%2520in%2520FinTech-%25205%2520Best%2520Practices%2520for%2520Developing%2520a%2520Secure%2520FinTech%2520App.avif",
    },
    {
      title: "How Banks Survive the Great Resignation",
      description: "Finance has gone digital, but so has everything else.",
      img: "https://kunaico.com/static/7ad51cbc8f8063b534982bf6a18b8306/ebecd/63f1382644fc0f232b644ee1_61932fbd69141b621803a8fc_great_resignation_full.avif",
    },
    {
      title: "As Bank Branches Go Digital, How Do They Attract Customers?",
      description:
        "As foot traffic returns to branches, banks need to reevaluate how digital channels and physical locations intersect to build a great customer experience.",
      img: "https://kunaico.com/static/e4e5a92cf56f03b09d9f6f8c7840f7b4/ebecd/63f1382644fc0f11ec644ea1_61932fbd69141b65bb03a8f2_bank-branches_digital_main.avif",
    },
    {
      title: "Is 2021 The Year of Open Banking?",
      description:
        "Transparency and access to data and APIs has led to exponential growth in almost every industry but banking.",
      img: "https://kunaico.com/static/9dc9c8e82bf52ef949f9806e413e732b/ebecd/63f1382644fc0f1b61644eee_61932fbd69141b6e7403a8dc_Open_banking.avif",
    },
    {
      title: "Fintechs and the Government Teamed Up for COVID: Will It Last?",
      description:
        "Fintech companies assisted millions of people accessing COVID relief stimulus payments and PPP funds.",
      img: "https://kunaico.com/static/5e09edf8d1758f8427aa2c4894cbe573/ebecd/63f1382644fc0ffa86644eb7_61932fbd69141b62ba03a8d8_Fintechs_Government.avif",
    },
  ];
  const articles = [
    {
      title: "How Do You Talk With Your Kids About AI?",
      description:
        "This post was originally shared on our CEO Sandeep Sood's LinkedIn profile.",
      img: "https://kunaico.com/static/9c6e65a535ad9b342e678d6397986ebc/6172e/photo-1531535701800-03b2bec4fbfd.avif",
    },
    {
      title: "Embracing the Last Interface: How Apps Will Adapt to AI",
      description: `In 1979, technologist and writer Brian Roemmele predicted that all software would eventually collapse into a single interface, what he called "The Last Interface".`,
      img: "https://kunaico.com/static/ada90a2f71f52da8124ec64085db6c59/af9ec/lastcompinterfaceletter-1.avif",
    },
    {
      title:
        "Sr. Product Manager Natasa Trajkovic Builds on an Understanding of Client Business Initiatives",
      description: "Natasa Trajkovic is a Senior Product Manager at Kunai.",
      img: "https://kunaico.com/static/b4a7a29dd8230af297c61524c10d43c3/67841/IMG_3921.avif",
    },
    {
      title: "AI Innovation vs. Novelty",
      description:
        "This post was originally shared on our CEO Sandeep Sood's LinkedIn profile.",
      img: "https://kunaico.com/static/597f227025cccf1b0609ad7facb4507b/b85bd/photo-1679958157946-a629332cb903.avif",
    },
    {
      title:
        "The Future of HR for Tech Companies: What to Expect Going Forward",
      description:
        "Take a look at what HR for tech companies is going to look like.",
      img: "https://kunaico.com/static/11b9a402adfea146625848563cd053cd/44a1d/63f1382644fc0f0a93644f4e_The%2520Future%2520of%2520HR%2520for%2520Tech%2520Companies-%2520What%2520to%2520Expect%2520Going%2520Forward.avif",
    },
    {
      title: "Five Benefits of Digital Transformation In Banking",
      description:
        "Find out about the benefits of digital transformation in banking.",
      img: "https://kunaico.com/static/b9323cfbaf6ba516fb4e8854b34d1c66/44a1d/63f1382644fc0f4b39644f4f_Customer%2520making%2520payment%2520with%2520digital%2520banking..avif",
    },
  ];
  return (
    <>
      <News />
      <Signup />
      <Recent cards={recents} />
      <div class="container mx-auto my-10 px-4 sm:px-6">
        <Divider />
      </div>
      <Article articles={articles} />
    </>
  );
});
