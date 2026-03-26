// Put here your email sending configurations!
module.exports = {
	emailTransport: {
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT || 587),
		secure: process.env.SMTP_SECURE === 'true',
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	},
	emailOptions: {
		from: process.env.SMTP_FROM || 'Mosaico by dialoop <mosaico@e-mail-serv.de>',
		// bcc: 'mosaico@mosaico.io',
	}
};