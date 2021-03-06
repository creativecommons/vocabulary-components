/**
 * Fragile magic. Do not touch.
 *
 * Just kidding, this file is autogenerated and changes will be overwritten on
 * the next build. To make changes, edit [library/build.js].
 */

import DonateButton from './elements/DonateButton/DonateButton'
import VButton from './elements/VButton/VButton'
import VCheckbox from './elements/VCheckbox/VCheckbox'
import VRadio from './elements/VRadio/VRadio'
import Table from './layouts/Table/Table'
import TableCell from './layouts/Table/TableCell'
import Tab from './layouts/Tabs/Tab'
import Tabs from './layouts/Tabs/Tabs'
import AppModal from './patterns/AppModal/AppModal'
import Footer from './patterns/Footer/Footer'
import Locale from './patterns/Locale/Locale'
import NavDropdown from './patterns/VHeader/NavDropdown'
import NavItem from './patterns/VHeader/NavItem'
import VHeader from './patterns/VHeader/VHeader'
import SlotRenderer from './utils/SlotRenderer/SlotRenderer'
// Export individual components
export {
  DonateButton,
  VButton,
  VCheckbox,
  VRadio,
  Table,
  TableCell,
  Tab,
  Tabs,
  AppModal,
  Footer,
  Locale,
  NavDropdown,
  NavItem,
  VHeader,
  SlotRenderer
}

// Export as plugin
export default {
  install: function (Vue) {
    Vue.component('DonateButton', DonateButton)
    Vue.component('VButton', VButton)
    Vue.component('VCheckbox', VCheckbox)
    Vue.component('VRadio', VRadio)
    Vue.component('Table', Table)
    Vue.component('TableCell', TableCell)
    Vue.component('Tab', Tab)
    Vue.component('Tabs', Tabs)
    Vue.component('AppModal', AppModal)
    Vue.component('Footer', Footer)
    Vue.component('Locale', Locale)
    Vue.component('NavDropdown', NavDropdown)
    Vue.component('NavItem', NavItem)
    Vue.component('VHeader', VHeader)
    Vue.component('SlotRenderer', SlotRenderer)
    // Vue.use(i18n)
  }
}
