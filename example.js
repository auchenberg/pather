
pathRouter = crossroads.create();
pather.initialized.add(pathRouter.parse, pathRouter);
pather.changed.add(pathRouter.parse, pathRouter);
pather.init();