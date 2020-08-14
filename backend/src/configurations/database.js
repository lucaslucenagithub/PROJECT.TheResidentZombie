module.exports = {
    "development": {
        dialect: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'Postgres2020!',
        database: 'THE_RESIDENT_ZOMBIE',
        define: {
            timestamps: true,
            underscored: true
        }
    },
    "test": {
        dialect: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'Postgres2020!',
        database: 'THE_RESIDENT_ZOMBIE_TESTS',
        define: {
            timestamps: true,
            underscored: true
        }
    },
}