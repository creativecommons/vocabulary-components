<template>
  <header class="vocab header">
    <nav class="navbar" :aria-label="$t('header.aria.primary')">
      <div class="navbar-brand has-color-white">
        <a class="logo" href="/">
          <!--@slot The Vue component with the site's logo -->
          <slot name="logo">
            <CCSearchLogo />
          </slot>
        </a>
        <a
          role="button"
          :class="{ ['navbar-burger']: true, ['is-active']: isBurgerMenuActive }"
          :aria-label="$t('header.aria.menu')"
          aria-expanded="false"
          @click="toggleBurgerActive"
          @keyup.enter="toggleBurgerActive"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div :class="{ ['navbar-menu']: true, ['is-active']: isBurgerMenuActive }">
        <div class="navbar-end">
          <!--@slot Menu items, can be `NavItem`, `NavDropdown` -->
          <slot name="menu-items">
            <NavItem is="a" href="/item_one" label="Item One" />
            <NavItem href="/item_two" label="Item Two" />
            <NavDropdown label="Item Three">
              <NavItem href="/item_three_a" label="Item Three A" />
              <NavItem is="a" href="/item_three_b" label="Item Three B" />
            </NavDropdown>
          </slot>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
/**
 * ### VHeader opens the page.
 *
 * The header displays information about the site such as its branding and
 * name as well as navigation links.
 */
  import NavItem from './NavItem'
  import NavDropdown from './NavDropdown'
  import CCSearchLogo from '@creativecommons/cc-assets/logos/products/search.svg?inline'

  export default {
    name: 'VHeader',
    components: {
      CCSearchLogo,
      NavItem,
      NavDropdown
    },
    data: () => ({ isBurgerMenuActive: false }),
    methods: {
      toggleBurgerActive () {
        this.isBurgerMenuActive = !this.isBurgerMenuActive
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "~@creativecommons/vocabulary-styles/dist/scss/vocabulary.scss";

.logo {
  color: black;
  &:hover {
    color: black;
  }
  svg {
    height: 100%;
    width: auto;
  }
}
</style>
