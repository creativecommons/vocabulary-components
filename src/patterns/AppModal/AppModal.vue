<template>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
  <div ref="modal" class="overlay app-modal" @click="$emit('close')">
    <FocusTrap :active="true">
      <div class="modal relative" aria-modal="true" role="dialog">
        <header
          v-if="title"
          class="modal-header padding-top-bigger padding-left-bigger padding-right-normal padding-bottom-small"
        >
          <slot name="header">
            <h3>{{ title }}</h3>
          </slot>
          <button
            type="button"
            class="close-button has-color-gray is-size-6 is-size-4-touch"
            :aria-label="$t('browse-page.aria.close')"
            @click="$emit('close')"
          >
            <span class="icon has-color-gray is-size-4 is-size-6-touch">
               <font-awesome-icon icon="fa-solid fa-times" />
            </span>
          </button>
        </header>
        <slot default />
      </div>
    </FocusTrap>
  </div>
</template>

<script>
  import { FocusTrap } from 'focus-trap-vue'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faTimes } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  library.add(faTimes)

  export default {
    name: 'AppModal',
    components: {
      FocusTrap,
      FontAwesomeIcon
    },
    props: {
      /** Required for titlebar AND close button to show */
      title: String
    },
    mounted () {
      document.addEventListener('keyup', this.closeOnEsc)
    },
    destroyed () {
      document.removeEventListener('keyup', this.closeOnEsc)
    },
    methods: {
      closeOnEsc (e) {
        if (e.keyCode === 27) {
          console.log(`exi`)
          this.$emit('close')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~@creativecommons/vocabulary-styles/dist/scss/color.scss";
//@import '~@creativecommons/vocabulary/dist/scss/modal.scss';
@import 'bulma/sass/utilities/_all';

.modal {
  position: relative;
  margin: 0px auto;
  max-width: 85vw;
  max-height: 85vh;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  background-color: #fff;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 600;
  background: #00000094;
}

.has-color-gray {
  color: rgb(176, 176, 176);
}

.modal-header {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

.close-button {
  appearance: none;
  border: none;
  height: auto;
  margin: -20px -20px -20px auto;
  padding: 20px;
  background-color: transparent;
  line-height: 1;
  cursor: pointer;
  .has-color-gray {
    color: #{$color-gray};
  }
  .icon {
    display:inline-block;
    &.is-size-4 {
      height: 1rem;
    }
    &.is-size-6-touch {
      height: 1.43rem;
    }
    svg {
      height: 100%;
    }
  }
  &:hover {
    color: rgb(120, 120, 120);
  }
}

</style>
