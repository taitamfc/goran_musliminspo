<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

define( 'ITSEC_ENCRYPTION_KEY', 'QVN1OT9mdTlBQ25UT2c1XmJjQ14gRERIbU9GKj9AQEsxUj1XQE1FSjs+IC4hP1ZNQXl6anJkW1tIfihJOCQ6TQ==' );

define('WP_CACHE', true); // WP-Optimize Cache
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'musl_musliminspo' );
/** Database username */
define( 'DB_USER', 'musl_musliminspo' );
/** Database password */
define( 'DB_PASSWORD', 'devcode15' );
/** Database hostname */
define( 'DB_HOST', 'localhost' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('FS_METHOD','direct');
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'af,4c,&Xy3fNRCHB&:$t`6.(})~CL|Y/~m]y*yluX/]s6FuUR-#MOA]9?8a3EF}E' );
define( 'SECURE_AUTH_KEY',  ' ;d~[>!Ld=4AKO*VwN!TP]?i7dFWVL[} >E<p`S|xZ([$xGaz-+=.+PUb;2WzxYJ' );
define( 'LOGGED_IN_KEY',    '5i;.gO>J(fc_sh5b~@o)8ed/#d)m,d+X_esGfy@gg4rnbJjAInW#R:MnBDqF`2hI' );
define( 'NONCE_KEY',        '4S>PdJFlIGEO^dRRqA&HO<gQ[3(bjU= y&-@{M@Dc]fQzhwYep$R(~61xkYRKC!b' );
define( 'AUTH_SALT',        'F&;^WY(%,$rdt?N2|b$mAn}M.$tw,J,*:AbZM5qW^1^%s.6)3Tv$et$Vc&h1m&M1' );
define( 'SECURE_AUTH_SALT', '#})-.FO`2|: NtuT)UA/Lr_ T3oR.7e6Fe%nx^_M(X):ji/cb7tLQZ@pcdC @fE-' );
define( 'LOGGED_IN_SALT',   'c_?w|&`rWi:ijTRQ;?7~DR~yZ{T r%i5`?^qeZrp@|-9E`DK_I$B>6*#J.Xze:Kd' );
define( 'NONCE_SALT',       'A56)i9Xt352*|{JsO5D JGpec#N9rYmXY6UrfeaHx)4~i9u.C .pTS3X!g0AmM~h' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

define('WP_DEBUG_LOG', false);

define('WP_DEBUG_DISPLAY', false);

@ini_set('display_errors',0);
/* Add any custom values between this line and the "stop editing" line. */
	
define( 'WP_MEMORY_LIMIT', '256M' );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
