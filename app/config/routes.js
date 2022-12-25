let RoutesHelper = await load.core('RoutesHelper');

RoutesHelper = new RoutesHelper()

RoutesHelper
    .addRoute('/', '/pages/home')
    .addRoute('/users', 'users/index')
    .addRoute('/users/edit/{*}', 'users/edit')
    .addRoute('/users/set_data/{*}/{*}', 'users/set_data')

export default RoutesHelper.finish()