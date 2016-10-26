'use strict';

page('/', homeController.init);
page('/contact', contactController.init);
page('/contact/:banana', contactController.init);
page('*', homeController.error);
page();
