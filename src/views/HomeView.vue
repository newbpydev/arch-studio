/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import LinkButton from '@/components/common/buttons/LinkButton.vue'
import PorfolioCard from '@/components/specific/PortfolioCard.vue'
import TheSlide from '@/components/specific/TheSlide.vue'
</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <main class="home-page container mx-auto">
    <section class="slide-section">
      <TheSlide />
    </section>

    <section class="intro-section px-auto">
      <span class="title">Welcome</span>
      <img alt="Welcome image" class="img" src="/images/home/desktop/image-welcome.jpg">

      <h1>Welcome to Arch Studio</h1>
      <p>We have a unique network and skillset to help bring your projects to life. Our
        small team of highly skilled individuals combined with our large network put us
        in a strong position to deliver exceptional results.</p>
      <p>Over the past 10 years, we have worked on all kinds of projects. From stations
        to high-rise buildings, we create spaces that inspire and delight.</p>
      <p>We work closely with our clients so that we understand the intricacies of each
        project. This allows us to work in harmony the surrounding area to create truly
        stunning projects that will stand the test of time.</p>
    </section>

    <section class="about-us-section">
      <picture>
        <source media="(min-width: 75em)" srcset="/images/home/desktop/image-small-team.jpg">
        <source media="(min-width: 48em)" srcset="/images/home/tablet/image-small-team.jpg">
        <img alt="image to illustrate small teams big ideas" src="/images/home/tablet/image-small-team.jpg">
      </picture>
      <h2> Small team, big ideas</h2>
      <link-button to="/about">About us</link-button>
    </section>

    <section class="featured-section px-auto">
      <header class="featured__header">
        <h2>Featured</h2>
        <link-button class="featured__link" to="/portfolio">See All</link-button>
      </header>

      <div class="featured__cards">
        <PorfolioCard img="del-sol" rank="1" subtitle="View all Projects" title="Project Del Sol" />
        <PorfolioCard img="228b" rank="2" subtitle="View all Projects" title="228B Tower" />
        <PorfolioCard img="prototype" rank="3" subtitle="View all Projects" title="Le Prototype" />
      </div>

    </section>
  </main>
</template>

/* --------------------------------- Styles --------------------------------- */
<style scoped>
.home-page {
  margin-bottom: 13.2rem;

  & .slide-section {
    margin-bottom: 7.2rem;
  }

  & .intro-section {
    position: relative;
    margin-bottom: 11.3rem;

    & .title {
      display: none;

      @media (min-width: 48em) {
        display: block;
      }
    }

    & .img {
      display: none;

      @media (min-width: 75em) {
        display: block;
      }
    }

    & h1 {
      font-size: var(--font-size-heading-m);
      line-height: var(--line-height-heading-m);
      letter-spacing: var(--letter-spacing-heading-m);
      color: var(--color-heading);
      font-weight: bold;
      padding-top: 6.8rem;
      margin-bottom: 2.2rem;

      @media (max-width: 767px) {
        &::before {
          content: '';
          position: absolute;
          top: 0;
          width: 6.5rem;
          height: .1rem;
          background-color: #c8ccd8;
        }
      }
    }

    & p:not(p:last-child) {
      margin-bottom: 2.4rem;

      @media (min-width: 48em) {
        margin-bottom: 2.2rem;
      }
    }
  }

  & .featured-section {
    position: relative;


    & .featured__header {
      margin-bottom: 4.3rem;

      & h2 {
        font-size: var(--font-size-heading-m);
        color: var(--color-heading);
        font-weight: bold;
        line-height: var(--line-height-heading-m);
        letter-spacing: var(--letter-spacing-heading-m);
      }

      & .featured__link {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: calc(100% - 6.4rem);
        margin: 0 auto;
      }
    }

    & .featured__cards {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      padding-bottom: 9.6rem;
    }

  }


}
</style>
