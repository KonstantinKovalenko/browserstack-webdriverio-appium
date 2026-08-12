import { $ } from '@wdio/globals'
import BaseScreen from './base.screen.ts'

class ProductsScreen extends BaseScreen {
    get productsTitle() {return $('~title')}

}

export default new ProductsScreen()