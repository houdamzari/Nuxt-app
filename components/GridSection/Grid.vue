<template>
  <div
    class="
      grid
      relative
      grid-cols-2
      py-36
      w-full
      h-full
      bg-blue
      gap-y-40 gap-x-20
    "
  >
    <div
      class="
        absolute
        h-px
        w-full
        left-2/4
        top-2/4
        gradient-2
        -translate-x-1/2 -translate-y-1/2
      "
    ></div>
    <div
      class="
        gradient
        absolute
        h-px
        w-full
        left-2/4
        top-2/4
        -translate-x-1/2 -translate-y-1/2
        rotate-90
      "
    ></div>
    <div v-for="item in data" :key="item.title">
      <GridElement :data="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueA1dCapatdAanL_vcFgDpRy7ZXgT8CC2_A&usqp=CAU",
          slogan: "The true Blockchain Technology",
          title: "POLYGON",
          description: "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem." },
        { img: "https://logowik.com/content/uploads/images/solana-sol9611.jpg",
          slogan: "Get Sonala, because you can",
          title: "SOLANA",
          description: "Solana projects are taking over the crypto market. Solana (SOL) is a fast-growing smart-contract blockchain that enables fast and cheap transactions and high throughput. It ticks all the boxes for developers looking to launch a scalable DApp" },
        { img: "data:image/png;base64,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",
          slogan: "Proof of history",
          title: "SANDBOX",
          description: "SAND is the utility token used throughout The Sandbox ecosystem as the basis of transactions and interactions. It is an ERC-20 utility token built on the Ethereum blockchain. There is a finite supply of 3,000,000,000 SAND. " },
        { img: "data:image/png;base64,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",
          slogan: "Aliens made it to cryptocurrency",
          title: "UFO",
          description: "Play-to-earn games are the new gaming model taking the world by storm.UFO Gaming will be the cornerpiece.One planet, one game. An ever-growing ecosystem of play to earn games." },
   ],
    };
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 20%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 212, 255, 0) 80%
  );
}
.gradient-2 {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 212, 255, 0) 100%
  );
}
</style>
