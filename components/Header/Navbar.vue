<template>
  <div class="bg-blue">
    <nav
      class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-transparent
        "
    >
      <div>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 24 24"><path d="M11.5 11.5v-2.5c1.75 0 2.789.25 2.789 1.25 0 1.172-1.684 1.25-2.789 1.25zm0 .997v2.503c1.984 0 3.344-.188 3.344-1.258 0-1.148-1.469-1.245-3.344-1.245zm12.5-.497c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-7 1.592c0-1.279-1.039-1.834-1.789-2.025.617-.223 1.336-1.138 1.046-2.228-.245-.922-1.099-1.74-3.257-1.813v-1.526h-1v1.5h-.5v-1.5h-1v1.5h-2.5v1.5h.817c.441 0 .683.286.683.702v4.444c0 .429-.253.854-.695.854h-.539l-.25 1.489h2.484v1.511h1v-1.511h.5v1.511h1v-1.5c2.656 0 4-1.167 4-2.908z"/></svg>
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        class="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
        <ul
          class="
              pt-4
              text-base text-grey
              md:flex
              md:justify-between
              md:pt-0"
        >
          <li>
            <a class="md:p-4 py-2 block hover:text-white" href="#"
            >Home</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-white" href="#"
            >Services</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-white" href="#"
            >About</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-white" href="#"
            >Team</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-white" href="#"
            >Blog</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-white" href="#"
            >Contact</a
            >
          </li>

          <li>
            <a class="md:p-4 py-2 block hover:bg-grey hover:text-white" href="#"
            >Login</a
            >
          </li>
          <li>
            <a
              class="md:p-4 py-2 block hover:bg-grey hover:text-white  "
              href="#"
            >Sign Up</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
