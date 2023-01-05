let RoutesHelper = await load.core('RoutesHelper');

RoutesHelper = new RoutesHelper()

RoutesHelper
    .addRoute('/', '/pages/home')
    // .addRoute('/users', 'users/index')
    .addRoute('/contact', 'contacts/add')

export default RoutesHelper.finish()