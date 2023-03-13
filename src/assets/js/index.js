import {Ui} from './ui/index.js'
import {Pages} from './pages/index.js'

document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init);

function init(){
	Ui()
	Pages()
}