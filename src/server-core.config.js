const env = require('var');

/**
 * @name exports
 * @summary @asymmetrik/fhir-server-core configurations.
 */
module.exports = {
	auth: {
		clientId: 'client_id',
		secret: 'secret',
		issuer: {
			discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration',
		}
	},
	server: {
		port: env.SERVER_PORT,
		corsOptions: {
			maxAge: 86400
		},
		// ssl: {
		// 	key: path.resolve('./src/key.pem'),
		// 	cert: path.resolve('./src/cert.pem')
		// }
	},
	logging: {
		level: env.LOGGING_LEVEL
	},
	profiles: {
		patient: {
			service: './src/services/patient/patient.service.js'
		},
		observation: {
			service: './src/services/observation/observation.service.js'
		}
	}
};
