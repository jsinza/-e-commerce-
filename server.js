const express = require('express');
const compression = require('compression');
const dotenv = require('dotenv')
const webpack = require('webpack');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const errorHandler = require('./src/server/middleware/errorHandler');
const itemController = require('./src/server/controllers/item.controller');

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());


app.use('/api', itemController);
if (ENV === 'development') {
	console.log('Development config');
	const webpackConfig = require('./webpack.config');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const compiler = webpack(webpackConfig);
	const serverConfig = { port: PORT };

	app.use(webpackDevMiddleware(compiler, serverConfig));
	app.use(webpackHotMiddleware(compiler, {}));
} else {
	app.use(express.static(`${__dirname}/dist`));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'dist', 'index.html'));
	});
	app.use(helmet());
	app.use(helmet.permittedCrossDomainPolicies());
	app.disable('x-powered-by');

}


app.use(errorHandler);

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log('Server running on port ' + PORT);
});
