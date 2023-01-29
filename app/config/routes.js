let RoutesHelper = await load.core('RoutesHelper');

RoutesHelper = new RoutesHelper()

RoutesHelper
    .addRoute('/', 'pages/home')
    .addRoute('/contact', 'contacts/add')

export default RoutesHelper.finish()