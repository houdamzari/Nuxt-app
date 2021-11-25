<template>
  <div class="flex flex-row justify-between px-32 w-full h-96">
    <div class="relative w-6/12 h-full">
      <Swiper :data="data" />
    </div>
    <div class="relative w-5/12 h-full">
      <div class="w-full h-full">
        <img
          class="absolute w-full h-full object-cover"
          src=
            "./media/ethereumm.jpg"
          alt=""
        />
      </div>
      <Spacer margin="25px" />
      <p class="text-grey w-full relative flex justify-center">
        Lorem ipsum dolor sit amet,
      </p>
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
          title: "Ethereum",
          para:
            " Ethereum is a blockchain platform with its own cryptocurrency, called Ether (ETH) or Ethereum, and its own programming language, called Solidity.\n" +
            "As a blockchain network, Ethereum is a decentralized public ledger for verifying and recording transactions. The network's users can create, publish, monetize, and use applications on the platform, and use its Ether cryptocurrency as payment. Insiders call the decentralized applications on the network \"dApps.\"\n" +
            "As a cryptocurrency, Ethereum is second in market value only to Bitcoin, as of May 2021.1 ",

          para2:
          "Ethereum was launched in July 2015 by a small group of blockchain enthusiasts. They included Joe Lubin, founder of ConsenSys, a blockchain applications developer that uses the Ethereum network. Another co-founder, Vitalik Buterin, is credited with originating the Ethereum concept and now serves as its CEO and public face. Buterin is sometimes described as the world's youngest crypto billionaire. (He was born in 1994.) ",
          slogan: "Lorem ipsum dolor sit",
        },
        {
          title: "Understanding Ethereum",
          para:
            " Ethereum was created to enable developers to build and publish smart contracts and distributed applications (dApps) that can be used without the risks of downtime, fraud, or interference from a third party.Ethereum describes itself as the world's programmable blockchain. It distinguishes itself from Bitcoin as a programmable network that serves as a marketplace for financial services, games, and apps, all of which can be paid for in Ether cryptocurrency and are safe from fraud, theft, or censorship.",
          para2:
          " Ethereum was created to enable developers to build and publish smart contracts and distributed applications (dApps) that can be used without the risks of downtime, fraud, or interference from a third party.Ethereum describes itself as the world's programmable blockchain. It distinguishes itself from Bitcoin as a programmable network that serves as a marketplace for financial services, games, and apps, all of which can be paid for in Ether cryptocurrency and are safe from fraud, theft, or censorship.",
          slogan: "Lorem ipsum dolor sit",
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
