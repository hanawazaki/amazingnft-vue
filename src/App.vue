<script setup>
import { isString } from "@vue/shared";
import MarqueeText from "vue-marquee-text-component";
</script>

<template>
  <header class="w-full mb-[55px]">
    <div class="mx-auto xl:px-[120px] lg:px-[60px] px-[24px] py-5">
      <div class="flex justify-between items-center">
        <div class="img-logo w-[154px] md:w-auto">
          <img src="./assets/Logo.svg" alt="logo" />
        </div>
        <!-- hamburger menu -->
        <div class="w-auto">
          <div class="block md:hidden">
            <button id="toggler" class="h-8 w-8 text-white">
              <svg
                class="fill-current"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z"
                />
                <path
                  d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z"
                />
                <path
                  d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- list menu -->
        <div class="w-auto nav-menu hidden md:block">
          <ul class="flex justify-between">
            <li class="mx-[25px]">
              <a href="#" class="font-normal text-base text-white">Drop</a>
            </li>
            <li class="mx-[25px]">
              <a href="#" class="font-normal text-base text-white"
                >Marketplace</a
              >
            </li>
            <li class="mx-[25px]">
              <a href="#" class="font-normal text-base text-white">Creator</a>
            </li>
            <li class="mx-[25px]">
              <a href="#" class="font-normal text-base text-white">Community</a>
            </li>
          </ul>
        </div>
        <button class="btn-blue hidden md:block">Contact Us</button>
      </div>
    </div>
  </header>
  <section class="hero w-full mb-6 md:mb-[82px]">
    <div class="mx-auto xl:px-[120px] lg:px-[60px] px-[24px]">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-7/12 mb-8">
          <h1
            class="text-white font-extrabold text-[40px] leading-[40px] -tracking-[2px] xl:text-[79px] xl:leading-[75px] xxl:text-[94px] xxl:leading-[90px] mb-8"
          >
            Create Your <br />
            Own NFT <br />
            Dream Gallery
          </h1>
          <div class="flex flex-col-reverse md:flex-row">
            <button
              class="text-white text-base w-full bg-secMain py-[14px] rounded-full md:h-[120px] md:w-[120px] md:rounded-[50%] hover:bg-secHover mr-[30px]"
            >
              Discover NFT
            </button>
            <p
              class="text-white font-normal text-sm leading-[24px] xl:text-base xl:leading-[26px] xxl:w-[394px] xl:w-[330px] mb-[32px] md:mb-0"
            >
              The largest NFT marketplace. Authentic and truly unique digital
              creation. Signed and issued by the creator,made possible by
              blockchain technology
            </p>
          </div>
        </div>
        <div class="w-full md:w-5/12 mb-8 md:mb-0">
          <img src="./assets/Image-Hero.png" alt="img-hero" />
        </div>
      </div>
      <div class="flex justify-between md:justify-normal gap-[21px] mx-auto">
        <div class="flex flex-col">
          <h6
            class="text-sm text-white font-normal leading-[16.94px] tracking-[-0.3px] mb-2"
          >
            Artwork
          </h6>
          <h4 class="text-[28px] text-white font-bold leading-[33.89px]">
            25.2K
          </h4>
        </div>
        <div class="flex flex-col">
          <h6
            class="text-sm text-white font-normal leading-[16.94px] tracking-[-0.3px] mb-2"
          >
            Artist
          </h6>
          <h4 class="text-[28px] text-white font-bold leading-[33.89px]">
            15.2K
          </h4>
        </div>
        <div class="flex flex-col">
          <h6
            class="text-sm text-white font-normal leading-[16.94px] tracking-[-0.3px] mb-2"
          >
            Aucition
          </h6>
          <h4 class="text-[28px] text-white font-bold leading-[33.89px]">
            10.4K
          </h4>
        </div>
      </div>
    </div>
  </section>
  <section class="company-logo w-full mb-6 md:mb-[120px]">
    <div class="xl:px-[120px] lg:px-[60px] px-[24px] mx-auto">
      <div
        class="w-full flex justify-center flex-wrap gap-3 md:justify-between md:flex-nowrap"
      >
        <img
          src="./assets/Logo-01.svg"
          alt="logo1"
          class="w-[95px] md:w-auto"
        />
        <img
          src="./assets/Logo-02.svg"
          alt="logo2"
          class="w-[95px] md:w-auto"
        />
        <img
          src="./assets/Logo-03.svg"
          alt="logo3"
          class="w-[95px] md:w-auto"
        />
        <img
          src="./assets/Logo-04.svg"
          alt="logo4"
          class="w-[95px] md:w-auto"
        />
        <img
          src="./assets/Logo-05.svg"
          alt="logo5"
          class="w-[95px] md:w-auto"
        />
      </div>
    </div>
  </section>
  <section class="superhot w-full mb-8 md:mb-[120px]">
    <div class="xl:px-[120px] lg:px-[60px] mx-auto px-[24px]">
      <h2 class="title-heading">Super Hot Drop</h2>

      <div class="filter flex gap-[13px] mb-8 overflow-hidden">
        <button
          class="text-white px-8 py-2 md:py-3 rounded-full bg-priPressed hover:bg-secMain active"
        >
          Music
        </button>
        <button
          class="text-white px-8 py-2 md:py-3 rounded-full bg-priPressed hover:bg-secMain"
        >
          Celebrities
        </button>
        <button
          class="text-white px-8 py-2 md:py-3 rounded-full bg-priPressed hover:bg-secMain"
        >
          Sport
        </button>
        <button
          class="text-white px-8 py-2 md:py-3 rounded-full bg-priPressed hover:bg-secMain"
        >
          Gaming
        </button>
        <button
          class="text-white px-8 py-2 md:py-3 rounded-full bg-priPressed hover:bg-secMain"
        >
          Art
        </button>
      </div>
      <div
        class="list-products grid grid-cols-1 md:grid-cols-4 gap-5 mb-8 md:mb-[50px]"
      >
        <div class="card rounded-[10px] bg-white w-full md:w-[285px] p-3">
          <a href="#">
            <img src="./assets/Monkey01.png" alt="product1" class="mx-auto" />
            <div class="flex justify-between my-[10px]">
              <div class="flex flex-col">
                <h4 class="text-lg font-bold leading-5 mb-2">ArtCrypto</h4>
                <div class="flex gap-1">
                  <h6 class="text-xs font-semibold text-[#0DDC22]">0.25 ETH</h6>
                  <img src="./assets/ethereum 1.svg" alt="eth-icon" />
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <h5 class="text-[#858486] text-[10px] font-normal">1 of 321</h5>
              </div>
            </div>
            <hr class="mb-[10px]" />
            <div class="flex justify-between items-end">
              <button
                class="py-1 px-[14px] rounded-full text-secMain bg-[#EEE9FF]"
              >
                3h 25m 3s
              </button>

              <h4 class="text-secMain text-sm font-semibold">Place a bid</h4>
            </div>
          </a>
        </div>
        <div class="card rounded-[10px] bg-white w-full md:w-[285px] p-3">
          <a href="#">
            <img src="./assets/Monkey01.png" alt="product1" class="mx-auto" />
            <div class="flex justify-between my-[10px]">
              <div class="flex flex-col">
                <h4 class="text-lg font-bold leading-5 mb-2">ArtCrypto</h4>
                <div class="flex gap-1">
                  <h6 class="text-xs font-semibold text-[#0DDC22]">0.25 ETH</h6>
                  <img src="./assets/ethereum 1.svg" alt="eth-icon" />
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <h5 class="text-[#858486] text-[10px] font-normal">1 of 321</h5>
              </div>
            </div>
            <hr class="mb-[10px]" />
            <div class="flex justify-between items-end">
              <button
                class="py-1 px-[14px] rounded-full text-secMain bg-[#EEE9FF]"
              >
                3h 25m 3s
              </button>

              <h4 class="text-secMain text-sm font-semibold">Place a bid</h4>
            </div>
          </a>
        </div>
        <div class="card rounded-[10px] bg-white w-full md:w-[285px] p-3">
          <a href="#">
            <img src="./assets/Monkey01.png" alt="product1" class="mx-auto" />
            <div class="flex justify-between my-[10px]">
              <div class="flex flex-col">
                <h4 class="text-lg font-bold leading-5 mb-2">ArtCrypto</h4>
                <div class="flex gap-1">
                  <h6 class="text-xs font-semibold text-[#0DDC22]">0.25 ETH</h6>
                  <img src="./assets/ethereum 1.svg" alt="eth-icon" />
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <h5 class="text-[#858486] text-[10px] font-normal">1 of 321</h5>
              </div>
            </div>
            <hr class="mb-[10px]" />
            <div class="flex justify-between items-end">
              <button
                class="py-1 px-[14px] rounded-full text-secMain bg-[#EEE9FF]"
              >
                3h 25m 3s
              </button>

              <h4 class="text-secMain text-sm font-semibold">Place a bid</h4>
            </div>
          </a>
        </div>
        <div class="card rounded-[10px] bg-white w-full md:w-[285px] p-3">
          <a href="#">
            <img src="./assets/Monkey01.png" alt="product1" class="mx-auto" />
            <div class="flex justify-between my-[10px]">
              <div class="flex flex-col">
                <h4 class="text-lg font-bold leading-5 mb-2">ArtCrypto</h4>
                <div class="flex gap-1">
                  <h6 class="text-xs font-semibold text-[#0DDC22]">0.25 ETH</h6>
                  <img src="./assets/ethereum 1.svg" alt="eth-icon" />
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <h5 class="text-[#858486] text-[10px] font-normal">1 of 321</h5>
              </div>
            </div>
            <hr class="mb-[10px]" />
            <div class="flex justify-between items-end">
              <button
                class="py-1 px-[14px] rounded-full text-secMain bg-[#EEE9FF]"
              >
                3h 25m 3s
              </button>

              <h4 class="text-secMain text-sm font-semibold">Place a bid</h4>
            </div>
          </a>
        </div>
        <div class="card rounded-[10px] bg-white w-full md:w-[285px] p-3">
          <a href="#">
            <img src="./assets/Monkey01.png" alt="product1" class="mx-auto" />
            <div class="flex justify-between my-[10px]">
              <div class="flex flex-col">
                <h4 class="text-lg font-bold leading-5 mb-2">ArtCrypto</h4>
                <div class="flex gap-1">
                  <h6 class="text-xs font-semibold text-[#0DDC22]">0.25 ETH</h6>
                  <img src="./assets/ethereum 1.svg" alt="eth-icon" />
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <h5 class="text-[#858486] text-[10px] font-normal">1 of 321</h5>
              </div>
            </div>
            <hr class="mb-[10px]" />
            <div class="flex justify-between items-end">
              <button
                class="py-1 px-[14px] rounded-full text-secMain bg-[#EEE9FF]"
              >
                3h 25m 3s
              </button>

              <h4 class="text-secMain text-sm font-semibold">Place a bid</h4>
            </div>
          </a>
        </div>
        <div class="card rounded-[10px] bg-white w-full md:w-[285px] p-3">
          <a href="#">
            <img src="./assets/Monkey01.png" alt="product1" class="mx-auto" />
            <div class="flex justify-between my-[10px]">
              <div class="flex flex-col">
                <h4 class="text-lg font-bold leading-5 mb-2">ArtCrypto</h4>
                <div class="flex gap-1">
                  <h6 class="text-xs font-semibold text-[#0DDC22]">0.25 ETH</h6>
                  <img src="./assets/ethereum 1.svg" alt="eth-icon" />
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <h5 class="text-[#858486] text-[10px] font-normal">1 of 321</h5>
              </div>
            </div>
            <hr class="mb-[10px]" />
            <div class="flex justify-between items-end">
              <button
                class="py-1 px-[14px] rounded-full text-secMain bg-[#EEE9FF]"
              >
                3h 25m 3s
              </button>

              <h4 class="text-secMain text-sm font-semibold">Place a bid</h4>
            </div>
          </a>
        </div>
        <div class="card rounded-[10px] bg-white w-full md:w-[285px] p-3">
          <a href="#">
            <img src="./assets/Monkey01.png" alt="product1" class="mx-auto" />
            <div class="flex justify-between my-[10px]">
              <div class="flex flex-col">
                <h4 class="text-lg font-bold leading-5 mb-2">ArtCrypto</h4>
                <div class="flex gap-1">
                  <h6 class="text-xs font-semibold text-[#0DDC22]">0.25 ETH</h6>
                  <img src="./assets/ethereum 1.svg" alt="eth-icon" />
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <h5 class="text-[#858486] text-[10px] font-normal">1 of 321</h5>
              </div>
            </div>
            <hr class="mb-[10px]" />
            <div class="flex justify-between items-end">
              <button
                class="py-1 px-[14px] rounded-full text-secMain bg-[#EEE9FF]"
              >
                3h 25m 3s
              </button>

              <h4 class="text-secMain text-sm font-semibold">Place a bid</h4>
            </div>
          </a>
        </div>
        <div class="card rounded-[10px] bg-white w-full md:w-[285px] p-3">
          <a href="#">
            <img src="./assets/Monkey01.png" alt="product1" class="mx-auto" />
            <div class="flex justify-between my-[10px]">
              <div class="flex flex-col">
                <h4 class="text-lg font-bold leading-5 mb-2">ArtCrypto</h4>
                <div class="flex gap-1">
                  <h6 class="text-xs font-semibold text-[#0DDC22]">0.25 ETH</h6>
                  <img src="./assets/ethereum 1.svg" alt="eth-icon" />
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <h5 class="text-[#858486] text-[10px] font-normal">1 of 321</h5>
              </div>
            </div>
            <hr class="mb-[10px]" />
            <div class="flex justify-between items-end">
              <button
                class="py-1 px-[14px] rounded-full text-secMain bg-[#EEE9FF]"
              >
                3h 25m 3s
              </button>

              <h4 class="text-secMain text-sm font-semibold">Place a bid</h4>
            </div>
          </a>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="btn-blue">View More</button>
      </div>
    </div>
  </section>
  <section class="live-aucition mb-8 md:mb-[120px]">
    <marquee-text>
      <h1
        class="font-extrabold text-[88px] leading-[89px] -tracking-[1px] md:text-[136px] md:leading-[146px] md:tracking-[-3px] text-secMain"
      >
        LIVE AUCITION - LIVE AUCITION -&nbsp;
      </h1>
    </marquee-text>
  </section>
  <section class="sell-nft w-full mb-8 md:mb-[120px]">
    <div class="xl:px-[120px] lg:px-[60px] px-[24px] mx-auto">
      <h2
        class="font-bold text-[34px] leading-[44px] -tracking-[2%] xl:text-5xl xl:leading-[58px] text-white mb-3 xl:mb-[30px]"
      >
        Create Your Sell NFT
      </h2>
      <div class="flex flex-col md:flex-row gap-4 md:gap-[40px]">
        <div class="card w-full rounded-[10px] bg-[#1A0A47] p-5">
          <img src="./assets/Wallet.svg" alt="wallet-icon" class="mb-5" />
          <div class="text-white">
            <h4 class="font-semibold text-2xl mb-1">Connect Wallet</h4>
            <p class="font-normal text-base">
              Focus your leadership around a common goal with this growth plan
              and strengthen your community.
            </p>
          </div>
        </div>
        <div class="card w-full rounded-[10px] bg-[#1A0A47] p-5">
          <img src="./assets/Download.svg" alt="wallet-icon" class="mb-5" />
          <div class="text-white">
            <h4 class="font-semibold text-2xl mb-1">Collect NFT</h4>
            <p class="font-normal text-base">
              Focus your leadership around a common goal with this growth plan
              and strengthen your community.
            </p>
          </div>
        </div>
        <div class="card w-full rounded-[10px] bg-[#1A0A47] p-5">
          <img src="./assets/Bag.svg" alt="wallet-icon" class="mb-5" />
          <div class="text-white">
            <h4 class="font-semibold text-2xl mb-1">NFT Marketplace</h4>
            <p class="font-normal text-base">
              Focus your leadership around a common goal with this growth plan
              and strengthen your community.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="top-creator w-full mb-8 md:mb-[120px]">
    <div class="xl:px-[120px] lg:px-[60px] px-[24px] mx-auto">
      <h2 class="title-heading mb-[30px]">Creator of The Week</h2>
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-[20px]">
        <div class="card rounded-[10px] bg-[#1A0A47] p-5 flex gap-5">
          <img
            src="./assets/creator/creator1.png"
            alt="creator1"
            class="w-[59px]"
          />
          <div class="text-white">
            <h5 class="md:text-2xl font-semibold tracking-[-0.02em]">
              Theophile Kpankon
            </h5>
            <p
              class="text-sm md:text-base font-normal tracking-[0.5px] leading-[24px] md:leading-[26px]"
            >
              1.34M
            </p>
          </div>
        </div>
        <div class="card rounded-[10px] bg-[#1A0A47] p-5 flex gap-5">
          <img
            src="./assets/creator/creator1.png"
            alt="creator1"
            class="w-[59px]"
          />
          <div class="text-white">
            <h5 class="md:text-2xl font-semibold tracking-[-0.02em]">
              Theophile Kpankon
            </h5>
            <p
              class="text-sm md:text-base font-normal tracking-[0.5px] leading-[24px] md:leading-[26px]"
            >
              1.34M
            </p>
          </div>
        </div>
        <div class="card rounded-[10px] bg-[#1A0A47] p-5 flex gap-5">
          <img
            src="./assets/creator/creator1.png"
            alt="creator1"
            class="w-[59px]"
          />
          <div class="text-white">
            <h5 class="md:text-2xl font-semibold tracking-[-0.02em]">
              Theophile Kpankon
            </h5>
            <p
              class="text-sm md:text-base font-normal tracking-[0.5px] leading-[24px] md:leading-[26px]"
            >
              1.34M
            </p>
          </div>
        </div>
        <div class="card rounded-[10px] bg-[#1A0A47] p-5 flex gap-5">
          <img
            src="./assets/creator/creator1.png"
            alt="creator1"
            class="w-[59px]"
          />
          <div class="text-white">
            <h5 class="md:text-2xl font-semibold tracking-[-0.02em]">
              Theophile Kpankon
            </h5>
            <p
              class="text-sm md:text-base font-normal tracking-[0.5px] leading-[24px] md:leading-[26px]"
            >
              1.34M
            </p>
          </div>
        </div>
        <div class="card rounded-[10px] bg-[#1A0A47] p-5 flex gap-5">
          <img
            src="./assets/creator/creator1.png"
            alt="creator1"
            class="w-[59px]"
          />
          <div class="text-white">
            <h5 class="md:text-2xl font-semibold tracking-[-0.02em]">
              Theophile Kpankon
            </h5>
            <p
              class="text-sm md:text-base font-normal tracking-[0.5px] leading-[24px] md:leading-[26px]"
            >
              1.34M
            </p>
          </div>
        </div>
        <div class="card rounded-[10px] bg-[#1A0A47] p-5 flex gap-5">
          <img
            src="./assets/creator/creator1.png"
            alt="creator1"
            class="w-[59px]"
          />
          <div class="text-white">
            <h5 class="md:text-2xl font-semibold tracking-[-0.02em]">
              Theophile Kpankon
            </h5>
            <p
              class="text-sm md:text-base font-normal tracking-[0.5px] leading-[24px] md:leading-[26px]"
            >
              1.34M
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="banner w-full mb-8 md:mb-[120px]">
    <div class="xl:px-[120px] lg:px-[60px] mx-auto">
      <div class="relative">
        <img
          src="./assets/banner.png"
          alt=""
          class="hidden md:block w-full bg-secHover rounded-[10px] relative z-10"
        />
        <div
          class="block md:hidden w-full bg-secHover h-screen rounded-[10px] relative z-10"
        ></div>
        <div class="text-center z-20 banner-text">
          <h2 class="text-[32px] md:text-[50px] font-bold mb-[30px] text-white">
            Join Our Community
          </h2>
          <button
            class="px-8 py-4 bg-white text-secMain rounded-full hover:bg-secPressed hover:text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
  <footer class="w-full">
    <div class="xl:px-[120px] lg:px-[60px] px-[24px] mx-auto">
      <div
        class="footer-up flex flex-col md:flex-row gap-[20px] md:gap-[130px]"
      >
        <div class="footer-logo">
          <div class="mb-6">
            <img
              src="./assets/Logo-footer.svg"
              alt="logo-footer"
              class="mb-[11px]"
            />
            <h6 class="font-normal text-sm text-white">
              Take your crypto to the next level
            </h6>
          </div>
          <div class="flex gap-3">
            <a href="#">
              <img src="./assets/socmed/fb.svg" alt="fb" class="w-[28px]" />
            </a>
            <a href="#">
              <img src="./assets/socmed/ig.svg" alt="ig" class="w-[28px]"
            /></a>
            <a href="#">
              <img src="./assets/socmed/lk.svg" alt="lk" class="w-[28px]"
            /></a>
            <a href="#">
              <img src="./assets/socmed/tw.svg" alt="tw" class="w-[28px]"
            /></a>
            <a href="#">
              <img src="./assets/socmed/yt.svg" alt="yt" class="w-[28px]"
            /></a>
          </div>
        </div>
        <div
          class="footer-list text-white flex flex-col md:flex-row gap-4 md:gap-[107px]"
        >
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold mb-6">Marketplace</h4>
            <ul>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">Buy Product</a>
              </li>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">Sell Product</a>
              </li>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">Security</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold mb-6">Company</h4>
            <ul>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">About Us</a>
              </li>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">Blog</a>
              </li>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">Student</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold mb-6">Resources</h4>
            <ul>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">What’s Trending</a>
              </li>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">Product News</a>
              </li>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">Our Creator</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold mb-6">Contact Us</h4>
            <ul>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">Support Center</a>
              </li>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal">System Status</a>
              </li>
              <li class="mb-4">
                <a href="#" class="text-sm font-normal"
                  >Areas of Availability</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="outline outline-1 outline-white mt-[54px] mb-[40px]" />
      <div class="footer-down pb-[28px] text-center text-white">
        <h5 class="text-[#A0A3A9] text-base font-normal">
          © Design by Muhamad Fadli. All rights reserved.
        </h5>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
