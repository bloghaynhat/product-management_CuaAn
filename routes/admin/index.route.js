const dashboardRoute = require('./dashboard.route');
const productsRoute = require('./product.route');
const productCategoryRoute = require('./product-category.route');
const roleRoute = require('./role.route');
const accountRoute = require('./account.route');
const authRoute = require('./auth.route');
const myAccountRoute = require('./my-account.route');
const authMiddleware = require('../../middlewares/admin/auth.middleware');

const systemConfig = require('../../config/system');

module.exports = (app) => {
  const PATH_ADMIN = `/${systemConfig.prefixAdmin}`;
  
  app.use(
    `${PATH_ADMIN}/dashboard`, 
    authMiddleware.requireAuth,
    dashboardRoute
  );

  app.use(
    `${PATH_ADMIN}/products`,
    authMiddleware.requireAuth, 
    productsRoute
  );

  app.use(
    `${PATH_ADMIN}/products-category`, 
    authMiddleware.requireAuth,
    productCategoryRoute
  );
  
  app.use(
    `${PATH_ADMIN}/roles`,
    authMiddleware.requireAuth,
    roleRoute
  );
    
  app.use(
    `${PATH_ADMIN}/accounts`, 
    authMiddleware.requireAuth,
    accountRoute
  );

  app.use(
    `${PATH_ADMIN}/auth`,
    authRoute
  );
  app.use(
    `${PATH_ADMIN}/my-account`,
    authMiddleware.requireAuth,
    myAccountRoute
  );
}