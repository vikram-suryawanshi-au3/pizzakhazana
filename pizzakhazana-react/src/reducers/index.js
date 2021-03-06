import ajaxStatusReducer from './ajaxStatusReducer'
import statsReducer from './statsReducer'
import cartReducer from './cartReducer'
import {userOrdersReducer, pendingOrdersReducer} from './ordersReducer'
import {productsReducer, createProductReducer, createProductErrorReducer, editProductReducer, editProductErrorReducer, createReviewErrorReducer} from './productsReducer'
import {registerReducer, loginReducer, registerErrorReducer, loginErrorReducer} from './authReducer'
import {employeesReducer, createEmployeeReducer, createEmployeeErrorReducer, editEmployeeReducer, editEmployeeErrorReducer,} from './employeesReducer'

export default {
  register: registerReducer,
  login: loginReducer,
  products: productsReducer,
  registerError: registerErrorReducer,
  loginError: loginErrorReducer,
  createProduct: createProductReducer,
  createProductError: createProductErrorReducer,
  editProduct: editProductReducer,
  editProductError: editProductErrorReducer,
  ajaxCalls: ajaxStatusReducer,
  stats: statsReducer,
  createReviewError: createReviewErrorReducer,
  cart: cartReducer,
  userOrders: userOrdersReducer,
  pendingOrders: pendingOrdersReducer,
  createEmployee: createEmployeeReducer,
  createEmployeeError: createEmployeeErrorReducer,
  employees : employeesReducer,
  editEmployee: editEmployeeReducer,
  editEmployeeError: editEmployeeErrorReducer
}
