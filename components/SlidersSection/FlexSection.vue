<template>
  <div class="flex flex-row justify-between px-32 w-full h-96">
    <div class="relative w-5/12 h-full">
      <div class="w-full h-full">
        <img
          class="absolute w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
      <Spacer margin="25px" />
      <p class="text-grey w-full relative flex justify-center">
        Lorem ipsum dolor sit amet,
      </p>
    </div>
    <div class="relative w-6/12 h-full">
      <Swiper :data="data" />
    </div>
  </div>
</template>

<script>
import Swiper from "~/components/SlidersSection/Swiper";
export default {
  components: { Swiper },
  data() {
    return {
      data: [
        {
          title: "Bitcoin",
          para: "Bitcoin is one of the first digital currencies to use peer-to-peer (P2P) technology to facilitate instant payments. The independent individuals and companies who own the governing computing power and participate in the Bitcoin network—Bitcoin \"miners\"—are in charge of processing the transactions on the blockchain and are motivated by rewards (the release of new Bitcoin) and transaction fees paid in Bitcoin.",
          para2: "In this way, Bitcoin and other cryptocurrencies operate differently from fiat currency; in centralized banking systems, the currency is created at a rate matching the growth of the economy; this system is intended to maintain price stability. A decentralized system, like Bitcoin, sets the release rate ahead of time and according to an algorithm. ",
          slogan: "The king of the MarketCap",
        },
        {
          title: "Why Bitcoin ?",
          para:
          "Many Bitcoin supporters believe that digital currency is the future. Many individuals who endorse Bitcoin believe it facilitates a much faster, low-fee payment system for transactions across the globe. Although it is not backed by any government or central bank, Bitcoin can be exchanged for traditional currencies; in fact, its exchange rate against the dollar attracts potential investors and traders interested in currency plays. Indeed, one of the primary reasons for the growth of digital currencies like Bitcoin is that they can act as an alternative to national fiat money and traditional commodities like gold. ",
          para2:
          "The concept of a virtual currency is still novel and, compared to traditional investments, Bitcoin doesn't have much of a long-term track record or history of credibility to back it. With its increasing popularity, Bitcoin is becoming less experimental every day; still, after only a decade, all digital currencies remain in a development phase. \"It is pretty much the highest-risk, highest-return investment that you can possibly make,” says Barry Silbert, CEO of Digital Currency Group, which builds and invests in Bitcoin and blockchain companies.",
          slogan: "The future Bitcoin",
        },
      ],
    };
  },
};
</script>

<style scoped>
.h-96 {
  height: 37rem !important;
}
</style>
