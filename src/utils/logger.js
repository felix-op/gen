class Logger {
    success(message) {
        console.log('\x1b[32m%s\x1b[0m', `✓ ${message}`);
    }

    error(message) {
        console.log('\x1b[31m%s\x1b[0m', `✗ ${message}`);
    }

    info(message) {
        console.log('\x1b[36m%s\x1b[0m', `ℹ ${message}`);
    }

    warn(message) {
        console.log('\x1b[33m%s\x1b[0m', `⚠ ${message}`);
    }
}

module.exports = Logger;