let RoutesHelper = await load.core('RoutesHelper');

RoutesHelper = new RoutesHelper()

RoutesHelper
    .addRoute('/', '/pages/home')
    .addRoute('/users', 'users/index')
    .addRoute('/users/edit/{*}', 'users/edit')
    .addRoute('/users/set_data/{*}/{*}', 'users/set_data')
    .addRoute('/contact', 'contacts/add')
    .addRoute('/users/add', 'users/add')

export default RoutesHelper.finish()