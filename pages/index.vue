<template>
  <div>
    <Header />
    <Spacer margin="7rem" />
    <SlidersSection />
    <Spacer margin="20rem" />
    <SlidersSecondSection />
    <Spacer margin="20rem" />
    <Grid />
    <Spacer margin="10rem" />
    <HeadingsSection :withbutton="true" :data="data" />
    <Spacer margin="20rem" />
    <Footer/>
  </div>
</template>

<script>
import SlidersSection from "~/components/SlidersSection/SlidersSection";
import HeadingsSection from "~/components/SlidersSection/HeadingsSection";
import Footer from "../components/Footer/Footer";
export default {
  components: {Footer, SlidersSection, HeadingsSection },
  data() {
    return {
      data: {
        title: "DO YOU FEEL LIKE JOINING THE METAVERSE NOW?",
        slogan: "JOIN THE CRYPTOCURRENCY COMMUNITY AND EARN YOUR FUTURE",
        description: "The metaverse is a digital reality that combines aspects of social media, online gaming, augmented reality (AR), virtual reality (VR), and cryptocurrencies to allow users to interact virtually",
      },
    };
  },
};
</script>
