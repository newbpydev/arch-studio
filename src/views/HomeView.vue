/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import LinkButton from '@/components/common/buttons/LinkButton.vue'
import PorfolioCard from '@/components/specific/PortfolioCard.vue'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import SliderNav from '@/components/specific/SliderNav.vue'
import TheSlider from '@/components/specific/TheSlider.vue'

export interface Slide {
  title: string,
  description: string,
  imgSrc: string
}

const data = reactive<Slide[]>([
  {
    title: 'Project Paramour',
    description: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
    imgSrc: 'paramour'
  },
  {
    title: 'Seraph Station',
    description: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
    imgSrc: 'seraph'
  },
  {
    title: 'Federal II Tower',
    description: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
    imgSrc: 'federal'
  },
  {
    title: 'Trinity Bank Tower',
    description: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
    imgSrc: 'trinity'
  }
])

const totalImgs = computed(() => data.length)

const activeImg = ref<number>(0)
const intervalId = ref<number>()

onMounted(() => {
  intervalId.value = setInterval(() => {
    const nextActive = activeImg.value + 1
    activeImg.value = nextActive >= totalImgs.value ? 0 : nextActive
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId.value)
})

const handleSlideSelection = (i: number) => {
  activeImg.value = i
  clearInterval(intervalId.value)
}
</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <main class="home-page container mx-auto">
    <section class="hero-section">
      <TheSlider :active-img="activeImg" :data="data" />

      <SliderNav :active-img="activeImg" :total-imgs="totalImgs" @slide-selection="handleSlideSelection" />
    </section>

    <section class="intro-section px-auto">
      <span class="title">Welcome</span>
      <img alt="Welcome image" class="img" src="/images/home/desktop/image-welcome.jpg">

      <div class="intro-text">

        <h1>Welcome to Arch Studio</h1>
        <p class="description">We have a unique network and skillset to help bring your projects to life. Our
          small team of highly skilled individuals combined with our large network put us
          in a strong position to deliver exceptional results.</p>
        <p class="description">Over the past 10 years, we have worked on all kinds of projects. From stations
          to high-rise buildings, we create spaces that inspire and delight.</p>
        <p class="description">We work closely with our clients so that we understand the intricacies of each
          project. This allows us to work in harmony the surrounding area to create truly
          stunning projects that will stand the test of time.</p>
      </div>
    </section>

    <section class="about-us-section">
      <picture>
        <source media="(min-width: 75em)" srcset="/images/home/desktop/image-small-team.jpg">
        <source media="(min-width: 48em)" srcset="/images/home/tablet/image-small-team.jpg">
        <img alt="image to illustrate small teams big ideas" class="about-us__img"
             src="/images/home/mobile/image-small-team.jpg">
      </picture>
      <div class="about-us__overlay">
        <h2 class="about-us__title"> Small team, <br> big ideas</h2>
        <link-button class="about-us__link" to="/about">About us</link-button>
      </div>
    </section>

    <section class="featured-section px-auto">
      <header class="featured__header">
        <h2>Featured</h2>
        <link-button class="featured__link" to="/portfolio">See All</link-button>
      </header>

      <div class="featured__cards">
        <RouterLink to="/portfolio">
          <PorfolioCard img="del-sol" rank="1" subtitle="View all Projects" title="Project Del Sol" />
        </RouterLink>
        <RouterLink to="/portfolio">
          <PorfolioCard img="228b" rank="2" subtitle="View all Projects" title="228B Tower" />
        </RouterLink>
        <RouterLink to="/portfolio">
          <PorfolioCard img="prototype" rank="3" subtitle="View all Projects" title="Le Prototype" />
        </RouterLink>
      </div>

    </section>
  </main>
</template>

/* --------------------------------- Styles --------------------------------- */
<style scoped>


.home-page {
  margin-bottom: 13.2rem;

  @media (min-width: 48em) {
    margin-bottom: 20rem;
  }

  & .hero-section {
    position: relative;
    margin-bottom: 7.2rem;

    @media (min-width: 45em) {
      margin-bottom: 8.9rem;
    }

    @media (min-width: 75em) {
      margin-bottom: 10.8rem;
    }
  }

  & .intro-section {
    position: relative;
    margin-bottom: 11.3rem;

    @media (min-width: 48em) {
      margin-bottom: 23.3rem;
    }

    @media (min-width: 75em) {
      margin-bottom: 21.1rem;
    }

    & .title {
      display: none;

      @media (min-width: 48em) {
        width: auto;
        color: var(--ast-c-very-light-grey);
        display: block;
        font-size: var(--font-size-heading-xl);
        font-weight: bold;
        line-height: var(--line-height-heading-xl);
        letter-spacing: var(--letter-spacing-heading-xl);
        margin-bottom: -4rem;
      }
    }

    & .img {
      display: none;

      @media (min-width: 75em) {
        display: block;
        position: absolute;
        right: 0;
        top: 8.5rem;
        z-index: -2;
      }
    }

    & .intro-text {
      @media (min-width: 75em) {
        margin-left: 18.9rem;
        width: 44.6rem;
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
      max-width: 10ch;
      white-space: pre-wrap;

      @media (min-width: 48em) {
        padding-top: 0;
        margin-bottom: 4.3rem;
      }

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
      margin-bottom: 3.6rem;

      @media (min-width: 48em) {

      }
    }
  }

  & .about-us-section {
    position: relative;
    margin-bottom: 7.3rem;

    @media (min-width: 48em) {
      margin-bottom: 20rem;
    }
    @media (min-width: 75em) {
    }

    & .about-us__img {
      display: block;
      width: 100%;
      object-fit: cover;

    }

    & .about-us__overlay {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      place-content: center;
      gap: 2.3rem;
      padding: 0 3.2rem;
      background-color: rgba(0, 0, 0, 50%);

      @media (min-width: 48em) {
        padding: 16.7rem 7rem 16.7rem 5.8rem;
      }
      @media (min-width: 75em) {
        padding: 16.7rem 47.5rem 16.8rem 19rem;
      }

      & .about-us__title {
        color: var(--ast-c-white);
        font-size: var(--font-size-heading-m);
        line-height: var(--line-height-heading-m);
        letter-spacing: var(--letter-spacing-heading-m);
      }

      & .about-us__link {
        width: 18.7rem;
      }
    }
  }

  & .featured-section {
    position: relative;


    & .featured__header {
      margin-bottom: 4.3rem;

      @media (min-width: 48em) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8.5rem;
      }
      @media (min-width: 75em) {
        margin-bottom: 6.4rem;
      }

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

        @media (min-width: 48em) {
          position: relative;
          width: 16.9rem;
          margin: 0;

        }
        @media (min-width: 75em) {
        }
      }
    }

    & .featured__cards {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      padding-bottom: 9.6rem;

      @media (min-width: 48em) {
        padding-bottom: 0;
      }
      @media (min-width: 75em) {
        flex-direction: row;
        gap: 3rem;
      }
    }

  }


}
</style>
